'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const tickers = [
  'AAPL', // Apple
  'GOOGL', // Alphabet
  'MSFT', // Microsoft
  'AMZN', // Amazon
  'FB', // Facebook
  'TSLA', // Tesla
  'LKE',
  'AUZ',
  'LPD',
  'AGY',
  'F', // Ford
  'GOOGLE',
];

const deletedStoreId = [];
let timer;

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

function getHistoryPrice() {
  let priceHistory = {};

  return function (id, curenntPrice) {
    if (!Array.isArray(priceHistory[id])) {
      priceHistory[id] = [];
      priceHistory[id].push(curenntPrice);
    } else if (priceHistory[id].length < 2) {
      priceHistory[id].push(curenntPrice);
    } else {
      priceHistory[id] = [priceHistory[id][0], curenntPrice];
    }


    return priceHistory;
  }
}
const getHistoryPriceStore = getHistoryPrice();

function getValueChange(historyPriceStore) {
  if (historyPriceStore.length < 2) return 0;
  let res = historyPriceStore[1] - historyPriceStore[0];
  return res.toFixed(2);
}

function getPercentChange(historyPriceStore) {
  if (historyPriceStore.length < 2) return 0;
  if (+historyPriceStore[0] === +historyPriceStore[1]) return 0;
  if (+historyPriceStore[0] > +historyPriceStore[1]) {
    let res = (1 - (historyPriceStore[1] / historyPriceStore[0])) * 100;
    return res.toFixed(2);
  }
  if (+historyPriceStore[0] < +historyPriceStore[1]) {
    let res = ((historyPriceStore[1] / historyPriceStore[0]) - 1) * 100;
    return res.toFixed(2);
  }

}

function getTickerDeleteId(tickerDeleteId) {
  deletedStoreId.push(tickerDeleteId);
}

function getQuotes(socket) {

  const quotes = tickers.map(ticker => {
    const historyPriceStore = getHistoryPriceStore(ticker, randomValue(100, 300, 2));
    const oneHistoryPriceStore = historyPriceStore[ticker];

    const price = oneHistoryPriceStore[oneHistoryPriceStore.length - 1];
    return {
      ticker,
      id: ticker,
      exchange: 'NASDAQ',
      price,
      change: getValueChange(oneHistoryPriceStore),
      change_percent: getPercentChange(oneHistoryPriceStore),
      dividend: randomValue(0, 1, 2),
      yield: randomValue(0, 2, 2),
      last_trade_time: utcDate(),
    }
  });

  if (deletedStoreId.length > 0) {
    const filteredWithoutId = quotes.filter(ticker => !deletedStoreId.includes(ticker.ticker));
    socket.emit('ticker', filteredWithoutId);
  } else {
    socket.emit('ticker', quotes);
  }
}

const makeTimer = (timeInterval, socket) => {
  const interval = timeInterval * 1000;
  if (timer) clearInterval(timer);

  timer = setInterval(function () {
    getQuotes(socket);
  }, interval)
}

function trackTickers(socket) {
  // run the first time immediately
  getQuotes(socket);

  socket.on('disconnect', function () {
    clearInterval(timer);
  });
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  }
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

socketServer.on('connection', (socket) => {
  socket.on('start', () => {
    trackTickers(socket);
  });
  socket.on('delete_ticker_id', (data) => {
    getTickerDeleteId(data.tickerDeleteId);
  })

  socket.on('set_time_interval', (data) => {
    makeTimer(data.timeInterval, socket);
  })
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
