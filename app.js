
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

//html에서 사용자가 입력하는 데이터 추출
const button = document.querySelector('.contents button');
const inputs = document.querySelectorAll('.inputs input');

button.addEventListener('click',()=>{
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    
    const newBooks = new Book(title, author, pages) //1. 새로운 책 생성

    library.push(newBooks) //2. 책 라이브러리에 저장
    for(let book of library){
        adder(book.title) //3. 라이브러리에 있는 책 데이터 출력
    }
})



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
};