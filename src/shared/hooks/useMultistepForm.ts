import { type ReactElement, useState } from 'react'
import { stepsSchema } from '../lib/validation/infoSchema'

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  const back = () => {
    setCurrentStepIndex((i) => i - 1)
  }

  const goTo = (index: number) => {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    currentValidationSchema: stepsSchema[currentStepIndex],
    steps: [...Array(steps.length).keys()].map((n) => n + 1),
    isFirtsStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back
  }
}
