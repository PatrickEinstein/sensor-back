import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// LINUX
// const directoryPath = path.join(__dirname, "..", "Routes", "*.js");
// WINDOWS
const directoryPath = path.join(__dirname, "..", "Routes", "*.js").slice(1);
// Decode the path if necessary (only for special characters)
const decodedPath = decodeURIComponent(directoryPath);
console.log(decodedPath);
const options = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "Sensor API",
            version: "1.7.1",
            description: "Sensor",
            // contact: {
            //   name: "Patrick",
            //   url: "folio.vercel.app",
            //   email: "pmohammed@chamsswitch.com",
            // },
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}/`,
                description: "Development server",
            },
        ],
        basePath: "/",
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        explorer: true,
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: [decodedPath],
};
const swaggerconfig = swaggerJSDoc(options);
export default swaggerconfig;
