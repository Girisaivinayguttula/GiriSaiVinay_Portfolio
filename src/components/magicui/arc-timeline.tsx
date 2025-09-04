"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface ArcTimelineItem {
  time: string;
  steps: {
    icon: React.ReactNode;
    content: string;
  }[];
}

interface ArcTimelineProps {
  data: ArcTimelineItem[];
  className?: string;
  arcConfig?: {
    circleWidth?: number;
    angleBetweenMinorSteps?: number;
    lineCountFillBetweenSteps?: number;
    boundaryPlaceholderLinesCount?: number;
  };
  defaultActiveStep?: {
    time: string;
    stepIndex: number;
  };
}

export function ArcTimeline({
  data,
  className,
  arcConfig = {},
  defaultActiveStep = { time: data[0]?.time || "", stepIndex: 0 },
}: ArcTimelineProps) {
  const {
    circleWidth = 5000,
    angleBetweenMinorSteps = 0.35,
    lineCountFillBetweenSteps = 10,
    boundaryPlaceholderLinesCount = 50,
  } = arcConfig;

  const [activeStep, setActiveStep] = useState(defaultActiveStep);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSteps = useMemo(() => {
    return data.reduce((acc, item) => acc + item.steps.length, 0);
  }, [data]);

  const lines = useMemo(() => {
    const totalLines = boundaryPlaceholderLinesCount * 2 + totalSteps + (totalSteps - 1) * lineCountFillBetweenSteps;
    const radius = circleWidth / 2;
    const center = { x: radius, y: radius };
    const startAngle = -Math.PI / 2;
    const endAngle = Math.PI / 2;
    const totalAngle = endAngle - startAngle;
    const angleStep = totalAngle / (totalLines - 1);

    return Array.from({ length: totalLines }, (_, i) => {
      const angle = startAngle + i * angleStep;
      const x1 = center.x + radius * Math.cos(angle);
      const y1 = center.y + radius * Math.sin(angle);
      const x2 = center.x + (radius - 100) * Math.cos(angle);
      const y2 = center.y + (radius - 100) * Math.sin(angle);

      return { x1, y1, x2, y2, angle };
    });
  }, [circleWidth, totalSteps, lineCountFillBetweenSteps, boundaryPlaceholderLinesCount]);

  const timelineItems = useMemo(() => {
    let currentLineIndex = boundaryPlaceholderLinesCount;
    const items: Array<{
      time: string;
      stepIndex: number;
      content: string;
      icon: React.ReactNode;
      lineIndex: number;
      x: number;
      y: number;
      angle: number;
    }> = [];

    data.forEach((item) => {
      item.steps.forEach((step, stepIndex) => {
        const line = lines[currentLineIndex];
        if (line) {
          items.push({
            time: item.time,
            stepIndex,
            content: step.content,
            icon: step.icon,
            lineIndex: currentLineIndex,
            x: line.x2,
            y: line.y2,
            angle: line.angle,
          });
        }
        currentLineIndex += 1 + lineCountFillBetweenSteps;
      });
    });

    return items;
  }, [data, lines, boundaryPlaceholderLinesCount, lineCountFillBetweenSteps]);

  const handleStepClick = useCallback((time: string, stepIndex: number) => {
    setActiveStep({ time, stepIndex });
  }, []);

  return (
    <div ref={containerRef} className={cn("w-full max-w-4xl mx-auto p-8", className)}>
      <div className="relative" style={{ height: `${circleWidth / 2 + 200}px` }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${circleWidth} ${circleWidth / 2 + 200}`}
          className="absolute inset-0"
        >
          {lines.map((line, index) => {
            const isStepLine = timelineItems.some(item => item.lineIndex === index);
            const isActive = isStepLine && timelineItems.find(item => 
              item.lineIndex === index && 
              item.time === activeStep.time && 
              item.stepIndex === activeStep.stepIndex
            );
            
            return (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke={
                  isActive
                    ? "var(--step-line-active-color, #9780ff)"
                    : isStepLine
                    ? "var(--step-line-inactive-color, #737373)"
                    : "var(--placeholder-line-color, #a1a1a1)"
                }
                strokeWidth={isActive ? "3" : isStepLine ? "2" : "1"}
                opacity={isActive ? 1 : isStepLine ? 0.8 : 0.3}
              />
            );
          })}
        </svg>

        {timelineItems.map((item, index) => {
          const isActive = item.time === activeStep.time && item.stepIndex === activeStep.stepIndex;
          const isLeft = item.angle < 0;
          
          return (
            <div
              key={`${item.time}-${item.stepIndex}`}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${(item.x / circleWidth) * 100}%`,
                top: `${(item.y / (circleWidth / 2 + 200)) * 100}%`,
              }}
              onClick={() => handleStepClick(item.time, item.stepIndex)}
            >
              <div className={cn(
                "flex items-center gap-3 transition-all duration-300",
                isLeft ? "flex-row-reverse" : "flex-row"
              )}>
                <div className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                  isActive 
                    ? "border-[var(--step-line-active-color,#9780ff)] bg-[var(--step-line-active-color,#9780ff)] text-white scale-110" 
                    : "border-[var(--step-line-inactive-color,#737373)] bg-background text-[var(--icon-inactive-color,#a3a3a3)] hover:border-[var(--step-line-active-color,#9780ff)]"
                )}>
                  {item.icon}
                </div>
                
                <div className={cn(
                  "transition-all duration-300 min-w-0",
                  isLeft ? "text-right" : "text-left"
                )}>
                  <div className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    isActive 
                      ? "text-[var(--time-active-color,#555555)]" 
                      : "text-[var(--time-inactive-color,#a3a3a3)]"
                  )}>
                    {item.time}
                  </div>
                  <div className={cn(
                    "text-xs max-w-40 transition-colors duration-300",
                    "text-[var(--description-color,#555555)]"
                  )}>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}