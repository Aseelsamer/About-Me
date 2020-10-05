'use strict';


var userName = prompt('Hello and Welcome! I Would like to know your name');
console.log('userName=',userName);
alert('Hey ' + userName);

var Question = prompt('Do you think I like Sodas (Pepsi,Sprite)? ');
console.log('question=',Question);
var Question=Question.toLowerCase();
console.log(Question);

if(Question == 'yes')
{ 
    console.log('Your answer is correct');

    alert('Your answer is correct');
} else if  (Question=='no')
{ 
 console.log('Your answer is wrong!');
 alert('Your answer is wrong');
    }


var driving = prompt('Do you think I like driving?');
console.log('driving=',driving);
var driving=driving.toLowerCase();
console.log(driving);

if (driving=='No')
{
    console.log('You are right');
    alert('You are right' );
} else if 
        (driving=='yes')
    {
        console.log('You are wrong');
        alert('You are wrong');

    }


var Song = prompt('Can you guess if I am a fan of english songs?');
console.log('song=', Song);

var Song=Song.toLowerCase();
console.log(driving);


if(Song=='yes'){
    console.log('You are wrong !');
    alert('You are wrong');
}else if (Song=='no') 
{
    console.log('You are correct');
    alert('You are correct');
}


var Cooking = prompt('Can you guess if I love cooking?');
console.log('cooking=',Cooking);
var Cooking=Cooking.toLowerCase();
console.log(Cooking);


if(Cooking=='yes'){
    console.log('You are right !');
    alert('You are right');
}else if  (Cooking=='no')
{
    console.log('You are wrong');
    alert('You are wrong');
}


var enemy = prompt('Do you think I am a fan of enemy?');
console.log('enemy=', enemy);

var enemy=enemy.toLowerCase();
console.log(enemy);

if(enemy=='yes'){
    console.log('You are wrong !');
    alert('You are wrong');
}else (enemy=='no') 
{
    console.log('You are correct');
    alert('You are correct');
}