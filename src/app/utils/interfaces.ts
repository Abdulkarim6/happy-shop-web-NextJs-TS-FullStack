import Swal from "sweetalert2";

export interface Product {
  _id: string;
  name: string;
  description: string;
  brand: string;
  subCategory: string;
  targetAudience: string;
  size: string[];
  price: number;
  inStock: string | number | boolean;
  rating: string | number | boolean;
  image: string;
  color: string;
  ageGroup?: string
  dateAdded: Date;
}

export interface SubCategoriesType  {
  subCategory: string;
  description: string;
  image: string;
};


export interface CategoriesType {
  _id: string ;
  thumbnail: string ;
  targetAudience:string;
  men?: SubCategoriesType[];
  women?: SubCategoriesType[];
  kids?: SubCategoriesType[];
  accessories?: SubCategoriesType[];
};


export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  padding:"10px 10px",
  customClass:{
     title:'mx' 
  },
  timerProgressBar: true,
});
 
    
