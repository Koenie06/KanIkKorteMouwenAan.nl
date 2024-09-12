const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

Date.prototype.getWeek = function(){
    return [new Date(this.setDate(this.getDate()-this.getDay()))]
    .concat(
      String(Array(7)).split(',')
        .map ( function(){
          return new Date(this.setDate(this.getDate()+1));
        }, this )
    );
}
const week = new Date().getWeek();
    
const days = 7 - (new Date().getDay()) + 1;
let dayList = "";
for(let i = 0; i < days; i++) {
    if((i + 1) === 1) dayList += (i+1).toString();
    else dayList += "," + (i+1).toString();
}
  
const historyURL = `https://api.weatherapi.com/v1/history.json?key=${process.env.WEBSITE_KEY}&q=utrecht&dt=${week[1].getFullYear()+'-'+(week[1].getMonth()+1)+'-'+week[1].getDate()}&end_dt=${week[7].getFullYear()+'-'+(week[7].getMonth()+1)+'-'+week[7].getDate()}`;
const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEBSITE_KEY}&q=utrecht&days=7`;

router.get('/', async function(req, res, next) {

    const forecast = await (await fetch(forecastURL)).json();
    const history = await (await fetch(historyURL)).json();

    await prisma.weather.update({
        where: {
            id: 1
        },
        data: {
            today: forecast.forecast.forecastday[0],
            forecast: forecast,
            history: history
        }
    });

    res.json({ completed: true });
    
});

module.exports = router;