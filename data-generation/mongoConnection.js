const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection URI
const client = new MongoClient(uri);

function getDatabase() {
    try {
         client.connect();
        console.log('Connected to MongoDB');
        return client.db('superheroes_games'); // Replace with your database name
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
      }
}

module.exports = { getDatabase };
