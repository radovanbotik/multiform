import React, { useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const prev = () => {
    setCurrentStepIndex(prev => {
      if (prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
  };
  const next = () => {
    setCurrentStepIndex(prev => {
      if (prev > steps.length - 1) {
        return prev;
      }
      return prev + 1;
    });
  };
  const goTo: (step: number) => void = step => {
    setCurrentStepIndex(step);
  };

  return {
    currentStepIndex,
    steps: steps,
    step: steps[currentStepIndex],
    prev,
    next,
    goTo,
  };
};

export default useMultistepForm;
