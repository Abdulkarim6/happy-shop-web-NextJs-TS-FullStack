import { CartTogglerProvider } from '@/app/contexts/cartTogglerStatesContext/CartTogglerProvider';
import { OrderedDataype } from '@/app/utils/interfaces';
import { ShoppingBag } from 'lucide-react';
import CartTogglerButton from './CartTogglerButton';
import CartNavberClient from './CartNavberClient';

type ParamsType = {
  orderedProductsPromise : Promise<OrderedDataype[]>;
};

const CartNavber = async ({orderedProductsPromise }: ParamsType) => {
  const orderedProducts = await orderedProductsPromise;
  
  return (
    <CartTogglerProvider>
      <CartTogglerButton>
        <ShoppingBag className="size-7 mr-2 cursor-pointer" />
        {orderedProducts && (
          <p className="absolute bottom-3 left-3 text-sm font-medium z-30 bg-black text-white py-1 px-2 rounded-full">
            {orderedProducts?.length | 0}
          </p>
        )}
      </CartTogglerButton>
      <CartNavberClient orderedProducts={orderedProducts}/>
    </CartTogglerProvider>
  );
};

export default CartNavber;