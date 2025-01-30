"use client";

import { ItemProps } from "@/components/helpers/interfaces/items";
import { Button } from "@/components/ui/button";
import { useProductStore } from "@/store";
import { MinusIcon, PlusIcon } from "lucide-react";

interface QuantitySelectorProps {
  product: ItemProps;
}

export default function QuantitySelector({ product }: QuantitySelectorProps) {
  const { products, setProducts } = useProductStore();

  const current = products.find((p) => p.id === product.id);

  const count = current ? current.quantity : 1;

  const increment = () => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };
  const decrement = () => {
    if (count > 1) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          className="rounded-r-none"
          onClick={decrement}
        >
          <MinusIcon className="w-4 h-4" />
        </Button>
        <span className="mx-3">{count}</span>
        <Button
          variant="outline"
          size="icon"
          className="rounded-l-none"
          onClick={increment}
        >
          <PlusIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
