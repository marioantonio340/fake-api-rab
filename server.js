// json server module

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");

// make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
    jsonServer.rewriter({
        "/*": "/$1",
    })
);
server.use(router);
// listen to requests on port 3000
server.listen(3000, () => {
    console.log("JSON Server is running");
})

// Export default server
module.exports = server;