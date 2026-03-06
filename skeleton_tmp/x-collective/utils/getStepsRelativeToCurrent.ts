interface StepList<T> {
  label: string;
  step: T;
}

const getStepsRelativeToCurrent = <T>(
  currentStep: T,
  stepList: Array<StepList<T>>,
): Array<Array<T>> => {
  const currentStepIndex = stepList.findIndex(
    ({ step }) => step === currentStep,
  );

  return stepList.reduce(
    (accum, { step }, index) => {
      if (index < currentStepIndex) {
        accum[0].push(step);
      } else if (index > currentStepIndex) {
        accum[1].push(step);
      }

      return accum;
    },
    [[], []] as Array<Array<T>>,
  );
};

export default getStepsRelativeToCurrent;
