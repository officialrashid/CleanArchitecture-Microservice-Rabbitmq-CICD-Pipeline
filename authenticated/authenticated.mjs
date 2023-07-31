// authenticated.mjs
import jwt from "jsonwebtoken";
import config from "../src/config/config.js";

const isAuthenticated = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Use optional chaining to handle the case when the "Authorization" header is missing
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, config.jwtAccessSecretKey, (err, user) => {
    if (err) {
      console.log("errorrrrrr");
      return res.json({ message: err.message });
    } else {
      req.user = user;
      next();
    }
  });
};

export { isAuthenticated };
