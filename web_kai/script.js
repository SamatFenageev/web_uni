function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Получаем форму и список объявлений на каждой вкладке
const form = document.querySelector('#add form');
const newTabList = document.querySelector('#new ul');
const oldTabList = document.querySelector('#old ul');

// Обработчик события на отправку формы
form.addEventListener('submit', (event) => {
  // Отменяем стандартное поведение формы (отправку на сервер)
  event.preventDefault();

  // Получаем значения полей формы
  const title = document.querySelector('#title').value;
  const description = document.querySelector('#description').value;

  // Создаем новый элемент списка объявлений
  const newListItem1 = document.createElement('li');
  newListItem1.innerText = title + ': ' + description;
  const newListItem2 = document.createElement('li');
  newListItem2.innerText = title + ': ' + description;

  // Добавляем новый элемент в список на каждой вкладке
  newTabList.insertBefore(newListItem1, newTabList.firstChild);
  oldTabList.appendChild(newListItem2);
  
  

  // Очищаем поля формы
  document.querySelector('#title').value = '';
  document.querySelector('#description').value = '';
});
