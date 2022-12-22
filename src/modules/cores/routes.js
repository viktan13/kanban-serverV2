const cardsRouter = require('../card/Routes')

// let cards = [
//     {id: '1', name: 'First Card', status: 'todo', priority: 2},
//     {id: '2', name: 'Second Card', status: 'progress', priority: 5},
//     {id: '3', name: 'Third Card', status: 'review', priority: 3},
// ];

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World');
    })
    app.use('/cards', cardsRouter);
}

module.exports = routes;
