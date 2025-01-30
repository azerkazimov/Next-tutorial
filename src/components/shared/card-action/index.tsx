"use client";

import { ItemProps } from "@/components/helpers/interfaces/items";
import QuantitySelector from "../quantity-selector";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useProductStore } from "@/store";

export default function CardAction({ product }: { product: ItemProps }) {
  const { setProducts } = useProductStore();

  const addProducts = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ItemProps
  ) => {
    event.preventDefault();
    setProducts((prev) => {
      const current = prev.find((p) => p.id === product.id);
      if (!current) {
        return [...prev, product];
      }
      return prev;
    });
  };

  return (
    <div>
      <QuantitySelector product={product} />

      <div className="flex gap-4">
        <Button className="flex-1 bg-white hover:bg-zinc-200">Buy now </Button>
        <Button
          variant={"outline"}
          className="flex-1 border-zinc-800"
          onClick={(event) => addProducts(event, product)}
        >
          Add to card
        </Button>
        <Button variant={"outline"} className="flex-1 border-zinc-800">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
