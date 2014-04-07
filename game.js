// var active=document.querySelector(".active")
//   this.onclick=function(){
//     (this).style.backgroundcolor="yellow"

//   }

// var el= document.querySelector('.active');
//   el.onclick (function(){
//   this.innerHTML = "WHAT!!");

// }

// window.addEventListener('load', function(){
//   document.querySelector(".active").onclick=function()
//   {
//       this.classList.remove('active');
//       document.getElementsByClassName(this).NextElementSibling.add('active');
//   };
// })

window.addEventListener('load', function(){
  var rows= document.getElementsByTagName('td');
  rows.classList.remove('active');
  for (i=0;i <= rows.length;i++){
    rows[i].onclick = function(){
      this.className += 'active'
      // this.className.setAttribute("backgroundcolor", "white")
      // this.classList.add('inactive');

    }
  }
})

