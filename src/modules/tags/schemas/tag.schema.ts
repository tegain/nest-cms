import * as mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

export const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  label: {
    type: String,
    trim: true,
    required: true,
  },
});

TagSchema.plugin(uniqueValidator, { message: '{PATH} with value `{VALUE}` already exists.' });
