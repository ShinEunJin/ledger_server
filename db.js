import mongoose from 'mongoose';

console.log(process.env.MONGO_URL);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('✅ connected to db'))
  .catch(err => console.log(`❌ ${err}`));
