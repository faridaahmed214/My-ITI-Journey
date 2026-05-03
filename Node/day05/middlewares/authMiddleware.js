import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.startsWith("Bearer") ? req.headers.authorization.split(" ")[1] : null;
    if (!token) return res.status(401).json({ message: "Not authenticated" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) { res.status(403).json({ message: "Invalid Token" }); }
};