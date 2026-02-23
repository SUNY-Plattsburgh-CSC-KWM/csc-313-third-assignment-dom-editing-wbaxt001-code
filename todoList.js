const WorkItem = class {
    #task;
    #dueDate;
    #priority;
    #complete;

    constructor(task, dueDate, priority) {
        this.#task = task;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#complete = false;
    }

    getTask() {
        return this.#task;
    }

    getDueDate() {
        return this.#dueDate;
    }

    getPriority() {
        return this.#priority;
    }

    getComplete() {
        return this.#complete;
    }

    setComplete(status) {
        this.#complete = status;
    }
};

let workItems = [];

function redraw() {
    const tasksDiv = document.getElementById("tasks");

    
    while (tasksDiv.firstChild) {
        tasksDiv.removeChild(tasksDiv.firstChild);
    }

    
    for (let i = 0; i < workItems.length; i++) {
        const item = workItems[i];

        const p = document.createElement("p");
        p.textContent = `${i}: ${item.getTask()} | Due: ${item.getDueDate()} | Priority: ${item.getPriority()}`;

        if (item.getComplete()) {
            p.style.color = "green";
        } else {
            p.style.color = "red";
        }

        tasksDiv.appendChild(p);
    }
}

function addItem() {
    const task = prompt("Enter task description:");
    const dueDate = prompt("Enter due date:");
    const priority = prompt("Enter priority:");

    if (task && dueDate && priority) {
        const newItem = new WorkItem(task, dueDate, priority);
        workItems.push(newItem);
        redraw();
    }
}

function completeItem() {
    const index = prompt("Enter task number to mark complete:");

    const i = parseInt(index);

    if (!isNaN(i) && i >= 0 && i < workItems.length) {
        workItems[i].setComplete(true);
        redraw();
    }
}
