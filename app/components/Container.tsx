import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

// Consistent page gutter + max width for every section.
export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</Tag>
  );
}
