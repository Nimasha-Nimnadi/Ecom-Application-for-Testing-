// backend/index.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const User = require('./models/User'); // Import models
const Product = require('./models/Product');
const Cart = require('./models/Cart');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart'); // Optional cart routes

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes); // Optional cart routes

// Sync database and start server
sequelize.sync({ alter: true }).then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
}).catch(err => console.error("Database sync error:", err));
