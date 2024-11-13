import { User } from "./../service/userService.js";
export class UserController {
    user = new User();
    constructor() { }
    Login = async (req, res) => {
        const body = req.body;
        console.log(body);
        const response = await this.user.Login(body);
        res.status(200).json(response);
    };
    CreateUser = async (req, res) => {
        const body = req.body;
        const response = await this.user.CreateUser(body);
        res.status(200).json(response);
    };
    GetUser = async (req, res) => {
        const { id } = req.params;
        const response = await this.user.GetUser(id);
        res.status(200).json(response);
    };
    GetAllUsers = async (req, res) => {
        const response = await this.user.GetAllUsers();
        res.status(200).json(response);
    };
    UpdateUser = async (req, res) => {
        const body = req.body;
        const response = await this.user.UpdateUser(body);
        res.status(200).json(response);
    };
    DeleteUser = async (req, res) => {
        const { id } = req.params;
        const response = await this.user.DeleteUser(id);
        res.status(200).json(response);
    };
    getRoles = async (req, res) => {
        const { id } = req.params;
        const response = await this.user.GetRoles(id);
        res.status(200).json(response);
    };
    updateRoles = async (req, res) => {
        const body = req.body;
        console.log('controller', body);
        const response = await this.user.UpdateRoles(body);
        res.status(200).json(response);
    };
}
