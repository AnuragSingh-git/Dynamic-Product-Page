import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  const variant = product.variants?.[0];

  if (!variant) return null;

  const discount =
    variant.mrp && variant.mrp > variant.price
      ? Math.round(((variant.mrp - variant.price) / variant.mrp) * 100)
      : 0;

  const emiPlan = product.emiPlans?.[0];

  const monthlyEmi = emiPlan
    ? Math.round(variant.price / emiPlan.tenure)
    : null;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="
        group block
        bg-white
        rounded-2xl
        border-2 border-gray-200
        overflow-hidden
        shadow-sm
        hover:border-orange-300
        hover:shadow-xl
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* IMAGE SECTION */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            {discount}% OFF
          </div>
        )}

        {/* Best Seller */}
        {discount >= 10 && (
          <div className="absolute top-3 right-3 z-10 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
            ⭐ Best Seller
          </div>
        )}

        {/* Product Image */}
        <Image
          src={variant.images?.[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="
            object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="p-5 bg-white">

        {/* Brand */}
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-500 mb-1">
          {product.brand}
        </p>

        {/* Product Name */}
        <h3 className="font-bold text-gray-900 text-lg leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <span className="inline-flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
            ★ 4.5
          </span>

          <span className="text-xs text-gray-400">
            120+ ratings
          </span>
        </div>

        {/* Variant */}
        <div className="flex items-center gap-2 mt-4">
          {variant.storage && (
            <span className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-lg">
              {variant.storage}
            </span>
          )}

          {variant.color && (
            <span className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-lg truncate">
              {variant.color}
            </span>
          )}
        </div>

        {/* PRICE BOX */}
        <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3">

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-2xl font-extrabold text-gray-900">
              ₹{variant.price.toLocaleString("en-IN")}
            </span>

            {variant.mrp && variant.mrp > variant.price && (
              <span className="text-sm text-gray-400 line-through">
                ₹{variant.mrp.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {discount > 0 && (
            <p className="text-xs font-semibold text-green-600 mt-1">
              You save {discount}% on this product
            </p>
          )}

          <p className="text-[11px] text-gray-400 mt-1">
            Inclusive of all taxes
          </p>
        </div>

        {/* EMI */}
        {monthlyEmi && (
          <div className="mt-3 flex items-center gap-2 text-xs">
            <span className="bg-blue-50 border border-blue-100 text-blue-600 px-2 py-1 rounded-md">
              EMI
            </span>

            <span className="text-gray-500">
              From{" "}
              <span className="font-bold text-gray-800">
                ₹{monthlyEmi.toLocaleString("en-IN")}/month
              </span>
            </span>
          </div>
        )}

        {/* Cashback */}
        {variant.cashback > 0 && (
          <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-green-600">
            <span>💰</span>
            <span>
              ₹{variant.cashback.toLocaleString("en-IN")} cashback available
            </span>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="
        border-t-2 border-gray-100
        bg-gradient-to-r from-gray-50 to-orange-50
        px-5 py-4
        flex items-center justify-between
      ">

        {/* Availability */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>

          <span className="text-xs font-semibold text-gray-600">
            In Stock
          </span>
        </div>

        {/* CTA */}
        <span className="
          text-sm font-bold
          text-orange-600
          group-hover:text-orange-700
          group-hover:translate-x-1
          transition-all
        ">
          View Details →
        </span>
      </div>
    </Link>
  );
}
