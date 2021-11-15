"use strict";

/*for (let prop in personalMovieDB) {
	let key = personalMovieDB[prop];
	if (prop == "movies") {
		personalMovieDB[prop] = {
			[lastMovie]: rate,
		}
	}
}*/

/*const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let rate;
let lastMovie;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let i = 2;

while (i) {
	lastMovie = prompt('Один из последних просмотренных фильмов?', '');
	rate = prompt('Насколько его оцените?', '');

	if (!rate || 
		!lastMovie || 
		rate.length > 50 || 
		lastMovie.length > 50 || 
		!rate.trim() || 
		!lastMovie.trim()) continue;

	i--;

	writeMovie(lastMovie, rate);
}

checkCount(personalMovieDB);


function writeMovie(movie, rate) {
	personalMovieDB.movies[movie] = rate;
}

function checkCount(dataBase) {
	let count = dataBase.count;

	if (count <= 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (count > 10 && count <= 30) {
		console.log('Вы классический зритель');
	} else if (count > 30) {
		console.log('Вы кономан');
	} else {
		console.log('Произошла ошибка');
	}
}

console.log(personalMovieDB); */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let rate;
let lastMovie;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

let i = 2;

do{
	lastMovie = prompt('Один из последних просмотренных фильмов?', '');
	rate = prompt('Насколько его оцените?', '');

	if (!rate || 
		!lastMovie || 
		rate.length > 50 || 
		lastMovie.length > 50 || 
		!rate.trim() || 
		!lastMovie.trim()) continue;

	i--;

	writeMovie(lastMovie, rate);
	// statement
} while (i);


checkCount(personalMovieDB);


function writeMovie(movie, rate) {
	personalMovieDB.movies[movie] = rate;
}

function checkCount(dataBase) {
	let count = dataBase.count;

	if (count <= 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (count > 10 && count <= 30) {
		console.log('Вы классический зритель');
	} else if (count > 30) {
		console.log('Вы кономан');
	} else {
		console.log('Произошла ошибка');
	}
}



console.log(personalMovieDB);