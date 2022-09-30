const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');

// this line permit to read data from .env
require('dotenv').config();

// Db mongoDB
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  // useCreateIndex: true
})
.then(() => console.log('database connected'))
.catch(() => console.log('cannot connect to database !!'))

// middlewares
// middleware bodyparser
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(expressValidator());

// routes midlleware 
app.use('/api', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app running on port ${port}`))