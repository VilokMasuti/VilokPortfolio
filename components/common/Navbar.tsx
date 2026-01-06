"use client";
import { navbarConfig } from "@/config/Navbar";
import { Link } from "next-view-transitions";
import Image from "next/image";

import { easeInOut, motion as Motion } from "motion/react";
import Container from "./Container";
import { ThemeToggleButton } from "./ThemeSwitch";

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm font-inter-tight ">
      <div className="flex items-center justify-between px-6 font-inter-tight ">
        <div className="flex items-baseline gap-4 font-inter-tight ">
          <Link href="/">
            <Image
              className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
              src={navbarConfig.logo.src}
              alt={navbarConfig.logo.alt}
              width={navbarConfig.logo.width}
              height={navbarConfig.logo.height}
            />
          </Link>
          <div className="flex items-center justify-center gap-4 font-inter-tight">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="transition-all duration-300 font-inter-tight  ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Motion.div className="flex items-center gap-4 font-inter-tight ">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </Motion.div>
      </div>
    </Container>
  );
}
