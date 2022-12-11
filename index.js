const express = require('express');
const routes = require("./routes");
const parseBody = require("./parseBody");
const dbConnection = require("./dbConnection");
const app = express();
const PORT = process.env.PORT || 5000;

dbConnection();
parseBody(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app is listening at port: http://localhost:${PORT}`);
})