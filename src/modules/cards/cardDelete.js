const Card = require("./Model");

function cardDelete(req, res) {
    const cardId = req.params.cardId;
    Card.deleteOne({_id: cardId})
        .then(() => {
            res.send('Card is deleted')
        })
        .catch(err => {
            console.log(err);
            res.send('Card was not deleted. Some Error')
        })
}

module.exports = cardDelete;