const cors = require('cors');


const CORS = (app) => {

    const corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true,            //access-control-allow-credentials:true
        optionSuccessStatus: 200
    }
    app.use(cors(corsOptions))
}

module.exports = CORS;
