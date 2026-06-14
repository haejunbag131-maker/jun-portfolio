"use client";

import { ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { BlurReveal } from "@/components/effects/blur-reveal";
import { AboutModal } from "@/components/modals/about-modal";
import { HangingProfile } from "@/components/widgets/hanging-profile";
import { useLanguage } from "@/providers/language-provider";

type AboutDictionary = {
  title: string;
  cta: string;
};

type AboutContent = {
  intro: ReactNode;
  description: ReactNode;
};

export default function About() {
  const { dictionary, contents } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const aboutText = dictionary.about as AboutDictionary;
  const about = contents.about as AboutContent;

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-background text-foreground container-void"
    >
      <div className="container mx-auto px-container">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-32">
          <div className="xl:w-1/4">
            <div className="sticky top-32 flex flex-col gap-4">
              <BlurReveal>
                <span className="title-counter">[01]</span>
              </BlurReveal>

              <BlurReveal>
                <h2 className="title relative z-10">{aboutText.title}</h2>
              </BlurReveal>

              <BlurReveal>
                <div className="mt-8 hidden xl:block">
                  <HangingProfile />
                </div>
              </BlurReveal>
            </div>
          </div>

          <div className="flex flex-col gap-24 xl:w-3/4">
            <div className="space-y-12">
              <BlurReveal>
                <h3 className="text-3xl font-light leading-[1.1] md:text-5xl lg:text-6xl">
                  {about.intro}
                </h3>
              </BlurReveal>

              <BlurReveal>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {about.description}
                </p>
              </BlurReveal>

              <BlurReveal>
                <>
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="group relative inline-flex cursor-pointer items-center gap-2 py-2 text-xl font-medium md:text-2xl"
                  >
                    <span className="relative z-10 border-b-2 border-foreground/30 pb-1 transition-all duration-300 group-hover:border-foreground">
                      {aboutText.cta}
                    </span>
                    <ArrowRight className="size-6" />
                  </button>

                  <AboutModal open={isOpen} onOpenChange={setIsOpen} />
                </>
              </BlurReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
