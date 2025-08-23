import { clsx, type ClassValue } from "clsx"
import Swal from "sweetalert2";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
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