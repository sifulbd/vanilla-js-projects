createAutoComplete({
    root: document.querySelector('.autocomplete'),
    renderOption(movie){
      const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
      return `
            <img src ="${imgSrc}" alt="" />
            <h2>${movie.Title} </h2>  (${movie.Year})
        `;
    },
    onOptionSelect(movie) {
      isMovieSelect(movie);
    },
    inputValue(movie) {
      return movie.Title
    }, 
    async fetchApi (input){
      const response = await axios.get('http://www.omdbapi.com/', {
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
});

const isMovieSelect = async (movie) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '785287b9',
            i: movie.imdbID
        }
    });
     document.querySelector('.movie-summery').innerHTML = movieTemplate(response.data);
     console.log(response.data)
}

const movieTemplate = (movieDetails) => {
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
        <article class="notification is-success">
            <p class="title">${movieDetails.Awards} </p>
            <p class="subtitle"> Awards </p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieDetails.BoxOffice} </p>
            <p class="subtitle"> Box Office </p>
        </article>
        <article class="notification is-danger">
            <p class="title">${movieDetails.imdbRating} </p>
            <p class="subtitle"> IMDB Ratings </p>
        </article>
        <article class="notification is-info">
            <p class="title">${movieDetails.Language} </p>
            <p class="subtitle"> Language </p>
        </article>
        <article class="notification is-warning">
            <p class="title">${movieDetails.Actors} </p>
            <p class="subtitle"> Actors </p>
        </article>
        <article class="notification is-danger is-light">
            <p class="title">${movieDetails.Released} </p>
            <p class="subtitle"> Released </p>
        </article>
    `
}


