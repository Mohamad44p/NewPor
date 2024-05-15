import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Mohamad44p",
      icon: SiGithub,
    },

    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/mohmmad-abuomar-0878772a1",
      icon: SiLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mohamad.69s/?igsh=MTN4ZHA2MGIxc2Y1Zw%3D%3D",
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
