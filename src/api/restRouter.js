import express from 'express';
import { userRouter } from './resources/user';
import { songRouter } from './resources/song';
import { playlistRouter } from './resources/playlist';
import { apiErrorHandler } from './modules/errorHandler';

export const restRouter = express.Router();

//middleware to handle authentication?

restRouter.use('/user', userRouter);
restRouter.use('/song', songRouter);
restRouter.use('/playlist', playlistRouter);
