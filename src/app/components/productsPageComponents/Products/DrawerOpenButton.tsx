'use client'
import { useProductsPageStates } from '@/app/contexts/productsPageStatesContext/useProductsPageStates';
import { Button } from '@/components/ui/button';
import { ListFilter } from 'lucide-react';
import React from 'react';

const DrawerOpenButton = () => {
    const { mobileNav,setMobileNav} = useProductsPageStates();
    return (
        <Button type="button" variant="secondary" className="flex items-center" onClick={() => setMobileNav(!mobileNav)}>
        <span className="text-base font-medium">FILTERS:</span><span className=""><ListFilter /></span>
        </Button>
    );
};

export default DrawerOpenButton;