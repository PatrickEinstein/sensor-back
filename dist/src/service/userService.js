import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { AppDataSource } from "../data-source.js";
import { roles, sensoruser } from "../Entity/User.js";
import { Role } from "../types.js";
export class User {
    async Login(load) {
        try {
            const userRepository = AppDataSource.getRepository(sensoruser);
            const user = await userRepository.findOneBy({ email: load.email });
            if (!user) {
                return {
                    status: 404,
                    message: "User not found",
                    id: "",
                    token: "",
                };
            }
            const isPasswordValid = await bcrypt.compare(load.password, user.password);
            if (!isPasswordValid) {
                return {
                    status: 401,
                    message: "Invalid password",
                    id: "",
                    token: "",
                };
            }
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, {
                expiresIn: "1h",
            });
            return {
                status: 200,
                message: `Welcome ${user.username}`,
                id: user.id,
                token,
            };
        }
        catch (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
    }
    async CreateUser(load) {
        console.log(`CreatingUserLoad-backend`, load);
        try {
            let createduserId = 0;
            try {
                const userRepository = AppDataSource.getRepository(sensoruser);
                const hashedPassword = await bcrypt.hash(load.password, 10);
                const user = userRepository.create({
                    ...load,
                    password: hashedPassword,
                });
                const createdUser = await userRepository.save(user);
                createduserId = createdUser.id;
                const roleRepository = AppDataSource.getRepository(roles);
                const role = roleRepository.create({
                    userid: user.id.toString(),
                    isActive: false,
                    canAssignAdmin: false,
                    canDeleteAdmin: false,
                    canUpload: false,
                });
                console.log(role);
                await roleRepository.save(role);
                return { status: 201, message: "User created successfully" };
            }
            catch (e) {
                await this.DeleteUser(createduserId.toString());
                return { status: 400, message: e.message };
            }
        }
        catch (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
    }
    async GetUser(id) {
        try {
            const userRepository = AppDataSource.getRepository(sensoruser);
            const user = await userRepository.findOne({
                where: { id: parseInt(id) },
            });
            if (!user) {
                return { status: 404, message: "User not found" };
            }
            return { status: 200, message: user };
        }
        catch (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
    }
    async GetAllUsers() {
        try {
            const userRepository = AppDataSource.getRepository(sensoruser);
            const users = await userRepository.find();
            return { status: 200, message: users };
        }
        catch (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
    }
    async UpdateUser(user) {
        try {
            const userRepository = AppDataSource.getRepository(sensoruser);
            const foundUser = await userRepository.findOne({
                where: { id: parseInt(user.id) },
            });
            if (!foundUser) {
                return { status: 404, message: "User not found" };
            }
            if (user.email) {
                foundUser.email = user.email;
            }
            if (user.password) {
                foundUser.password = await bcrypt.hash(user.password, 10);
            }
            if (user.username) {
                foundUser.username = user.username;
            }
            await userRepository.save(foundUser);
            return { status: 200, message: "User updated successfully" };
        }
        catch (err) {
            return {
                status: 500,
                message: err.message,
            };
        }
    }
    async DeleteUser(id) {
        try {
            const userRepository = AppDataSource.getRepository(sensoruser);
            const user = await userRepository.findOne({
                where: { id: parseInt(id) },
            });
            if (!user) {
                return { status: 404, message: "User not found" };
            }
            const roleRepository = AppDataSource.getRepository(roles);
            await roleRepository.delete({ userid: id });
            await userRepository.delete(id);
            return { status: 200, message: "User deleted successfully" };
        }
        catch (err) {
            return {
                staus: 500,
                message: err.message,
            };
        }
    }
    async GetRoles(id) {
        try {
            const rolesRepository = AppDataSource.getRepository(roles);
            const userRoles = await rolesRepository.findOne({
                where: { userid: id },
            });
            if (!userRoles) {
                return { status: 400, message: "User not found" };
            }
            return { status: 200, message: userRoles };
        }
        catch (err) {
            return { status: 500, message: err.message };
        }
    }
    async UpdateRoles(load) {
        try {
            console.log("Update Role  service", load);
            const userRole = AppDataSource.getRepository(roles);
            let foundRole = await userRole.findOne({
                where: { userid: load.userid },
            });
            if (!foundRole) {
                return { status: 400, message: "User role was not found" };
            }
            const { role } = load;
            if (role == Role.Admin) {
                foundRole.role = role;
                foundRole.canAssignAdmin = true;
                foundRole.canDeleteAdmin = true;
                foundRole.canUpload = true;
                await userRole.save(foundRole);
                return {
                    status: 200,
                    message: "Role updated successfully",
                    updatedRole: foundRole,
                };
            }
            if (role == Role.User) {
                foundRole.role = role;
                foundRole.canAssignAdmin = false;
                foundRole.canDeleteAdmin = false;
                foundRole.canUpload = false;
                await userRole.save(foundRole);
                return {
                    status: 200,
                    message: "Role updated successfully",
                    updatedRole: foundRole,
                };
            }
            return {
                status: 400,
                message: "role does not fit admin, user",
                updatedRole: {},
            };
        }
        catch (err) {
            return {
                status: 500,
                message: err.message,
                updatedRole: {},
            };
        }
    }
}
