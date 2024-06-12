import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//for data which is sent in json
app.use(express.json({ limit: "16kb" }));

//for data which is sent in url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));
app.use(cookieParser());

export { app };
