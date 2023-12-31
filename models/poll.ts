import mongoose, { Schema } from "mongoose";

const pollSchema = new Schema(
  {
    title: String,
    description: String,
    endDate: Date,
    // isPrivate: Boolean,
    // passPhrase: String,
    tag: { type: Schema.Types.ObjectId, ref: "Tag" },
    // isRecurring: Boolean, TODO: add recurring feature
  },
  {
    timestamps: true,
  }
);

const Poll = mongoose.models.Poll || mongoose.model("Poll", pollSchema);

export default Poll;
