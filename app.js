// Elements.
const repsContainer= document.querySelector('#reps');
const plusButton = document.querySelector('#plus-button');
const resetButton = document.querySelector('#reset-button');

// State.
let repsCount = 0;

// Event listeners.
plusButton.addEventListener('click', () => {
  repsCount++;
  repsContainer.innerHTML = repsCount;
});

resetButton.addEventListener('click', () => {
  repsCount = 0;
  repsContainer.innerHTML = repsCount;
});