window.onload = function(){

function Game(player_row) {
  this.player_row = player_row

self.movePlayer = function(player1){
  console.log("movetest")
  player1.classList.remove('active');
  if (player1.nextElementSibling != null){
   player1.nextElementSibling.classList.add('active');
 } else {
    alert("player1 wins!!!!!");
  location.reload();
  }
}

player_row.onclick = function(event){
  var player1 = (player_row > 'td.active')
  console.log("cliktest")
  movePlayer(player1)
}

};

var player1Object = new Game(document.querySelector('#player1_strip'))
player1Object.movePlayer
console.log(player1Object)
var player2Object = new Game(document.querySelector('#player2_strip'))
console.log(player2Object)

}