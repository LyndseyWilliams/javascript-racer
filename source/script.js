var clearTrack = function(track) {
  for (i = 0; i < track.length; i++){
    track[i].classList.remove('active');
  }
};

var update_player_position = function(trackName, position)
{
  var entireTrack = document.querySelectorAll(trackName);
  clearTrack(entireTrack);
  entireTrack[position - 1].classList.add('active')
}

update_player_position('div.blue', 11);