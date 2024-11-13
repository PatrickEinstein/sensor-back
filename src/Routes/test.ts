import express from "express";
import { TestController } from "../controller/testController.js";

const TestRouter = express.Router();

/**
 * @openapi
 * '/api/test':
 *  get:
 *     tags:
 *     - Hello test me !
 *     summary: Just for testing purposes
 *     responses:
 *      200:
 *        description:  {}
 *      404:
 *        description: Not Found
 */
TestRouter.get("/api/test", TestController);

export default TestRouter;
