export interface CartItem {
    id: number;
    image: string;
    productName: string;
    Price: string;
    quantity: number;
    action: JSX.Element;
    total: string;
  }

  interface VariantsType {
    color: string;
    images: string;
  }
  
  export interface CartType {
    variants: VariantsType[];
    total?: any;
    sum?: number;
    id: number;
    image: string;
    name: string;
    note: string;
    description: string;
    discountPrice: string;
    price: number;
    status: string;
    ribbonClassName?: string;
    stock: string;
    review: string;
    rating: number;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
  }

  export interface CartSliceProp {
    cart: CartType[];
    tax: number;
  }

  export interface CartQuantityButtonProp {
    item: CartType;
  }