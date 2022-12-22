const express = require('express');
const routes = require("./cores/routes");
const parseBody = require("./cores/parseBody");
const dbConnection = require("./cores/dbConnection");
const CORS = require("./cores/cors");
const app = express();
const PORT = process.env.PORT || 5000;

CORS(app);
dbConnection();
parseBody(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app is listening at port: http://localhost:${PORT}`);
})