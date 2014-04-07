var current = document.querySelector(".active");
var next1 = current;

var current = document.querySelector(".active1");
var next2 = current;
current.className = "active";


document.onreadystatechange = function() {
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

// var player = {
//           "name" : null,
//           "position": 0,
//           "letter" : null

// }

// function movePosition1(player) {
// // for (var i = 0; i <= 1; i++) {
//       next1 = next1.nextElementSibling;
//       if(next1.className == 'end'){
//         alert("player 1 wins");
//         location.reload();
//       }

//         next1.className = "next_red";
//     }

function movePosition1() {
// for (var i = 0; i <= 1; i++) {
      next1 = next1.nextElementSibling;
      if(next1.className == 'end'){
        alert("player 1 wins");
        location.reload();
      }

        next1.className = "next_red";
    }

function movePosition2() {
// for (var i = 0; i <= 1; i++) {

      next2 = next2.nextElementSibling;
      if(next2.className == 'end'){
        alert("player 2 wins");
        location.reload();
      }
      next2.className = "next_blue";
}







