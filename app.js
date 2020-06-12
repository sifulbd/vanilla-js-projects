const arr = [
    {
        title: 'hello title',
        desc: 'lorem ipsum doler',
        author: ['mia i', 'alex dorgon']
    },
    {
        title: 'hello title two',
        desc: 'lorem ipsum doler',
        author: ['john i', 'alex d']
    },
    {
        title: 'hello title three',
        desc: 'lorem ipsum doler',
        author: ['james nam', 'alex alim']
    },
];

arr.forEach(function(item){
    const itemauth = item.author;
    const allAuthor = itemauth.join(' ');
    console.log(item.title,'author is ', allAuthor);
})