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

'use strict';

// все работает только после того, как страница будет загружена //
document.addEventListener('DOMContentLoaded', () => {
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
        listFilms = document.querySelector('.promo__interactive-list'), // список фильмов
        addForm = document.querySelector('form.add'), // форма добавление фильма
        inputAddFilm = addForm.querySelector('.adding__input'), // форма добавления фильма
        checkBox = addForm.querySelector('[type="checkbox"]'); // чекбокс сделать фильм любимым
    
         
    // сортируем элементы по алфавиту //
    movieDB.movies.sort();
    creatMovieList(movieDB.movies, listFilms); 

    addForm.addEventListener('submit', (e) => {
        e.preventDefault(); // отмена стандартного поведения браузера

        let newFilm = inputAddFilm.value;
        const favorite = checkBox.checked;

        newFilm =newFilm.trim(); // удаляем пробелы
        if (newFilm) { // если строка не пустая
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm); // добавление нового фильма в массив данных    
            creatMovieList(movieDB.movies, listFilms);
        }
        e.target.reset(); // очитка содержимого формы
    });

    // внесение изменений на страницу //
    const makeChanges = () => {
        // замена надписи жанра фильма //
        genreFilm.textContent = 'драма';
        // замена картинки постера //
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();

    // функция очистки рекламы //
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    // удаление рекламы с блока реклам //  
    deleteAdv(advertisement);
 
    // функция создания нового списка //
    function creatMovieList(films, parent) {
        parent.innerHTML = "";
        movieDB.movies.sort();

        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;           
        });

        // псевдомассив корзинок
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                creatMovieList(films, parent);
            });
        }); 
    }   
});