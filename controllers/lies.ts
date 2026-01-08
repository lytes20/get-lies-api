import { LieModel } from "../models/Lie";

const getLies = async (req, res, next) => {
  try {
    const page = +req.query.page || 1;
    const results = await LieModel.find({ userId: req.user?._id })
      .skip((page - 1) * 10)
      .limit(10);
    res.json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
};

export default {
  getLies,
};
