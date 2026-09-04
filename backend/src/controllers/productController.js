import Product from "../models/Product.js";

// GET /api/products
// Returns a lightweight list (used for a home/listing page)
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().select(
      "name slug brand category variants"
    );
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

// GET /api/products/:slug
// Returns full product detail including all variants + EMI plans
export const getProductBySlug = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ message: `Product '${req.params.slug}' not found` });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
};
