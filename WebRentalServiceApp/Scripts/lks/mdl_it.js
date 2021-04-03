$(document).ready(function(){
  $('.find input').keyup(function(){
     // var nombres = $('.nombres');
     var nombres = $('.cd-accordion-menu a');
     var buscando = $(this).val();
     var item='';
     for( var i = 0; i < nombres.length; i++ ){
         item = $(nombres[i]).html().toLowerCase();
          for(var x = 0; x < item.length; x++ ){
              if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                  // $(nombres[i]).parents('.item').show();
                  $(nombres[i]).show();
              }else{
                  // $(nombres[i]).parents('.item').hide();
                  $(nombres[i]).hide();
              }
          }
     }
	 
	 // ==============================
	// $('.cd-accordion-menu > li > ul').each(function() {
	$('.has-children > ul').each(function() {
		// var obj_close_hide = $(this).attr('id');
		// $('#' + obj_close_hide).css({ display: 'none' });
		$(this).css({ display: 'block' });		
	});
	 // ==============================
	 
  });
});