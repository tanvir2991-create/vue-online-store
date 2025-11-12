export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
}

export interface ProductSection {
  section: string;
  sectionLabel: string;
  products: Product[];
}
