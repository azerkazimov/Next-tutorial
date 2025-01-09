import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ShoppingCart className="w-2" />
        </Button>
      </SheetTrigger>
      <SheetContent className="md:min-w-[500px]">
        <SheetHeader className="border-b py-3">
          <SheetTitle>Card</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full ">
          <div className="flex flex-col min-h-screen items-center justify-center gap-4">
            <ShoppingCart className="h-16 w-16 text-white/60" />
            <p className="text-lg font-medium text-white/60">
              Your cart is empty
            </p>
            <Link href="/" className="text-sm text-white/60">
              Add items to your cart to checkout
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
