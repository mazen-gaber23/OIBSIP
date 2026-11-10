let new_Task_Form = document.getElementById("taskForm");
let pendingEmpty = document.getElementById("pendingEmpty");
let completedEmpty = document.getElementById("completedEmpty");
let pendingCount = document.getElementById("pendingCount");
let completedCount = document.getElementById("completedCount");
let actualPendingCount = 0;
let actualCompletedCount = 0;

function deleteCompletedTask(taskCard) {
    let deleteButton = taskCard.querySelector(".btn-outline-danger");
    deleteButton.addEventListener("click", function () {
        taskCard.remove();
        actualCompletedCount = actualCompletedCount - 1;
        completedCount.innerHTML = `
            ${actualCompletedCount} completed
        `;
        updateEmptyState()
        saveInStorage();
    });
}
function completeTask(taskCard) {

    let completeButton = taskCard.querySelector(".btn-success");

    completeButton.addEventListener("click", function () {

        let taskTitle = taskCard.querySelector(".pending_Task h5").textContent;
        let addedTime = taskCard.querySelector(".task-date").textContent;

        let completedAt = new Date();

        let completedTimestamp = completedAt.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric"
        }) + " • " + completedAt.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit"
        });

        let completedList = document.getElementById("completedList");

        let completedCard = document.createElement("div");
        completedCard.className = "task-card completed-card";

        completedCard.innerHTML = `
            <div class="task-info">
                <span class="task-circle checked">
                    <i class="fa-solid fa-check"></i>
                </span>

                <div>
                    <h5>${taskTitle}</h5>

                    <small>
                        <i class="fa-regular fa-calendar"></i>
                        ${addedTime}
                    </small>

                    <small class="completed-time">
                        <i class="fa-solid fa-check-circle"></i>
                        Completed: ${completedTimestamp}
                    </small>
                </div>
            </div>

            <div class="task-actions">

                <button class="btn btn-outline-danger btn-sm">
                    <i class="fa-solid fa-trash"></i>
                </button>

            </div>
        `;

        completedList.appendChild(completedCard);

        actualPendingCount = actualPendingCount - 1;

        pendingCount.innerHTML = `
            ${actualPendingCount} pending
        `;

        actualCompletedCount = actualCompletedCount + 1;

        completedCount.innerHTML = `
            ${actualCompletedCount} completed
        `;

        taskCard.remove();

        updateEmptyState()

        deleteCompletedTask(completedCard);
        saveInStorage()
    });
}
function deleteTask(taskCard) {
    let deleteButton = taskCard.querySelector(".btn-outline-danger");
    deleteButton.addEventListener("click", function () {
        taskCard.remove();
        actualPendingCount = actualPendingCount - 1;
        pendingCount.innerHTML = `
            ${actualPendingCount} Pending
        `;
        updateEmptyState()
        saveInStorage();
    });
}
function editTask(taskCard) {
    let editButton = taskCard.querySelector(".btn-outline-primary");
    let taskActions = taskCard.querySelector(".task-actions");
    editButton.addEventListener("click", function () {
        let taskInfo = taskCard.querySelector(".pending_Task h5");
        taskCard.dataset.addedTime =
            taskCard.querySelector(".task-date").textContent;
        taskCard.querySelector(".task-info").innerHTML = `
            <input type="text" class="form-control edit-task-input" value="${taskInfo.textContent}">
        `;
        taskActions.innerHTML = `
            <button class="btn btn-success btn-sm save-btn">
                <i class="fa-solid fa-check"></i> Save
            </button>
        `;

        saveTask(taskCard);
        let saveButton = taskCard.querySelector(".save-btn");
        saveButton.classList.remove("d-none");
        saveButton.classList.add("d-block");

    });
}
function saveTask(taskCard) {
    let saveButton = taskCard.querySelector(".save-btn");
    let editInput = taskCard.querySelector(".edit-task-input");

    saveButton.addEventListener("click", function () {
        let updatedTaskValue = editInput.value.trim();

        if (updatedTaskValue !== "") {
            let editedAt = new Date();
            let newtimestamp = editedAt.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            }) + " • " + editedAt.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit"
            });
            let timestamp = taskCard.dataset.addedTime;
            let taskInfo = taskCard.querySelector(".task-info");
            let taskActions = taskCard.querySelector(".task-actions");
            taskInfo.innerHTML = `
                <span class="task-circle"></span>
                <div class="pending_Task">
                    <h5>${updatedTaskValue}</h5>
                    <small>
                        <i class="fa-regular fa-calendar"></i>
                        <span class="task-date"> Added: ${timestamp}</span>
                        <span class="task-date"> Edited: ${newtimestamp}</span>
                    </small>
                </div>`

            taskActions.innerHTML = `
                                       
                                        <button class="btn btn-success btn-sm">
                                            <i class="fa-solid fa-check"></i> Complete
                                        </button>

                                        <button class="btn btn-outline-primary btn-sm">
                                            <i class="fa-solid fa-pen"></i> Edit
                                        </button>

                                        <button class="btn btn-outline-danger btn-sm">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    `;
            deleteTask(taskCard);
            editTask(taskCard);
            completeTask(taskCard);
            updateEmptyState();
            saveInStorage()


        }

    });
}
function AddTask() {
    new_Task_Form.addEventListener("submit", function (event) {
        event.preventDefault();
        let taskInput = document.getElementById("taskInput");
        let taskValue = taskInput.value.trim();
        if (taskValue !== "") {
            let addedAt = new Date();
            let timestamp = addedAt.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
            }) + " • " + addedAt.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit"
            });
            let pendingList = document.getElementById("pendingList");
            let taskCard = document.createElement("div");
            taskCard.className = "task-card";
            taskCard.innerHTML = `
                                    <div class="task-info">
                                        <span class="task-circle"></span>
                                        <div class="pending_Task">
                                            <h5>${taskValue}</h5>
                                            <small>
                                                <i class="fa-regular fa-calendar"></i>
                                                <span class="task-date"> Added: ${timestamp}</span>
                                            </small>
                                        </div>
                                    </div>

                                    <div class="task-actions">
                                        <button class="btn btn-success btn-sm">
                                            <i class="fa-solid fa-check"></i> Complete
                                        </button>

                                        <button class="btn btn-outline-primary btn-sm">
                                            <i class="fa-solid fa-pen"></i> Edit
                                        </button>

                                        <button class="btn btn-outline-danger btn-sm">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>
                                    </div>`;
            actualPendingCount = actualPendingCount + 1
            pendingCount.innerHTML = `
            ${actualPendingCount} Pending
            `
            pendingList.appendChild(taskCard);
            updateEmptyState()
            saveInStorage()
            taskInput.value = "";
            deleteTask(taskCard);
            editTask(taskCard);
            completeTask(taskCard);

        }

    }
    )

}
function updateEmptyState() {

    let pendingList = document.getElementById("pendingList");
    let completedList = document.getElementById("completedList");
    let pendingTasks = pendingList.querySelectorAll(".task-card");
    let completedTasks = completedList.querySelectorAll(".task-card");
    if (pendingTasks.length === 0) {
        pendingEmpty.classList.remove("d-none");
    } else {
        pendingEmpty.classList.add("d-none");
    }
    if (completedTasks.length === 0) {
        completedEmpty.classList.remove("d-none");
    } else {
        completedEmpty.classList.add("d-none");
    }
}
function saveInStorage() {
    let pendingList = document.getElementById("pendingList");
    let completedList = document.getElementById("completedList");
    let pendingTasks = pendingList.querySelectorAll(".task-card");
    let completedTasks = completedList.querySelectorAll(".task-card");

    if (pendingTasks.length === 0) {
        localStorage.removeItem("pendingTasks");
    } else {
        localStorage.setItem("pendingTasks", pendingList.innerHTML);
    }
    if (completedTasks.length === 0) {
        localStorage.removeItem("completedTasks");
    } else {
        localStorage.setItem("completedTasks", completedList.innerHTML);
    }
}
function loadTasks() {

    let pendingList = document.getElementById("pendingList");
    let completedList = document.getElementById("completedList");
    let savedPending = localStorage.getItem("pendingTasks");
    let savedCompleted = localStorage.getItem("completedTasks");

    if (savedPending !== null) {
        pendingList.innerHTML = savedPending;
    }

    if (savedCompleted !== null) {
        completedList.innerHTML = savedCompleted;
    }

    actualPendingCount = pendingList.querySelectorAll(".task-card").length;
    actualCompletedCount = completedList.querySelectorAll(".task-card").length;

    pendingCount.innerHTML = `${actualPendingCount} pending`;
    completedCount.innerHTML = `${actualCompletedCount} completed`;

    updateEmptyState()

    let pendingTasks = pendingList.querySelectorAll(".task-card");

    for (let i = 0; i < pendingTasks.length; i++) {
        deleteTask(pendingTasks[i]);
        editTask(pendingTasks[i]);
        completeTask(pendingTasks[i]);
    }

    let completedTasks = completedList.querySelectorAll(".task-card");

    for (let i = 0; i < completedTasks.length; i++) {
        deleteCompletedTask(completedTasks[i]);
    }

}
loadTasks()
AddTask();
