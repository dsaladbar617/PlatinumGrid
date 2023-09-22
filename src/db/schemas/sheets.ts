import mongoose from "mongoose";

const sheetsSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  short_name: String,
  fields: [String],
  entries: [String],
  templates: String,
});

export default mongoose.models.sheets || mongoose.model("sheets", sheetsSchema);
