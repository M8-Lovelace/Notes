import mongoose from "mongoose";

const webSchema = new mongoose.Schema({
  ad: { type: mongoose.Schema.Types.ObjectId, ref: "Ad", required: true },
  name: { type: String, required: true },
  topic: { type: String, required: true },
  url: { type: String, required: true },
  dateInit: { type: Date, default: Date.now },
  dateEnd: { type: Date },
});

export default mongoose.model("Web", webSchema);
