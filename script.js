let toDoList = [];
let id = 1;
function nextId() {
  return id++;
}

function addToPanel() {
  let formHeader = document.getElementById("formHeader").value;
  let formInput = document.getElementById("formInput").value;

  let newFormInput;

  if (formInput.trim() !== "") {
    newFormInput = {
      header: formHeader,
      text: formInput,
      id: nextId(),
    };
  }

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
    li.textContent = `${todo.header}:${todo.text}`;
    button.textContent = "delete";
    button.onclick = () => {
      remove();
    };
    toDoUl.appendChild(li);
    li.appendChild(button);
  });
  function remove() {
    console.log("hi malaka");
  }
}
