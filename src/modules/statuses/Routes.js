const {Router} = require('express');
const createStatus = require("./createStatus");
const getStatuses = require("./getStatuses");
const updateStatus = require("./updateStatus");
const deleteStatus = require("./deleteStatus");


const statusesRouter = Router();

statusesRouter.post('/', createStatus);
statusesRouter.get('/', getStatuses);
statusesRouter.patch('/:statusId', updateStatus);
statusesRouter.delete('/:statusId', deleteStatus);

module.exports = statusesRouter;