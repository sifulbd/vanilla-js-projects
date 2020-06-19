
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

// const arr1 = [23, 34, 67, 78, 90];

// function pick(arr1){
//     const idx  = Math.floor(Math.random() * arr1.length);
//     return arr1[idx];
// }
// function getCard() {
//   const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']; 
//   const suits = ['clubs', 'spades', 'hearts', 'diamond'];
//   const value = pick(values);
//   const suit = pick(suits);

//   return {
//       value,
//       suit
//   };
// }
// const docs = document.querySelector('h2').innerHTML = `
//     Value is ${getCard().value} and Your Suite is ${getCard().suit}
// `; 

// const list = document.querySelectorAll('ul');
// const obj = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,
//     e:5
// };
// let named = '';
// for(let obs in obj){
//     // named += ;
//     named += `<li> ${obs} and value is ${obj[obs]} </li>`;
// }
// document.querySelector('ul').innerHTML = named;
// const input  = document.querySelector('#input');
// input.addEventListener('keydown', function(){
//     console.log(input.value);
// })


// for(let i = 0; i < list.length; i++) {
//     list[i].innerText = "Hi there"
// }

let counter = 0;
const count = document.querySelector('#count');
const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(e.currentTarget.classList.contains('increase')){
            counter++;
        }
        if(e.currentTarget.classList.contains('decrease')){
            counter--;
        }
        if(e.currentTarget.classList.contains('reset')){
            counter = 0;
        }
        count.textContent = counter;
    }); 
});

// 

const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        content: "Lorem ipsum dolor sit amet consecteturdipisicing elit. Sunt eveniet consectetur quos iure qui exercitationem ducimus velit ",
        img: "https://res.cloudinary.com/idemo/image/upload/c_fill,f_auto,h_300,q_auto,w_270/car_lady_dog.webp"
    },
    {
        id: 2,
        name: "John Doe",
        job: "Web Designer",
        content: "Lorem ipsum dolor sit amet consecteturdipisicing elit. Sunt eveniet consectetur quos iure qui exercitationem ducimus velit ",
        img: "https://res.cloudinary.com/idemo/image/upload/c_fill,h_300,q_auto:eco,w_270/woman.jpg"
    },
    {
        id: 2,
        name: "William Doe",
        job: "Digital marketner",
        content: "Lorem ipsum dolor sit amet consecteturdipisicing elit. Sunt eveniet consectetur quos iure qui exercitationem ducimus velit ",
        img: "https://res.cloudinary.com/idemo/image/upload/c_fill,h_300,q_auto,w_270/friends.jpg"
    }
];


const avtImg = document.querySelector('.avt-img');
const avtName = document.querySelector('.avt-name');
const avtPosition = document.querySelector('.avt-position');
const avtContent = document.querySelector('.avt-content');


const avtPrevBtn = document.querySelector('#prev');
const avtNextBtn = document.querySelector('#next');
const avtRandomBtn = document.querySelector('#random');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
});

function showPerson(person){
    const item = reviews[person];
    avtImg.src = item.img;
    avtName.textContent = item.name;
    avtPosition.textContent = item.job;
    avtContent.textContent = item.content;
}

avtNextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})
avtPrevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = 0;
    }
    showPerson(currentItem);
})
avtRandomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem);
})


let slide = 0;
const sliders = document.querySelectorAll('.review2');
const numsliders = sliders.length;
const next2 = document.querySelector('#next2');

function showPerson2(person){
    const item = sliders[person];
}

next2.addEventListener('click', function(){
    slide++;
    showPerson2(slide); 
})
