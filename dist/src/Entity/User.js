var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../types.js";
let sensoruser = class sensoruser {
    id;
    username;
    email;
    password;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], sensoruser.prototype, "id", void 0);
__decorate([
    Column({ nullable: false }),
    IsNotEmpty({ message: "username is required" }),
    __metadata("design:type", String)
], sensoruser.prototype, "username", void 0);
__decorate([
    Column({ unique: true, nullable: false }),
    IsNotEmpty({ message: "email is required" }),
    __metadata("design:type", String)
], sensoruser.prototype, "email", void 0);
__decorate([
    Column({ unique: true, nullable: false }),
    IsNotEmpty({ message: "password is required" }),
    __metadata("design:type", String)
], sensoruser.prototype, "password", void 0);
sensoruser = __decorate([
    Entity()
], sensoruser);
export { sensoruser };
let roles = class roles {
    id;
    userid;
    role;
    isActive;
    canAssignAdmin;
    canDeleteAdmin;
    canUpload;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], roles.prototype, "id", void 0);
__decorate([
    Column({ unique: true, nullable: false }),
    IsNotEmpty({ message: "userid is required" }),
    __metadata("design:type", String)
], roles.prototype, "userid", void 0);
__decorate([
    Column({ type: "enum", enum: Role, default: Role.User }),
    __metadata("design:type", String)
], roles.prototype, "role", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], roles.prototype, "isActive", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], roles.prototype, "canAssignAdmin", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], roles.prototype, "canDeleteAdmin", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], roles.prototype, "canUpload", void 0);
roles = __decorate([
    Entity()
], roles);
export { roles };
