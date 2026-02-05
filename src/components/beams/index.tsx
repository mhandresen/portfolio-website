"use client";

import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const paths = [
    "M-100 0Q150 50 400 0T900 0",
    "M-100 20Q150 70 400 20T900 20",
    "M-100 40Q150 90 400 40T900 40",
    "M-100 60Q150 110 400 60T900 60",
    "M-100 80Q150 130 400 80T900 80",
    "M-100 100Q150 150 400 100T900 100",
    "M-100 120Q150 170 400 120T900 120",
    "M-100 140Q150 190 400 140T900 140",
    "M-100 160Q150 210 400 160T900 160",
    "M-100 180Q150 230 400 180T900 180",
    "M-100 200Q150 250 400 200T900 200",
    "M-100 220Q150 270 400 220T900 220",
    "M-100 240Q150 290 400 240T900 240",
    "M-100 260Q150 310 400 260T900 260",
    "M-100 280Q150 330 400 280T900 280",
    "M-100 300Q150 350 400 300T900 300",
    "M-150 -50Q200 100 450 -50T950 -50",
    "M-150 -30Q200 120 450 -30T950 -30",
    "M-150 -10Q200 140 450 -10T950 -10",
    "M-150 10Q200 160 450 10T950 10",
    "M-150 30Q200 180 450 30T950 30",
    "M-150 50Q200 200 450 50T950 50",
    "M-150 70Q200 220 450 70T950 70",
    "M-150 90Q200 240 450 90T950 90",
    "M-150 110Q200 260 450 110T950 110",
    "M-150 130Q200 280 450 130T950 130",
    "M-150 150Q200 300 450 150T950 150",
    "M-150 170Q200 320 450 170T950 170",
    "M-150 190Q200 340 450 190T950 190",
    "M-150 210Q200 360 450 210T950 210",
    "M-200 -100C-50 0 100 -100 250 0S550 -100 700 0S950 -100 1100 0",
    "M-200 -80C-50 20 100 -80 250 20S550 -80 700 20S950 -80 1100 20",
    "M-200 -60C-50 40 100 -60 250 40S550 -60 700 40S950 -60 1100 40",
    "M-200 -40C-50 60 100 -40 250 60S550 -40 700 60S950 -40 1100 60",
    "M-200 -20C-50 80 100 -20 250 80S550 -20 700 80S950 -20 1100 80",
    "M-200 0C-50 100 100 0 250 100S550 0 700 100S950 0 1100 100",
    "M-200 20C-50 120 100 20 250 120S550 20 700 120S950 20 1100 120",
    "M-200 40C-50 140 100 40 250 140S550 40 700 140S950 40 1100 140",
    "M-200 60C-50 160 100 60 250 160S550 60 700 160S950 60 1100 160",
    "M-200 80C-50 180 100 80 250 180S550 80 700 180S950 80 1100 180",
  ];
  return (
    <div
      className={cx(
        "absolute  h-full w-full inset-0  [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
        className
      )}
    >
      <svg
        className="z-0 h-full w-full pointer-events-none absolute opacity-90"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 0Q150 50 400 0T900 0M-100 20Q150 70 400 20T900 20M-100 40Q150 90 400 40T900 40M-100 60Q150 110 400 60T900 60M-100 80Q150 130 400 80T900 80M-100 100Q150 150 400 100T900 100M-100 120Q150 170 400 120T900 120M-100 140Q150 190 400 140T900 140M-100 160Q150 210 400 160T900 160M-100 180Q150 230 400 180T900 180M-100 200Q150 250 400 200T900 200M-100 220Q150 270 400 220T900 220M-100 240Q150 290 400 240T900 240M-100 260Q150 310 400 260T900 260M-100 280Q150 330 400 280T900 280M-100 300Q150 350 400 300T900 300M-150 -50Q200 100 450 -50T950 -50M-150 -30Q200 120 450 -30T950 -30M-150 -10Q200 140 450 -10T950 -10M-150 10Q200 160 450 10T950 10M-150 30Q200 180 450 30T950 30M-150 50Q200 200 450 50T950 50M-150 70Q200 220 450 70T950 70M-150 90Q200 240 450 90T950 90M-150 110Q200 260 450 110T950 110M-150 130Q200 280 450 130T950 130M-150 150Q200 300 450 150T950 150M-150 170Q200 320 450 170T950 170M-150 190Q200 340 450 190T950 190M-150 210Q200 360 450 210T950 210M-200 -100C-50 0 100 -100 250 0S550 -100 700 0S950 -100 1100 0M-200 -80C-50 20 100 -80 250 20S550 -80 700 20S950 -80 1100 20M-200 -60C-50 40 100 -60 250 40S550 -60 700 40S950 -60 1100 40M-200 -40C-50 60 100 -40 250 60S550 -40 700 60S950 -40 1100 60M-200 -20C-50 80 100 -20 250 80S550 -20 700 80S950 -20 1100 80M-200 0C-50 100 100 0 250 100S550 0 700 100S950 0 1100 100M-200 20C-50 120 100 20 250 120S550 20 700 120S950 20 1100 120M-200 40C-50 140 100 40 250 140S550 40 700 140S950 40 1100 140M-200 60C-50 160 100 60 250 160S550 60 700 160S950 60 1100 160M-200 80C-50 180 100 80 250 180S550 80 700 180S950 80 1100 180"
          stroke="url(#paint0_radial_242_278)"
          strokeOpacity="0"
          strokeWidth="0.5"
        ></path>

        {paths.map((path, index) => (
          <motion.path
            key={`path-` + index}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity={index % 3 === 0 ? "0.5" : "0.4"}
            strokeWidth={index % 5 === 0 ? "0.7" : "0.5"}
          ></motion.path>
        ))}
        <defs>
          {paths.map((path, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 12 + 18,
                ease: [0.43, 0.13, 0.23, 0.96],
                repeat: Infinity,
                delay: Math.random() * 8,
                repeatDelay: Math.random() * 3,
              }}
            >
              <stop stopColor="#2fad55" stopOpacity="0"></stop>
              <stop stopColor="#2fad55"></stop>
              <stop offset="32.5%" stopColor="#1e7a3d"></stop>
              <stop offset="100%" stopColor="#47cc6f" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}

          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
