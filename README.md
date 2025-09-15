# EcoShop - Sustainable Online Store (Updated with MongoDB)

This version of EcoShop includes MongoDB integration via Mongoose, REST routes, and a seed script.
EcoShop is a simple demo web application that showcases eco-friendly products. The application loads product data from the server and displays it in a clean, user-friendly layout.
This project is a demonstration of a Node.js and Express server serving product data via an API endpoint (/api/products) and rendering it on a web page

# Products Displayed
•	Reusable Bamboo Toothbrush
Eco-friendly bamboo toothbrush
Price: $4.99 | Stock: 120
•	Stainless Steel Water Bottle
Keeps drinks cold for 24h
Price: $24.99 | Stock: 60
•	Compostable Phone Case
Made from plant-based materials
Price: $19.99 | Stock: 40


## Setup

1. Copy `.env.example` to `.env` and fill `MONGO_URI`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Seed the database with sample products:
   ```bash
   npm run seed
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open the demo frontend at `http://localhost:3000`

# Notes

This is a simple demo project.

No authentication, cart, or payment features are included.

Products are loaded from the server dynamically.

# Jenkins Set up and Test success
