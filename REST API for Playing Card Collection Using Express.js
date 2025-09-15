const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initial data (your card collection)
let cards = [
  { id: 1, suit: "Hearts",   value: "Ace" },
  { id: 2, suit: "Spades",   value: "King" },
  { id: 3, suit: "Diamonds", value: "Queen" },
];

// GET all cards
app.get('/cards', (req, res) => {
  res.status(200).json(cards);
});

// GET card by ID
app.get('/cards/:id', (req, res) => {
  const card = cards.find(c => c.id === parseInt(req.params.id));
  if (!card) return res.status(404).json({ message: 'Card not found' });
  res.status(200).json(card);
});

// POST add a new card
app.post('/cards', (req, res) => {
  const { suit, value } = req.body;
  if (!suit || !value) return res.status(400).json({ message: 'Suit and value are required' });

  const newCard = { id: cards.length ? cards[cards.length - 1].id + 1 : 1, suit, value };
  cards.push(newCard);
  res.status(201).json(newCard);
});

// DELETE a card
app.delete('/cards/:id', (req, res) => {
  const index = cards.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Card not found' });

  const removedCard = cards.splice(index, 1)[0];
  res.status(200).json({
    message: Card with ID ${removedCard.id} removed,
    card: removedCard
  });
});

app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});
