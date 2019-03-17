import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly username: string;
  readonly password?: string;
  readonly email?: string;
  readonly isAdmin?: boolean;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly pictureUrl?: string;
}
