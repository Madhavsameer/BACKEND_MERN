require('dotenv').config()
console.log("Hello World");
const express= require ('express');
const app=express();
const port =3000;
app.get('/', (req,res) => {
    res.send('Hello sammer');

})
app.get('/user', (req,res) => {
    res.send('Hello user');

})
app.get('/heading', (req,res) => {
    res.send('<h1> Hello This is heading</h1>');

})

app.listen(process.env.PORT,()=>{
    console.log(`Your app is being getting listened on port ${port}`);
})