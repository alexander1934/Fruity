let newButton = document.querySelector('.button');
let reverseButton = document.querySelector('.reverse-button');
let rewiew = document.querySelector('.rewiew-div');

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newButton.onclick = ((currentPosition = 0) => () => {
    if (currentPosition < arr.length) {
      rewiew.textContent = arr[currentPosition++]
      console.log(currentPosition)
    };
  })();

  reverseButton.onclick = ((currentPosition) => () => {
    if (currentPosition < arr.length) {
      rewiew.textContent = arr[currentPosition--]
      console.log(currentPosition)
    };
  })();