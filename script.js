'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
	count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


rememberMyFilms();
writeYourGenres();
detectPersonalLevel();
checkPermission();

function rememberMyFilms() {
    let error = false;

    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt('Один из последних просмотренных фильмов?', '');

        if (lastFilm == '' || !lastFilm || lastFilm.length > 50) {
            alert("Вы ввели неверное значение для lastFilm" );
            error = true;
        }

        let rate = prompt('На сколько оцените его?', '');

        if (rate == '' || !rate || rate.length > 50) {
            alert("Вы ввели неверное значение для rate" );
            error = true;
        }

        if (error) {
            alert("Один или оба из предидущих вопросов были заданы неверно. Попробуйте ёще раз");
            error = false;
            i--;
        } else {
            personalMovieDB.movies[lastFilm] = rate;
        }
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let favorite = prompt(`Ваш любимый жанр под номером ${i + 1}`);

        if (favorite == '' || !favorite || favorite.length > 50) {
            alert("Вы ввели неверное значение");
            i--;
        } else {
            personalMovieDB.genres[i] = favorite;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Ошибка");
    }
}

function checkPermission(arg) {
    if (personalMovieDB.privat) return;

    console.log(personalMovieDB);
}
