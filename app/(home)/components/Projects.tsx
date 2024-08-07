import Link from "next/link";
import Title from "./Title";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import {
  SiExpress,
  SiFirebase,
  SiFramer,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPrisma,
  SiReact,
  SiSanity,
  SiSass,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Airbnbimage from "@/public/images/Airbnb.png";
import ChatVibeimage from "@/public/images/chatapp2.png";
import Ecommerceimage from "@/public/images/Chinec.png";
import Exc from "@/public/images/Exc.png";
import TaskFlowimage from "@/public/images/Taskflow.png";
import Mojartoimage from "@/public/images/Moj.png";
import Blogimage from "@/public/images/Blog.png";
import TradeHavenimage from "@/public/images/TH.png";
import dProjectimage from "@/public/images/3d.png";
import Liner from "@/public/images/Liner.png";
import AiAu from "@/public/images/AiAu.png";

export default function Projects() {
  const projects = [
    {
      title: "AI Automate Landing page!",
      tech: [
        SiNextdotjs,
        SiReact,
        SiTypescript,
        SiTailwindcss,
        SiFramer,
      ],
      link: "https://ai-fuzzie.vercel.app",
      cover: AiAu,
    },
    {
      title: "TradeHaven A Digital Marketplace Masterpiece!",
      tech: [
        SiNextdotjs,
        SiReact,
        SiTypescript,
        SiTailwindcss,
        SiMongodb,
        SiFramer,
        SiPrisma,
      ],
      link: "https://trade-haven-gamma.vercel.app",
      cover: TradeHavenimage,
    },
    {
      title: "Linear Landing page!",
      tech: [
        SiNextdotjs,
        SiReact,
        SiTypescript,
        SiTailwindcss,
        SiFramer,
      ],
      link: "https://liner-re.vercel.app",
      cover: Liner,
    },
    {
      title: "Full-stack E-commerce platform with an Admin Dashboard",
      tech: [
        SiNextdotjs,
        SiReact,
        SiTypescript,
        SiTailwindcss,
        SiMongodb,
        SiFramer,
      ],
      link: "https://exclusive-ny.vercel.app",
      cover: Exc,
      background: "bg-indigo-500",
    },
    {
      title: "A 3d Website for showcasing 3d models!",
      tech: [SiNextdotjs, SiReact, SiTypescript, SiSass, SiFramer],
      link: "https://3dwe.vercel.app",
      cover: dProjectimage,
    },
    {
      title: "TaskFlow - End-to-End Kanban Board Solution for Task Management!",
      tech: [
        SiNextdotjs,
        SiReact,
        SiTypescript,
        SiTailwindcss,
        SiMongodb,
        SiFramer,
      ],
      link: "https://task-flow-one.vercel.app",
      cover: TaskFlowimage,
      background: "bg-green-500",
    },
    {
      title: "MOJARTO Full-stack E-commerce ",
      tech: [SiExpress, SiNodedotjs, SiReact, SiTailwindcss, SiMongodb],
      link: "https://mojarto.vercel.app",
      cover: Mojartoimage,
      background: "bg-blue-900",
    },
    {
      title: "Chat-Vibe - Real-time Chat Application",
      tech: [SiReact, SiTailwindcss, SiSanity, SiFirebase],
      link: "https://nextjs14-chat-vibe.vercel.app",
      cover: ChatVibeimage,
      background: "bg-blue-500",
    },
    {
      title: "Airbnb clone",
      tech: [
        SiNextdotjs,
        SiSupabase,
        SiReact,
        SiMongodb,
        SiTailwindcss,
        SiFramer,
        SiTypescript,
      ],
      link: "https://airbnb-kappa-neon.vercel.app",
      cover: Airbnbimage,
      background: "bg-rose-500",
    },
    {
      title: "ChicStyle Hub - A Fusion of Innovation and Creativity!",
      tech: [
        SiNextdotjs,
        SiOpenai,
        SiReact,
        SiSanity,
        SiTailwindcss,
        SiTypescript,
      ],
      link: "https://chic-style-hub-e-commerce.vercel.app",
      cover: Ecommerceimage,
      background: "bg-sky-500",
    },
    {
      title: "nextjs-blog",
      tech: [SiReact, SiTailwindcss, SiJavascript],
      link: "https://nextjs-blog-six-blush-58.vercel.app",
      cover: Blogimage,
      background: "bg-slate-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-6">
        {projects.map((project, idx) => {
          return (
            <Link href={project.link as string} target="_blank" key={idx}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover.src}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, idx) => (
                        <Icon key={idx} className="w-8 h-8" />
                      ))}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
