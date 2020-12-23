import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
  );
});
