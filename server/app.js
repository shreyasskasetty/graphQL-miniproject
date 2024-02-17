const express = require('express');
var { createHandler } = require("graphql-http/lib/use/express")
var { ruruHTML } = require("ruru/server")
var schema = require("./schema/schema")
const app = express();

var root = {
    hello: () => {
      return "Hello world!"
    },
  }

app.all(
    "/graphql",
    createHandler({
      schema: schema,
      rootValue: root,
    })
);

// Serve the GraphiQL IDE.
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(4000, () =>{
    console.log('Server is running on port 4000');
})