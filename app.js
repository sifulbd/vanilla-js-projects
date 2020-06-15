
        // Iterator
        // function nameIterator(names) {
        //     let nextIndex = 0;

        //     return {
        //         next: function() {
        //             return nextIndex < names.length ? { value: names[nextIndex++], done: false} : {done: true}
        //         }
        //     }
        // }
        // const namesArr = ['Jack', 'Jill', 'John'];
        // const names = nameIterator(namesArr);
        // console.log(names.next().value);
        // console.log(names.next().value);
        // console.log(names.next().value);


        //Generator

        // function* sayName() {
        //     yield 'Jack';
        //     yield 'Jill';
        //     yield 'Nill';
        // }
        // const gen = sayName();
        // // console.log(gen.next());

        // function* countId() {
        //     let coount = 1;
        //     while(true) {
        //         yield coount++;
        //     }
        // }
        // const ids = countId();
        // console.log(ids.next().value);
        // console.log(ids.next().value);


        let a, b;


        [a,b, ...art] = [100, 200, 300, 40];

        ({a, ...bt} = {a: 10, b: 20, c: 30});

    // let person1,
    //     peron2, person3;
    //    const person = [person1, peron2, person3];
    //    const ['arju', 'mahin', 'ahmed'];
    // const map1 = new Map();
    // const name = function(){
    //     return 'What is your name?';
    // }
    // const obs = {
    //     name: "ankit",
    //     age: 32
    // }
    // const key1 = obs, key2 = name, key3 = '';
    // map1.set(key1, 'this is the value of key 1');
    // map1.set(key2, 'I am shaila');
    // map1.set(key3, 'this is the value of key 3');
    // console.log(` ${key2()} : ${map1.get(key2)}`)
    // console.log(` ${key1.name} : ${map1.get(key1)}`);
    // // console.log(map1.get(key1));
    // console.log(map1.get(key2));

    // const contrText = (function () {
    //     let text = "hello World";
    //     const changeText = function() {
    //         const headText = document.querySelector('h2');
    //         headText.textContent = text;
    //     }

    //     return {
    //         callChangetext: function() {
    //             changeText();
    //             console.log(text);
    //         }
    //     }
    // })();
    // contrText.callChangetext();

const arr = [
    {
        title: 'hlo title',
        desc: 'lorem ipsum doler',
        author: ['mia i', 'alex dorgon']
    },
    {
        title: 'Mr hello title two',
        desc: 'lorem ipsum doler',
        author: ['john i', 'alex d']
    },
    {
        title: 'Mr. hllo title three',
        desc: 'lorem ipsum doler',
        author: ['james nam', 'alex']
    },
    {
        title: 'Mrs. hllo title three',
        desc: 'lorem ipsum doler',
        author: ['james nam', 'alex']
    },
];
let movies = [
    'Mrs name',
    'Mr pli'
]
// arr.forEach(function(item){
//     const itemauth = item.author;
//     const allAuthor = itemauth.join(' ');
//     console.log(item.title,'author is ', allAuthor);
// })

// const hello = arr.find( b => (b.title.includes('hello') ));
// const hello2 = movies.find(c => (c.indexOf('Mr') === 0));

// const alexBook = arr.filter( b => (
//     b.author.includes('alex')
// ));
// let query = 'Mrs';
// const mrfind = arr.filter( b => {
//     const title = b.title;
//     return title.includes(query) 
// })


// const nums = ['i am','a','boy'];
// const sunOfNums = nums.reduce((total, current) => {
//     return total * current;
// })
// console.log(sunOfNums);

// const sum = (...nums) => nums.reduce((toatl, current) => toatl + current); 
// const arr1 = ['hello', 4, 'another', true];
// const arr2 = ['nai', 4, true];

// const arrMarge = [...arr1, ...arr2];

// const obj1 = {
//     name: 'naina',
//     age: 23
// }
// const obj2 = {
//     name: 'Wadia',
//     profession: 'footballer'
// }

// const twoObj = {
//     ...obj1, ...obj2
// }

const arr1 = [23, 34, 67, 78, 90];

function pick(arr1){
    const idx  = Math.floor(Math.random() * arr1.length);
    return arr1[idx];
}
function getCard() {
  const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']; 
  const suits = ['clubs', 'spades', 'hearts', 'diamond'];
  const value = pick(values);
  const suit = pick(suits);

  return {
      value,
      suit
  };
}
const docs = document.querySelector('h2').innerHTML = `
    Value is ${getCard().value} and Your Suite is ${getCard().suit}
`; 


