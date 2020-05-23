let foundItem = null;
export const findStep = (steps, stepId) => {
  steps.forEach((element) => {
    if (element.step_id === stepId) {
      return (foundItem = element);
    } else {
      return findStep(element.children, stepId);
    }
  });
  return foundItem;
};

export const removeStep = (steps, removeItem) => {
  steps.forEach((step, i) => {
    if (step.step_id == removeItem.step_id) {
      steps.splice(i, 1, ...step.children);
    } else {
      removeStep(step.children, removeItem);
    }
  });
};
