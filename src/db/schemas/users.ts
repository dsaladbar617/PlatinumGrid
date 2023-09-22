import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  email: String,
});

export default mongoose.model("users", usersSchema);
