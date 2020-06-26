async function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw "Enter a valid number"
    }
    return x + y;
}
add("l","k").then( val => {
    console.log("promise resolve", val)
}).catch(err => {
    console.log("promise rejected", err)
})


add(5,5).then( val => {
    console.log("promise resolve", val)
}).catch(err => {
    console.log("promise rejected", err)
}) 

