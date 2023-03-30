import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  type: { type: String },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model("Ad", adSchema);
