"use client";

import { motion } from "motion/react";
import { Briefcase, Building2, MapPin, ChevronRight } from "lucide-react";
import { ExperienceItem } from "@/lib/mdx";

export default function Experience({
  experience,
}: {
  experience: ExperienceItem[];
}) {
  return (
    <section id="experience" className="py-32 w-full">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-20">
          <Briefcase className="w-10 h-10 text-primary" />
          <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif">
            Career Path.
          </h2>
        </div>

        <div className="relative pt-8">
          {/* Timeline vertical line */}
          <div className="absolute top-0 bottom-0 left-[26px] md:left-[240px] w-[2px] bg-border/50" />
          
          <div className="space-y-16 md:space-y-24">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] md:left-[240px] top-[40px] md:top-[46px] w-4 h-4 bg-border rounded-full -translate-x-[7px] ring-4 ring-background group-hover:bg-primary group-hover:scale-125 transition-all duration-500 z-10" />

                {/* Left side: Date & Location */}
                <div className="w-full md:w-[240px] pt-8 md:pt-10 pl-14 md:pl-0 md:pr-12 md:text-right flex flex-col items-start md:items-end gap-2 mb-4 md:mb-0 flex-shrink-0">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-300 whitespace-nowrap">
                    {exp.frontMatter.date}
                  </span>
                  <span className="flex items-start md:justify-end gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-2 w-full text-left md:text-right">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-[2px]" />
                    <span className="text-left md:text-right">{exp.frontMatter.location}</span>
                  </span>
                </div>

                {/* Right side: Content Card */}
                <div className="flex-1 w-full pl-14 md:pl-10">
                  <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm group-hover:border-primary/30 group-hover:shadow-xl transition-all duration-500 h-full">
                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {exp.frontMatter.title}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      {exp.frontMatter.company}
                    </p>
                    <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {exp.content
                        .split("\n")
                        .filter((line) => line.trim().startsWith("-"))
                        .map((line, i) => {
                          const text = line.replace(/^- /, "").trim();
                          return (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-primary mt-1 text-lg leading-none">
                                &#8226;
                              </span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: text.replace(
                                    /\*\*(.*?)\*\*/g,
                                    '<strong class="text-foreground/90 font-semibold">$1</strong>'
                                  ),
                                }}
                              />
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
