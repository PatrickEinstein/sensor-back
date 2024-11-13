import express from "express";
const FileRouter = (uploaderController) => {
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
