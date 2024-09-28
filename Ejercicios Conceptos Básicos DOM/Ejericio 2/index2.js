//1.1 Inserta dinamicamente en un html un div vacio con javascript.

const myDiv = document.createElement('div')
document.body.appendChild(myDiv)

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const myDiv2 = document.createElement('div')

const myP = document.createElement('p')

myDiv2.appendChild(myP)

document.body.appendChild(myDiv2)

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const myDiv3 = document.createElement('div')

for (let i = 0; i <= 6; i++) {
  const newP = document.createElement('p')
  myDiv3.appendChild(newP)
}

document.body.appendChild(myDiv3)

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const myNewP = document.createElement('p')

myNewP.textContent = 'Soy dinámico!'

document.body.appendChild(myNewP)

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2Element = document.querySelector('.fn-insert-here')
h2Element.textContent = 'Wubba Lubba dub dub'

/*1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

const ul = document.createElement('ul')

for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}

document.body.appendChild(ul)

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementsToRemove = document.querySelectorAll('.fn-remove-me')

elementsToRemove.forEach((element) => {
  element.remove()
})

/*1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

const allDiv = querySelectorAll('div')
const pBetweenDivs = document.createElement('p')
pBetweenDivs.textContent = 'Voy en medio!'
document.body.insertBefore(pBetweenDivs, allDiv[1])

/*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here*/

const divsToInsert = document.querySelectorAll('.fn-insert-here')

divsToInsert.forEach((div) => {
  document.createElement('p')
  newParagraph.textContent = 'VoyDentro!'
  div.appendChild(newParagraph)
})
