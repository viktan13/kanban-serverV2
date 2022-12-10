let cards = [
    {id: '1', name: 'First Card', status: 'todo', priority: 2},
    {id: '2', name: 'Second Card', status: 'progress', priority: 5},
    {id: '3', name: 'Third Card', status: 'review', priority: 3},
];

function routes(app) {
    app.get('/', (req, res) => {
        res.send('Hello World');
    })

    app.get('/cards', (req, res) => {
        res.send(cards)
    })

    app.post('/cards', (req, res) => {
        const newCard = req.body;
        cards.push({id: Math.random().toFixed(20).slice(2), ...newCard});
        res.send(cards);
    })

    app.patch('/cards/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        const updCard = req.body;
        cards = cards.map(el => el.id === cardId ? {...el, ...updCard} : el);
        res.send(cards);
    })

    app.delete('/cards/:cardId', (req, res) => {
        const cardId = req.params.cardId;
        cards = cards.filter(el => el.id !== cardId);
        res.send(cards)
    })
}

module.exports = routes;
