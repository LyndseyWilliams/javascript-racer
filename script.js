window.onload = function()
{
        p1 = document.querySelectorAll('#player1_strip > td');
        p2 = document.querySelectorAll('#player2_strip > td');
        position1 = 0;
        position2 = 0;

        // function showKeyCode(k){
        //         alert( "keycode: " + e.keycode + "\n");
        // }
        // var keypressed = event.

        document.onkeyup = function(event) {
                var key_press = String.fromCharCode(event.keyCode);
        // console.log(key_press)
        move_player(key_press)
        }

        wipe_race_track = function(track)
        {
                for(p=0; p<p1.length; p++)
                {
                        if (track == 1)
                        p1[p].className="";
                        else
                            p2[p].className="";
                };
        };
        wipe_race_track(1);
        wipe_race_track(2);

        move_player = function(key_press) {
                // console.log("here is what move_player is receiving "+key_press)

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
                        p1[position1].className="active"
                }
                else if (player == 2)
                {
                        position2+=1;
                        wipe_race_track(player)
                        p2[position2].className="active"
                }

                check_for_winner(position1, position2)

        };

        check_for_winner = function(position1, position2)
        {
                console.log(position1);
                console.log(position2);
                // if (position1 == p1.length || position2 == p1.length)
                // {
                        if (position1 == p1.length-1)
                        {
                                console.log('player 1 wins!')
                                return 0
                        }
                // }
                        else if (position2 == p1.length-1)
                        {
                                console.log('player 2 wins!')
                                return 0
                        }
        }


        // update_player_position('player1', 10);
        // update_player_position('player2', 15);



}


        // p1 = document.querySelectorAll('#player1_strip > td');
        // p2 = document.querySelectorAll('#player2_strip > td');

//  function changeClass()
//     {
//         // code examples from above
//     }

//     window.onload = function()
//     {
//         document.getElementById("MyElement").addEventListener( 'click' , changeClass );
//     }

// update_player_position('player1', 10);
