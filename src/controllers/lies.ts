import { LieModel } from "../models/Lie";
import { NextFunction, Request, Response } from "express";

export async function getLies(req: Request, res: Response, next: NextFunction) {
  try {
    const page = +req.query.page || 1;
    const results = await LieModel.find({ userId: req.user?._id })
      .skip((page - 1) * 10)
      .limit(10);
    res.json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
}
