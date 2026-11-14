// import { ObjectId } from "mongodb";
import Swal from "sweetalert2";

export interface Product {
  name: string;
  subCategory: string;

  productName?:string;
  categorySlug?:string;
  subCategoryTitle?:string;
  subCategorySlug?:string;
  
  _id: string;
  description: string;
  brand: string;
  targetAudience: string;
  size: string[];
  price: number;
  inStock: string | number | boolean;
  rating: string | number | boolean;
  image: string;
  color: string;
  ageGroup?: string
  DateAdded: string;
  isAdmin?:boolean;
}

export interface CategoriesByAudienceType  {
  subCategory: string;
  image: string;

  categoryTitle:string;
  thumbnail?:string;
  categorySlug?:string;

  description: string;
};


export interface CategoriesForAllType {
  _id: string ;
  thumbnail: string ;
  targetAudience:string;
  men?: CategoriesByAudienceType[];
  women?: CategoriesByAudienceType[];
  kids?: CategoriesByAudienceType[];
  accessories?: CategoriesByAudienceType[];
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
  role?:string;
}

export type OrderedDataype = {
  _id?: string;
  status:string;
  buyerId?:string;
  productId: string;
  productName: string;
  productImg: string;
  productQuantity: number;
  productQsize: string;
  productPrice: number;
  buyerEmail?:string
};

export const Toast = Swal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 1500,
  padding:"10px 10px",
  customClass:{
     title:'mx' 
  },
  timerProgressBar: true,
});
 

export type AddressType = {
  _id?: string;
  name: string;
  address: string;
  phone: string;
};
    