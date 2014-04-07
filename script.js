window.onload = function()
{
        p1 = document.querySelectorAll('#player1_strip > td');
        p2 = document.querySelectorAll('#player2_strip > td');
        position1 = 0;
        position2 = 0;
        length = p1.length;

        // function showKeyCode(k){
        //         alert( "keycode: " + e.keycode + "\n");
        // }
        // var keypressed = event.
        var keyRespond = function(event)
        {
            var key_press = String.fromCharCode(event.keyCode);
            move_player(key_press)
            // console.log("keyRespond method firing")
            return false;
        }

        document.addEventListener('keyup', keyRespond, false)

        // document.onkeyup = function(event) {
        //     var key_press = String.fromCharCode(event.keyCode);
        // move_player(key_press)
        // }

        wipe_race_track = function(track)
        {
            for(p=0; p<length; p++)
            {
                if (track == 1)
                    p1[p].className="";
                else
                    p2[p].className="";
            };
        };
        wipe_race_track(1);
        wipe_race_track(2);

        move_player = function(key_press)
        {
            if (key_press == "Q")
            {
                update_player_position(1)
            }
            else if (key_press == "P")
            {
                update_player_position(2)
            }
        }

        update_player_position = function(player)
        {
            if (player == 1)
            {
                position1+=1;
                wipe_race_track(player)
                p1[position1].className="active_blue"
            }
            else if (player == 2)
            {
                position2+=1;
                wipe_race_track(player)
                p2[position2].className="active_pink"
            }
            check_for_winner(position1, position2)
        };

        check_for_winner = function(position1, position2)
        {
            if (position1 == length-1)
            {
                b = document.querySelector("body")
                b.className='blue'
                var WinnerMsg_h1 = document.createElement("h1");
                  var WinnerMsg = document.createTextNode("Player 1 Wins!");
                  WinnerMsg_h1.appendChild(WinnerMsg);
                  original_table = document.getElementsByTagName("table");
                  document.body.insertBefore(WinnerMsg_h1, original_table);
                  document.removeEventListener('keyup', keyRespond)
            }

            else if (position2 == length-1)
            {
                b = document.querySelector("body")
                b.className='pink'
                var newDiv = document.createElement("h1");
                  var newContent = document.createTextNode("Player 2 Wins!");
                  newDiv.appendChild(newContent);
                  my_div = document.getElementsByTagName("table");
                  document.body.insertBefore(newDiv, my_div);
                  document.removeEventListener('keyup', keyRespond)
            }
        }
}


