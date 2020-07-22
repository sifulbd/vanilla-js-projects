// fake request 
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/user': [
                    {id: 1, content: "this is a content"},
                    {id: 2, content: "this is a content 2"},
                ],
                '/users/1': {
                    id          : 1,
                    username    : 'Bilbo',
                    city        : 'Lisbon',
                    topPost   : 45678
                },
                '/posts/45678': {
                    id          : 45678,
                    title       : 'Ladies and Gentlemen, may I introduce my pet Hamlet'
                }
            }; 
            const data = pages[url];
            if(data){
                resolve({status: 202, data});
            }else {
                reject({status: 404})
            }
        }, 1000)            
    })
}

//USING then

fakeRequest('/user')
.then((res) => {const id = res.data[0].id; return fakeRequest(`/users/${id}`);})
.then((res) => {const title = res.data.topPost; return fakeRequest(`/posts/${title}`);})
.then((res) => {console.log(res.data.title);})
.catch((res) => {console.log(res.status);console.log("it rejected")});