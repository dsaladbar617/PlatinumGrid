import mongoose from "mongoose";
import userRoles from "./userRoles";

const sheetSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  short_name: String,
  fields: [String],
  entries: [String],
  users: [
    {
      userRole: { type: String },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  templates: String,
});

export default mongoose.models.sheet || mongoose.model("sheet", sheetSchema);
