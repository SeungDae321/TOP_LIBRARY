# TOP_LIBRARY
#how things work (in the aspect of the user)
1. user add their own book to the 'library' variable through inputs.

2. user can see their info on the page

how things work (in the inside of the code)
1. accept user data from input elements to the app.js
#title / #auther / #pages / #isRead -> js file

2. in js file, the data schema is like this:
function Book(title, auther, pages, isRead){
    this.title = title;
    this.auther = auther;
    this.pages = pages;
    this.isRead = isRead;
};

3. make an object based on the user data (automatically!!)
not modified yet...

4. push the object into the library variable; const library = [];

5. loop through the library data to the html element called <main ul>

