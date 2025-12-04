import { ProcessStep, processSteps } from "@/types/process";
import React from "react";

const ProcessStepComponent: React.FC<{ step: ProcessStep }> = ({ step }) => {
  return (
    // Outer flex container for the whole step
    <div className="flex w-full mb-3 last:mb-0">
      {/* 1. Number Column (Left Side)
       */}
      <div className="flex flex-col items-center mr-6">
        {/* The Number */}
        <div className="text-muted">{`0${step.id}`}</div>

        {/* The Vertical Line */}
        {step.id < processSteps.length && (
          <div className="grow w-px bg-muted mt-3"></div>
        )}
      </div>

      {/* 2. Content Column (Right Side) */}
      <div className="flex flex-col pb-9">
        {/* Title */}
        <p className="mb-xs uppercase font-mono">{step.title}</p>
        {/* Description */}
        <p className="leading-relaxed text-foreground-secondary max-w-[400px]">
          {step.description}
        </p>
      </div>
    </div>
  );
};

// Main component to render the entire process flow
const ProcessFlow: React.FC = () => {
  return (
    <div className="bg-background max-w-[512px]">
      <div className="flex flex-col">
        {processSteps.map((step) => (
          <ProcessStepComponent key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
