import mongoose from 'mongoose';

export const schema = {
  title: {
    type: String,
    required: [true, 'A song must have a title.']
  },

  url: {
    type: String,
    required: [true, 'A song must have a url.'],
    unique: true
  },

  album: String,

  artist: String,

  rating: {
    type: Number
  },
  favorite: {
    type: Boolean
  }
};

const songSchema = new mongoose.Schema(schema);

export const Song = mongoose.model('song', songSchema);
