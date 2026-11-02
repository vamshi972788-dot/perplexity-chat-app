
import { Server } from "socket.io";

let io;
const allowedOrigins = [
    "https://perplexity-chat-app.onrender.com",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:4173",
    "http://127.0.0.1:4173"
];

export const initSocket = (httpServer) => {

    io = new Server(httpServer, {
        cors: {
            origin: allowedOrigins,
            credentials: true,
            methods: ["GET", "POST"]
        }
    });

    console.log("Socket.io runinng sucessfully");

    io.on("connection", (socket) => {
        console.log("A user connected: " + socket.id);
    });
};

export function getID(){

    if(!io){
        throw new Error("Socket.io not initialized");
    }

    return io;
}