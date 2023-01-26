
// ДЗ

// Выполнить все задачи в теге script. Комментарии, в которых написаны 
// задачи, не стирать, код с решением задачи пишем под комментарием.

// 1. Найти по id, используя getElementById, элемент с id равным
//  "super_link" и вывести этот элемент в консоль.

const elementId = document.getElementById(`super_link`)
console.log(elementId);

// 2. Внутри всех элементов на странице, которые имеют класс
// "card-link", поменяйте текст внутри элемента на "ссылка".
const documentLink = document.querySelectorAll(`.card-link`);
documentLink.forEach(element => {
    element.textContent = `ссылка`;
  });

// 3. Найти все элементы на странице с классом "card-link", 
// которые лежат в элементе с классом "card-body" и вывести 
// полученную коллекцию в консоль.

const elements = document.querySelectorAll('.card-body .card-link');
    console.log(elements);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут
// data-number со значением 50 и вывести его в консоль.
const firstElement = document.querySelector('[data-number="50"]');
    console.log(firstElement);
// 5. Выведите содержимое тега title в консоль.
console.log(document.title);
// 6. Получите элемент с классом "card-title" и выведите его родительский узел
// в консоль.
const Elements = document.querySelector('.card-title').parentNode;
    console.log(Elements);
// 7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный
// тег в начало элемента, который имеет класс "card".

    const contentText = document.createElement('p');
    contentText.textContent = 'Привет';
    document.querySelector('.card').prepend(contentText);
// 8. Удалите тег h6 на странице.
document.querySelector('h6').remove();