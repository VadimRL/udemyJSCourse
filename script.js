"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");

	while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы смотрели?", "");
	}
}

start();

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			  b = prompt('На сколько его оцените?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMoviesDB.movies[a] = b;
			console.log("done");
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMoviesDB.count >= 0 && personalMoviesDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMoviesDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
} 

detectPersonalLevel();

function showMyDB() {
	if (!personalMoviesDB.privat) {
		console.log(personalMoviesDB);
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
		personalMoviesDB.genres[i - 1] = genre;
	}
}

writeYourGenres();




