const express = require('express');
var { createHandler } = require("graphql-http/lib/use/express");
var { ruruHTML } = require("ruru/server");
var schema = require("./schema/schema");
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.7d8txtk.mongodb.net/?retryWrites=true&w=majority`
console.log(uri)
mongoose.connect(uri);

mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

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