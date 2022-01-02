import mongoose from 'mongoose';

const LedgerSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  actType: {
    type: Number,
    required: true,
  },
  category_1: {
    type: String,
    enum: ['fixed', 'once', 'normal'],
    default: 'normal',
  },
  category_2: {
    type: String,
    enum: ['necessity', 'study', 'leisure', 'food', 'health', 'etc'],
    default: 'etc',
  },
  amount: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const Ledger = mongoose.model('Ledger', LedgerSchema);

export default Ledger;
