
// import express from "express"
// import cookieParser from "cookie-parser";
// import authRouter from "./routes/auth.routes.js";
// import cors from "cors";
// import morgan from "morgan";
// import chatRouter from "./routes/chat.routes.js";

// const app = express();

// app.use(express.json());
// app.use(express.static("./public"));
// app.use(cookieParser());
// app.use(cors({
//     origin: "https://perplexity-chat-app.onrender.com",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"]
// }));
// app.use(morgan("dev"));
 


// app.use("/api/auth",authRouter)
// app.use("/api/chats",chatRouter)


// export default app

import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import morgan from "morgan";
import chatRouter from "./routes/chat.routes.js";

const app = express();
const allowedOrigins = [
    "https://perplexity-chat-app.onrender.com",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:4173",
    "http://127.0.0.1:4173"
];

app.use(express.json());

app.use(express.static("./public"));
app.use(cookieParser());

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/api/chats", chatRouter);

// React Router fallback
app.get(/.*/, (req, res) => {
    res.sendFile("index.html", { root: "./public" });
});

export default app;
