// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
let myDiv = document.createElement('div')
document.body.appendChild(myDiv)
// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let myP2 = document.createElement('p')
let myDiv2 = document.createElement('div')
myDiv2.appendChild(myP2)
document.body.appendChild(myDiv2)
// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 	loop con javascript.
let myDiv3 = document.createElement('div')
for (let i = 0; i <= 5; i++) {
  let myP3 = document.createElement('p')
  myDiv3.appendChild(myP3)
}
document.body.appendChild(myDiv3)
// 1.4 Inserta dinamicamente con javascript en un html una p con el 	texto 'Soy dinámico!'.
let myP4 = document.createElement('p')
myP4.textContent = 'Soy dinámico!'
document.body.appendChild(myP4)
// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let myH2 = document.querySelector('h2', '.fn-insert-here el texto')
myH2.textContent = 'Wubba Lubba dub dub'
// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
let myUl = document.createElement('ul')
for (const app of apps) {
  let myLi = document.createElement('li')
  myLi.textContent = app
  myUl.appendChild(myLi)
}
document.body.appendChild(myUl)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let toRemoves = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < toRemoves.length; i++) {
  let toRemove = toRemoves[i]
  toRemove.remove()
}
// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild.
let myDivToInsert = document.querySelector('div')
myDivToInsert.insertAdjacentHTML('afterend', '<div><p>Voy en medio</p></div>')
// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let myDivToInsertClass = document.querySelectorAll('div.fn-insert-here')
for (const div of myDivToInsertClass) {
  let myP = document.createElement('p')
  myP.textContent = 'Voy dentro!'
  div.appendChild(myP)
}
