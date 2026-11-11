"use client"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useState } from "react";
import DisplaySearchedProducts from "./DisplaySearchedProducts";

const SearchBar = () => {
const [searchForProducts, setSearchForProducts] = useState<string>("");

  return (
    <div className="hidden lg:flex">
      <div className="relative w-96 flex items-center mx-2">
        <Input
          value={searchForProducts}
          onChange={(e) => setSearchForProducts(e.target.value)}
          className="w-full rounded pl-2 pr-3"
          type="text"
          placeholder="Search..."
        />
        <Search className="absolute right-3" size={20} />
      </div>

      {/* showing products by searching */}
      <DisplaySearchedProducts
        searchForProducts={searchForProducts}
        setSearchForProducts={setSearchForProducts}
      />
    </div>
  );
};

export default SearchBar;
