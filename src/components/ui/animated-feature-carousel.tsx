"use client"

import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react"
import clsx from "clsx"
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
  type MotionValue,
  type Variants,
} from "framer-motion"

// --- Helper Functions and Fallbacks ---

// A simple utility for class names, similar to cn/clsx
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

// Placeholder for image assets if they are not found.
const placeholderImage = (text = "Image") =>
  `https://placehold.co/600x400/1a1a1a/ffffff?text=${text}`

// --- Types ---
type StaticImageData = string;

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>
  "--y": MotionValue<string>
}

interface CardProps {
  bgClass?: string
}

interface ImageSet {
  step1img1: StaticImageData
  step1img2: StaticImageData
  step2img1: StaticImageData
  step2img2: StaticImageData
  step3img: StaticImageData
  step4img: StaticImageData
  alt: string
}

interface FeatureCarouselProps extends CardProps {
  step1img1Class?: string
  step1img2Class?: string
  step2img1Class?: string
  step2img2Class?: string
  step3imgClass?: string
  step4imgClass?: string
  image: ImageSet
}

interface StepImageProps {
  src: StaticImageData
  alt: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}

interface Step {
  id: string
  name: string
  title: string
  description: string
  liveDemo?: string
  github?: string
}

// --- Constants ---
const TOTAL_STEPS = 1

const steps: readonly Step[] = [
  {
    id: "1",
    name: "Project 1",
    title: "CABA - Bakery",
    description: "Welcome to Caba — Where Sweetness Meets Perfection!",
    liveDemo: "https://caba-pi.vercel.app/home",
    github: "https://github.com/Girisaivinayguttula/CapStone",
  },
]

const ANIMATION_PRESETS = {
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
  },
} as const

type AnimationPreset = keyof typeof ANIMATION_PRESETS

interface AnimatedStepImageProps extends StepImageProps {
  preset?: AnimationPreset
  delay?: number
  onAnimationComplete?: () => void
}

// --- Hooks ---
function useNumberCycler(totalSteps: number = TOTAL_STEPS, interval: number = 5000) {
  const [currentNumber, setCurrentNumber] = useState(0);

  // This effect handles the automatic cycling.
  // It depends on `currentNumber`, so every time the step changes,
  // it will clear the old timer and set a new one for the next step.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentNumber((prev) => (prev + 1) % totalSteps);
    }, interval);

    // Cleanup function to clear the timer if the component unmounts
    // or if the dependencies of the effect change (e.g., user clicks a step).
    return () => clearTimeout(timerId);
  }, [currentNumber, totalSteps, interval]);

  // This function allows manual setting of the step.
  // When called, it updates `currentNumber`, which will trigger the useEffect
  // to reset the timer for the next cycle.
  const setStep = useCallback((stepIndex: number) => {
    setCurrentNumber(stepIndex % totalSteps);
  }, [totalSteps]);

  return { currentNumber, setStep };
}


function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    }
    checkDevice()
    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [])
  return isMobile
}

