import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export const connect = () => {
  return mongoose.connect(
    'mongodb://username:password@ds045622.mlab.com:45622/learner',
    {
      useMongoClient: true
    }
  );
};
