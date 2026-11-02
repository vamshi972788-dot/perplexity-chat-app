
// import "dotenv/config";
// import app from "./src/app.js";
// import connectDB from "./src/config/database.js";
// import http from "http";

// import { initSocket } from "./src/sockets/server.sockets.js";

// const httpServer = http.createServer(app);

// initSocket(httpServer);

// connectDB();

// const PORT = process.env.PORT || 3000;

// httpServer.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`);
// });

// // httpServer.listen(3000, () => {
// //     console.log("server is running port number 3000");
// // }); 

import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import http from "http";
import { initSocket } from "./src/sockets/server.sockets.js";

const httpServer = http.createServer(app);

initSocket(httpServer);

async function startServer() {
    try {
        await connectDB();

        const PORT = process.env.PORT || 3000;

        httpServer.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
}

startServer();