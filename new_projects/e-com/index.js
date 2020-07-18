const express = require('express');
const bodyParser = require('body-parser');
const repoUser = require('./repositories/users');

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

app.post('/', async (req,res) => {
    const {email, password, confirmpasswprd} = req.body;

    const existingUser = await repoUser.getOneBy({ email });
    if(existingUser) {
        return res.send('Email in use');
    }
    if(password !== confirmpasswprd) {
        return res.send ('Password didnot match');
    }
    console.log(email);
    res.send('Account Created');
});

app.listen(3001,() =>{
    console.log("listening..")
});