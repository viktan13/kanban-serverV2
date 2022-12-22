const Status = require('./Model');


function createStatus(req, res){
    const newStatus = new Status(req.body)
    newStatus
        .save()
        .then(() => {
            res.status(202).json(`Status ${req.body.title} is created`);
        })
        .catch(err => {
            console.log(err);
            res.status(402).json('Status was not created');
        })
        .finally(() => {
            console.log('Status END');
        })
}

module.exports = createStatus;