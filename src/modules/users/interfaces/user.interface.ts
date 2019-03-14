import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly role: UserRoles;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly pictureUrl?: string;
}

export const enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}
