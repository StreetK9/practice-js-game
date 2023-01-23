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

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
