import mongoose from 'mongoose';

const ShelterSchema = new mongoose.Schema(
  {
    careName: {
      type: String,
      required: true,
    },
    careAddr: {
      type: String,
      required: true,
    },
    careTel: {
      type: String,
      required: true,
    },
    careCode: {
      type: String,
    },
    latitude: {
      type: String,
      required: false,
    },
    longitude: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    collection: 'shelters',
  },
);

export { ShelterSchema };
