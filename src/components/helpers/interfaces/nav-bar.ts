export interface NavBarProps {
    id: number;
    name: string;
    category: string;
    description: string;
    items: { id: number; title: string; href: string; description: string }[];
}