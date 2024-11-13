import jwt from "jsonwebtoken";
const TokenVerification = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    if (token) {
        return res.status(401).json({ message: "Token expired or invalid 002" });
    }
    else {
        jwt.verify(token, process.env.JSONKEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Token expired or invalid" });
            }
            req.user = decoded; // Assign the decoded token to req.user
            next();
        });
    }
};
export default TokenVerification;
export const GetCurrentUser = async (string) => {
    if (!string || !string.startsWith("Bearer ")) {
        return { message: "Merchant Not Found" };
    }
    const token = string.split(" ")[1];
    try {
        const decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JSONKEY, (err, decoded) => {
                if (err)
                    reject(err);
                else
                    resolve(decoded);
            });
        });
        const { isActive, role } = { isActive: true, role: "Admin" };
        // await BillsUser.findOne({
        //   ClientId: decoded.user,
        // });
        return {
            role: role,
            isActive: true,
            message: "Token expired or invalid",
            userStatus: false,
            error: "",
        };
    }
    catch (err) {
        return {
            role: "",
            message: "Token expired or invalid",
            userStatus: false,
            error: err.error,
        };
    }
};
