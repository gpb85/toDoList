let toDoList = [];
let id = 1;
function nextId() {
  return id++;
}

function addToPanel() {
  let formInput = document.getElementById("formInput").value;
  let newFormInput = {
    id: nextId(),
    text: formInput,
  };
  toDoList = [...toDoList, newFormInput];
  renderToDoList();
  console.log(toDoList);
}

function renderToDoList() {
  let toDoUl = document.getElementById("panelText");
  toDoUl.innerHTML = "";
  toDoList.map((todo) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    li.textContent = todo.text;
    button.textContent = "delete";
    button.onclick = () => {
      remove();
    };
    toDoUl.appendChild(li);
    li.appendChild(button);
  });
}

function remove() {
  console.log("hello world");
}
