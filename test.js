
start_again();


// document.onreadystatechange = function() {
//   var form = document.querySelector(".board_length");
//   form.addEventListener('submit', addrows)
// }

// var addrows = function(event){
//   event.preventDefault();
//   var number = this.number.value
//   newRow(number);
// }

// function newRow(rows) {
//   var strip1 = document.getElementById("player1_strip");
//   var strip2 = document.getElementById("player2_strip");
//   for (i = 0; i< rows; i++) {
//     strip1.insertCell(1);
//     strip2.insertCell(1);
//   }
// }

// var endRow = document.querySelector("#player1_strip > td:nth-child(2)");
// endRow.className = "end"

// var endRow = document.querySelector("#player2_strip > td:nth-child(2)");
// endRow.className = "end"

  window.onload = function() {
  var form = document.querySelector(".board_length");
  form.addEventListener('submit', addrows)
    }




var addrows = function(event){
  event.preventDefault();
  var number = this.number.value
  newRow(number);


}



function newRow(rows) {
  var strip1 = document.getElementById("player1_strip");
  var strip2 = document.getElementById("player2_strip");
  for (i = 0; i< rows; i++) {
    strip1.insertCell(1);
    strip2.insertCell(1);
  }
}


function start_again() {



var current = document.querySelector(".active");
var next1 = current;

var current = document.querySelector(".active1");
var next2 = current;
current.className = "active";



document.addEventListener('keyup', press1, false);
document.addEventListener('keyup', press2, false);

function press1(callback) {
  if(callback.keyCode == 65 || callback.keyCode ==  83 || callback.keyCode ==  68){
    movePosition1();
  }
}

function press2(callback) {
  if(callback.keyCode == 74 || callback.keyCode == 75 || callback.keyCode == 76){
    movePosition2();
  }
}

function movePosition1() {
  next1 = next1.nextSibling;
  if(next1.nextSibling == null){
    alert("player 1 wins");
    next2 = null;
    do_over();
    }
  next1.className = "next_red";
  next1.previousSibling.className = "";
}

function movePosition2() {
  next2 = next2.nextSibling;
  if(next2.nextSibling == null){
    alert("player 2 wins");
    next1 = null;
    do_over();
   }
  next2.className = "next_blue";
  next2.previousSibling.className = "";
  }
}

function do_over(){
var allKids = document.querySelector("#player1_strip").childNodes;
for(var i=0; i<allKids.length; i++) {
    allKids[i].className = "";
     }

var allKids = document.querySelector("#player2_strip").childNodes;
for(var i=0; i<allKids.length; i++) {
    allKids[i].className = "";
     }

  document.querySelector("#player1_strip").querySelector('td').className = "active";
  document.querySelector("#player2_strip").querySelector('td').className = "active1";
  start_again();


}


//helper



// var player = {
//           "name" : null,
//           "position": 0,
//           "letter" : null

// }


