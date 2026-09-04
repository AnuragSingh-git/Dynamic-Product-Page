import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../src/models/Product.js";

dotenv.config();

// Helper to build a small gallery of picsum placeholder images for a variant.
// Swap these for real product photography whenever you have it.
const gallery = (seed, count = 3) =>
  Array.from({ length: count }, (_, i) => `https://picsum.photos/seed/${seed}-${i + 1}/600/600`);

const products = [
  {
    name: "iPhone 17 Pro",
    slug: "iphone-17-pro",
    brand: "Apple",
    category: "Smartphones",
    description:
      "48MP Fusion camera system, A19 Pro chip, and a 6.3-inch Super Retina XDR display.",
    variants: [
      {
        color: "Silver",
        storage: "256GB",
        price: 127400,
        mrp: 134900,
        images: gallery("iphone-silver"),
        stock: 12,
      },
      {
        color: "Cosmic Orange",
        storage: "256GB",
        price: 127400,
        mrp: 134900,
        images: gallery("iphone-orange"),
        stock: 8,
      },
      {
        color: "Deep Blue",
        storage: "512GB",
        price: 144900,
        mrp: 152900,
        images: gallery("iphone-blue"),
        stock: 5,
      },
    ],
    // EMI templates: monthlyAmount is calculated from the selected
    // variant's price at request time (see frontend/lib/emi.js), so the
    // numbers shown change automatically when the user switches variants.
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 7500 },
      { tenureMonths: 6, interestRate: 0, cashback: 7500 },
      { tenureMonths: 12, interestRate: 0, cashback: 7500 },
      { tenureMonths: 24, interestRate: 0, cashback: 7500 },
      { tenureMonths: 36, interestRate: 10.5, cashback: 7500 },
      { tenureMonths: 48, interestRate: 10.5, cashback: 7500 },
      { tenureMonths: 60, interestRate: 10.5, cashback: 7500 },
    ],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    brand: "Samsung",
    category: "Smartphones",
    description:
      "Titanium frame, built-in S Pen, and a 200MP camera with Galaxy AI features.",
    variants: [
      {
        color: "Titanium Black",
        storage: "256GB",
        price: 121999,
        mrp: 129999,
        images: gallery("s24-black"),
        stock: 10,
      },
      {
        color: "Titanium Gray",
        storage: "512GB",
        price: 138999,
        mrp: 145999,
        images: gallery("s24-gray"),
        stock: 6,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 6000 },
      { tenureMonths: 6, interestRate: 0, cashback: 6000 },
      { tenureMonths: 12, interestRate: 0, cashback: 6000 },
      { tenureMonths: 24, interestRate: 9.5, cashback: 6000 },
      { tenureMonths: 36, interestRate: 9.5, cashback: 6000 },
    ],
  },
  {
    name: "OnePlus 13",
    slug: "oneplus-13",
    brand: "OnePlus",
    category: "Smartphones",
    description:
      "Snapdragon 8 Elite, Hasselblad camera tuning, and 100W SUPERVOOC fast charging.",
    variants: [
      {
        color: "Midnight Ocean",
        storage: "256GB",
        price: 69999,
        mrp: 74999,
        images: gallery("oneplus-ocean"),
        stock: 15,
      },
      {
        color: "Arctic Dawn",
        storage: "512GB",
        price: 79999,
        mrp: 84999,
        images: gallery("oneplus-dawn"),
        stock: 9,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 3000 },
      { tenureMonths: 6, interestRate: 0, cashback: 3000 },
      { tenureMonths: 12, interestRate: 0, cashback: 3000 },
      { tenureMonths: 24, interestRate: 8.5, cashback: 3000 },
    ],
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    await Product.deleteMany();
    console.log("Cleared existing products");

    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products successfully`);

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seed();
