import { IUser } from '../interfaces/IUser';
import mongoose from 'mongoose';
const EmailRegex = new RegExp('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+).([a-zA-Z]{2,5})$', 'g');

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a full name'],
      index: true,
    },

    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
      validate: [EmailRegex, 'Please enter a valid email'],
    },

    password: String,

    salt: String,

    role: {
      type: String,
      default: 'user',
    },
  },
  { timestamps: true },
);

export default mongoose.model<IUser & mongoose.Document>('User', User);
