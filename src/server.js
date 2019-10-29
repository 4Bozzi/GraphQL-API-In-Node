import express from 'express';
import setupMiddware from './middleware';
import { restRouter } from './api';
import { connect } from './db';
import { signin, protect } from './api/modules/auth';

const app = express();

setupMiddware(app);
connect();

app.use('/signin', signin);
app.use('/api', protect, restRouter);

app.all('*', (req, res) => {
=======
app.use('/api', restRouter);

app.all('*', (req, res) => {
=======

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true });
});

export default app;
