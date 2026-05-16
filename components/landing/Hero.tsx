"use client";
import Container from "@/components/common/Container";
import Skill from "@/components/common/Skill";
import { ThemeToggleButton, useThemeToggle } from "@/components/common/ThemeSwitch";
import { heroConfig, skillComponents } from "@/config/Hero";
import { parseTemplate } from "@/lib/hero";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import Image from "next/image";
import CV from "../svgs/CV";
import { Button } from '../ui/button';
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
          <span key={part.key} className="   text-sm  font-satoshi  shadow-md   rounded-md p-1   whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  const { isDark } = useThemeToggle();
  return (
    <Container className="mx-auto relative max-w-3xl  p-10 ">
      <div className=" flex flex-col h-full relative  ">

        <div className="relative h-40 sm:h-52 md:h-64 w-full overflow-hidden shadow-2xl shadow-black/25">
  <Image
      src="/wallpaper.jpg"
    alt="hero"
    fill
    priority
    sizes="(max-width: 768px) 100vw, 768px"
    className="object-cover object-center"
  />
</div>
        <div className=' h-[50%] relative'>
<motion.div className="flex items-center gap-4 font-inter-tight absolute top-4 right-4">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </motion.div>


      <Image
        src="/remote.png"
        alt="hero"
        width={100}
        height={100}
        className="size-24  rounded-full absolute -top-12 left-4   border-dashed     shadow-2xl shadow-black/25"
      />
      {/* Text Area */}
      <div className="mt-16 flex flex-col ">
        <h1 className="text-xl  tracking-tighter  font-clash font-medium md:text-xl lg:text-2xl">
        {name}
        </h1>
        <p className= 'pl-1   text-neutral-500 text-sm font-satoshi'> @Hare Krishna</p>
        <div className="  text-wrap  text-whitespace-pre-wrap   font-geist-mono    gap-x-2.5 gap-y-2      items-center     md:text-lg">
          {renderDescription()}
        </div>
      </div>
      {/* Buttons */}
      <div className=' flex justify-between items-end'>
<div className='  flex'> <p className=' text-sm'>📍</p>  <span className='  underline  decoration-wavy font-satoshi '> Remote  </span> </div>
 <div className="mt-6 flex gap-6 p-2">
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
      </div>


        </div>


</div>
    </Container>
  );
};
export default Hero;
