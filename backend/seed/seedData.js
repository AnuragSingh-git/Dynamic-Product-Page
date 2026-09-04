import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../src/models/Product.js";

dotenv.config();

// Helper to build a small gallery of picsum placeholder images for a variant.
// Swap these for real product photography whenever you have it.
const gallery = (seed, count = 3) =>
  Array.from({ length: count }, (_, i) => `https://picsum.photos/seed/${seed}-${i + 1}/600/600`);

const products = [
  // 1. iPhone
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
        images: [
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1000",
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 12,
      },
      {
        color: "Cosmic Orange",
        storage: "256GB",
        price: 129400,
        mrp: 137900,
        images: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1000",
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 8,
      },
      {
        color: "Deep Blue",
        storage: "512GB",
        price: 144900,
        mrp: 152900,
        images: [
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=1000",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 5,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 7500 },
      { tenureMonths: 6, interestRate: 0, cashback: 7500 },
      { tenureMonths: 12, interestRate: 0, cashback: 7500 },
      { tenureMonths: 24, interestRate: 0, cashback: 7500 },
      { tenureMonths: 36, interestRate: 10.5, cashback: 7500 },
    ],
  },

  // 2. Samsung
  {
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    brand: "Samsung",
    category: "Smartphones",
    description:
      "Titanium frame, built-in S Pen, 200MP camera and Galaxy AI features.",
    variants: [
      {
        color: "Titanium Black",
        storage: "256GB",
        price: 121999,
        mrp: 129999,
        images: [
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=1000",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
        ],
        stock: 10,
      },
      {
        color: "Titanium Gray",
        storage: "512GB",
        price: 138999,
        mrp: 145999,
        images: [
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
        ],
        stock: 6,
      },
      {
        color: "Titanium Blue",
        storage: "1TB",
        price: 159999,
        mrp: 169999,
        images: [
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=1000",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 4,
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

  // 3. OnePlus
  {
    name: "OnePlus 13",
    slug: "oneplus-13",
    brand: "OnePlus",
    category: "Smartphones",
    description:
      "Snapdragon 8 Elite, Hasselblad camera tuning and 100W SUPERVOOC charging.",
    variants: [
      {
        color: "Midnight Ocean",
        storage: "256GB",
        price: 69999,
        mrp: 74999,
        images: [
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 15,
      },
      {
        color: "Arctic Dawn",
        storage: "512GB",
        price: 79999,
        mrp: 84999,
        images: [
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 9,
      },
      {
        color: "Black Eclipse",
        storage: "1TB",
        price: 89999,
        mrp: 94999,
        images: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 7,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 3000 },
      { tenureMonths: 6, interestRate: 0, cashback: 3000 },
      { tenureMonths: 12, interestRate: 0, cashback: 3000 },
      { tenureMonths: 24, interestRate: 8.5, cashback: 3000 },
    ],
  },

  // 4. Google Pixel
  {
    name: "Google Pixel 9 Pro",
    slug: "google-pixel-9-pro",
    brand: "Google",
    category: "Smartphones",
    description:
      "Pro triple-camera system, Google Tensor processor and advanced AI photography.",
    variants: [
      {
        color: "Obsidian",
        storage: "128GB",
        price: 99999,
        mrp: 109999,
        images: [
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 11,
      },
      {
        color: "Porcelain",
        storage: "256GB",
        price: 109999,
        mrp: 119999,
        images: [
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 8,
      },
      {
        color: "Hazel",
        storage: "512GB",
        price: 124999,
        mrp: 134999,
        images: [
          "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1000",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1000",
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=1000",
          "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=1000",
        ],
        stock: 5,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 4000 },
      { tenureMonths: 6, interestRate: 0, cashback: 4000 },
      { tenureMonths: 12, interestRate: 0, cashback: 4000 },
      { tenureMonths: 24, interestRate: 9.5, cashback: 4000 },
    ],
  },

  // 5. MacBook
  {
    name: "MacBook Air M4",
    slug: "macbook-air-m4",
    brand: "Apple",
    category: "Laptops",
    description:
      "Thin and lightweight laptop powered by the Apple M4 chip with all-day battery life.",
    variants: [
      {
        color: "Midnight",
        storage: "256GB",
        price: 99900,
        mrp: 109900,
        images: [
          "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1000",
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000",
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000",
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1000",
        ],
        stock: 12,
      },
      {
        color: "Starlight",
        storage: "512GB",
        price: 119900,
        mrp: 129900,
        images: [
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000",
          "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1000",
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000",
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1000",
        ],
        stock: 8,
      },
      {
        color: "Space Gray",
        storage: "1TB",
        price: 139900,
        mrp: 149900,
        images: [
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000",
          "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=1000",
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000",
          "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=1000",
        ],
        stock: 5,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 5000 },
      { tenureMonths: 6, interestRate: 0, cashback: 5000 },
      { tenureMonths: 12, interestRate: 0, cashback: 5000 },
      { tenureMonths: 24, interestRate: 9.5, cashback: 5000 },
    ],
  },

  // 6. iPad
  {
    name: "iPad Pro M4",
    slug: "ipad-pro-m4",
    brand: "Apple",
    category: "Tablets",
    description:
      "Ultra-thin professional tablet with M4 performance and Ultra Retina XDR display.",
    variants: [
      {
        color: "Space Black",
        storage: "256GB",
        price: 99900,
        mrp: 109900,
        images: [
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000",
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=1000",
          "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1000",
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000",
        ],
        stock: 13,
      },
      {
        color: "Silver",
        storage: "512GB",
        price: 119900,
        mrp: 129900,
        images: [
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=1000",
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000",
          "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1000",
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=1000",
        ],
        stock: 8,
      },
      {
        color: "Space Black",
        storage: "1TB",
        price: 159900,
        mrp: 169900,
        images: [
          "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1000",
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000",
          "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=1000",
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=1000",
        ],
        stock: 4,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 5000 },
      { tenureMonths: 6, interestRate: 0, cashback: 5000 },
      { tenureMonths: 12, interestRate: 9.5, cashback: 5000 },
      { tenureMonths: 24, interestRate: 10.5, cashback: 5000 },
    ],
  },

  // 7. Sony Headphones
  {
    name: "Sony WH-1000XM6",
    slug: "sony-wh-1000xm6",
    brand: "Sony",
    category: "Headphones",
    description:
      "Premium wireless noise-cancelling headphones with immersive sound and long battery life.",
    variants: [
      {
        color: "Black",
        storage: "Standard",
        price: 34990,
        mrp: 39990,
        images: [
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1000",
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1000",
        ],
        stock: 20,
      },
      {
        color: "Silver",
        storage: "Standard",
        price: 36990,
        mrp: 41990,
        images: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000",
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1000",
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1000",
        ],
        stock: 14,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 1500 },
      { tenureMonths: 6, interestRate: 0, cashback: 1500 },
      { tenureMonths: 12, interestRate: 10.5, cashback: 1500 },
    ],
  },

  // 8. Apple Watch
  {
    name: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    brand: "Apple",
    category: "Smartwatches",
    description:
      "Advanced health and fitness features with a sleek design and OLED display.",
    variants: [
      {
        color: "Jet Black",
        storage: "42mm",
        price: 46900,
        mrp: 49900,
        images: [
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1000",
          "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1000",
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000",
          "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=1000",
        ],
        stock: 18,
      },
      {
        color: "Rose Gold",
        storage: "46mm",
        price: 51900,
        mrp: 55900,
        images: [
          "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=1000",
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=1000",
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000",
          "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=1000",
        ],
        stock: 12,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 1500 },
      { tenureMonths: 6, interestRate: 0, cashback: 1500 },
      { tenureMonths: 12, interestRate: 10.5, cashback: 1500 },
    ],
  },

  // 9. PlayStation
  {
    name: "PlayStation 5 Slim",
    slug: "playstation-5-slim",
    brand: "Sony",
    category: "Gaming",
    description:
      "Compact next-generation gaming console with ultra-fast SSD and immersive 4K gaming.",
    variants: [
      {
        color: "White",
        storage: "1TB Digital",
        price: 44990,
        mrp: 49990,
        images: [
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1000",
          "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=1000",
          "https://images.unsplash.com/photo-1592840496694-26c035b52bca?w=1000",
          "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=1000",
        ],
        stock: 20,
      },
      {
        color: "White",
        storage: "1TB Disc",
        price: 52990,
        mrp: 57990,
        images: [
          "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=1000",
          "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1000",
          "https://images.unsplash.com/photo-1592840496694-26c035b52bca?w=1000",
          "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=1000",
        ],
        stock: 15,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 2000 },
      { tenureMonths: 6, interestRate: 0, cashback: 2000 },
      { tenureMonths: 12, interestRate: 10.5, cashback: 2000 },
    ],
  },

  // 10. Bose Headphones
  {
    name: "Bose QuietComfort Ultra",
    slug: "bose-quietcomfort-ultra",
    brand: "Bose",
    category: "Headphones",
    description:
      "Premium noise-cancelling headphones with spatial audio and exceptional comfort.",
    variants: [
      {
        color: "Black",
        storage: "Standard",
        price: 29990,
        mrp: 34990,
        images: [
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000",
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1000",
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1000",
        ],
        stock: 17,
      },
      {
        color: "White Smoke",
        storage: "Standard",
        price: 31990,
        mrp: 36990,
        images: [
          "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1000",
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1000",
          "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1000",
          "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1000",
        ],
        stock: 11,
      },
    ],
    emiPlans: [
      { tenureMonths: 3, interestRate: 0, cashback: 1000 },
      { tenureMonths: 6, interestRate: 0, cashback: 1000 },
      { tenureMonths: 12, interestRate: 10.5, cashback: 1000 },
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
