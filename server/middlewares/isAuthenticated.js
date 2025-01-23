import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
        return res.status(401).json({
            success: false,
            message: "You need to login first."
        });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
        return res.status(401).json({
            success: false,
            message: "You need to login first."
        });
        }
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
        success: false,
        message: "Internal server error."
        });
    }
    }

export default isAuthenticated;