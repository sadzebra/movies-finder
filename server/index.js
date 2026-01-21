require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const BASE_URL = process.env.TMDB_BASE_URL;
const API_KEY = process.env.TMDB_API_KEY;

//
app.get('/api/trending/', async (req, res) => {
  console.log('call to /api/trending/');

  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    res.json(response.data);
  }
  catch (error) {
    console.log('Something went wrong', error.message)
  }
});

//
app.get('/api/search/', (req, res) => {
  console.log('call to /api/search/');
});

//
app.get('/api/movie/:id', (req, res) => {
  console.log('call to /api/search/');
})

//
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
