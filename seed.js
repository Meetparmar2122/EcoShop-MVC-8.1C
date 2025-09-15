require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecoshop';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB for seeding');
  await Product.deleteMany({});
  const sample = [
    { name: 'Reusable Bamboo Toothbrush', description: 'Eco-friendly bamboo toothbrush', price: 4.99, stock: 120, category: 'Personal Care' },
    { name: 'Stainless Steel Water Bottle', description: 'Keeps drinks cold for 24h', price: 24.99, stock: 60, category: 'Accessories' },
    { name: 'Compostable Phone Case', description: 'Made from plant-based materials', price: 19.99, stock: 40, category: 'Electronics' }
  ];
  await Product.insertMany(sample);
  console.log('Inserted sample products');
  process.exit(0);
}).catch(err => {
  console.error('Seeding error:', err);
  process.exit(1);
});
