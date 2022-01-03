/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "AAAA",
        "aaaa1",
        "Скотт Пилигрим против..."
    ]
};
// 1
const advBlock = document.querySelector('.promo__adv');
advBlock.remove();
// 2
let genre = document.querySelector('.promo__genre');
genre.textContent = "драма";
// 3
const promoHeader = document.querySelector('.promo__bg');
promoHeader.style.backgroundImage = 'url(img/bg.jpg)';
console.dir(promoHeader);
// 4
const movies = [...movieDB.movies].sort();
const moviesList = document.querySelector('.promo__interactive-list');


movies.forEach( function(element, index) {
    moviesList.insertAdjacentHTML('beforeend', `<li class='promo__interactive-item'>${index + 1}. ${element}
                                  <div class='delete'></div></li>`);
});

