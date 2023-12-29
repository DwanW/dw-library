import mongoose, { Schema } from "mongoose";

const optionSchema = new Schema(
  {
    title: String,
    link: String,
    imgUrl: String,
    description: String,
    tag: { type: Schema.Types.ObjectId, ref: "Tag" }, // identifier for what kind of poll this option is for.
  },
  {
    timestamps: true,
  }
);

const Option = mongoose.models.Option || mongoose.model("Option", optionSchema);

export default Option;
