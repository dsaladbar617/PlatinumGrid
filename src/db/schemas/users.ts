import mongoose from "mongoose";

const user = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  email: String,
});

export default mongoose.model("User", user);
