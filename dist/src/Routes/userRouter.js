import express from 'express';
import { UserController } from '../controller/userController.js';
const userRouter = express.Router();
const userController = new UserController();
/**
 * @openapi
 * '/api/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Login to get access token
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *      200:
 *        description: Login successful
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                message:
 *                  type: string
 *      404:
 *        description: Not Found
 */
userRouter.post("/api/login", userController.Login);
/**
 * @openapi
 * '/api/create':
 *  post:
 *     tags:
 *     - User
 *     summary: Create a new user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *              email:
 *                type: string
 *     responses:
 *      200:
 *        description: User created successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                message:
 *                  type: string
 */
userRouter.post("/api/create", userController.CreateUser);
/**
 * @openapi
 * '/api/user/{id}':
 *  get:
 *     tags:
 *     - User
 *     summary: Get a user by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *      200:
 *        description: User fetched successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                message:
 *                  type: string
 *      404:
 *        description: User not found
 */
userRouter.get("/api/user/:id", userController.GetUser);
/**
 * @openapi
 * '/api/users':
 *  get:
 *     tags:
 *     - User
 *     summary: Get all users
 *     responses:
 *      200:
 *        description: List of users
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                message:
 *                  type: string
 */
userRouter.get("/api/users", userController.GetAllUsers);
/**
 * @openapi
 * '/api/update':
 *  put:
 *     tags:
 *     - User
 *     summary: Update user information
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              id:
 *               type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              username:
 *                type: string
 *     responses:
 *      200:
 *        description: User updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                message:
 *                  type: string
 */
userRouter.put("/api/update", userController.UpdateUser);
/**
 * @openapi
 * '/api/delete/{id}':
 *  delete:
 *     tags:
 *     - User
 *     summary: Delete a user by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *      200:
 *        description: User deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                message:
 *                  type: string
 *      404:
 *        description: User not found
 */
userRouter.delete("/api/delete/:id", userController.DeleteUser);
/**
 * @openapi
 * '/api/update-role':
 *  put:
 *     tags:
 *     - User
 *     summary: Update user roles
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            properties:
 *              userid:
 *                type: string
 *              role:
 *                type: string
 *     responses:
 *      200:
 *        description: User role updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                message:
 *                  type: string
 */
userRouter.put("/api/update-role", userController.updateRoles);
/**
 * @openapi
 * '/api/role/{id}':
 *  get:
 *     tags:
 *     - User
 *     summary: Get a dole by userid
 *     parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *      200:
 *        description: User fetched successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                message:
 *                  type: string
 *      404:
 *        description: User not found
 */
userRouter.get("/api/role/:id", userController.getRoles);
export default userRouter;
