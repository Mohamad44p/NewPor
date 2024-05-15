"use client";

import { SiExpress, SiFramer, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Skills() {
    const skills = [
        {
            text: "React",
            icon: SiReact
        },
        {
            text: "Next.js",
            icon: SiNextdotjs
        },
        {
            text: "TypeScript",
            icon: SiTypescript
        },
        {
            text: "JavaScript",
            icon: SiJavascript
        },
        {
            text: "Tailwind CSS",
            icon: SiTailwindcss
        },
        {
            text: "Node.js",
            icon: SiNodedotjs
        },
        {
            text: "Express",
            icon: SiExpress
        },
        {
            text: "MongoDB",
            icon: SiMongodb
        },
        {
            text: "Framer Motion",
            icon: SiFramer
        }
    ]
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title text="Skills 🗡️" className="flex flex-col items-center justify-center -rotate-6"/>
      <HoverEffect items={skills} className="mt-10"/>
    </div>
  );
}
