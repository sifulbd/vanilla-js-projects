const fetchApi = async (input) => {
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

const root = document.querySelector('.autocomplete');
root.innerHTML = `
        <label><b> Search for a Movie </b></label>
        <input type="text" class="input">
        <div class="dropdown">
            <div class="dropdown-menu">
            <div class="dropdown-content reuslts">
                <a href="" class="dropdown-item">
                    
                </a>
            </div>
        </div>
`

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const reusltWrapper = document.querySelector('.reuslts');

const onInput = async event => {
    const movies = await (fetchApi(event.target.value));

    if(!movies.length) {
        dropdown.classList.remove('is-active');
        return;
    }
    reusltWrapper.innerHTML = '';
    dropdown.classList.add('is-active');
    for(let movie of movies) {
        const option = document.createElement('a');
        option.classList.add('dropdown-item');
        const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;
        option.innerHTML = `
            <img src ="${imgSrc}" alt="" />
            <h2>${movie.Title}</h2>
        `;
        //add to html
        reusltWrapper.appendChild(option);
    }
}
input.addEventListener('input', debounce(onInput), 500);
document.addEventListener('click', event => {
    if(!root.contains(event.target)) {
        dropdown.classList.remove('is-active');
    }
})