"use client";

import { motion } from "motion/react";
import { FileText, Download } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-16 md:py-32 w-full max-w-[1200px] mx-auto px-6 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-card rounded-[3rem] p-12 md:p-20 border border-border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-primary/50 hover:shadow-primary/5 transition-all duration-700"
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-700"></div>

        {/* Large decorative icon in background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3">
          <FileText className="w-80 h-80 md:w-[500px] md:h-[500px] -mr-20" />
        </div>

        <div className="relative z-10 flex-col flex items-start text-left max-w-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-500 shrink-0 shadow-sm">
              <FileText className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                Full Overview
              </h3>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight font-serif tracking-tighter text-balance">
            Want the full story?
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed font-medium">
            Grab a copy of my traditional resume for a complete breakdown of my
            educational background and professional timeline.
          </p>
        </div>

        <div className="relative z-10 shrink-0 w-full sm:w-auto">
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-primary text-primary-foreground px-10 py-6 rounded-2xl font-black text-xl shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden group/btn relative"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out pointer-events-none"></div>
            <Download className="w-7 h-7 relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </a>
          
          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium">
            <FileText className="w-4 h-4 opacity-70" />
            <span>PDF Format • ~120KB</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
