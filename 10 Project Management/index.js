import dotenv from "dot-env";

dotenv.config({
    path: "./.env"
});
myusername = process.env.username;
console.log("Start backend project management application");
console.log("Username is: " + myusername);
