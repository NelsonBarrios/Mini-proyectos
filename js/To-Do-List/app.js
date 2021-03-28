const list = document.getElementById("list");
const addInput = document.getElementById("addInput");
const addButton = document.getElementById("addButton");
let edit = false;
let selectedItem;
function nextID() {
  return list.childElementCount;
}

function deleteItem(element) {
  if (edit) return;
  console.log(element);
  let div = element.parentNode;
  div.parentNode.removeChild(div);
}
function editItem(element) {
  console.log(element);
  selectedItem = element.parentNode;
  let parentDiv = element.parentNode.parentNode;
  for (let d of parentDiv.children) {
    d.style.backgroundColor = "white";
  }

  selectedItem.style.backgroundColor = "#a3a2a8";
  addInput.focus();
  addButton.value = "Save";
  let text =
    element.previousElementSibling.firstElementChild.nextElementSibling
      .innerText;
  addInput.value = text;
  edit = true;
}

addButton.onclick = () => {
  if (edit) {
    selectedItem.firstElementChild.firstElementChild.nextElementSibling.innerText =
      addInput.value;
    addInput.value = "";
    selectedItem.style.backgroundColor = "white";
    addButton.value = "Add";
    edit = false;
  } else {
    let item = document.createElement("div");
    item.setAttribute("class", "item");
    item.innerHTML = `<div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck${nextID()}">
                        <label class="custom-control-label" for="customCheck${nextID()}">${
      addInput.value
    }</label>
                      </div><i onclick="editItem(this)" class="fa fa-edit fa-lg" ></i><i onclick="deleteItem(this)" class="fa fa-trash fa-lg"></i>`;
    list.appendChild(item);
    addInput.value = "";
  }
};
