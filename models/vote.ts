import mongoose, { Schema } from "mongoose";

const voteSchema = new Schema(
  {
    email: String, // hidden but required by default, came from oauth object
    poll: { type: Schema.Types.ObjectId, ref: "Poll" },
    firstOption: { type: Schema.Types.ObjectId, ref: "Option" },
    secondOption: { type: Schema.Types.ObjectId, ref: "Option" },
    thirdOption: { type: Schema.Types.ObjectId, ref: "Option" },
  },
  {
    timestamps: true,
  }
);

const Vote = mongoose.models.Vote || mongoose.model("Vote", voteSchema);

export default Vote;

