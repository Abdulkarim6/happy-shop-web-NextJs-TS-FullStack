export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  category: string;
//   gender: string;
//   size: string;
//   price: number;
//   inStock: string;
//   rating: string;
//   image: string;
//   color: string;
}

export interface Category  {
  category: string;
  description: string;
  image: string;
};


export interface CategoryDocument {
  _id: string ;
  thumbnail: string ;
  title:string;
  man?: Category[];
  woman?: Category[];
  kids?: Category[];
  accessories?: Category[];
};
 
    
