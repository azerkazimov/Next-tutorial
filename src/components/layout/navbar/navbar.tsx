"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { SearchDialog } from "@/components/shared/search-dialog/search-dialog";
import { Button } from "@/components/ui/button";

const navbarItems: {
  name: string;
  items: { title: string; href: string; description: string }[];
}[] = [
  {
    name: "Skateboard",
    items: [
      {
        title: "All",
        href: "/docs/skateboards",
        description: "All scateboards",
      },
      {
        title: "Desks",
        href: "/docs/skateboards/desks",
        description: "The board itself.",
      },
      {
        title: "Wheels",
        href: "/docs/skateboards/wheels",
        description: "The wheels that go on the board.",
      },
      {
        title: "Trucks",
        href: "/docs/skateboards/trucks",
        description: "The trucks that go on the board.",
      },
      {
        title: "Bearings",
        href: "/docs/skateboards/bearings",
        description: "The bearings that go in the wheels.",
      },
      {
        title: "Griptape",
        href: "/docs/skateboards/griptape",
        description: "The griptape that goes on the board.",
      },
      {
        title: "Hardware",
        href: "/docs/skateboards/hardware",
        description: "The hardware that goes on the board.",
      },
      {
        title: "Tools",
        href: "/docs/skateboards/tools",
        description: "The tools that go with the board.",
      },
    ],
  },
  {
    name: "Clothing",
    items: [
      {
        title: "All",
        href: "/docs/clothing",
        description: "All Clothing",
      },
      {
        title: "T-shirt",
        href: "/docs/clothing/t-shirt",
        description: "Cool and comfy tees for effortless style.",
      },
      {
        title: "Hoodies",
        href: "/docs/clothing/hoodies",
        description: "Cozy up in trendy hoodies.",
      },
      {
        title: "Pants",
        href: "/docs/clothing/pants",
        description: "Relaxed and stylish pants for everyday wear.",
      },
      {
        title: "Shorts",
        href: "/docs/clothing/shorts",
        description: "Stay cool with casual and comfortable shorts.",
      },
      {
        title: "Hats",
        href: "/docs/clothing/hats",
        description: "Top off your look with stylish and laid-back hats.",
      },
    ],
  },
  {
    name: "Shoes",
    items: [
      {
        title: "All",
        href: "/docs/shoes",
        description: "All Shoes",
      },
      {
        title: "Low Tops",
        href: "/docs/clothing/low-tops",
        description: "Rad low tops shoes for a stylish low-profile look.",
      },
      {
        title: "High Tops",
        href: "/docs/clothing/high-tops",
        description: "Elevate your style with rad high top shoes.",
      },
      {
        title: "Slip-ons",
        href: "/docs/clothing/slip-ons",
        description: "Effortless style with rad slip-on shoes.",
      },
      {
        title: "Pros",
        href: "/docs/clothing/pros",
        description: "Performance-driven rad shoes for the pros.",
      },
      {
        title: "Classics",
        href: "/docs/clothing/classics",
        description: "Timeless style with rad classic shoes.",
      },
    ],
  },
  {
    name: "Accessories",
    items: [
      {
        title: "All",
        href: "/docs/accessories",
        description: "All Accessories",
      },
      {
        title: "Scate Tools",
        href: "/docs/accessories/scate-tools",
        description:
          "Essential tools for maintaining your skateboard, all rad.",
      },
      {
        title: "Bushings",
        href: "/docs/accessories/bushings",
        description: "Upgrade your ride with our rad selection of bushings.",
      },
      {
        title: "Shock & Riser Pads",
        href: "/docs/accessories/shock-riser-pads",
        description:
          "Enhance your skateboard's performance with rad shock and riser pads.",
      },
      {
        title: "Skate Rails",
        href: "/docs/accessories/skate-rails",
        description:
          "Add creativity and style to your tricks with our rad skate rails.",
      },
      {
        title: "Wax",
        href: "/docs/accessories/wax",
        description: "Keep your board gliding smoothly with our rad skate wax.",
      },
      {
        title: "Socks",
        href: "/docs/accessories/socks",
        description: "Keep your feet comfy and stylish with our rad socks.",
      },
      {
        title: "Backpacks",
        href: "/docs/accessories/backpacks",
        description: "Carry your gear in style with our rad backpacks.",
      },
    ],
  },
];

export function NavBar() {
  return (
    <div className="border-b py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold">
            Skateshop
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Lobby</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Skateshop
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            An open source e-commerce skateshop build with
                            everything new in Next.js.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navbarItems.map((navItem, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger>{navItem.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {navItem.items.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <SearchDialog />
          <Button>
            <Link href="/auth/signin">Sign in </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
