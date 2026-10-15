# QuickNotes

QuickNotes is a simple and user-friendly note-taking web application built with HTML, CSS, and JavaScript. It helps users organize their thoughts, tasks, and ideas by creating notes and assigning them to different categories.

## App Features

1. **Add Notes:**

- Create notes by entering text and selecting a category.

2. **Categories:**

- Organize notes into Personal, Work, and Study categories.

3. **Input Validation:**

- Prevent empty notes and notes longer than 200 characters.

4. **Date and Time:**

- Display the date and time when each note was created.

5. **Delete Notes:**

- Delete the notes when the user no longer needs them.

6. **Clear All:**

- Delete all notes after confirming the action.

7. **Search Notes:**

- Search for notes using keywords. The search is case-insensitive.

8. **Local Storage:**

- For the meantime, the notes are saved in the browser so they remain available after refreshing the page.

9. **Responsive Design:**

- The layout adjusts to different screen sizes, including mobile devices.

## Technologies Used

- HTML5 — for the whole structure of the application.
- CSS3 — for styling, layout, category colours, and responsive design.
- JavaScript — for adding, displaying, searching, deleting, and validating notes.
- Browser Local Storage — for saving notes on the user's device.

## Project Structure

The project contains the following files:

```text
quicknotes-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

- `index.html` contains the structure of the application, including the form, category dropdown, search box, notes list, and footer.
- `style.css` controls the appearance of the application, including the header, section cards, note cards, category colours, and mobile layout.
- `script.js` handles note creation, validation, deletion, searching, note counting, and saving notes to local storage.
- `README.md` provides information about the project, its features, technologies, and instructions for running it.

## How to Run the Application

**Since the appplication is yet to be deployed, find some of the easy steps to follow to run the application:**

1. Download or clone the project repository from GitHub.
2. Open the `quicknotes-app` folder in Visual Studio Code.
3. Open `index.html` in your web browser, or use the Live Server extension in Visual Studio Code.
4. Enter your note in the input field.
5. Select a category: Personal, Work, or Study.
6. Click **Add Note** to save and display the note.
7. Use the search box to find notes by entering keywords.
8. Click **Delete** to remove an individual note, or click **Clear all** to remove all notes after confirming.

## Input Validation

**QuickNotes validates user input before saving a note. See how it validates the input:**

- Firstly, If the input is empty or contains only spaces, the application displays: "Please type a note first."
- Secondly, If the note contains more than 200 characters, the application displays: "Notes must be 200 characters or fewer."
- Finally, When a valid note is added, the error message is cleared.

## Data Storage

The application uses the browser's `localStorage` to store notes. This allows saved notes to remain available when the page is refreshed or reopened in the same browser.

**Please Note:** Notes are stored locally on the user's device and are not automatically synchronized across different browsers or devices. Clearing the browser's site data may remove saved notes.

## Responsive Design

The application uses CSS Flexbox and a media query to support different screen sizes. On screens that are 600 pixels wide or narrower, the note form controls stack vertically to improve usability on mobile devices.

## Future Improvements

Some of possible future improvements may include:

- Editing existing notes.
- Filtering notes by category.
- Adding note priorities and due dates.
- Exporting notes to a file.
- Adding user accounts and cloud synchronization.

## Author

Developed as part of a web development learning project to practise HTML, CSS, JavaScript, DOM manipulation, form validation, event handling, and browser local storage.

## Three TakeAways

1. **HTML, CSS, and JavaScript work together as one to build interactive web applications**

- Through this project I have learnt that HTML provides the structure of the application, including forms, buttons, and sections. On the otherhand, CSS provides the overall appearance, layout, colours, and responsiveness of the application and again for a web application to be fully functional, it needs JavaScript which adds functionality, and in this project it does perfom functional tasks such as creating, deleting, searching, and validating notes.

2. **Web applications must handle user input carefully and manage data correctly**

- I have Learnt how to collect user input, validate it, update the page dynamically, and store data. QuickNotes uses form validation to prevent empty notes and notes exceeding 200 characters. It also uses JavaScript arrays to manage notes and browser localStorage to preserve them after the page is refreshed.

3. **Building, Testing, and Improving a Project Step by Step is crucial**

- Throughout this project, I was constantly testing and debugging to ensure that I met the required features for the web app. As observed implementing features such as note categories, search, deletion, note counting, and responsive design required me to improve the web application step by step to achieve its better functionality.

## License

This project was created for educational purposes and may be modified for learning and personal use.
