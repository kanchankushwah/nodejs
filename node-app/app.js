//console.log('My First Node App');

//const { constants } = require('buffer');
// const http = require('http');
// const routes = require('./routes');

// const server = http.createServer(routes.handler);

// server.listen(3030);
// const http = require('http');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
 
const adminData = require('./routes/admin');
const indexRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminData.router);
app.use(indexRoutes);

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3030);


// const fs = require('fs');

// fs.writeFileSync('hello.txt','Hello Friends Welcome to Node js.');

/*
const person = {
    name: 'Raju',
    age: 33,
    intro() {
        console.log('Hi, my name is ' + this.name);
    }
};

const printName = ({ name, age })=>{
    console.log('My name is ' + name + ' and I am ' + age + ' year old.' );
};

printName(person);


const fruits = ['Apple', 'Mango', 'Guava', 'Banana', 'Orange'];

const [f1, f2, f3, f4, f5] = fruits;
console.log(f1);


const fruits_fun = {...fruits};
console.log(fruits_fun);

const fruits_my = [...fruits];
console.log(fruits_my);


const person_copy = {...person};
console.log(person_copy);
*/

// person.intro();

// console.log(fruits.map(fruit=> 'Favorite Fruit '+ fruit));

// console.log(fruits.pop());

// console.log(fruits.shift());

// console.log(fruits.indexOf("Guava"));

// console.log(fruits.join());

// console.log(fruits.pop());

// console.log(fruits.sort());

// console.log(fruits.values());

// fruits.push("Pineapple");

// console.log(fruits);

/*

function first(callback) {
    setTimeout(() => {
        console.log('First Result');
        callback();
    },1000);
    };


function second(callback) {
    setTimeout(() => {
        console.log('Second Result');
        callback();
    },500);
    }


function third(callback) {
    setTimeout(() => {
        console.log('Third Result');
        callback();
    },2000);
    }


first(() => console.log('First one done'));
second(() => console.log('Second one done'));
third(() => console.log('Third one done'));


console.log('Welcome\n' + 'Friends');
*/

