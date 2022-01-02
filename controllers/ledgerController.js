import Ledger from '../models/Ledger';

export const getLedger = async (req, res) => {
  const {
    params: {date, category_1, category_2, actType},
  } = req;
  // try {
  //   let {data} = await Ledger.find({date: date && date});
  // } catch (error) {
  //   console.log(error);
  // }
};

export const createLedger = async (req, res) => {
  try {
    let {data} = await Ledger.create(req.body);
    console.log({data});
    res.status(200).json({data});
  } catch (error) {
    console.log('create err', error);
  }
};
