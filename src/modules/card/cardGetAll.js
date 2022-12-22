const Card = require("./Model");

function cardGetAll(req, res) {
    Card.find().exec()
        .then(result => res.send(result))
        .catch(err => {
            console.log(err);
            res.send('Cannot get any cards')
        });
}

module.exports = cardGetAll;