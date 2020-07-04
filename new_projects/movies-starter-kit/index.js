const autocompleteConfig = {
  renderOption(movie){
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
    return `
          <img src ="${imgSrc}" alt="" />
          <h2>${movie.Title} </h2>  (${movie.Year})
      `;
  },

  inputValue(movie) {
    return movie.Title
  }, 
  
  async fetchApi (input){
    const response = await axios.get('//www.omdbapi.com/', {
        params: {
            apikey: '785287b9',
            s: input
        }
    });  
    if(response.data.Error) {
        return [];
    }  
    //return response data
    return response.data.Search;
  }
};

createAutoComplete({
  ...autocompleteConfig,
    root: document.querySelector('#left-autocomplete'),
    onOptionSelect(movie) {
      document.querySelector('.tutorial').classList.add('is-hidden');
      isMovieSelect(movie, document.querySelector('#left-summery'), 'left');
    },
    
});
createAutoComplete({
  ...autocompleteConfig,
    root: document.querySelector('#right-autocomplete'),
    onOptionSelect(movie) {
      document.querySelector('.tutorial').classList.add('is-hidden');
      isMovieSelect(movie,document.querySelector('#right-summery'), 'right');
    },
    
});
let leftMovie;
let rightMovie;
const isMovieSelect = async (movie, summerElement, side) => {
    const response = await axios.get('//www.omdbapi.com/', {
        params: {
            apikey: '785287b9',
            i: movie.imdbID
        }
    });
     summerElement.innerHTML = movieTemplate(response.data);
    //  console.log(response.data)

    if(side === 'left') {
      leftMovie = response.data;
    } else {
      rightMovie = response.data;
    }

    if(leftMovie && rightMovie) {
      runComparison();
    }
};

const runComparison = () => {
  const leftSideStats = document.querySelectorAll('#left-summery .notification');
  const rightSideStats = document.querySelectorAll('#right-summery .notification');

  leftSideStats.forEach((leftStat, index) => {
    const rightStat = rightSideStats[index];

    const leftSideValue = leftStat.dataset.value;
    const rightideValue = rightStat.dataset.value;

    if(rightideValue > leftSideValue) {
      leftStat.classList.remove('is-primary');
      leftStat.classList.add('is-warning');
    }else {
      rightStat.classList.remove('is-primary');
      rightStat.classList.add('is-warning');
    }
    // console.log(leftStat, rightStat)
  });
};



const movieTemplate = (movieDetails) => {

  const dollars = parseInt(movieDetails.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
  const metaStore = parseFloat(movieDetails.imdbRating);
  const imdbVotes = parseInt(movieDetails.imdbVotes.replace(/,/g, ''));

  const awards = movieDetails.Awards.split(' ').reduce((prev, word) => {
    const value = parseInt(word);
    if(isNaN(value)){
      return prev;
    }else {
      return prev + value;
    }
  }, 0)
  
    return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieDetails.Poster}" />
                </p>
            </figure>
            <div class="media-content">
                <div class="content"
                    <h2>${movieDetails.Title}</h2>
                    <h4>${movieDetails.Genre}</h4>
                    <p>${movieDetails.Plot}</p>
                </div>
            </div>
        </article>
        <article data-value=${awards} class="notification is-primary">
            <p class="title">${movieDetails.Awards} </p>
            <p class="subtitle"> Awards </p>
        </article>
        <article data-value=${dollars} class="notification is-primary">
            <p class="title">${movieDetails.BoxOffice} </p>
            <p class="subtitle"> Box Office </p>
        </article>
        <article data-value=${metaStore} class="notification is-primary">
            <p class="title">${movieDetails.imdbRating} </p>
            <p class="subtitle"> IMDB Ratings </p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.Language} </p>
            <p class="subtitle"> Language </p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.Actors} </p>
            <p class="subtitle"> Actors </p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.Released} </p>
            <p class="subtitle"> Released </p>
        </article>
    `
}


