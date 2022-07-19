
const navContainer = document.getElementById('nav-container');
const mvRadioBtnFilters = navContainer.querySelectorAll('[name="mv-filter"]');
const mainContainer = document.querySelector('.main-container');
const moviesListUl = document.getElementById('mv-list');
const custumSearch = document.getElementById('custom-search');

// todo: get user input and make event listener
custumSearch.addEventListener('input', (e) =>{
    mvRadioBtnFilters.values = "";
    handleOnChangeEvent(e);
} );

mvRadioBtnFilters.forEach(item => {
    item.addEventListener('input', ev =>{
        custumSearch.value = "";
        handleOnChangeEvent(ev);
    })
});

const addMoviesToDom = (moviesData, linkData) => {
    moviesListUl.innerHTML = "";
    moviesData.map(movie => movie)
    .forEach((movie, index) =>  {
        let newItem = document.createElement('li');
        newItem.id = 'mv-list-item';
        newItem.className = 'mv-list-item-class';
        moviesListUl.appendChild(newItem);
        newLinkTag = document.createElement('a');
        newLinkTag.href = linkData[index];
        newItem.appendChild(newLinkTag);
        const img = document.createElement('img');
        img.src = movie.poster;
        newLinkTag.appendChild(img);       
    })
}

const handleOnChangeEvent = event => {
    let filteredMovies = filterMovies(event.target.value);
    const movieLinks = createMovieLink(filteredMovies);
    addMoviesToDom(filteredMovies, movieLinks);
    /* switch (event.target.id) {
        case 'latest-mv':    
            addMoviesToDom(filteredMovies, movieLinks)
            break;
        case 'av-mv':
            console.log("test =>", test)
            addMoviesToDom(filterMovies(event.target.value))
            break;
        case 'xm-mv':
            console.log("test =>", test)
            addMoviesToDom(filterMovies(event.target.value))
            break;
        case 'pr-mv':
            console.log("test =>", test)
            addMoviesToDom(filterMovies(event.target.value))
            break;
        case 'bat-mv':
            
            console.log("test =>", test)
            addMoviesToDom(filterMovies(event.target.value))
            createMovieLink(filterMovies(event.target.value))
            break;
        default:
            console.log("the filter in switch() doesnt seem to work!!")
            break;
    } */
}

const filterMovies = wordInMovie =>{
   return movies
    .filter(movie => movie.title.toLowerCase().includes(wordInMovie) || 
    Number(movie.year) >= Number(wordInMovie));
}

const createMovieLink = (filterdMovies) =>{
    const imdbUrl = 'https://www.imdb.com/title/';
    return filterdMovies.map(movie => imdbUrl+movie.imdbID);
}

addMoviesToDom(movies,  createMovieLink(movies));