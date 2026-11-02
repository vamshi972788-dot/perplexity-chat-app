
// import { io } from "socket.io-client";

// export const socketconnection = () => {

//     const socket = io("http://localhost:3000", {
//         withCredentials: true
//     });

//     socket.on("connect", () => {
//         console.log("connected to socket io server");
//     });

// };

import { io } from "socket.io-client";

export const socketconnection = () => {
    const socket = io("https://perplexity-chat-app.onrender.com", {
        withCredentials: true
    });

    socket.on("connect", () => {
        console.log("Connected to Socket.IO server");
    });

    socket.on("connect_error", (error) => {
        console.error("Socket connection error:", error.message);
    });

    return socket;
};
