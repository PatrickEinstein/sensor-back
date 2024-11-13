import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import { roles, sensoruser } from "./Entity/User.js";




const __dirname = path.dirname(new URL(import.meta.url).pathname);

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "16.171.137.18",
  port: 5432,
  username: "patrick",
  password: "Verygood123",
  database: "paymentdb",
  synchronize: true,
  logging: true,
  entities: [sensoruser, roles],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [__dirname + "/subscriber/*.ts"]
});
