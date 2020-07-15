const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(
    bodyParser.urlencoded({extended:true})
);

app.get('/', (req,res) => {
    res.send(
        `<div>
            <form method="POST">
                <input name="email" placeholder ="Email">
                <input name="password" placeholder ="Password">
                <input name="confirmpasswprd" placeholder ="Password Confirm">
                <button>Sign Up</button>  
            </form>
        </div>
        `
    );
});

app.post('/', (req,res) => {
    console.log(req.body);
    res.send('hello accoint');
});

app.listen(3000,() =>{
    console.log("listening..")
});