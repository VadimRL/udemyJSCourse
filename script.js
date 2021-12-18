'use strict';

const personalMovieDB = {
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

        this.count = numberOfFilms;
    },
    rememberMyFilms: function() {
        let error = false;

        for (let i = 0; i < 2; i++) {
            //last film question
            let lastFilm = prompt('Один из последних просмотренных фильмов?', '');

            if (lastFilm == '' || !lastFilm || lastFilm.length > 50) {
                alert("Вы ввели неверное значение для lastFilm" );
                error = true;
            }
            //rate question
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
                this.movies[lastFilm] = rate;
            }
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let favorite = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
            if (favorite == '' || !favorite.trim() || favorite.length > 50) {
                alert("Вы ввели неверное значение");
                i--;
            } else {
                this.genres[i] = favorite;
            }
        }
        this.genres.forEach((elem, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${elem}`);
        });
    },
    detectPersonalLevel: function() {
        if (this.count >= 0 && this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Ошибка");
        }
    },
    checkPermission: function() {
        if (this.privat) return;

        console.log(this);
    },
    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.checkPermission();
