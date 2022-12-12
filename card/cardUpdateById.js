const Card = require("./Model");

function cardUpdateById(req, res) {
    const cardId = req.params.cardId;
    const filter = {_id: cardId};
    const updCard = req.body;
    Card.updateOne(filter, updCard)
        .then(() => {
            res.send('Card is updated');
        })
        .catch(err => {
            console.log(err);
            res.send('Card was not updated. Some Error')
        });
}

module.exports = cardUpdateById;