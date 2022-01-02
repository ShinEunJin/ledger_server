import app from './app';
import './db';

app.listen(process.env.PORT, () =>
  console.log(`✅ server is connected to ${process.env.PORT}`),
);
