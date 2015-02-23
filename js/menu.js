    // small menu OPEN
$( function() {
  $('#nav-menu-button').click( function() {
    $('#nav-menu-button').removeClass("nav-menu-button-on");
    $('#nav-menu-button').toggleClass("nav-menu-button-off");

     setTimeout(function() {
    $('#nav').removeClass("nav-stretch-back");
    $('#nav-wrapper').removeClass("nav-stretch-back");
    $('#nav').toggleClass("nav-stretch");
    $('#nav-wrapper').toggleClass("nav-stretch");
     }, 300); 

   setTimeout(function() {
    $('#nav-menu-active').removeClass("nav-menu-button-off");
    $('#nav-menu-button-active').removeClass("nav-menu-button-off");
    $('#content').removeClass("content-stretch-back");
    $('#nav-menu-active').toggleClass("nav-menu-active-opacity");
    $('#nav-menu-button-active').toggleClass("nav-menu-active-opacity");
    $('#content').toggleClass("content-stretch");
     }, 400);  
} );
} );
    // small menu CLOSE
$( function() {
  $('#nav-menu-button-active').click( function() {
  	$('#nav-menu-button-active').removeClass("nav-menu-active-opacity");
    $('#nav-menu-button-active').toggleClass("nav-menu-button-off");
    $('#nav-menu-active').removeClass("nav-menu-active-opacity");
    $('#nav-menu-active').toggleClass("nav-menu-button-off");
  
     setTimeout(function() {
	$('#nav').removeClass("nav-stretch");
    $('#nav-wrapper').removeClass("nav-stretch");
    $('#nav').toggleClass("nav-stretch-back");
    $('#nav-wrapper').toggleClass("nav-stretch-back");
     }, 300); 
    
   setTimeout(function() {
    $('#content').removeClass("content-stretch");
    $('#nav-menu-button').removeClass("nav-menu-button-off");
    $('#content').toggleClass("content-stretch-back");
    $('#nav-menu-button').toggleClass("nav-menu-button-on");
     }, 400); 
} );
} );



//HOME - SEARCH TOGGLE

$( function() {
  $('#nav-search-icon-inactive').click( function() {
    $('#nav-search-icon-inactive').removeClass("search-inactive-on");
    $('#nav-search-icon-active').removeClass("search-inactive-off"); 
    $('#nav-search-icon-inactive').toggleClass("search-inactive-off");
    $('#nav-search-icon-active').toggleClass("search-inactive-on");
    $('.nav-search-box').toggleClass("nav-search-box-slide");
    $('.nav-search-box').removeClass("nav-search-box-slide-off");


   setTimeout(function() {
   $('.nav-search-box').focus();
     }, 300);  
} );

  $('#nav-search-icon-active').click( function() {
    $('#nav-search-icon-inactive').removeClass("search-inactive-off");
    $('#nav-search-icon-active').removeClass("search-inactive-on"); 
    $('#nav-search-icon-inactive').toggleClass("search-inactive-on");
    $('#nav-search-icon-active').toggleClass("search-inactive-off");
    $('.nav-search-box').toggleClass("nav-search-box-slide-off");
    $('.nav-search-box').removeClass("nav-search-box-slide");


} );


} );




//PRVI PUT KAD KLIKNES NA DUGME
   $( '.right-button' ).click(function() {
	  $(this).parent().find('.left-button').addClass("browser-button-on");
	  $(this).parent().find('.left-button').removeClass("browser-button-off");
	  $(this).parent().parent().find('.slider').addClass("browser-window-stretch");
	  $(this).parent().parent().find('.slider').removeClass("browser-window-stretch-off");

   });
   
   $( '.left-button' ).click(function() {
	  $(this).parent().find('.right-button').addClass("browser-button-on");
	  $(this).parent().find('.right-button').removeClass("browser-button-off");

   });
