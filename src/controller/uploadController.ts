import { Server } from "socket.io";
import { Request, Response } from "express";
import CsvParser from "../config/parseCsv.js";
import { Sensors } from "../../constants.js";

interface CustomRequest extends Request {
  files: any;
}

export class UploaderController {
  private io: Server;

  constructor(io: Server) {
    this.io = io;
  }
  Uploader = async (req: CustomRequest, res: Response): Promise<any> => {
    try {
      if (!req.files || !req.files.length) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const uploadedFile = req.files[0];
      const parsedFile = await CsvParser(uploadedFile.path);

      console.log(`Parsed File Results ==>`, parsedFile);

      if (this.io) {
        this.io.to("0").emit("new_feeds_available", parsedFile);
        parsedFile.forEach((data) => {
          data.sensors.forEach((sensor:Sensors) => {
            this.io.to("0").emit("new_feeds_available_each_sensor", sensor);
          });
        });
      } else {
        console.error("Socket.io instance is undefined");
      }

      res.status(200).json({
        message: "success",
        file: parsedFile,
      });
    } catch (e: any) {
      console.log(`Upload Errors ==>`, e.message);
      res.status(500).json({ message: e.message });
    }
  };
}