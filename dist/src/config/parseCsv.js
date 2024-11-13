import fs from "fs";
import { parse } from "csv-parse";
const CsvParser = (filePath) => {
    return new Promise((resolve, reject) => {
        // const results: any[] = [];
        // fs.createReadStream(filePath)
        //   .pipe(
        //     parse({
        //       comment: "#",
        //       columns: true,
        //     })
        //   )
        //   .on("data", (data: any) => {
        //     results.push(data);
        //   })
        //   .on("error", (err: any) => {
        //     console.error(err);
        //     reject(err);
        //   })
        //   .on("end", () => {
        //     console.log("Parsing complete");
        //     resolve(results);
        //   });
        const results = [];
        fs.createReadStream(filePath)
            .pipe(parse({ columns: true, comment: "#" }))
            .on("data", (row) => {
            // console.log(`csv-rows`, row);
            let client = results.find((c) => c.nameOfClient === row.nameOfClient);
            if (!client) {
                client = { nameOfClient: row.nameOfClient, sensors: [] };
                results.push(client);
            }
            client.sensors.push({
                message: parseInt(row.message),
                room: row.room,
                sensor: row.sensor,
                status: parseInt(row.status),
                timestamp: new Date(row.timestamp),
            });
        })
            .on("error", (err) => {
            console.error(err);
            reject(err);
        })
            .on("end", () => {
            // console.log(JSON.stringify(results, null, 2));
            console.log("Parsing complete");
            resolve(results);
        });
    });
};
export default CsvParser;
