var clearTrack = function(track)
{
  for (i = 0; i < track.length; i++)
  {
    track[i].classList.remove('active');
  }
};

var update_player_position = function(trackName, playerPosition)
{
  var entireTrack = document.querySelectorAll(trackName);
  clearTrack(entireTrack);
  if (playerPosition < entireTrack.length)
  {
    entireTrack[playerPosition].classList.add('active');
  }
  else if (playerPosition > entireTrack.length - 1 && entireTrack.length > 0)
  {
    winner = true;
    alert(trackName + ' wins!');
  }
}

var userInteraction = function(event)
{
  if (winner === true)
  {
    winner = false;
    pPressed = 0;
    qPressed = 0;
  }
  else if (event.keyCode == 80)
  {
    pPressed++;
  }
  else if (event.keyCode == 81)
  {
    qPressed++;
  }
  update_player_position('.player1', pPressed);
  update_player_position('.player2', qPressed);
};




winner = false;
pPressed = 0;
qPressed = 0;
document.addEventListener('keyup', userInteraction, false);

var stopSubmit = function(event) {
  event.preventDefault();
}

var generateTrack = function(userInput, trackNumber, playerName)
{
  var i = 0
  while (i < userInput)
  {
    var player = document.createElement('div');
    player.className = playerName;
    var track = document.querySelector(trackNumber);
    track.appendChild(player);
    i++;
  }
};
var generateBoard = function() {
  stopSubmit(event);
  var userInput = document.form.userInput.value;
  document.form.userInput.value = "";
  generateTrack(userInput, ".track1", "player1");
  generateTrack(userInput, ".track2", "player2");
  var form = document.querySelector(".form");
  var body = document.querySelector('body')
  body.removeChild(form);
};

var button = document.querySelector('button')
var input = button.addEventListener('click', generateBoard, false);







