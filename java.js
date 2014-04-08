// document.querySelector('#MyElement').addEventListener('click', changeA);
document.onreadystatechange = function() {
//set up
  document.addEventListener('keyup', pressM, false)
  document.addEventListener('keyup', pressQ, false)
  var resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', reloadPage)

  var form = document.querySelector('.form')

  form.addEventListener('submit',length,false)

}



function newRow (times) {
  for (i=0;i<times;i++) {
    console.log('hi')
  var parentQ= document.querySelector("#player1_strip")
  var player= document.createElement('td')
  player.className = 'activeA'
  parentQ.appendChild(player)


  var parentM= document.querySelector("#player2_strip")
  var player2= document.createElement('td')
  player2.className = 'activeM'
  parentM.appendChild(player2)
  }
}

var length = function(event){
  event.preventDefault();
  var number = this.number.value
  newRow(number);
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

  if (lastChildA.previousSibling.className === 'activeAtouched') {
      alert('player 1 wins');
      document.removeEventListener('keyup', pressM, false);
      document.removeEventListener('keyup', pressQ, false);
  }
  if (lastChildM.previousSibling.className === 'activeMtouched') {
    alert('player 2 wins');
    document.removeEventListener('keyup', pressQ, false);
    document.removeEventListener('keyup', pressM, false);
  }
}



function reloadPage() {
  window.location.reload();

}


var test = document.createElement('td')
test.className = "activeA"


