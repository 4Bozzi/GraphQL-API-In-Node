import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export const connect = () => {
  return mongoose.connect(
    'https://mlab.com/databases/learner',
    {
      useMongoClient: true
    }
  );
};
