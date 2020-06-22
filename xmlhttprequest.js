const firstre = new XMLHttpRequest();

firstre.addEventListener('load', () => {
    const data = JSON.parse(firstre.response);
    const film = data.results[0].films[0];
    
    // another request
    const filmreq = new XMLHttpRequest();
    filmreq.addEventListener('load', () => {
        const fims = (filmreq.responseText);
        const data2 = JSON.parse(fims);
        console.log(data2)
    })
    // req 2 error
    filmreq.addEventListener('error', () => {
        console.log("error2");
    })
    filmreq.open('GET', film);
    filmreq.send();
})
firstre.addEventListener('error', () => {
    console.log("error");
})
firstre.open('GET', 'https://swapi.dev/api/planets/');
firstre.send();
console.log('request send');