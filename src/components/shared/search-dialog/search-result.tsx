import { ItemProps } from "@/components/helpers/interfaces/items";
import { CommandGroup, CommandItem } from "@/components/ui/command";

interface SearchProductProps {
  result: ItemProps[];
  onSelect: (product: ItemProps) => void;
}

export default function SearchResult({ result, onSelect }: SearchProductProps) {
  return (
    <CommandGroup heading="Products">
      {result.map((prod) => (
        <CommandItem key={prod.id} value={prod.name} onSelect={() => onSelect(prod)} style={{ cursor: 'pointer' }}>
          {prod.name}
        </CommandItem>
      ))}
    </CommandGroup>
  );
}
