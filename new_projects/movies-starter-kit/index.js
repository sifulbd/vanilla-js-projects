const fetchApi = async (input) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '785287b9',
            s: input
        }
    });
    console.log(response.data)
}

const input = document.querySelector('input');

let timeoutId;
const onInput = event => {
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() =>{
        fetchApi(event.target.value);
    }, 1000)
}
input.addEventListener('input', onInput);