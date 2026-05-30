import * as LucideIcons from "lucide-react";
import { cn } from "@/utils/cn";

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  // Convert snake_case or standard string to PascalCase for Lucide Icons
  const pascalName = name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  // @ts-ignore - Indexing LucideIcons
  const IconComponent = LucideIcons[pascalName] || LucideIcons.HelpCircle;

  return <IconComponent className={cn("w-5 h-5", className)} />;
}
