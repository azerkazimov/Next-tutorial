import { navbarItems } from "@/data/navbar";

interface PageProps {
  params: {
    href: string;
    category: string;
  };
}

export default async function ProductPage({ params }: PageProps) {


  const { category, href } = await params;

  const itemsArr = navbarItems.flatMap((a) => {
    return a.items;
  });

  const product = itemsArr.find(
    (item) => item.href === `/docs/${category}/${href}`
  );

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
