export interface Store {
  id: number;
  name: string;
}

export interface ProductResponse {
  product: Product;
  sizes: Size[];
  colors: Color[];
  categories: Category[];
  images: Image[];
}

export interface Product {
  id: number;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
}

export interface CartItem {
  product: Product;
  sizeIds: number[];
  colorIds: number[];
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: number;
  name: string;
  value: string;
}

export interface Color {
  id: number;
  name: string;
  value: string;
}
