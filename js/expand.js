// THIS IS FOR THE EXPANDABLE TEXT FOR PROJECTS
$('.readmore-btn').on('click', function() {
  $('.expandable-text').removeClass('is-hidden');
  $('.readmore-btn').addClass('is-hidden');
});
$('.contract-btn').on('click', function() {
  $('.readmore-btn').removeClass('is-hidden');
  $('.expandable-text').addClass('is-hidden');
});