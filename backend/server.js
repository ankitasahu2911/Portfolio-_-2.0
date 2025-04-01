import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Contact Form Endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  console.log('Contact Form Submission:', { name, email, message });
  res.status(200).json({ message: 'Your message has been sent successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
