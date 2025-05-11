# My Library App

A simple web application to manage a collection of books.

## Technologies Used

This project was built using the following web technologies:

- **HTML:** Used for structuring the content and layout of the web page, including the book display and the "New Book" form.
- **CSS:** Used for styling the visual appearance of the application, including the layout of book cards, the form, and overall page aesthetics.
- **JavaScript:** Used for the dynamic behavior of the application, including:
    - Creating and manipulating DOM elements to display books.
    - Handling user interactions such as clicking the "New Book" button, submitting the form, clicking the "Remove" button, and toggling the "Read" status.
    - Managing the book data in a JavaScript array (`myLibrary`).
    - Generating unique IDs for each book using `crypto.randomUUID()`.
    - **Utilizing JavaScript Classes:** The `Book` object is defined using JavaScript classes, demonstrating object-oriented programming principles. This includes the constructor and prototype methods for managing book properties.
    - Preventing the default form submission behavior using `event.preventDefault()`.

## Git Branching Practice

During the development of this application, I practiced using Git branches for managing different features and changes. This involved creating separate branches for new functionalities or experimental code, and then merging them back into the main branch upon completion. This workflow helps to keep the codebase organized and allows for easier collaboration and version control.

This project does not currently utilize any external libraries or frameworks.
