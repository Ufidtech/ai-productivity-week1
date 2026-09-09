// Study Tracker — starter logic.
// This works, but it's intentionally minimal. Use GitHub Copilot or Copilot
// Chat to help you add one of the features listed in TODOs below.

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const stats = document.getElementById("stats");

let tasks = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text, done: false });
  input.value = "";
  render();
});

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  render();
}

function render() {
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => toggleTask(index));

    const span = document.createElement("span");
    span.textContent = task.text;

    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);
  });

  const doneCount = tasks.filter((t) => t.done).length;
  stats.textContent = `${tasks.length} tasks · ${doneCount} done`;
}

/*
  TODO — pick ONE and build it with Copilot's help:

  1. Delete button
     Add a small "×" button next to each task that removes it from the list.

  2. Save to localStorage
     Persist `tasks` so the list survives a page refresh.

  3. Due dates
     Let the user set a due date per task, and sort the list by soonest due.

  4. Priority tags
     Add a dropdown (Low/Medium/High) per task and color-code it.

  5. Filter view
     Add buttons to show All / Active / Completed tasks.

  Try prompting Copilot Chat with:
  "Add a delete button to each task in this list, for a plain JS app,
   keeping the existing style, in a way that's easy to read."
*/
