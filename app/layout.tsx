import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

  title: "Mohammad Abu Omar",
  authors: {
    name: "Mohammad Abu Omar",
  },

  description:
    "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app",
  openGraph: {
    title: "Mohammad Abu Omar",
    description:
      "Based In Palestine, I'm FullStack Developer passionate about building a modern web applications that users love.",
    url: "https://next-supabase-vote.vercel.app/",
    siteName: "Mohammad Abu Omar",
    images: "/images/me.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
