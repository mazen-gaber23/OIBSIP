# To-Do List Web Application

A modern, responsive, and user-friendly **To-Do List Web Application** built as a front-end web development project. The application allows users to create, edit, complete, and delete tasks while keeping track of pending and completed tasks with timestamps and local storage persistence.

---

## 🛠️ Tech Stack Used

* **HTML5:** Structuring the application layout, task form, pending tasks, completed tasks, and empty states.
* **CSS3:** Custom styling, gradients, shadows, rounded cards, hover effects, responsive layouts, and visual states.
* **Bootstrap 5:** Responsive grid system, buttons, spacing utilities, form styling, containers, and responsive design.
* **Vanilla JavaScript (ES6+):** Task creation, editing, completion, deletion, timestamps, task counters, empty-state handling, and local storage management.
* **FontAwesome:** Icons for tasks, buttons, timestamps, completion states, and interface elements.
* **LocalStorage:** Persists pending and completed tasks so they remain available after refreshing the page.

---

## ✨ Features & Functionality

* **Add Tasks:** Allows users to enter and add new tasks to the Pending Tasks section.
* **Pending Tasks:** Displays all tasks that have not been completed yet.
* **Complete Tasks:** Moves a pending task to the Completed Tasks section when the user clicks the Complete button.
* **Edit Tasks:** Allows users to edit the text of an existing pending task.
* **Delete Pending Tasks:** Removes tasks from the Pending Tasks section.
* **Delete Completed Tasks:** Removes tasks from the Completed Tasks section.
* **Task Counters:** Dynamically displays the number of pending and completed tasks.
* **Task Timestamps:** Records when a task was added, edited, and completed.
* **Empty States:** Displays friendly messages when there are no pending or completed tasks.
* **LocalStorage Persistence:** Saves tasks locally and restores them when the page is reopened or refreshed.
* **Automatic Storage Cleanup:** Removes the corresponding LocalStorage data when the last task is deleted from a section.
* **Interactive Task Cards:** Uses hover effects, shadows, rounded corners, and clear action buttons.
* **Responsive Design:** Adapts the layout for desktop, tablet, and mobile screens.
* **Mobile-Friendly Layout:** Task cards and action buttons adjust automatically on smaller screens.

---

## 📚 Application Sections

1. **To-Do List Header** – Displays the application title and visual icon.
2. **Add Task Form** – Allows users to enter and add a new task.
3. **Pending Tasks** – Displays tasks that are still waiting to be completed.
4. **Completed Tasks** – Displays tasks that have been completed.
5. **Task Counter** – Shows the current number of pending and completed tasks.
6. **Task Actions** – Provides Complete, Edit, Save, and Delete functionality.
7. **Empty States** – Provides friendly messages when a task list is empty.

---

## 📁 Folder Structure

```text
To-Do List/
├── index.html
├── css/
│   ├── bootstrap.min.css
│   ├── all.min.css
│   └── app.css
├── Js/
│   ├── bootstrap.bundle.js
│   └── index.js
├── assets/
│   └── 1441035.png
└── README.md
```

---

## 🎨 Design Highlights

* Clean and modern To-Do List interface.
* Blue and green color palette for pending and completed tasks.
* Gradient background for a modern visual appearance.
* Separate visual styling for Pending and Completed sections.
* Rounded task cards with subtle shadows.
* Clear and accessible action buttons.
* Color-coded task counters.
* Circular task status indicators.
* Green completion indicators for completed tasks.
* Friendly empty-state messages with FontAwesome icons.
* Hover animations on task cards.
* Responsive layout using Bootstrap's grid system and CSS media queries.

---

## 💾 Data Persistence

The application uses **Browser LocalStorage** to save the current tasks.

Pending tasks are stored under:

```text
pendingTasks
```

Completed tasks are stored under:

```text
completedTasks
```

When the application is loaded, previously saved tasks are automatically restored.

The application also removes the corresponding LocalStorage item when its task list becomes empty.

---

## ⏱️ Task Tracking

Each task can contain useful time information:

* **Added:** The date and time when the task was created.
* **Edited:** The date and time when the task was last edited.
* **Completed:** The date and time when the task was marked as completed.

This provides a simple way to keep track of task activity.

---

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile phones
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

On smaller screens, task cards change their layout so that task information and action buttons remain easy to use.

The responsive behavior is implemented using **Bootstrap's responsive grid** together with custom CSS media queries.

---

## 🧠 JavaScript Functionality

The application is built using **Vanilla JavaScript** without any JavaScript framework.

Main functions include:

* `AddTask()` – Adds new tasks to the Pending Tasks list.
* `completeTask()` – Moves tasks from Pending to Completed.
* `editTask()` – Enables editing of an existing task.
* `saveTask()` – Saves the updated task text and records the edit timestamp.
* `deleteTask()` – Deletes pending tasks.
* `deleteCompletedTask()` – Deletes completed tasks.
* `updateEmptyState()` – Controls the empty-state messages.
* `saveInStorage()` – Saves or removes task data from LocalStorage.
* `loadTasks()` – Restores saved tasks and reconnects their event listeners.

---

## 👨‍💻 Project

**To-Do List Web Application**

Created as a front-end web development project to practice:

* HTML5
* CSS3
* Bootstrap
* Vanilla JavaScript
* DOM Manipulation
* Event Handling
* LocalStorage
* Responsive Web Design
* CRUD Operations
* Date and Time Handling

---

⭐ **A simple and practical task management application built with HTML, CSS, Bootstrap, and Vanilla JavaScript.**