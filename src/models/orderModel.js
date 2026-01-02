import { Schema, model, SchemaTypes } from "mongoose";

const OrderSchema = new Schema({
  number: { type: String, required: true },
  date: { type: Date, default: Date.now },
  business: [{ type: SchemaTypes.ObjectId, ref: "Business" }],
  user: [{ type: SchemaTypes.ObjectId, ref: "Users" }],
  status: String,
  products: [{ type: SchemaTypes.ObjectId, ref: "Products" }],
  totalPrice: Number,
});
export default model("Orders", OrderSchema);