import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const variant = product.variants[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block bg-white rounded-xl border hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="aspect-square bg-gray-50 relative">
        <Image
          src={variant.images[0]}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-gray-400">{product.brand}</p>
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-1">
          {variant.storage} · {variant.color}
        </p>
        <p className="font-semibold text-gray-900">
          ₹{variant.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}
