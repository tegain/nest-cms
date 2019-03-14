import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { UserRoles } from '../interfaces/user.interface';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uniqueCaseInsensitive: true,
    minlength: [5, `Username must contain at least 5 characters`],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    uniqueCaseInsensitive: true,
    minlength: [6, `Email address must contain at least 6 characters`],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, `Password must contain at least 8 characters`],
  },
  role: {
    type: String,
    default: UserRoles.USER,
    enum: [UserRoles.ADMIN, UserRoles.USER],
  },
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  pictureUrl: {
    type: String,
    trim: true,
  },
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} with value `{VALUE}` already exists.' });
