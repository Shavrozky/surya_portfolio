"use client";

import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  distance?: number;
  once?: boolean;
} & HTMLMotionProps<"div">;

export function FadeIn({
  children,
  delay = 0,
  distance = 24,
  once = true,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: distance }}
      transition={reduceMotion ? undefined : { duration: 0.55, ease: "easeOut", delay }}
      viewport={{ once, amount: 0.2 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
