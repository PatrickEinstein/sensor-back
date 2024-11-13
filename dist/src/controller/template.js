import path from "path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const directoryPath = path.join(__dirname, "..", "Files", "template.csv").slice(1);
const decodedPath = decodeURIComponent(directoryPath);
const TemplateController = (req, res) => {
    res.download(decodedPath, "sensors_template.csv", (err) => {
        if (err) {
            console.log(err.message);
            res.status(500).json({ message: "Error downloading the file" });
        }
    });
};
export default TemplateController;
