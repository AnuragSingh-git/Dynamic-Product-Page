import mongoose from "mongoose";

const emiPlanSchema = new mongoose.Schema(
  {
    tenureMonths: { type: Number, required: true },
    interestRate: { type: Number, required: true, default: 0 },
    cashback: { type: Number, default: 0 },
  },
  { _id: false }
);

const variantSchema = new mongoose.Schema(
  {
    color: { type: String, required: true },
    storage: { type: String, required: true },
    price: { type: Number, required: true },
    mrp: { type: Number, required: true },
    images: {
      type: [String],
      required: true,
      validate: [(v) => v.length >= 2, "A variant needs at least 2 images"],
    },
    stock: { type: Number, default: 10 },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    brand: { type: String, required: true },
    category: { type: String, default: "Smartphones" },
    description: { type: String, default: "" },
    variants: {
      type: [variantSchema],
      validate: [(v) => v.length >= 2, "A product needs at least 2 variants"],
    },
    emiPlans: {
      type: [emiPlanSchema],
      validate: [(v) => v.length >= 1, "A product needs at least 1 EMI plan"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
