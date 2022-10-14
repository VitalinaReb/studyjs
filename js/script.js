'use strict';

let numberOfFilms

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while ( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
8


function rememberMyFilms (){
    for (let i=0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
    
        if( a !='' && b !='' && a!= null && b != null && a.length <50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        } 
    }
}

rememberMyFilms();




function detectPersonalLevel() {
    if ( personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель") ;
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман")
    } else {
        console.log( "Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for ( let i = 1 ; i <= 3 ; i++) {
        const genre = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i -1] = genre;
    }
}
writeYourGenres();
console.log(personalMovieDB);









/////////////////////////////////


function sayHello (name) {
    return 'Hello, ${name}';
}
sayHello('Alex');



function returnNeighboringNumbers(a) {
    return [a-1 , a , a+1]

}
returnNeighboringNumbers (5);


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {  
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);