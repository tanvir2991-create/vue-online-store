import productsData from "../../data/products.json";
import type { Product, ProductSection } from "../models/Product";
import { getCategoryLabel } from "../../utils/categoryUtils";

export function getAllProducts(): ProductSection[] {
  const grouped = productsData.reduce<Record<string, Product[]>>((acc, p) => {
    const product: Product = {
      id: +p.id,
      name: p.name,
      type: getCategoryLabel(p.category), // ✅ Use human-readable label
      price: p.price,
      image: p.imageUrl,
    };

    (acc[p.category] ||= []).push(product);
    return acc;
  }, {});

  return Object.entries(grouped).map(([section, products]) => ({
    section,
    sectionLabel: getCategoryLabel(section),
    products,
  }));
}

export function getProductById(id: number): Product | undefined {
  return productsData
    .map((p) => ({
      id: +p.id,
      name: p.name,
      type: getCategoryLabel(p.category),
      price: p.price,
      image: p.imageUrl,
    }))
    .find((p) => p.id === id);
}
