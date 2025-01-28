import { ItemProps } from "@/components/helpers/interfaces/items";

export default function CardItem({ name, price }: ItemProps) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex flex-col">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
}
