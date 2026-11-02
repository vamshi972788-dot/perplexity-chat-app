
import { Server } from "socket.io";

let io;

export const initSocket = (httpServer) => {

    io = new Server(httpServer, {
        cors: {
            origin: "https://perplexity-chat-app.onrender.com",
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