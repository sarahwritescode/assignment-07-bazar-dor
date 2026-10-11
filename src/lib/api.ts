

import type { Product } from "@/types/product";

const API_BASE_URL = "https://api.abcz.workers.dev/api/bazardor";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: Product[] = await response.json();

  return products;
}

export async function getCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}
