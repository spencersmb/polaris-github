  jQuery(document).ready(function($){

		$( '#dl-menu' ).dlmenu({
	       animationClasses : { classin : 'animation-class-name', classout : 'animation-class-name' }
	   });

		// Change FAQ Panel heading background color
		// when a question is selected by adding 'panel-active' class

		$('#psn-faq > .panel').on('show.bs.collapse', function () {
      // console.log('collapse function open');
      $(this).addClass('active');
    });

    $('#psn-faq > .panel').on('hide.bs.collapse', function () {
      // console.log('collapse function close');
      $(this).removeClass('active');
    });

  });
