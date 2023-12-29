import mongoose, { Schema } from "mongoose";

const tagSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);

const Tag = mongoose.models.Tag || mongoose.model("Tag", tagSchema);

export default Tag;
