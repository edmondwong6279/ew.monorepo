"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/hooks";

export default function TransitionComponent({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const size = useWindowSize();

  return (
    <AnimatePresence initial={false}>
      {size.width !== undefined && (
        <motion.div
          style={{ backgroundImage: `url(/noise.png)` }}
          className="min-h-screen flex flex-col items-center relative bg-gray text-off-white z-0"
          transition={{ duration: 0.2 }}
          initial={{ scale: 1 }}
          animate={{ scale: 1 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
