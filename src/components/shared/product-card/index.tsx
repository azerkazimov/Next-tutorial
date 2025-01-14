import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Eye } from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: string;
  img: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="rounded-lg border bg-zinc-900">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
          <Image
            src={product.img}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-medium text-lg">
          {product.name.charAt(0).toUpperCase() +
            product.name.slice(1).toLowerCase()}
        </h3>
        <p className="text-sm text-zinc-400">{product.price}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="flex-1 hover:bg-zinc-900 hover:text-white hover:border hover:border-white transition-all duration-200">
          Add to card
        </Button>
        <Button size={"icon"} variant={"outline"}>
          <Eye />
        </Button>
      </CardFooter>
    </Card>
  );
}
