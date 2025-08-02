import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send('ping');
})

app.listen(3000, () => {
  console.log('server run port 3000')
})