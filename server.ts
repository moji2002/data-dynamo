import fs from "fs";
import jsonServer from "json-server";
import generateSeeds from "./generateSeeds";

const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();

const records = fs.existsSync("data/db.json");
if (!records) {
  generateSeeds();
}

server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log("JSON Server is running on port " + PORT);
});
