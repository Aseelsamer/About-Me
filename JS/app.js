/* eslint-disable no-undef */
/* eslint-disable no-constant-condition */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
'use strict';
var counter = 0;



var userName = prompt('Hello and Welcome! I Would like to know your name');
//console.log('userName=', userName);
alert('Hey ' + userName);

function soda() {
  var Question = prompt('Do you think I like Sodas (Pepsi,Sprite)? ');
  //console.log('question=', Question);
  var Question = Question.toLowerCase();
  //console.log(Question);

  if (Question == 'yes' || Question == 'y') {
    //console.log('Your answer is correct');

    alert('Your answer is correct');
    counter++;
  } else if (Question == 'no' || Question == 'n') {
    //console.log('Your answer is wrong!');
    alert('Your answer is wrong');
  }
}
soda();

function driving() {
  var driving = prompt('Do you think I like driving?');
  //console.log('driving=', driving);
  var driving = driving.toLowerCase();
  //console.log(driving);

  if (driving == 'No' || driving == 'n') {
    //console.log('You are right');
    alert('You are right');
    counter++;
  } else if
  (driving == 'yes' || driving == 'y') {
    //console.log('You are wrong');
    alert('You are wrong');

  }
}
driving();

function songs() {
  var Song = prompt('Can you guess if I am a fan of english songs?');
  //console.log('song=', Song);

  var Song = Song.toLowerCase();
  //console.log(driving);


  if (Song == 'yes' || Song == 'y') {
    //console.log('You are wrong !');
    alert('You are wrong');
  } else if (Song == 'no' || Song == 'n') {
    //console.log('You are correct');
    alert('You are correct');
    counter++;
  }
}
songs();

function cooking() {
  var Cooking = prompt('Can you guess if I love cooking?');
  //console.log('cooking=', Cooking);
  var Cooking = Cooking.toLowerCase();
  //console.log(Cooking);


  if (Cooking == 'yes' || Cooking == 'y') {
    // console.log('You are right !');
    alert('You are right');
    counter++;
  } else if (Cooking == 'no' || Cooking == 'n') {
    //console.log('You are wrong');
    alert('You are wrong');
  }
}
cooking();

function fan() {
  var enemy = prompt('Do you think I am a fan of enemy?');
  console.log('enemy=', enemy);

  var enemy = enemy.toLowerCase();
  //console.log(enemy);

  if (enemy == 'yes' || enemy == 'y') {
    //  console.log('You are wrong !');
    alert('You are wrong');
  } else (enemy == 'no' || enemy == 'n')
  {
    // console.log('You are correct');
    alert('You are correct');
    counter++;
  }
}
fan();


alert('Thank you ' + userName + ' for playing this game with me and hope you enjoy my website!');

alert('Lets play one more game which is guessing ');


function born() {
  for (var i = 0; i < 4; i++) {
    var month = prompt('Can you guess in what month i was born?');
    console.log(month);
    if (month == 10) {
      //console.log('You are correct');
      alert('you are correct');
      counter++;
      break;
    } else if (month > 10) {
      alert('Too High')
      // prompt('Try Again');
    } else if (month < 10) {
      alert('Too Low')
      // prompt('Try Again');
    }
  } alert('The correct answer is 10 ');
}
born();




function cars() {
  for (var i = 0; i < 6; i++) {
    var car = ['kia', 'audi', 'bmw'];

    var car = prompt('Guess what is my dream car ?')
    //console.log(car);
    if (car == cars[0] || car == cars[1] || car == cars[2]) {
      //console.log('Yupp i love it!')
      alert('Yuppp how did you know')
      counter++;
      break;
    } else {
      alert('Nop not this one do not give up , try again');
      // prompt('Nop not this one do not give up , try again')
    }
  }
}
cars();


alert('The correct answer is audi,bmw and kia');


alert('Your Score is ' + counter);