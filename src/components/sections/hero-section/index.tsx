import { useTranslation } from "react-i18next";
import { TextGenerateEffect } from "../../ui/text-generate";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-screen w-full dark:bg-dark-100 bg-white dark:bg-grid-white/4 bg-grid-black/6 flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-100 bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <section
        className="pb-20 pt-36 sm:p-0 sm:min-h-screen flex flex-col items-center justify-center relative"
        id="home"
      >
        <div className="flex flex-col justify-center items-center relative z-10 text-center">
          <p className="uppercase font-bold text-sm tracking-widest">{t("hero.based")}</p>
          <TextGenerateEffect
            words="Quality Design & Web Development Built With Purpose"
            className="text-[40px] md:text-6xl lg:text-7xl font-bold text-center max-w-5xl leading-snug tracking-wide"
          />
          <p className="pt-5 pb-8 text-sm sm:text-base md:text-lg text-dark-200 dark:text-stone-200/70">
            Hi, I&apos;m Martin, I build modern web applications with a strong focus on usability, performance, and
            clean design.
          </p>
        </div>
      </section>
    </>
  );
}
