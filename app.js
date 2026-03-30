const library = [];

function Book(title, auther, pages, isRead){
    this.title = title;
    this.auther = auther;
    this.pages = pages;
    this.isRead = isRead;
};

Book.prototype.info = function(){
    return `${this.title} by ${this.auther}, ${this.pages} pages, ${this.isRead ? "read" : "not read yet"}`
}


const TheAnxiousGeneration = new Book('The Anxious Generation','Jonathan Haidt', 528, false);
const TedTalk = new Book('Ted Talk','Christ Enderson', 340, true);

library.push(TheAnxiousGeneration);
library.push(TedTalk);



const main = document.querySelector('main ul');
function adder(content){
    const li = document.createElement('li');
    li.innerText= content;
    main.append(li)
}

for(let book of library){
    adder(book.title);
    adder(book.auther)
};
