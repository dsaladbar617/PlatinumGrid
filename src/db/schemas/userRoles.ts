import mongoose from "mongoose";

const userRole = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // Refers to the 'User' model name (as defined in your 'users' schema)
  },
  userRole: String,
});

export default mongoose.model("userRoles", userRole);
