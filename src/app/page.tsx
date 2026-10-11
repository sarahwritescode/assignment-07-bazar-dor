
import Hero from "./components/hero";
import PriceRise from "./components/price-rise";
import PriceFall from "./components/price-fall";
import AllProducts from "./components/all-products";
import type { Product } from "@/lib/utils";

async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      next: { revalidate: 300 },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function HomePage() {
  const products = await getProducts();

  // 6 products with the highest price increases
  const risingProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  // 6 products with the largest price decreases
  const fallingProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <main>
      <Hero />

      <PriceRise products={risingProducts} />

      <PriceFall products={fallingProducts} />

      <AllProducts products={products} />
    </main>
  );
}