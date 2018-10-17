import mongoose from 'mongoose';

export const schema = {
  title: {
    required: [true, 'A song must have a title.']
  },

  url: {
    required: [true, 'A song must have a url.'],
    unique: true
  },

  album: {},

  artist: {},
  rating: {
    type: Number
  },
  favorite: {
    type: Boolean
  }
};

const songSchema = new mongoose.Schema(schema);

export const Song = mongoose.model('song', songSchema);