// --- Components ---
function IconCheck({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className={cn("h-4 w-4", className)} {...props} >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

const stepVariants: Variants = {
  inactive: { scale: 0.9, opacity: 0.7 },
  active: { scale: 1, opacity: 1 },
}

const StepImage = forwardRef<HTMLImageElement, StepImageProps>(
  ({ src, alt, className, style, ...props }, ref) => {
    return (
      <img
        ref={ref}
        alt={alt}
        className={className}
        src={src}
        style={{ position: "absolute", userSelect: "none", maxWidth: "unset", ...style }}
        onError={(e) => (e.currentTarget.src = placeholderImage(alt))}
        {...props}
      />
    )
  }
)
StepImage.displayName = "StepImage"

const MotionStepImage = motion(StepImage)

const AnimatedStepImage = ({ preset = "fadeInScale", delay = 0, ...props }: AnimatedStepImageProps) => {
  const presetConfig = ANIMATION_PRESETS[preset]
  return <MotionStepImage {...props} {...presetConfig} transition={{ ...presetConfig.transition, delay }} />
}

function FeatureCard({ children, step }: { children: React.ReactNode; step: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const isMobile = useIsMobile()
  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <motion.div
      className="animated-cards group relative w-full rounded-2xl"
      onMouseMove={handleMouseMove}
      style={{ "--x": useMotionTemplate`${mouseX}px`, "--y": useMotionTemplate`${mouseY}px` } as WrapperStyle}
    >
      <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="m-10 min-h-[450px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              className="flex w-full flex-col gap-4 md:w-3/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-500"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {steps[step].name}
              </motion.div>
              <motion.h2
                className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-3xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {steps[step].title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                  {steps[step].description}
                </p>
              </motion.div>
              {(steps[step].liveDemo || steps[step].github) && (
                <motion.div
                  className="flex gap-3 mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {steps[step].liveDemo && (
                    <a
                      href={steps[step].liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {steps[step].github && (
                    <a
                      href={steps[step].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          {children}
        </div>
      </div>
    </motion.div>
  )
}

function StepsNav({ steps: stepItems, current, onChange }: { steps: readonly Step[]; current: number; onChange: (index: number) => void; }) {
  return (
    <nav aria-label="Progress" className="flex justify-center px-4">
      <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
        {stepItems.map((step, stepIdx) => {
          const isCompleted = current > stepIdx;
          const isCurrent = current === stepIdx;
          return (
            <motion.li key={step.name} initial="inactive" animate={isCurrent ? "active" : "inactive"} variants={stepVariants} transition={{ duration: 0.3 }} className="relative" >
              <button
                type="button"
                className={cn(
                  "group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 dark:focus-visible:ring-offset-black",
                  isCurrent
                    ? "bg-sky-600 text-white dark:bg-sky-500"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                )}
                onClick={() => onChange(stepIdx)}
              >
                <span className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                  isCompleted
                    ? "bg-sky-600 text-white dark:bg-sky-500"
                    : isCurrent
                      ? "bg-sky-400 text-sky-900 dark:bg-sky-400 dark:text-sky-900"
                      : "bg-neutral-200 text-neutral-700 group-hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-200 dark:group-hover:bg-neutral-600"
                )}>
                  {isCompleted ? (
                    <IconCheck className="h-3.5 w-3.5" />
                  ) : (
                    <span>{stepIdx + 1}</span>
                  )}
                </span>
                <span className="hidden sm:inline-block">{step.name}</span>
              </button>
            </motion.li>
          );
        })}
      </ol>
    </nav>
  );
}

const defaultClasses = {
  img: "rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-black/10 dark:shadow-neutral-950/50",
  step1img1: "w-[50%] left-0 top-[15%]",
  step1img2: "w-[60%] left-[40%] top-[35%]",
  step2img1: "w-[50%] left-[5%] top-[20%]",
  step2img2: "w-[40%] left-[55%] top-[45%]",
  step3img: "w-[90%] left-[5%] top-[25%]",
  step4img: "w-[90%] left-[5%] top-[25%]",
} as const

export function FeatureCarousel({
  image,
  step1img1Class = defaultClasses.step1img1,
  step1img2Class = defaultClasses.step1img2,
  step2img1Class = defaultClasses.step2img1,
  step2img2Class = defaultClasses.step2img2,
  step3imgClass = defaultClasses.step3img,
  step4imgClass = defaultClasses.step4img,
  ...props
}: FeatureCarouselProps) {
  const { currentNumber: step, setStep } = useNumberCycler()
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div className="relative w-full h-full">
            <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step1img1Class)} src={image.step1img1} preset="slideInLeft" />
            <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step1img2Class)} src={image.step1img2} preset="slideInRight" delay={0.1} />
          </div>
        )
      case 1:
        return (
          <div className="relative w-full h-full">
            <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step2img1Class)} src={image.step2img1} preset="fadeInScale" />
            <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step2img2Class)} src={image.step2img2} preset="fadeInScale" delay={0.1} />
          </div>
        )
      case 2:
        return <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step3imgClass)} src={image.step3img} preset="fadeInScale" />
      case 3:
        return <AnimatedStepImage alt={image.alt} className={cn(defaultClasses.img, step4imgClass)} src={image.step4img} preset="fadeInScale" />
      default: return null
    }
  }
  return (
    <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-4xl mx-auto p-2 sm:p-4">
      <FeatureCard {...props} step={step}>
        <AnimatePresence mode="wait">
          <motion.div key={step} {...ANIMATION_PRESETS.fadeInScale} className="w-full h-full absolute">
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>
      </FeatureCard>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <StepsNav current={step} onChange={setStep} steps={steps} />
      </motion.div>
    </div>
  )
}