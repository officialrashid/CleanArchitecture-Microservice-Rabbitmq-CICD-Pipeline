import http from "http";
import express from 'express';
import serverConfig from "./src/framework/webServer/server.js";
import getDb from "./src/framework/database/connection.js";
import config from "./src/config/productServConfig.js";
import expressConfig from "./src/framework/webServer/express.js";
import routes from "./src/framework/webServer/routes/index.js";

// Create an Express app instance
const app = express();

// Create an HTTP server instance using the Express app
const server = http.createServer(app);

// Connect to the database using the configuration from "config.js"
getDb(config);

// Configure Express settings and middleware
expressConfig(app);

// Configure the server routes
serverConfig(app);

// Set up the routes for the app using the Express instance
routes(app, express);

// Start the server
serverConfig(server, config).startServer();
