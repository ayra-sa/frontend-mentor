const todoInput = document.getElementById("todo");
const listWrap = document.querySelector(".list-wrap");
const items = document.querySelector(".items");
const numlist = document.querySelector(".num");
const clearBtn = document.getElementById("clear");
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
let num = 0;

// loadTasks
const loadTasks = () => {
  // check if localstorage has any tasks
  // if not then return
  if (localStorage.getItem("tasks") == null) return;

  // get the tasks from localstorage and convert it to array
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  // loop through the tasks and add to the list
  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.className = `list ${task.completed ? "completed" : "active"}`;

    let div = document.createElement("div");
    let round = document.createElement("button");
    let t = document.createTextNode(task.task);
    li.setAttribute("id", task.task.split(" ").join("-"))
    li.draggable = true;
    div.className = "left";
    round.className = "round";
    div.appendChild(round);
    div.appendChild(t);
    li.appendChild(div);

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    listWrap.insertBefore(li, listWrap.children[0]);

    closeHandler();
  });

  // dragnDrop();

  numlist.innerHTML = tasks.length;
};

const addTask = () => {
  // return if task is empty
  if (todoInput.value === "") {
    // alert("please");
    return false;
  }

  // add task to localstorage
  localStorage.setItem(
    "tasks",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("tasks") || "[]"),
      { task: todoInput.value, completed: false },
    ])
  );

  // create list item
  printTask();

  // dragnDrop();

  let tasks = JSON.parse(localStorage.getItem("tasks"));

  numlist.innerHTML = tasks.length;

  todoInput.value = "";
};

const printTask = () => {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let round = document.createElement("button");
  let t = document.createTextNode(todoInput.value);
  li.setAttribute("id", `${todoInput.value}`.split(" ").join("-"))
  li.className = "list active";
  li.draggable = true;
  div.className = "left";
  round.className = "round";
  div.appendChild(round);
  div.appendChild(t);
  li.appendChild(div);

  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  listWrap.insertBefore(li, listWrap.children[0]);

  closeHandler();
};

listWrap.addEventListener("click", (ev) => {
  taskComplete(ev);
});

const taskComplete = (ev) => {
  if (ev.target.tagName === "BUTTON") {
    let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    tasks.forEach((task) => {
      if (task.task === ev.target.parentNode.innerText) {
        task.completed = !task.completed;
        console.log(task.completed);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    ev.target.parentNode.parentNode.classList.toggle("completed");
    ev.target.parentNode.parentNode.classList.toggle("active");
  }
};

clearBtn.addEventListener("click", () => {
  const completed = listWrap.querySelectorAll(".completed");
  completed.forEach((elem) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach((task) => {
      if (elem.classList.contains("remove") != task.completed) {
        tasks.splice(tasks.indexOf(task), 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
    elem.remove();
  });
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  numlist.innerHTML = tasks.length;
});

const closeHandler = () => {
  const closeBtn = listWrap.querySelectorAll(".close");
  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = (e) => {
      removeTask(e);
    };
  }
};

const removeTask = (e) => {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach((task) => {
    if (task.task === e.target.parentNode.children[0].innerText) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  e.target.parentNode.remove();

  let tasksLength = JSON.parse(localStorage.getItem("tasks")).length;
  numlist.innerHTML = tasksLength;
};

// store current task to track changes
const currentTask = null;

// get current task
const getCurrentTask = (ev) => {
  // currentTask = ev.value;
  console.log(ev);
};

todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkRequired(todoInput);
    e.preventDefault();
    addTask();
  }
});

// check required
const printErr = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "input error";
  const print = formControl.querySelector("small");
  print.innerText = message;
};

const printSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "input";
};

const checkRequired = (inputArr) => {
  if (inputArr.value.trim() === "") {
    printErr(inputArr, `Can't be empty!`);
  } else {
    printSuccess(inputArr);
  }
};

// function on window load
window.onload = () => {
  loadTasks();
};

// filter active, completed
const filterBtn = document.querySelectorAll(".btn-filter");

filterBtn.forEach((filter) => {
  filter.addEventListener("click", (e) => {
    removeActive();
    filter.classList.add("active");

    const list = listWrap.querySelectorAll(".list");

    list.forEach((l) => {
      if (e.target.innerText === "All") {
        l.classList.remove("hide");
      } else {
        if (l.classList.contains(e.target.innerText.toLowerCase())) {
          l.classList.remove("hide");
        } else {
          l.classList.add("hide");
        }
      }
    });

    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let count = 0;

    if (e.target.innerText.toLowerCase() === "active") {
      for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].completed) count++;
      }
      numlist.innerHTML = count;
    } else if (e.target.innerText.toLowerCase() === "completed") {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) count++;
      }
      numlist.innerHTML = count;
    } else {
      num = list.length;
      numlist.innerHTML = num;
    }
  });
});

const removeActive = () => {
  filterBtn.forEach((filter) => {
    filter.classList.remove("active");
  });
};

// switch theme
const switchBtn = document.querySelector(".switch");
const body = document.body;

switchBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});


// drag and drop

let dragSrcEl = null;

const handleDragStart = (e) => {
  const t = e.target;
  t.style.opacity = "0.4";

  dragSrcEl = t;

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text", t.innerHTML);
};

const handleDragEnd = (e) => {
  const t = e.target;
  t.style.opacity = "1";
  
  const items = listWrap.querySelectorAll(".list")
  items.forEach(item => {
    item.classList.remove("over")
  })
};

const handleDragOver = (e) => {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = "move";

  return false;
};

const handleDragEnter = (e) => {
  const t = e.target;
  t.classList.add("over");
};

const handleDragLeave = (e) => {
  const t = e.target;

  t.classList.remove("over");
};

const handleDrop = (e) => {
  const t = e.target;

  if (e.stopPropagation) {
    e.stopPropagation();
  }
  
  if (dragSrcEl != t) {
    const data = e.dataTransfer.getData("text")
    dragSrcEl.innerHTML = t.innerHTML
    t.innerHTML = data
  }
  return false;
};

const dragnDrop = () => {
  const taskItems = listWrap.querySelectorAll(".list");

  taskItems.forEach((item) => {
    item.addEventListener("dragstart", handleDragStart, false);
    item.addEventListener("dragenter", handleDragEnter, false);
    item.addEventListener("dragover", handleDragOver, false);
    item.addEventListener("dragleave", handleDragLeave, false);
    item.addEventListener("drop", handleDrop, false);
    item.addEventListener("dragend", handleDragEnd, false);
  });
};