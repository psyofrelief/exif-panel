import { ProcessStep, processSteps } from "@/types/process";
import React from "react";

// Helper component for an individual step
const ProcessStepComponent: React.FC<{ step: ProcessStep }> = ({ step }) => {
  return (
    // Outer flex container for the whole step (Number + Content)
    <div className="flex w-full mb-4 last:mb-0">
      {/* 1. Number Column (Left Side)
       */}
      <div className="flex flex-col items-center mr-6">
        {/* The Number */}
        <div className="text-muted">{`0${step.id}`}</div>

        {/* The Vertical Line
         */}
        {step.id < processSteps.length && (
          <div className="grow w-px bg-muted mt-5"></div>
        )}
      </div>

      {/* 2. Content Column (Right Side)
       */}
      <div className="flex flex-col pb-9">
        {/* Title */}
        <h3 className="font-medium tracking-wider mb-4 uppercase font-mono">
          {step.title}
        </h3>
        {/* Description */}
        <p className="leading-relaxed">{step.description}</p>
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
