import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import LiesRouter from './routes/lies';
import { errorHandler, routerNotFoundHandler } from './utils/common';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/lies', LiesRouter);

app.use(routerNotFoundHandler);
app.use(errorHandler);

export default app;
