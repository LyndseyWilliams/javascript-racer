


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
  else
  {
    winner = true;
    alert(trackName + ' wins!');
  }
}

var interaction = function(event)
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
document.addEventListener('keyup', interaction, false);
