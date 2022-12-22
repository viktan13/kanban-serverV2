const Card = require("./Model");

function cardCreate(req, res) {
    // const newCard = req.body;
    // cards.push({id: Math.random().toFixed(20).slice(2), ...newCard});
    const newCard = new Card(req.body);
    newCard.save()
        .then(() => {
            res.send('New card is created!!!');
        })
        .catch(err => {
            console.log(err);
            res.send('New card was not created. Some Error')
        })
}

module.exports = cardCreate;