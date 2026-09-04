import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getAllProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Smartphones on EMI</h1>
      <p className="text-gray-500 mb-6">EMI plans backed by mutual funds — no credit card needed.</p>

      {products.length === 0 ? (
        <p className="text-gray-500">
          No products found. Make sure the backend is running and seeded (
          <code className="bg-gray-100 px-1 rounded">npm run seed</code>).
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
