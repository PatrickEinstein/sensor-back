import { AppDataSource } from "../data-source.js";
const ConnectDatabse = (app, PORT, uri) => {
    // mongoose
    //   .connect(uri)
    //   .then(
    //     app.listen(PORT, async (req:Request, res:Response) => {
    //       console.log(`Server is running on port http://localhost:${PORT}`);
    //     })
    //   )
    //   .then(async () => {
    //     console.log("DB connected");
    //   })
    //   .catch((err) => console.log(err));
    AppDataSource.initialize()
        .then(() => {
        console.log("Data Source has been initialized!");
    })
        .then(app.listen(PORT, async (req, res) => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    }))
        .catch((error) => console.log("Error during Data Source initialization", error));
};
export default ConnectDatabse;
