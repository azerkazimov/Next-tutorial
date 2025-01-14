import Link from "next/link";
import { RxRocket } from "react-icons/rx";

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  return (
    <div className="container mt-10 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">
          {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
        </h1>
        <p className="text-lg text-muted-foreground">
          Buy {category} from the best stores
        </p>
      </div>
      <div className="flex flex-col w-full h-[300px] border rounded-lg items-center justify-center gap-8">
        <div className="flex aspect-square size-fit items-center justify-center rounded-full border border-dashed p-4">
          <RxRocket className="text-[20px]" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h5 className="font-medium tracking-tight text-lg">
            Rewriting with the latest Next.js 14 features!
          </h5>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Follow along on </span>
            <Link href="/" className="transition-colors hover:text-foreground">
              X
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
