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


const nums = ['i am','a','boy'];
const sunOfNums = nums.reduce((total, current) => {
    return total * current;
})
console.log(sunOfNums);

