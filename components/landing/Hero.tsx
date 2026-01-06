"use client";
import Container from "@/components/common/Container";
import CV from "../svgs/CV";
import Image from "next/image";
import { heroConfig, skillComponents, socialLinks } from "@/config/Hero";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Skill from "@/components/common/Skill";
import Silkss from "@/components/ui/Silkss";
import { parseTemplate } from "@/lib/hero";
import { useThemeToggle } from "@/components/common/ThemeSwitch";
import Beams from "@/components/ui/Beams";
const buttonIcons = {
  CV: CV,
};
const Hero = () => {
  const { name, title, skills, description, buttons } = heroConfig;
  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className=" text-white whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  const { isDark } = useThemeToggle();
  return (
    <Container className="mx-auto relative max-w-4xl  p-10 rounded-lg">
      <div className=" absolute inset-0 -z-10 overflow-hidden rounded-lg ">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <Image
        src="/assets/logo.png"
        alt="hero"
        width={100}
        height={100}
        className="size-24 rounded-full bg-blue-300 dark:bg-yellow-300"
      />
      {/* Text Area */}
      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-2xl  tracking-tighter title  font-poppins md:text-2xl lg:text-4xl">
          Hi, I&apos;m — {title}
        </h1>
        <div className="mt-4 flex flex-wrap  font-inter-tight   items-center gap-x-1.5 gap-y-2 text- whitespace-pre-wrap text-[#71717B] md:text-lg">
          {renderDescription()}
        </div>
      </div>
      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as "outline" | "default"}
              className={cn(
                button.variant === "outline" && "inset-shadow-indigo-500",
                button.variant === "default" && "inset-shadow-indigo-500"
              )}
            >
              {IconComponent && <IconComponent />}
              <Link href={button.href}>{button.text}</Link>
            </Button>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-8 flex gap-2">
        {socialLinks.map((link) => (
          <Tooltip key={link.name} delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href={link.href}
                key={link.name}
                className="text-secondary flex items-center gap-2"
              >
                <span className="size-6">{link.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </Container>
  );
};
export default Hero;
