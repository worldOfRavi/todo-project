const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectToDatabase();

// Middleware
app.use(express.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));


// Define routes for login, register, and items HTML files
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/items', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'items.html'));
});

app.get('/items', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'updateItem.html'));
});

// Routes
app.use(cors({
  origin:"http://localhost:5173",
  // methods:"GET, POST, PUT, DELETE, PATCH,HEAD",
  credential:true,
}));
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
