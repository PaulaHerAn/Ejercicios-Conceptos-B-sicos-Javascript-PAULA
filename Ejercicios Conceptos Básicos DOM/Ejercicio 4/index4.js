/*.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

const button = document.createElement('button')
button.idName = 'btnToClick'
button.innerText = 'Haz click aquí'

button.addEventListener, (event) => console.log(event)
document.body.appendChild(btn)

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInput = document.querySelector('.focus')
input.addEventListener('focus', (event) => console.log(event.target.value))

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const value = document.querySelector('.value')
value.addEventListener('input', (e) => console.log(e.target.value))
