import type { MutableRefObject } from "react";
import { useState, useEffect, useRef } from "react";
import type { Dims } from "@/types";

export const useDims = <T>(): [MutableRefObject<T | null>, Dims] => {
  const ref = useRef<T | null>(null);
  const [dims, setDims] = useState<Dims>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setDims({ width, height });
      }
    });

    if (ref.current instanceof Element) {
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return [ref, dims];
};
