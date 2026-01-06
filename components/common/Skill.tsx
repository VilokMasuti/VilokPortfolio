import { Link } from "next-view-transitions";
import React from "react";

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="skill-inner-shadow inline-flex items-center  text-white self-end rounded-md border border-dashed border-white/30 bg-white/15 px-2 py-1 text-sm  dark:border-white/30 dark:bg-white/15 dark:text-white"
    >
      <div className="size-4 flex-shrink-0">{children}</div>
      <p className="ml-1 text-sm font-bold">{name}</p>
    </Link>
  );
}
