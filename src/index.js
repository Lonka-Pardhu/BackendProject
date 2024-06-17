// require("dotenv").config({ path: "./env" });
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// dotenv is a module that loads environment variables from a .env file into process.env.
dotenv.config({
  path: "./env",
});

connectDB() //this function returns a promise
  //If the database connection is successful, the `then` block is executed.
  .then(() => {
    // If an error occurs on the server/(app), it logs the error and throws it.
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    //if there are no errors then This starts the server and listens
    // on a port defined by the environment variable PORT or defaults to 8000 if PORT is not defined.
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at ${process.env.PORT}`);
    });
  })
  //If the database connection fails, the `catch` block is executed.
  .catch((err) => {
    console.log("MONGO DB CONNECTION FAILED!!", err);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    // if the app fails to connect to db in some other way or if any error occurs
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening at ${process.env.PORT}`);
    });
  } catch (error) {
    console.error;
    throw error;
  }
})(); */
