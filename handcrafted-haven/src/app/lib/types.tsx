export type Seller = {
  id: string;
  name: string;
  type: string;
  username: string;
  email: string;
  avatar: string;
};

export type Product = {
  id: string;
  product_name: string;
  description: string;
  price: number;
  image: string;
  seller_id: string;
  category: string;
};

export type Review = {
  content: string;
  rating: number;
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
  };
};