function open_bar(){
    document.getElementById("sidebar").style.display = "block"
    document.getElementById("click-show-sidebar").style.display = "none"
    document.getElementById("sidebar").style.width = "200px"
    document.getElementsByClassName(".bar-item").style.transition = " 4s"
}

function close_bar(){
    document.getElementById("sidebar").style.display = "none"
    document.getElementById("click-show-sidebar").style.display = "block"
    document.getElementsByClassName(".bar-item").style.transition = " 4s"
}

var myIndex = 0;
slideShow();

function slideShow() {
  var i;
  var x = document.getElementsByClassName("slide-car");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideShow, 2000); // Change image every 2 seconds
}
