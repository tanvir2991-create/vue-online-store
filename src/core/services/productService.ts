import productsData from "../../data/products.json";
import type { Product, ProductSection } from "../models/Product";

const CATEGORY_LABELS: Record<string, string> = {
  machine_sorter: "Optical Sorters",
  machine_dryer: "Dryers",
  machine_roller: "Roller Machines",
  machine_die_casting: "Die Casting Machines",
};

function getCategoryLabel(category: string): string {
  return (
    CATEGORY_LABELS[category] ||
    category
      .replace("machine_", "")
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
}

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
