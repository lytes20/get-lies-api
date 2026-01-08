import { InferSchemaType, model, Schema } from "mongoose";

const schema = new Schema({
  lie: { type: String, required: true },
});

export type Lie = InferSchemaType<typeof schema>;
export const LieModel = model<Lie>("lie", schema);
