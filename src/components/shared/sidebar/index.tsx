"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useProductStore } from "@/store";
import { ShoppingCart } from "lucide-react";
// import Link from "next/link";
import CardItem from "./card-item";

export function Sidebar() {
  const { products } = useProductStore();

  const cartItems = products;

  const totalItems = cartItems.length;

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col bg-black text-white">
        <SheetHeader>
          <SheetTitle className="text-white">Cart</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center space-y-4">
              <div className="rounded-full border border-white/20 p-6">
                <ShoppingCart className="h-8 w-8 text-white/50" />
              </div>
              <div className="text-center">
                <p className="text-lg font-medium text-white">
                  Your cart is empty
                </p>
                <p className="text-sm text-white/60">
                  Add items to your cart to checkout
                </p>
              </div>
            </div>
          ) : (
            cartItems.map((item) => <CardItem key={item.id} {...item} />)
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="border-t border-white/20 pt-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full mt-4">Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
