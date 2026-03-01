import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-primary rounded flex items-center justify-center text-primary-foreground">
            <span className="material-symbols-outlined text-sm font-bold">
              code
            </span>
          </div>
          <span className="font-bold">Arshnoor Kirmani © 2024</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Crafted with React, Tailwind & Clean Architecture.
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <Link
            className="hover:text-primary transition-colors text-muted-foreground"
            href="#"
          >
            Twitter
          </Link>
          <Link
            className="hover:text-primary transition-colors text-muted-foreground"
            href={siteConfig.links.github}
          >
            GitHub
          </Link>
          <Link
            className="hover:text-primary transition-colors text-muted-foreground"
            href={siteConfig.links.linkedin}
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
