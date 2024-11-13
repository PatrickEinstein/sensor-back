import express, { Router } from "express";
import TemplateController from "../controller/template.js";

const templateRouter = express.Router();

/**
 * @openapi
 * /download-template:
 *   get:
 *     tags:
 *       - Files
 *     summary: Download the sensors CSV template.
 *     description: Endpoint to download a CSV template for client sensor data.
 *     responses:
 *       200:
 *         description: Successful download of the CSV template.
 *         content:
 *           text/csv:
 *             schema:
 *               type: string
 *               format: binary
 *       500:
 *         description: Internal Server Error.
 */

templateRouter.get("/download-template", TemplateController);

export default templateRouter
