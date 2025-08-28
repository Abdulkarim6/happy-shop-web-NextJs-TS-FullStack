import Swal from "sweetalert2";

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

export interface SubCategoriesType  {
  category: string;
  description: string;
  image: string;
};


export interface CategoriesType {
  _id: string ;
  thumbnail: string ;
  title:string;
  man?: SubCategoriesType[];
  woman?: SubCategoriesType[];
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
 
    
