// Bütün elementleri seçelim id ile seçelim
// Todo ekleye basıldığında listeye todo eklenecek inputta girilen ismiyle
// Todo ara inputunda her harfe basıldığında todo ara fonksiyonunu çalıştırıp listedeki elemenları güncelleme işlemi yapılacak
// Todoları temizle butonuna tıklandığında bütün listedeki elemanlar kaldırılacak
// Her bir tododaki çarpı butonuna tıklandığında seçilen todo listeden kaldırılacak
// Todo ekle fonksiyonu oluşturalım
// Todo sil fonksiyonu oluşturalım
// Todoları sil fonksiyonu oluşturalım
// Todo ara fonksiyonu oluşturalım

const form = document.getElementById("todo-ekle-form");

form.addEventListener("submit", formOnSubmit);

function formOnSubmit(e) {
  e.preventDefault();
  addTodo();
  logSubmit();
}

function addTodo(e) {
  alert("formm");
}

function logSubmit(e) {
  console.log("Form submit edildi");
}
