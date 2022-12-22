const {Router} = require('express');
const createStatus = require("./createStatus");
const getStatuses = require("./getStatuses");


const statusesRouter = Router();

statusesRouter.post('/', createStatus);
statusesRouter.get('/', getStatuses);

module.exports = statusesRouter;