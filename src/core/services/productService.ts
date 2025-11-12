import productsData from "../../data/products.json";
import type { Product, ProductSection } from "../models/Product";

export function getAllProducts(): ProductSection[] {

  const labelMap: Record<string, string> = {
    machine_sorter: "Optical Sorters",
    machine_dryer: "Dryers",
    machine_roller: "Roller Machines",
    machine_die_casting: "Die Casting Machines",
  };

  //grouping with reduce
  const grouped = productsData.reduce<Record<string, Product[]>>((acc, p) => {
    const product: Product = {
      id: +p.id,
      name: p.name,
      type: p.category,
      price: p.price,
      image: p.imageUrl,
    };
    (acc[p.category] ||= []).push(product);
    return acc;
  }, {});

 //convert groups to ProductSection[]
  return Object.entries(grouped).map(([section, products]) => ({
    section,
    sectionLabel: labelMap[section] || section.replace("machine_", "").replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    products,
  }));
}

export function getProductById(id: number): Product | undefined {
  return productsData
    .map(p => ({
      id: +p.id,
      name: p.name,
      type: p.category,
      price: p.price,
      image: p.imageUrl,
    }))
    .find(p => p.id === id);
}



