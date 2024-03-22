import mongoose from "mongoose";

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  user_address: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
},
{
    timestamps: true,
}
);

export const Address = mongoose.model("address", addressSchema);
