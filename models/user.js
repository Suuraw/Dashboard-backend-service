import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, { timestamps: true });

// Create and export the model
export const User = mongoose.model("User", userSchema);
