import { loadAddress } from '@/app/actions/checkoutActions';
import CheckoutClient from '@/app/bag-checkoutComponents/CheckoutClient';
import { AddressType } from '@/app/utils/interfaces';
import React from 'react';

const page = async() => {
    const addresses:AddressType[] = await loadAddress();
    
    return (
        <div>
           <CheckoutClient addresses={addresses}/> 
        </div>
    );
};

export default page;