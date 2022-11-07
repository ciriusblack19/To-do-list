const addBtn = document.querySelector('.add-btn')
const delBtn = document.querySelector('.delete-btn')
const list = document.querySelector('ol')
const checkbox = document.querySelectorAll("li")

cleanList = () => {
  if (list.children.length > -1) {
    list.innerHTML = ''
  }
}

addTask = () => {
  const task = document.querySelector('input').value;
  const li = document.createElement("li")
  const checkbox = document.createElement("input")
  checkbox.setAttribute("type", "checkbox")
  li.appendChild(checkbox)
  li.appendChild(document.createTextNode(task))
  list.appendChild(li)
  document.querySelector('input').value = ''
}

isChecked = (e) => {
  if (e.target.checked) {
    e.target.parentElement.classList.add('checked')
  } else {
    e.target.parentElement.classList.remove('checked')
  }
}

addBtn.addEventListener("click", addTask)
delBtn.addEventListener("click", cleanList)
list.addEventListener('click', isChecked)