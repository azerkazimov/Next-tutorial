import { ItemProps } from '@/components/helpers/interfaces/items';
import { create } from 'zustand';

export const useProductStore = create<{
    products: ItemProps[];
    setProducts: (update: (prev: ItemProps[]) => ItemProps[]) => void
}>(set => (
    {
        products: [],
        setProducts: update => set(state => ({ products: update(state.products) }))
    }
))

