var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
  	var diff = document.getElementById("navbar").style.height;
    document.getElementById("navbar").style.top = "-" + diff + "px";
  }
  prevScrollpos = currentScrollPos;
}

$('.js-scroll-trigger').click(function() 
{
    $('.navbar-collapse').collapse('hide');
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
