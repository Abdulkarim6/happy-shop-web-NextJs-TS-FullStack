import { ObjectId } from "mongodb";
import Swal from "sweetalert2";

export interface Product {
  _id: ObjectId;
  name: string;
  description: string;
  brand: string;
  subCategory: string;
  targetAudience: string;
  size: string | string[];
  price: number;
  inStock: string | number;
  rating: string | number | boolean;
  image: string;
  color: string;
  ageGroup?: string
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
 
    
