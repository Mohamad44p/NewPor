import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      name: "GitHub",
      url: "",
      icon: SiGithub,
    },

    {
      name: "LinkedIn",
      url: "",
      icon: SiLinkedin,
    },
    {
      name: "Instagram",
      url: "",
      icon: SiInstagram,
    },
  ];

  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Mohammad 🧑🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link key={index} href={social.url} aria-label={social.name}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
