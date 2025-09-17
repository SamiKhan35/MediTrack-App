import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    image: { type: String }, // optional image URL
    fee: { type: Number, required: true }, // fee in USD
    email: { type: String }, // add email
    description: { type: String }, // add description
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
