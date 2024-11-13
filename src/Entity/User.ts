import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Role} from "../types.js"

@Entity()
export class sensoruser {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  @IsNotEmpty({ message: "username is required" })
  username!: string;

  @Column({ unique: true, nullable: false })
  @IsNotEmpty({ message: "email is required" })
  email!: string;

  @Column({ unique: true, nullable: false })
  @IsNotEmpty({ message: "password is required" })
  password!: string;
}


@Entity()
export class roles {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, nullable: false })
  @IsNotEmpty({ message: "userid is required" })
  userid!: string;

  @Column({ type: "enum", enum: Role, default: Role.User })
  role!: Role;

  @Column()
  isActive!: boolean;

  @Column()
  canAssignAdmin!: boolean;

  @Column()
  canDeleteAdmin!: boolean;

  @Column()
  canUpload!: boolean;
}
