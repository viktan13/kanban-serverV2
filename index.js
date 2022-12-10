const express = require('express');
const routes = require("./routes");
const parseBody = require("./parseBody");
const app = express();
const PORT = process.env.PORT || 3000;

parseBody(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app is listening at port: http://localhost:${PORT}`);
})