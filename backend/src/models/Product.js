import mongoose from "mongoose";

const emiPlanSchema = new mongoose.Schema(
  {
    tenureMonths: { type: Number, required: true }, // e.g. 3, 6, 12, 24, 36
    monthlyAmount: { type: Number, required: true }, // e.g. 44967
    interestRate: { type: Number, required: true, default: 0 }, // e.g. 0 or 10.5
    cashback: { type: Number, default: 0 }, // e.g. 7500
  },
  { _id: false }
);

const variantSchema = new mongoose.Schema(
  {
    color: { type: String, required: true },
    storage: { type: String, required: true }, // e.g. "256GB"
    price: { type: Number, required: true }, // discounted / selling price
    mrp: { type: Number, required: true }, // strikethrough price
    image: { type: String, required: true },
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
