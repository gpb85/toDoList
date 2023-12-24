let toDoList = [];
let id = 1;

// Έλεγχος για την ύπαρξη αποθηκευμένων δεδομένων στην cache
if (localStorage.getItem("toDoList")) {
  toDoList = JSON.parse(localStorage.getItem("toDoList"));
}

function nextId() {
  while (toDoList.some((todo) => todo.id === id)) {
    id++;
  }
  return id;
}

function addToPanel() {
  let formHeader = document.getElementById("formHeader").value;
  let formInput = document.getElementById("formInput").value;

  if (formInput.trim() !== "") {
    let newFormInput = {
      header: formHeader,
      text: formInput,
      id: nextId(),
    };
    toDoList = [...toDoList, newFormInput];
    renderToDoList();
    console.log(toDoList);
    saveDataToLocalStorage();
    document.getElementById("formHeader").value = "";
    document.getElementById("formInput").value = "";
  }
}

function renderToDoList() {
  let toDoUl = document.getElementById("panelText");
  toDoUl.innerHTML = "";

  toDoList.forEach((todo) => {
    let li = document.createElement("li");
    let button = document.createElement("button");

    li.textContent = `${todo.header}:${todo.text}`;
    button.textContent = "delete";
    button.addEventListener("click", () => {
      remove(todo.id);
    });
    li.appendChild(button);
    toDoUl.appendChild(li);
  });

  function remove(idToDelete) {
    toDoList = toDoList.filter((todo) => todo.id !== idToDelete);
    saveDataToLocalStorage();
    renderToDoList();
  }
}

function deleteAll() {
  toDoList = [];
  id = 1;
  saveDataToLocalStorage();
  renderToDoList();
}

function saveDataToLocalStorage() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

renderToDoList();
