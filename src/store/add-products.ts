import { ItemProps } from '@/components/helpers/interfaces/items';
import { create } from 'zustand';

export const useProductStore = create<{
    products: ItemProps[];
    setProducts: (product: ItemProps[]) => void;
}>(set => (
    {
        products: [],
        setProducts: (product: ItemProps[]) => set({ products: product })
    }
))