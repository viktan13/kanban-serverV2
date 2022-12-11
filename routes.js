const cardCreate = require("./card/cardCreate");
const cardGetAll = require("./card/cardGetAll");
const cardUpdateById = require("./card/cardUpdateById");
const cardDelete = require("./card/cardDelete");

let cards = [
    {id: '1', name: 'First Card', status: 'todo', priority: 2},
    {id: '2', name: 'Second Card', status: 'progress', priority: 5},
    {id: '3', name: 'Third Card', status: 'review', priority: 3},
];

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World');
    })

    app.get('/cards', cardGetAll)
    app.post('/cards', cardCreate)
    app.patch('/cards/:cardId', cardUpdateById)
    app.delete('/cards/:cardId', cardDelete)
}

module.exports = routes;
