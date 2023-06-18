import { type FC, Fragment } from 'react'
import cn from 'classnames'

import s from './Stepper.module.scss'

interface StepperProps {
  currentIndex: number
  steps: number[]
}

export const Stepper: FC<StepperProps> = ({ currentIndex, steps }) => {
  return (
    <>
      <div className={s.container}>
        {steps.map((step, index) => (
          <Fragment key={index}>
            {index > 0 && (
              <div className={cn(s.line, { [s.progress]: index < currentIndex + 1 })}></div>
            )}
            <div
              className={cn(s.circle, {
                [s.inActive]: index === currentIndex,
                [s.success]: Number(step) < currentIndex + 1
              })}
              key={step}
            >
              <span
                className={cn(s.step, {
                  [s.purple]: step < currentIndex + 1,
                  [s.stepActive]: index === currentIndex
                })}
              >
                {step}
              </span>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  )
}
