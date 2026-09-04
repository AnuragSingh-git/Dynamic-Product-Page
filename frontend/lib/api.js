const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function getAllProducts() {
  const res = await fetch(`${API_BASE}/products`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export async function getProductBySlug(slug) {
  const res = await fetch(`${API_BASE}/products/${slug}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}
