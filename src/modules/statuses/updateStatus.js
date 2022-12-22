const Status = require('./Model')

function updateStatus(req, res){
    const statId = req.params.statusId;
    Status
        .findByIdAndUpdate(statId, req.body)
        .exec()
        .then(result => {
            res.status(202).json('Status updated');
        })
        .catch(err => {
            console.log(err);
            res.status(400).json('Error updating status')
        })

}

module.exports = updateStatus;