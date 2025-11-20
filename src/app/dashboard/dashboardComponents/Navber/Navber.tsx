"use client"
import { SquareMenu, SquareX } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navber = () => {
    const linkClass= "text-lg font-medium hover:bg-slate-200 rounded py-1 px-2";
    const [drawerState, setDrawerState] = useState(false);
    console.log(drawerState);
    

    return (
        <>
        <nav className={`absolute md:static overflow-hidden bg-slate-100
        md:border-r-3 md:border-b-3 border-white  transition-all duration-200 text-nowrap ease-linear
          ${drawerState ? "w-[300px] border-r-3 border-b-3 p-0 md:p-2" : "w-0"} z-20`}>

          <ul className="flex flex-col space-y-1">
            <Link href="/dashboard" className={linkClass}>All Users</Link>
            <Link href="/dashboard/manageProducts" className={linkClass}>Manage Products</Link>
            <Link href="/dashboard/addProduct" className={linkClass}>Add Product</Link>
          </ul>
        </nav>
            
        <div className="fixed top-20 right-0 rounded-l bg-slate-100 cursor-pointer z-30">
          {
            drawerState ?
            <SquareX onClick={() => setDrawerState(!drawerState)} size={35}/>
            :
            <SquareMenu onClick={() => setDrawerState(!drawerState)} size={35}/>
          }
        </div>
        </>
    );
};

export default Navber;