export interface NavBarProps {
    id: number;
    name: string;
    description: string;
    items: { id: number; title: string; href: string; description: string };
}