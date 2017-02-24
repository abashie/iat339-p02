$(document).ready(function(){

  (function($) {

    $('#hamburger-icon').click(function(e){
      e.preventDefault();
      $('body').toggleClass('sidebar');
    });
    
    $('#site-cache').click(function(e){
      $('body').removeClass('sidebar');
    });

  })(jQuery);

});