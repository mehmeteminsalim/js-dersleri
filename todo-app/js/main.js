// Todo Bütün elementleri seçelim id ile seçelim
// Todo ekleye basıldığında listeye todo eklenecek inputta girilen ismiyle
// Todo ara inputunda her harfe basıldığında todo ara fonksiyonunu çalıştırıp listedeki elemenları güncelleme işlemi yapılacak
// Todoları temizle butonuna tıklandığında bütün listedeki elemanlar kaldırılacak
// Todo Her bir tododaki çarpı butonuna tıklandığında seçilen todo listeden kaldırılacak
// Todo ekle fonksiyonu oluşturalım
// Todo sil fonksiyonu oluşturalım
// Todoları sil fonksiyonu oluşturalım
// Todo ara fonksiyonu oluşturalım

const form = document.getElementById("todo-ekle-form");
const formInput = document.getElementById("form-input");
const todoList = document.getElementById("todo-list");
const deleteAllTodoButton = document.getElementById("delete-all-todo-btn");

form.addEventListener("submit", formOnSubmit);
document.addEventListener("DOMContentLoaded", loadAlltodoToUI);
deleteAllTodoButton.addEventListener("click", deleteAllTodos);

function formOnSubmit(e) {
  e.preventDefault();
  addTodo();
}

function addTodo(e) {
  const newTodo = formInput.value.trim();

  if (newTodo === "") {
    alert("Lütfen Todo Giriniz");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
  }
}

function addTodoToUI(todo) {
  const listItem = document.createElement("li");
  const todoNameSpan = document.createElement("span");
  const todoDeleteSpan = document.createElement("span");

  listItem.className = "listItem-add-todo";
  todoNameSpan.innerText = todo;
  todoDeleteSpan.innerText = "✘";

  listItem.appendChild(todoNameSpan);
  listItem.appendChild(todoDeleteSpan);

  todoList.appendChild(listItem);
  formInput.value = "";
}

function addTodoToStorage(todo) {
  let todos = getTodosFromStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromStorage() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  return todos;
}

function loadAlltodoToUI() {
  let todos = getTodosFromStorage();
  todos.forEach((todo) => {
    addTodoToUI(todo);
  });
}

function deleteAllTodos() {
  if (confirm("Tümünü silmek istediğinizden emin misiniz ?!!!")) {
    while (todoList.firstElementChild != null) {
      todoList.removeChild(todoList.firstElementChild);
    }
    localStorage.removeItem("todos");
  }
}
