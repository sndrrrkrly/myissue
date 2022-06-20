const express = require("express");
const mongoose = require("mongoose");

const helmet = require("helmet");
const morgan = require("morgan");

const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ 
     path: path.join(__dirname, "./config", ".env") 
});

const main = async () => {
     const app = express();

     app.use(express.json());
     app.use(helmet());
     app.use(morgan("common"));

     const expressServer = app.listen(process.env?.PORT, async () => {
          console.log("🚀 Backend server is running at - " + process.env?.PORT + ".");

          try {
               await mongoose
                    .connect(process.env?.MONGO_URL, { useNewUrlParser: true })
                    .then((res) => { console.log("🚀 Connected to Distribution API Database - Initial Connection"); })
          } catch (err) {
               console.log("⚠️  Initial Distribution API Database connection error occured - ", err);

               setTimeout(() => {
                    console.log("🤞 Shutting down application");
                    
                    expressServer.close(function() {
                         console.log("👋 All requests stopped, shutting down"); 
                         process.exit();
                    });
               }, 0);
          };
     });
};

main().catch((err) => {
     return console.log("⚠️ Error occured - ", err);
});