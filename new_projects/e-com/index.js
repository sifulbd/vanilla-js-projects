const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const repoUser = require('./repositories/users');
const app = express();

app.use(
    bodyParser.urlencoded({extended:true})
);
app.use(
    cookieSession({
        keys: ['dfghdftr54353']
    })
);

app.get('/', (req,res) => {
    res.send(
        `<div>
        id is ${req.session.userId}
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
    
    const user = await repoUser.create({email, password});

    req.session.userId === user.id; // 

    res.send('Account Created');
});

app.listen(3001,() =>{
    console.log("listening..")
});