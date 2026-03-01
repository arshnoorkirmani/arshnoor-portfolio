"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Code, ExternalLink, Github } from "lucide-react";
import { ProjectItem } from "@/lib/mdx";
import { siteConfig } from "@/config/site";

export default function Projects({ projects }: { projects: ProjectItem[] }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-32 w-full bg-secondary/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <Code className="w-10 h-10 text-primary" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tight font-serif text-foreground">
                Featured Works
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Engineered for performance, built for longevity. A collection of
              my best professional work.
            </p>
          </div>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex border border-primary/20 bg-primary/5 hover:bg-primary hover:text-primary-foreground hover:border-primary items-center gap-3 px-6 py-3 rounded-2xl text-primary font-medium shadow-sm hover:shadow-lg transition-all duration-300 w-fit"
          >
            <span>View GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-stretch"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group w-full relative rounded-3xl overflow-hidden bg-card border border-border shadow-md hover:shadow-2xl hover:border-primary/50 transition-all duration-500 flex flex-col hover:-translate-y-2"
            >
              <div className="p-8 pb-6 bg-card border-b border-border/50 flex flex-col items-start gap-4 flex-1">
                <div className="flex justify-between items-start w-full gap-4">
                  <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight flex-1">
                    {project.frontMatter.title}
                  </h3>
                  <Link
                    href={siteConfig.links.github}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shrink-0 border border-border/50 hover:border-primary text-xs font-semibold group/link"
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline-block">Source code</span>
                  </Link>
                </div>

                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {project.frontMatter.role}{" "}
                  <span className="mx-2 opacity-50">•</span>{" "}
                  {project.frontMatter.date}
                </p>

                <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed pt-4 flex-1">
                  {project.content
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

              <div className="p-6 bg-secondary/30 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.frontMatter.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg border border-border/30 hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
