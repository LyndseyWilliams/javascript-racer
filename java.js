// document.querySelector('#MyElement').addEventListener('click', changeA);
document.onreadystatechange = function() {
//set up
  document.addEventListener('keyup', pressM, false)
  document.addEventListener('keyup', pressQ, false)


}
//functions for playerA to turn off current
  function turnCurrentOff(){
  if (document.querySelector('#player1_strip .activeAgo')) {
    document.querySelector('#player1_strip .activeAgo').className = 'activeAtouched';

    }
  }
//functions for playerA to turn on current
  function turnFirstOn() {
  if (document.querySelector('#player1_strip .activeA')) {
    document.querySelector('#player1_strip .activeA').className = 'activeAgo';

    }
  }
// functions for playerB to turn off current
  function turnMCurrentOff(){
  if (document.querySelector('#player2_strip .activeMgo')) {
    document.querySelector('#player2_strip .activeMgo').className = 'activeMtouched';

    }
  }
// functions for playerB to turn on current
  function turnMFirstOn() {
  if (document.querySelector('#player2_strip .activeM')) {
   document.querySelector('#player2_strip .activeM').className = 'activeMgo';

    }
  }

//player A master manipulating function
  function changeQ(){
    turnCurrentOff()
    turnFirstOn()
  }
//player B master manipulating function
  function changeM(){
    turnMCurrentOff()
    turnMFirstOn()
  }



//key pressing functions
  function pressQ(callback){
    if (callback.keyCode == 81) {
      changeQ();
    }
  }
  function pressM(callback){
    if (callback.keyCode == 77) {
      changeM();
    }
  }









