const {Router} = require('express');
const createStatus = require("./createStatus");
const getStatuses = require("./getStatuses");
const updateStatus = require("./updateStatus");


const statusesRouter = Router();

statusesRouter.post('/', createStatus);
statusesRouter.get('/', getStatuses);
statusesRouter.patch('/:statusId', updateStatus);

module.exports = statusesRouter;