$(function () {
	$('#psn-faq > .panel').on('show.bs.collapse', function () {
    $(this).addClass('panel-active');
  });

  $('#psn-faq > .panel').on('hide.bs.collapse', function () {
    $(this).removeClass('panel-active');
  });
});