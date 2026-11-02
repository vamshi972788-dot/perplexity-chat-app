
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

app.use(express.json());

app.use(express.static("./public"));
app.use(cookieParser());

app.use(cors({
    origin: "https://perplexity-chat-app.onrender.com",
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
