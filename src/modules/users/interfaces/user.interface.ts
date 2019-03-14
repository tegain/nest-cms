import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly username: string;
  readonly password: string;
  readonly email: string;
}

export const enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}
