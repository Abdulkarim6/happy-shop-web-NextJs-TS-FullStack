import { createContext } from 'react';

interface StateType {
  mobileNav: boolean;
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  sizes: string[];
  setSizes: React.Dispatch<React.SetStateAction<string[]>>;
  price:string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  colors:string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  inStock:boolean;
  setStock: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductsPageStatesContext = createContext<StateType | undefined>(undefined);