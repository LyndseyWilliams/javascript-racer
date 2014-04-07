document.onreadystatechange = function() {

  document.querySelector('#MyElement').addEventListener('click', changeA);
}

  function turnCurrentOff(){
  if (document.querySelector('#player1_strip .activeAgo')) {
    a = document.querySelector('#player1_strip .activeAgo').className = 'activeAtouched';
    console.log(a)
    }
  }

  function turnFirstOn() {
  if (document.querySelector('#player1_strip .activeA')) {
    b = document.querySelector('#player1_strip .activeA').className = 'activeAgo';
    console.log(b)
    }
  }

  function changeA(){
    console.log("hey")
    turnCurrentOff()
    turnFirstOn()
  }


// function changeB(){
//   if (document.querySelector('.activeBgo')) {
//     document.querySelector('.activeBgo').className = 'activeB';
//   }
//   if (document.querySelector('.activeB')) {
//    document.querySelector('.activeB').className += 'go';
//   }
// }




