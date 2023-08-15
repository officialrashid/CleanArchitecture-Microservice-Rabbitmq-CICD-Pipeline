import express from "express"
import morgan from "morgan"
import cors from "cors"
const expressConfig = (app) => {
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use(cors({
        origin: 'http://localhost:3001', // Update with your client's origin
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true // Allow credentials (cookies, etc.)
    }));
};

export default expressConfig