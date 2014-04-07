var clearTrack = function(track) {
  for (i = 0; i < track.length; i++){
    track[i].classList.remove('active');
  }
};

var update_player_position = function(trackName, position)
{
  var entireTrack = document.querySelectorAll(trackName);
  clearTrack(entireTrack);
  entireTrack[position].classList.add('active')
}


pPressed = 0;
qPressed = 0;
document.addEventListener('keyup', function(event){
  console.log("something");
  if (event.keyCode == 80){
    pPressed++;
  } else if (event.keyCode == 81) {
    qPressed++;
  }
  update_player_position('div.blue', pPressed);
  update_player_position('div.green', qPressed);
}, false)