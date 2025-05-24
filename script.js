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

//creating button using DOM

const buttonContainer = document.getElementById('createNewBookDiv');
const createButton = document.createElement('button');

createButton.textContent = 'New Book';
createButton.id = 'createNewBookButton';

buttonContainer.appendChild(createButton);

//

//creating dialog using DOM

const dialogContainer = document.getElementById('createNewBookDiv');

const createDialog = document.createElement('dialog');
createDialog.id = 'data-modal';

dialogContainer.appendChild(createDialog);

const createForm = document.createElement('form');

const createDiv = document.createElement('div');
createDiv.textContent = 'This is a modal';

const createDialogButton = document.createElement('button');

// createDialogButton.classList.add("data-close-modal");

createDialogButton.id = 'data-close-modal';
createDialogButton.textContent = 'Close';

createDialog.appendChild(createForm);

// refactor/migrate-constructors-to-classes
const createInputTitleLabel = document.createElement('label');
createInputTitleLabel.setAttribute('for', 'title');
createInputTitleLabel.textContent = 'Title: ';

const createInputTitle = document.createElement('input');
createInputTitle.setAttribute('type', 'text');
createInputTitle.setAttribute('placeholder', 'Atomic Habits');
createInputTitle.setAttribute('id', 'title');
//

const createInputPagesLabel = document.createElement('label');
createInputPagesLabel.setAttribute('for', 'pages');
createInputPagesLabel.textContent = 'Pages: ';

const createInputPages = document.createElement('input');
createInputPages.setAttribute('type', 'text');
createInputPages.setAttribute('placeholder', '991');
createInputPages.setAttribute('id', 'pages');

//

const createSubmitButton = document.createElement('button');
createSubmitButton.setAttribute('type', 'submit');
createSubmitButton.textContent = 'Submit';

const createCancelButton = document.createElement('button');
createCancelButton.setAttribute('type', 'submit');
createCancelButton.setAttribute('formmethod', 'dialog');
createCancelButton.textContent = 'Cancel';

createForm.appendChild(createInputTitleLabel);
createForm.appendChild(createInputTitle);

createForm.appendChild(createInputPagesLabel);
createForm.appendChild(createInputPages);

//

const createButtonDiv = document.createElement('div');

createForm.appendChild(createButtonDiv);

createButtonDiv.appendChild(createSubmitButton);
// createButtonDiv.appendChild(createCancelButton);
//

const openButton = document.getElementById('createNewBookButton');
const modal = document.querySelector('#data-modal');

openButton.addEventListener('click', function () {
  modal.showModal();
});

modal.addEventListener('click', (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});

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

const pages = document.querySelector('#pages');

pages.addEventListener('input', (event) => {
  const value = event.target.value;

  if (isNaN(value) || value.trim() === '') {
    pages.setCustomValidity('I am expecting pages!');
  } else {
    pages.setCustomValidity('');
  }
});

myLibraryLoop();
