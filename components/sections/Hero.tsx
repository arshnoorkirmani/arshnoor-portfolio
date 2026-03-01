"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 w-full">
      <div className="max-w-[1200px] mx-auto px-6 w-full z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-md border border-border text-xs font-bold shadow-sm cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="uppercase tracking-widest text-muted-foreground">
              Available for engineering roles
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] text-balance max-w-5xl mx-auto drop-shadow-sm font-serif">
            Arshnoor Kirmani <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700 dark:from-primary dark:to-blue-300">
              Front-End Developer.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            I specialize in building scalable, production-ready web applications
            using{" "}
            <strong className="text-foreground">
              React.js, Next.js, and TypeScript.
            </strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link
              href={siteConfig.nav.projects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:-translate-y-1 shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore My Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
