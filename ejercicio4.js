// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
let myButton = document.createElement('button')
myButton.textContent = 'Muestra la información del evento'
myButton.style.margin = '10px'
myButton.style.padding = '5px'
myButton.id = 'btnToClick'
document.body.appendChild(myButton)
myButton.addEventListener('click', (e) => console.log(e))

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let myFocus = document.querySelector('.focus')
myFocus.addEventListener('focus', (e) => console.log(e.target.value))
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let myValue = document.querySelector('.value')
myValue.addEventListener('input', (e) => console.log(e.target.value))
