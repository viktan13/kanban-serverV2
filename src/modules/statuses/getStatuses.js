const Status = require('./Model');

function getStatuses(req, res){
    Status
        .finc()
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json('Statuses get all error');
        })
        .finally(() => {
            console.log('Statuses get all END');
        })
}

module.exports = getStatuses;