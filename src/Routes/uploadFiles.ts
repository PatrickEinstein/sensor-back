import express from "express";
import { UploaderController } from "../controller/uploadController";

const FileRouter = (uploaderController: UploaderController) => {
  const router = express.Router();

  /**
   * @openapi
   * '/api/upload':
   *   post:
   *     tags:
   *       - Files
   *     summary: Upload
   *     requestBody:
   *       content:
   *         multipart/form-data:
   *           schema:
   *             type: object
   *             properties:
   *               file:
   *                 type: string
   *                 format: binary
   *     responses:
   *       '200':
   *         description: {}
   *       '404':
   *         description: Not Found
   */
  router.post("/api/upload", uploaderController.Uploader);

  return router;
};

export default FileRouter;
