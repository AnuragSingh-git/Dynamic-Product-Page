const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

// Fetches the lightweight list of all products (for the home page)
export async function getAllProducts() {
  const res = await fetch(`${API_BASE}/products`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

// Fetches a single product (with all variants + EMI plans) by its slug
export async function getProductBySlug(slug) {
  const res = await fetch(`${API_BASE}/products/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}
