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


const TheAnxiousGeneration = new Book('Jonathan Haidt', 528, false);

