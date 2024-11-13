import { RequestHandler } from "express";
import { IUser, User } from "./../service/userService.js";
import { ICreateUser, ILogin, IUpdateRole, IUpateUser } from "../types.js";

export class UserController {
  user: IUser = new User();

  constructor() {}

  Login: RequestHandler = async (req, res) => {
    const body = req.body as ILogin;
    console.log(body);
    const response = await this.user.Login(body);
    res.status(200).json(response);
  };

  CreateUser: RequestHandler = async (req, res) => {
    const body = req.body as ICreateUser;
    const response = await this.user.CreateUser(body);
    res.status(200).json(response);
  };

  GetUser: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const response = await this.user.GetUser(id);
    res.status(200).json(response);
  };

  GetAllUsers: RequestHandler = async (req, res) => {
    const response = await this.user.GetAllUsers();
    res.status(200).json(response);
  };

  UpdateUser: RequestHandler = async (req, res) => {
    const body = req.body as IUpateUser;
    const response = await this.user.UpdateUser(body);
    res.status(200).json(response);
  };

  DeleteUser: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const response = await this.user.DeleteUser(id);
    res.status(200).json(response);
  };

  getRoles: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const response = await this.user.GetRoles(id);
    res.status(200).json(response);
  };

  updateRoles: RequestHandler = async (req, res) => {
    const body = req.body as IUpdateRole;
    console.log('controller', body)
    const response = await this.user.UpdateRoles(body);
    res.status(200).json(response);
  };
}
