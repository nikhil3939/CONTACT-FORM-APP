const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form:', { name, email, message });
  res.json({ message: 'Form received successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
