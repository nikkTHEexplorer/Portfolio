import { useEffect, useId, useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from 'motion/react';

type GridPatternProps = {
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
  patternId: string;
  lineClassName: string;
};

function GridPattern({ offsetX, offsetY, patternId, lineClassName }: GridPatternProps) {
  return (
    <svg className="h-full w-full">
      <defs>
        <motion.pattern
          id={patternId}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={lineClassName}
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

export default function InfiniteGridBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const patternIdBase = useId().replace(/:/g, '');
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const element = containerRef.current;

      if (!element) {
        return;
      }

      const { left, top } = element.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  useAnimationFrame(() => {
    if (shouldReduceMotion) {
      return;
    }

    gridOffsetX.set((gridOffsetX.get() + 0.5) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.5) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(320px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-white"
      aria-hidden="true"
    >
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          patternId={`${patternIdBase}-base`}
          lineClassName="text-slate-900/70"
        />
      </div>

      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        style={shouldReduceMotion ? undefined : { maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          patternId={`${patternIdBase}-active`}
          lineClassName="text-emerald-600/80"
        />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-20%] top-[-20%] h-[40%] w-[40%] rounded-full bg-emerald-500/24 blur-[120px]" />
        <div className="absolute right-[10%] top-[-10%] h-[20%] w-[20%] rounded-full bg-lime-400/18 blur-[100px]" />
        <div className="absolute left-[-20%] bottom-[-20%] h-[40%] w-[40%] rounded-full bg-emerald-500/18 blur-[120px]" />
      </div>
    </div>
  );
}
