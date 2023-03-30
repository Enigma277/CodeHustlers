import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  expiresIn: {
    type: Date,
    required: true,
  },
});
export default mongoose.model("Otp", OtpSchema);
