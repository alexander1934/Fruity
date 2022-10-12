const rewiew = document.querySelector('.rewiew-div');
const rewiewText = rewiew.textContent
// console.log(rewiewText)



// const array = ['frgergbergr', 'rtrggrghr']
//  function arrayCycle (array){
//     let i
//     for(i=0; i<array.length; i++)
//    console.log(array[i])
// }

const textValue = () => {
    rewiew.textContent = "rgreugbnrg"
}

const button = document.querySelector('.button')

button.addEventListener("click", textValue)

// // arrayCycle(array)