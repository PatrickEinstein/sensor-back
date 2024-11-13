export interface ILogin {
  email: string;
  password: string;
}
export interface ICreateUser {
  email: string;
  password: string;
  username: string;
}

export interface IUpateUser {
  id: string;
  email: string;
  password: string;
  username: string;
}

export enum Role {
  User = "user",
  Admin = "admin",
  SuperAdmin = "superAdmin",
}


export interface IUpdateRole {
  userid: string;
  role: Role;
}
