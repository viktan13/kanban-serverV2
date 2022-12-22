const Status = require('./Model')
function deleteStatus(req, res){
    const statId = req.params.statusId;
    Status
        .deleteOne({_id: statId})
        .then(() => {
            res.status(200).json('Status was successfully deleted.');
        })
        .catch(err => {
            console.log(err);
            res.status(400).json('Error while deleting the status');
        })
}

module.exports = deleteStatus;