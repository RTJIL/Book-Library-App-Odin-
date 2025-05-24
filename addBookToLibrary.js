const myLibrary = [];

//creating class for using constructor inside it, replace basic constructor func
class Book {
  constructor(name, pages, id) {
    this.name = name;
    this.pages = pages;
    this.id = id;
  }
}

function addBookToLibrary(name, pages) {
  const obj = new Book(name, pages, crypto.randomUUID());
  myLibrary.push(obj);
}

//Loop through all arr elements
function myLibraryLoop() {
  const container = document.getElementById('books');
  container.innerHTML = ''; // clear previous entries

  myLibrary.forEach(function (bookObj) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    // Loop through each key in the book object
    for (let key in bookObj) {
      const infoDiv = document.createElement('div');
      infoDiv.textContent = `${key}: ${bookObj[key]}`;
      bookDiv.appendChild(infoDiv);
    }

    // Create a button for each book
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', function () {
      // remove the book from myLibrary by id
      const index = myLibrary.findIndex((b) => b.id === bookObj.id);
      if (index > -1) {
        myLibrary.splice(index, 1);
        myLibraryLoop();
      }
    });

    readBtn.textContent = 'Read';
    readBtn.addEventListener('click', function () {
      // Toggle background color
      if (readBtn.style.backgroundColor === 'lightgreen') {
        readBtn.style.backgroundColor = '';
      } else {
        readBtn.style.backgroundColor = 'lightgreen';
      }
    });
    bookDiv.appendChild(removeBtn);
    bookDiv.appendChild(readBtn);

    container.appendChild(bookDiv);
  });
}

export { addBookToLibrary, myLibraryLoop };
