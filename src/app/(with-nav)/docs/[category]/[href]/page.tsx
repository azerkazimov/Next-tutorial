// import { navbar } from "@/data/navbar";

import { NavBarProps } from "@/components/helpers/interfaces/nav-bar";

interface PageProps {
  params: Promise<{
    href: string;
    category: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { category, href } = await params;

  const response = await fetch(`${process.env.API_HOST}/nav-bar`);

  if (!response.ok) {
    throw new Error("Failed to load navbar data");
  }

  const navbar: NavBarProps[] = await response.json();

  const product = navbar
    .flatMap((product) => product.items)
    .find((item) => item.href === `/docs/${category}/${href}`);

  if (!product)
    return (
      <div className="container">
        <h1>Category not found</h1>
      </div>
    );

  return (
    <div className="container">
      <h1>This is page from Category: {category}</h1>
      <p>page url: {href}</p>
      you are view product: Product title &quot;{product.title || "..."}&quot;
      on url: &quot;{product.href}&quot;
    </div>
  );
}
