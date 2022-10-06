import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 4681;

server.listen(PORT, () => {
  console.log("JSON Server is running on port " + PORT);
});
