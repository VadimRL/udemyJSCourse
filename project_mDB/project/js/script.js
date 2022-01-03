/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const movieDB = {
	    movies: [
	        "Логан",
	        "Лига справедливости",
	        "Ла-ла лэнд",
	        "Одержимость",
	        "Скотт Пилигрим против..."
	    ]
	};

	const advBlock = document.querySelector('.promo__adv');
	const genre = document.querySelector('.promo__genre');
	const movies = [...movieDB.movies].sort();
	const promoHeader = document.querySelector('.promo__bg');
	const moviesList = document.querySelector('.promo__interactive-list');
	const form = document.querySelector('.add');

	advBlock.innerHTML = "";
	genre.textContent = "драма";
	promoHeader.style.backgroundImage = 'url(img/bg.jpg)';

	createList(movies, moviesList);

	form.addEventListener('submit', function(e) {
		e.preventDefault();

		// const inputMovie = this.querySelector('input').value;
		const formdata = new FormData(form);
		let inputMovie = formdata.get('movie');

		if (!inputMovie.trim()) return;

		const checkbox = this.querySelector('[type="checkbox"]');
		inputMovie = (inputMovie.length > 21) ? inputMovie.slice(0, 21) + "..." : inputMovie;

		if (checkbox.checked) {
			console.log("Добавляем любимый фильм");
		}

		movieDB.movies.push(inputMovie);
		this.reset();
		createList(movieDB.movies.sort(), moviesList);

		const deleteBtn = document.querySelectorAll('.delete');
		addEventListeners(deleteBtn, deleteElement);
	});


	const deleteBtn = document.querySelectorAll('.delete');
	addEventListeners(deleteBtn, deleteElement);

	function createList(movies, list) {
		list.innerHTML = "";
		movies.forEach( function(movie, index) {
		    moviesList.insertAdjacentHTML('beforeend', `<li class='promo__interactive-item'>${index + 1}. ${movie}
		                                  <div class='delete'></div></li>`);
		});
	}

	function addEventListeners(elemetns, handler) {
		elemetns.forEach(elemetn => {
			elemetn.addEventListener('click', handler, {once: true});
		});
	}

	function deleteElement(e) {
		const target = e.target;
		const moviesArr = movieDB.movies;
		const text = target.parentElement.childNodes[0].textContent;
		const index = text.indexOf(' ');
		const string = text.slice(index).trim();

		moviesArr.splice(moviesArr.indexOf(string), 1);

		createList(moviesArr, moviesList);

		const deleteBtn = document.querySelectorAll('.delete');
		addEventListeners(deleteBtn, deleteElement);
	}
});