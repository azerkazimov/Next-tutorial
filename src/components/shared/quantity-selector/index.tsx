"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

interface QuantitySelectorProps {
  initialValue?: number;
}

export default function QuantitySelector({
  initialValue = 1,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () =>
    setQuantity((prev) => Math.max(prev > 1 ? prev - 1 : 1));

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
        <Input
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="w-16 rounded-none text-center border-x-0"
        />
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
