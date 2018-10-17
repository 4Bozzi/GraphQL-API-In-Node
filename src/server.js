import express from 'express';
import setupMiddware from './middleware';
import { restRouter } from './api';
import { connect } from './db';
import { signin, protect } from './api/modules/auth';

// Declare an app from express
const app = express();

setupMiddware(app);
connect();
// setup basic routing for index route

app.use('/signin', signin);
app.use('/api', protect, restRouter);
// catch all
app.all('*', (req, res) => {
=======
app.use('/api', restRouter);
// catch all
app.all('*', (req, res) => {
=======

// Declare an app from express
const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true });
});

export default app;
