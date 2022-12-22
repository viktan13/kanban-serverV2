const express = require('express');
const routes = require("./modules/routes");
const parseBody = require("./modules/parseBody");
const dbConnection = require("./modules/dbConnection");
const CORS = require("./modules/cors");
const app = express();
const PORT = process.env.PORT || 5000;

CORS(app);
dbConnection();
parseBody(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app is listening at port: http://localhost:${PORT}`);
})