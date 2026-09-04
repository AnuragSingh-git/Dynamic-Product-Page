import { notFound } from "next/navigation";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug } from "@/lib/api";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
