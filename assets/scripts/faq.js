$(function () {
	$('#psn-faq > .panel').on('show.bs.collapse', function () {
    $(this).addClass('panel-active').find('i').addClass('faq-close');
  });

  $('#psn-faq > .panel').on('hide.bs.collapse', function () {
    $(this).removeClass('panel-active').find('i').removeClass('faq-close');
  });
});