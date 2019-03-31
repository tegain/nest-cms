import { Request, Response } from 'express';

export function CorsMiddleware (req: Request, res: Response, next: () => void) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
}
