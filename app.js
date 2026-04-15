
//컨텐츠(데이터)를 넣을 컨테이너
const library = [];


//컨텐츠 구조
function Book(title, auther, pages, isRead){
    this.title = title;
    this.auther = auther;
    this.pages = pages;
    this.isRead = isRead;
};

//컨텐츠의 기능 최적화를 위해서 따로 빼서 한번에 적용하는 것
Book.prototype.info = function(){
    return `${this.title} by ${this.auther}, ${this.pages} pages, ${this.isRead ? "read" : "not read yet"}`
}

//컨텐츠 구조에 실제 데이터를 넣음
const TheAnxiousGeneration = new Book('The Anxious Generation','Jonathan Haidt', 528, false);
const TedTalk = new Book('Ted Talk','Christ Enderson', 340, true);

//구조를 통해서 생성한 컨텐츠 데이터를 컨테이너에 삽입
library.push(TheAnxiousGeneration);
library.push(TedTalk);


//컨테이너 안에 있는 데이터를 유저가 볼 수 있도록 
//html요소를 불러서 거기에 컨테이너 내용 출력하는 함수
const main = document.querySelector('main ul');
function adder(content){
    const li = document.createElement('li');
    li.innerText= content;
    main.append(li)
}

//컨테이너에 반복문을 사용하여서 앞에서 만든 함수를 적용
for(let book of library){
    adder(book.title);
    adder(book.auther)
};