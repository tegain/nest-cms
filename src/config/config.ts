import * as dotenv from 'dotenv';

dotenv.config();

const env: string = process.env.NODE_ENV || 'development';

if (env === 'development') {
  dotenv.config({ path: '.env.development' });
} else if (env === 'test') {
  dotenv.config({ path: '.env.test' });
} else {
  dotenv.config({ path: '.env' });
}
