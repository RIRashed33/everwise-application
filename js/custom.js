$(document).ready(function(){
  $("button#hamburger_btn").click(function(){
    $("body").toggleClass("mobile-menu-active")
  });

  $("li.has-submenu > a").click(function(e){
    e.preventDefault();
    $(this).siblings("ul").slideToggle();
    $(this).toggleClass("active");
  });
});
