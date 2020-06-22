
// fetch('https://swapi.dev/api/planets/')
// .then()
// .then((res) => {
//     const planet = res.results;
//     console.log("Fetch planets");
//     console.log(planet[0].name);
//     for(let planets of planet){

//     }
//     const film = planet[0].films[0];
//     return fetch(film);
// })
// .then((response) => {
//     if(!response.ok){
//         throw new Error(`Status code Error: ${response.status}`);
//     }else{
//         return response.json()
//     }
// })
// .then((data) => { 
//     // console.log(data);
//     console.log("Fetch planets films");  
//     console.log(data.title);  
//     const startship = data.starships[0];
//     return fetch(startship);
// })
// .then((response) => {
//     if(!response.ok){
//         throw new Error(`Status code Error: ${response.status}`);
//     }else{
//         return response.json()
//     }
// })
// .then((starship) => {
//     console.log("Fetch planets films starshipname");
//     console.log(starship.name)
// })
// .catch((err) => {
//     console.log("Somthing went wrong")
// })

// Cleaning 


const checkstatus = (response) => {
    if(!response.ok){
        throw new Error(`Status code Error: ${response.status}`);
    }else{
        return response.json()
    }
}
const showfilm = (res) => {
    const planet = res.results;
    console.log("Fetch planets");
    console.log(planet[0].name); 
    const film = planet[0].films[0];
    return Promise.resolve(fetch(film));
}
const showfname = (data) => { 
    // console.log(data);
    console.log("Fetch planets films");  
    console.log(data.title);  
    const startship = data.starships[0];
    return Promise.resolve(fetch(startship));
}
const showStarship = (starship) => {
    console.log("Fetch planets films starshipname");
    console.log(starship.name)
}

fetch('https://swapi.dev/api/planets/')
.then(checkstatus)
.then(showfilm)
.then(checkstatus)
.then(showfname)
.then(checkstatus)
.then(showStarship)
.catch((err) => {
    console.log("Somthing went wrong")
})

