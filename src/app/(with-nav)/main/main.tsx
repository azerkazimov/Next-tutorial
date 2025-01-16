import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Github } from "lucide-react";

import Link from "next/link";

import { HiOutlineCube } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import { ProductCard } from "@/components/shared/product-card";
import { ItemProps } from "@/components/helpers/interfaces/items";

import { navbar } from "@/data/navbar";

export default async function Main() {
  // Your api call ....
  // return json() and integrate to page

  const response = await fetch(`${process.env.API_HOST}/items`);
  const items = await response.json();

  return (
    <main className="container">
      <section className="container py-24 text-center animate-fadeUp">
        <div className="mb-8 flex justify-center">
          <Link href="https://github.com/sadmann7/skateshop" target="_black">
            <Button
              variant="outline"
              className="bg-zinc-800 font-[900] rounded-full hover:bg-zinc-900 text-xs "
            >
              <Github className=" h-4 w-4" />
              5327 stars on GitHub
            </Button>
          </Link>
        </div>

        <h1 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
          Foundation for your commerce platform
        </h1>
        <p className="mx-auto mb-8 max-w-[500px] text-lg text-zinc-400 sm:text-xl">
          Skateshop is an open-source platform for building and customizing your
          own commerce platform with ease.
        </p>

        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200">
            Buy now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-800 bg-transparent text-white hover:bg-zinc-800"
          >
            Sell now
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 max-w-6xl animate-fadeUp duration-700">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {navbar.map((product) => (
            <Link key={product.name} href={product.items[0].href}>
              <Card className="border-zinc-800 max-h-[186px] h-full transition-all duration-200 hover:bg-zinc-900">
                <CardHeader className="h-full flex flex-col justify-between">
                  <div className="flex flex-col py-3 gap-2">
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {product.description}
                    </CardDescription>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-zinc-400 gap-1 ">
                    <HiOutlineCube />
                    <span className="mt-[-2px]">
                      {product.items.length} products
                    </span>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col ">
            <h2 className="text-3xl font-semibold">Featured products</h2>
            <p className="text-zinc-500">
              Explore products from around the world
            </p>
          </div>
          <div className="flex">
            <Link href="/" className="text-zinc-800">
              <Button variant="outline" className="text-white font-medium">
                <span>View all products</span> <GoArrowRight />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product: ItemProps) => (
            <Link key={product.id} href={product.path}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
