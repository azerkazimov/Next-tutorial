// import { ItemProps } from "@/components/helpers/interfaces/items";
import { items } from "@/data/items";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  const productId = params.id;
  const item = items.find((item) => item.id === productId);
  return NextResponse.json(item);
}
