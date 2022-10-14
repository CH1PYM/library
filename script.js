const book = document.querySelector('.book');
const autor = document.querySelector('.autor');
const pages = document.querySelector('.pages');
const status = document.querySelector('.status');
const buttonSubmit = document.querySelector('.submit');
const display = document.querySelector('.display');
let counterArr = 0;
let counterCard = 0;

let myLibrary = [];
function createBook(name, autor, pages, status, index) {
    this.name = name;
    this.autor = autor;
    this.pages = pages;
    this.status = status;
    this.index = index;

}

createBook.prototype.displayBook = function() {
    const divCard = document.createElement('div')
    divCard.classList.add('mainCard');
    display.appendChild(divCard);
    divCard.setAttribute('id','divCard'+counterCard);
    creatingCard(this.name);
    creatingCard(this.autor);
    creatingCard(this.pages);
    creatingCard(this.status);
    const button = document.createElement('button');
    button.classList.add(counterArr, "card", "button");
    button.setAttribute('role','buttton');
    button.innerHTML = "delete";
    display.appendChild(button); 
}

function creatingCard(info){
    
    const div = document.createElement('div')
    div.classList.add(counterArr, "card");
    display.appendChild(div); 
    div.textContent = info;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function resetInputs(){
    book.value = "";
    autor.value = "";
    pages.value = "";
    status.value = "";
}

buttonSubmit.addEventListener('click', () => {
    const books = new createBook(book.value, autor.value, pages.value, status.value, counterArr);
    addBookToLibrary(books);
    books.displayBook();
    console.log(myLibrary);
    const divCard = document.getElementById('divCard'+counterArr);
    divAll = document.getElementsByClassName(counterArr);
    counterArr++;
    counterCard++;
    for(i= 0; i<=4; i++){
        divCard.appendChild(divAll[i]);
        console.log(i);
    }
    console.log(divCard);
    resetInputs();
    

})
window.addEventListener('click', (e) => {
 if(e.target.classList[1] == "card" && e.target.classList[2] == "button"){
    const element = document.getElementById('divCard'+e.target.classList[0]);
    element.remove();
 }
})

