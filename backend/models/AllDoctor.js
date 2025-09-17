import mongoose from "mongoose";

const AllDoctorsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },

    // Multiple images (max 4)
    images: {
      type: [String],
      validate: [arrayLimit, "{PATH} exceeds the limit of 4"],
      default: [],
    },

    fee: { type: Number, required: true }, // fee in USD
    rating: { type: Number, min: 0, max: 5 }, // e.g., 4.5
    country: { type: String },
    days: { type: [String], default: [] }, // e.g., ["Monday", "Tuesday"]
    availableToday: { type: Boolean, default: false }, // present or absent
  },
  { timestamps: true }
);

// Validator to limit max 4 images
function arrayLimit(val) {
  return val.length <= 4;
}

export default mongoose.model("AllDoctors", AllDoctorsSchema);
