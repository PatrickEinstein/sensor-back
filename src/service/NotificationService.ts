import cron from "node-cron";
import { data } from "../../constants.js";
import { credentials } from "../constants.js";
import { Server } from "socket.io";
const interval: number = 10000;

const ApiCaller = (io: Server) => {
  setInterval(() => {
    // credentials.forEach(async ({ Client, Username, Password, URL }) => {
    //   try {
    //     // const stringAuth = `${Username}@${Client}:${Password}`;
    //     const stringAuth = "Oryobdm@NBC.Oryobdm:Bol#ji30@22";

    //     const Auth = Buffer.from(stringAuth).toString("base64");
    //     console.log(Auth);

    //     const response = await fetch(URL, {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Basic ${Auth}`,
    //       },
    //     });

    //     if (!response.ok) {
    //       console.error(`Error: ${response.status} ${response.statusText}`);
    //       return;
    //     }

    //     const token = await response.text();
    //     console.log(`TOKEN==>`, token);
    //   } catch (error: any) {
    //     console.error(`Fetch error:`, error.message);
    //   }
    // });

    // console.log("Data to be emmitted==>", data);
    data.forEach((data) => {
      data.sensors.forEach((sensor) => {
        io.to("0").emit("each_sensor", sensor);
      });
    });
    console.log("Emitted data:", data);
    io.to("0").emit("api_data", data);
  }, interval);
};

const NotificationJob = (io:Server) => {
  console.log("Notifications service is up");
  ApiCaller(io);
};

export default NotificationJob;
