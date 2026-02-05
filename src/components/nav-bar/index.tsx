import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import { useTranslation } from "react-i18next";

interface NavItem {
  name: string;
  link: string;
  icon?: IconDefinition;
}

export function NavBar({ navItems, className }: { navItems: NavItem[]; className?: string }) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const { i18n } = useTranslation();

  const current = (i18n.resolvedLanguage || i18n.language || "en-GB").startsWith("no") ? "no-NB" : "en-GB";

  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  // const setLang = (lng: "en-GB" | "no-NB") => {
  //   void i18n.changeLanguage(lng);
  // };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cx(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-dark-700 rounded-lg bg-dark-200 shadow-[0px_2px_3px_1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-50 px-8 py-4 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((item: NavItem, idx: number) => (
          <a
            key={idx}
            href={item.link}
            className="relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300"
          >
            <FontAwesomeIcon className="block sm:hidden" icon={item.icon!} />
            <span className="hidden sm:block font-medium">{item.name}</span>
          </a>
        ))}
        {/*<span>*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    onClick={() => setLang("en-GB")}*/}
        {/*    className={cx(*/}
        {/*      "transition-colors cursor-pointer",*/}
        {/*      current === "en-GB" ? "text-primary font-semibold" : "text-white/70 hover:text-white"*/}
        {/*    )}*/}
        {/*  >*/}
        {/*    EN*/}
        {/*  </button>{" "}*/}
        {/*  |{" "}*/}
        {/*  <button*/}
        {/*    type="button"*/}
        {/*    onClick={() => setLang("no-NB")}*/}
        {/*    className={cx(*/}
        {/*      "transition-colors cursor-pointer",*/}
        {/*      current === "no-NB" ? "text-primary font-semibold" : "text-white/70 hover:text-white"*/}
        {/*    )}*/}
        {/*  >*/}
        {/*    NB*/}
        {/*  </button>*/}
        {/*</span>*/}
      </motion.div>
    </AnimatePresence>
  );
}
