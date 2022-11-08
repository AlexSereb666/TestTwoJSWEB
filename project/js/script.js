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
        "Скотт Пилигрим против..."
    ]
};


const advertisement = document.querySelectorAll('.promo__adv img'), // картинки реклам
    genreFilm = document.querySelector('.promo__genre'), // жанр фильма
    poster = document.querySelector('.promo__bg'), // картинка постера
    listFilms = document.querySelectorAll('.promo__interactive-list li'); // список фильмов

// удаление рекламы с блока реклам //
advertisement.forEach(item => {
    item.remove();
});

// замена надписи жанра фильма //
genreFilm.textContent = 'драма';

// замена картинки постера //
poster.style.backgroundImage = 'url("img/bg.jpg")';

// удаление списка
listFilms.forEach(item => {
    item.innerHTML = "";
});

movieDB.movies.sort(); // сортируем элементы по алфавиту

// заполняем список отсортированными фильмами из БД //
for (let i = 0; i < listFilms.length; i++ ) {
    listFilms[i].textContent = `${i + 1}. ` + movieDB.movies[i];
}

/*movieDB.movies.forEach((film, i) => {
    listFilms[i].innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});*/