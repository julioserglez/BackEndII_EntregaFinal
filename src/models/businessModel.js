import { Schema, model, SchemaTypes } from "mongoose";

const BusinessSchema = new Schema({
  name: String,
  products:[{ type: SchemaTypes.ObjectId, ref: "Products" }]
 
});
export default model("Business", BusinessSchema);