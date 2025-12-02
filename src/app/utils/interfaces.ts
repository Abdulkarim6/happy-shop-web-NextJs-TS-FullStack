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
  DateAdded: string;
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

export interface ReviewType {
  _id: string;
  customer: string;
  location: string;
  review: string;
  profile: string;
  rating: number;
  date: string;
};

export interface UserType{
  _id:string;
  name:string;
  email:string;
  password:string;
  isAdmin?:string;
}

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
 
    
