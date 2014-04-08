window.onload = function() {


 var trackLength = 5

  body=document.getElementsByTagName('body')[0];
  tbl=document.createElement('table');
  tbl.className="racer_table"
  body.appendChild(tbl)
  for (var i = 0; i < 2; i++) // creating rows
  {
      tr = document.createElement("tr");
      tr.id="player"+(i+1)
      tbl.appendChild(tr);
      for (var j=0; j < trackLength; j++) // creating td cells inside the rows
      {
          var td = document.createElement("td");
          tr.appendChild(td);
      }
  };
  body.appendChild(tbl)


  winner=document.createElement('h1')

  body.appendChild(winner)



  document.querySelector('#player1').firstChild.className = 'active'
  document.querySelector('#player2').firstChild.className = 'active'
  document.querySelector('#player1').lastChild.className = 'finish'
  document.querySelector('#player2').lastChild.className = 'finish'


  var checkWinner = function(player) {
    if (player.classList.contains('finish')) {
      var display = player.parentElement.id + " Wins!"
      document.querySelector('h1').innerHTML = display;
      document.removeEventListener('keyup', racer)
    }
  }


  var movePlayer = function(player){
      player.classList.remove('active');
      var nextCell = player.nextElementSibling;
      nextCell.classList.add('active');
      checkWinner(nextCell)
  }


  var racer = function(event) {
  var keyPress = String.fromCharCode(event.keyCode);
  if (keyPress == "Q") {
    var player1 = document.querySelector('#player1 > td.active')
    movePlayer(player1)
  }else if (keyPress == "P"){
    var player2 = document.querySelector('#player2 > td.active')
    movePlayer(player2)
  }
}

   document.addEventListener('keyup', racer, false)

}


