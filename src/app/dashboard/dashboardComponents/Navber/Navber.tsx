"use client"
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navber = () => {
    const linkClass= "text-lg font-medium hover:bg-slate-200 rounded py-1 px-2";
    const [drawerState, setDrawerState] = useState(false);
    console.log(drawerState);
    

    return (
        <>
         {/* <nav className="w-3/10 overflow-hidden bg-green-400 p-3"> */}
        {/* <nav className={`w-0 md:w-3/10 absolute md:static overflow-hidden 
        bg-green-400 p-0 transition-all duration-200 text-nowrap ease-in
         group-hover:w-[300px]`}> */}

        <nav className={`absolute md:static overflow-hidden 
        bg-green-400 p-0 transition-all duration-200 text-nowrap ease-linear
          ${drawerState ? "w-[300px]" : "w-0"} z-20`}>

          <ul className="flex flex-col space-y-1">
            <Link href="/dashboard" className={linkClass}>All Users</Link>
            <Link href="/dashboard/manageProducts" className={linkClass}>Manage Products</Link>
          </ul>
        </nav>
            
        <div className="absolute top-5 right-0 rounded-l bg-orange-400 cursor-pointer z-30">
         <Menu onClick={() => setDrawerState(!drawerState)} size={30}/>
        </div>
        </>
    );
};

export default Navber;