const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const categorySelect = document.querySelector("#category-select");
const errorMessage = document.querySelector("#error-message");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const searchInput = document.querySelector("#search-input");
const clearAllButton = document.querySelector("#clear-all-btn");


const STORAGE_KEY = "quicknotes-app-notes";


function loadNotes() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (!saved) {
            return [];
        }

        const parsed = JSON.parse(saved);

        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Unable to load saved notes:", error);
        return [];
    }
}


let notes = loadNotes();


function saveNotes() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}


function updateNoteCount() {
    if (notes.length === 0) {
        noteCount.textContent = "You have no notes yet.";
    } else if (notes.length === 1) {
        noteCount.textContent = "You have 1 note.";
    } else {
        noteCount.textContent = `You have ${notes.length} notes.`;
    }
}


function renderNotes() {
    notesList.innerHTML = "";

    const searchTerm = searchInput.value.trim().toLowerCase();

    const visibleNotes = notes.filter((note) =>
        note.text.toLowerCase().includes(searchTerm)
    );

    if (visibleNotes.length === 0) {
        const emptyItem = document.createElement("li");

        emptyItem.className = "empty-message";

        emptyItem.textContent = searchTerm
            ? "No notes match your search."
            : "You have no notes yet.";

        notesList.appendChild(emptyItem);
    } else {
        visibleNotes.forEach((note) => {
            
            const item = document.createElement("li");

            item.classList.add(
                "note-card",
                `category-${note.category.toLowerCase()}`
            );

            const text = document.createElement("p");

            text.className = "note-text";
            text.textContent = note.text;

            const meta = document.createElement("div");

            meta.className = "note-meta";

            const category = document.createElement("span");

            category.className = "category-label";
            category.textContent = note.category;

            const date = document.createElement("time");

            date.className = "note-date";
            date.textContent = note.createdAt;

            const deleteButton = document.createElement("button");

            deleteButton.type = "button";
            deleteButton.className = "delete-button";
            deleteButton.textContent = "Delete";

            deleteButton.setAttribute(
                "aria-label",
                `Delete note: ${note.text}`
            );

            deleteButton.addEventListener("click", () => {
                deleteNote(note.id);
            });

            meta.append(category, date, deleteButton);
            item.append(text, meta);
            notesList.appendChild(item);
        });
    }

    updateNoteCount();
}

function addNote(text, category) {
    const id =
        window.crypto &&
        typeof window.crypto.randomUUID === "function"
            ? window.crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const note = {
        id: id,
        text: text,
        category: category,
        createdAt: new Date().toLocaleString()
    };

    notes.unshift(note);

    saveNotes();
    renderNotes();
}

function deleteNote(id) {
    notes = notes.filter((note) => note.id !== id);

    saveNotes();
    renderNotes();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = noteInput.value.trim();
    const category = categorySelect.value;

    if (text.length === 0) {
        errorMessage.textContent = "Please type a note first.";
        noteInput.focus();
        return;
    }

    if (text.length > 200) {
        errorMessage.textContent =
            "Notes must be 200 characters or fewer.";

        noteInput.focus();
        return;
    }

    errorMessage.textContent = "";

    addNote(text, category);

    noteInput.value = "";
    noteInput.focus();
});

searchInput.addEventListener("input", () => {
    renderNotes();
});

clearAllButton.addEventListener("click", () => {
    if (confirm("Delete all notes?")) {
        notes = [];

        saveNotes();
        renderNotes();
    }
});