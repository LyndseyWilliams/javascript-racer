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
// functions for playerB player1to turn off current
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
    findWinner()
  }
//player B master manipulating function
  function changeM(){
    turnMCurrentOff()
    turnMFirstOn()
    findWinner()
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

function findWinner(){
  var lastA = document.querySelector('#player1_strip');
  var lastM = document.querySelector('#player2_strip');
  var lastChildA = lastA.lastChild;
  var lastChildM = lastM.lastChild;
  console.log(lastChildM)

  if (lastChildM.previousSibling.className === 'activeMtouched') {
    alert('player 2 wins')
  }
  if (lastChildA.previousSibling.className === 'activeAtouched') {
      alert('player 1 wins')
  }
}


function reset() {

}





