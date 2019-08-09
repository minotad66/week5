/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const body = document.querySelector('body')
const button = document.querySelector('#bgrChangeBtn')

button.addEventListener('click',() => {
  body.style.backgroundColor = '#f0ad4e'
} ) 

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

buttonAlert = document.querySelector('#alertBtn')

buttonAlert.addEventListener('click', ()=>{
    alert("Thanks for visiting Bikes for Refugees!")
})

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

const addText = document.querySelector('#mainArticles')
const buttonText = document.querySelector('#addTextBtn')

buttonText.addEventListener('click', ()=>{
  //  addText.innerHTML = ""
  addText.innerHTML +=  `<article class="article">
  <p class="article-lead"> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </p>
</article>`
})

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

console.log('hola')
const buttonLarge = document.querySelector('#largerLinksBtn')
buttonLarge.addEventListener('click',() => {
  document.querySelectorAll('a').forEach(a => a.style.fontSize = "2em")
}) 