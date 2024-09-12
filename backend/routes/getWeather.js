const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/', async function(req, res, next) {

  const weather = await prisma.weather.findFirst();
  res.json({
    today: weather.today,
    forecast: weather.forecast,
    history: weather.history
  });
  
});

module.exports = router;