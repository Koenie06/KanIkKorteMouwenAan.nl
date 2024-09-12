const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const schedule = require('node-schedule');
const { PrismaClient } = require('@prisma/client');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/getWeather');
const setWeather = require('./routes/setWeather');

const app = express();
const prisma = new PrismaClient();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/getWeather', usersRouter);
app.use('/setWeather', setWeather);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

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

const historyURL = `https://api.weatherapi.com/v1/history.json?key=${process.env.WEBSITE_URL}&q=utrecht&dt=${week[1].getFullYear()+'-'+(week[1].getMonth()+1)+'-'+week[1].getDate()}&end_dt=${week[7].getFullYear()+'-'+(week[7].getMonth()+1)+'-'+week[7].getDate()}`;
const forecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEBSITE_URL}&q=utrecht&days=${(week[7].getDate() - new Date().getDate()) + 1}`;

schedule.scheduleJob({ hour: 0, minute: 5}, async function() {
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

  console.log("Database updated!")
});