import mongoose from "mongoose";

const albumSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    imageURL: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const album = mongoose.model("album", albumSchema);
export default album
