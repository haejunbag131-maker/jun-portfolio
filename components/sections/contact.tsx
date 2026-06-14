"use client";

import { BlurReveal } from "@/components/effects/blur-reveal";
import { useLanguage } from "@/providers/language-provider";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ContactDictionary = {
  title: string;
  send_email: string;
  direct_line: string;
  all_rights_reserved: string;
};

type ContactContent = {
  description: ReactNode;
  email: string;
  phone: string;
};

type SocialContent = {
  items: {
    label: string;
    href: string;
  }[];
};

export default function Contact() {
  const { dictionary, contents } = useLanguage();

  const contactText = dictionary.contact as ContactDictionary;
  const contact = contents.contact as ContactContent;
  const social = contents.social as SocialContent;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/50 bg-background pt-24 md:pt-32 xl:pt-48"
    >
      <div className="container relative z-10 mx-auto px-container">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="mb-16 flex flex-col gap-4 lg:mb-32">
            <BlurReveal>
              <span className="title-counter">[05]</span>
            </BlurReveal>

            <BlurReveal>
              <h2 className="title">{contactText.title}</h2>
            </BlurReveal>

            <BlurReveal>
              <p className="mt-3 max-w-xl text-lg font-medium italic tracking-tight text-foreground/60">
                {contact.description}
              </p>
            </BlurReveal>
          </div>
        </div>

        <div className="mx-auto mb-12 flex w-full max-w-5xl flex-col border-t border-border/50 sm:mb-24 xl:mb-40">
          <BlurReveal>
            <a
              href={`mailto:${contact.email}`}
              className="group flex flex-col justify-between border-b border-border/50 py-10 transition-all duration-700 hover:px-8 md:flex-row md:items-center md:py-14"
            >
              <span className="mb-4 text-sm font-mono uppercase tracking-widest text-muted-foreground transition-colors duration-500 group-hover:text-foreground md:mb-0">
                {contactText.send_email}
              </span>

              <div className="flex items-center gap-8">
                <span className="origin-left text-2xl font-semibold tracking-tight text-foreground transition-all duration-500 group-hover:scale-[1.02] group-hover:text-primary md:origin-right lg:text-3xl">
                  {contact.email}
                </span>

                <div className="hidden size-10 shrink-0 -translate-x-8 items-center justify-center rounded-full border border-border/50 bg-background opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:border-foreground group-hover:bg-foreground group-hover:opacity-100 md:flex">
                  <ArrowUpRight className="size-6 text-foreground transition-colors duration-500 group-hover:text-background" />
                </div>
              </div>
            </a>
          </BlurReveal>

          <BlurReveal>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="group flex flex-col justify-between border-b border-border/50 py-10 transition-all duration-700 hover:px-8 md:flex-row md:items-center md:py-14"
            >
              <span className="mb-4 text-sm font-mono uppercase tracking-widest text-muted-foreground transition-colors duration-500 group-hover:text-foreground md:mb-0">
                {contactText.direct_line}
              </span>

              <div className="flex items-center gap-8">
                <span className="origin-left text-2xl font-semibold tracking-tight text-foreground transition-all duration-500 group-hover:scale-[1.02] group-hover:text-primary md:origin-right lg:text-3xl">
                  {contact.phone}
                </span>

                <div className="hidden size-10 shrink-0 -translate-x-8 items-center justify-center rounded-full border border-border/50 bg-background opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:border-foreground group-hover:bg-foreground group-hover:opacity-100 md:flex">
                  <ArrowUpRight className="size-6 text-foreground transition-colors duration-500 group-hover:text-background" />
                </div>
              </div>
            </a>
          </BlurReveal>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-8 pb-12 md:flex-row xl:border-t xl:border-border/50 xl:py-12">
          <div className="hidden items-center gap-4 text-sm font-mono uppercase tracking-widest text-muted-foreground xl:flex">
            <span>© {new Date().getFullYear()}</span>
            <span className="size-1.5 rounded-full bg-primary/50" />
            <span>PARK HAEJUN. {contactText.all_rights_reserved}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {social.items.map((link) => (
              <BlurReveal key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-14 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-border/50 bg-background px-8 text-foreground shadow-sm transition-all duration-500 hover:border-foreground/30 hover:bg-foreground hover:text-background"
                >
                  <div className="absolute inset-0 flex h-full w-full -translate-x-full -skew-x-13 justify-center group-hover:translate-x-full group-hover:duration-1000">
                    <div className="relative h-full w-6 bg-background/20 dark:bg-background/20" />
                  </div>

                  <span className="relative z-10 flex items-center gap-3 text-sm font-medium uppercase tracking-widest">
                    {link.label}
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              </BlurReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
