export function toggleLesson(module, lesson) {
  return {
    type : "TOGGLE_LESSON",
    module,
    lesson,
  };
}

export function addCarShop(aparelhos) {
  return {
    type:"ADD_CAR",
    aparelhos,
  }
}