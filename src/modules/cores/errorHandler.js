function apiNotFound(req, res) {
    res.status(400).json({
        res: 'API not found',
        recommend: 'Try /tasks or /statuses'
    })
}

function errorHandler(app){
    app.use(apiNotFound);
}

module.exports = errorHandler;