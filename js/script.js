$('#pageSectionTwo').waypoint(function(direction){
  if (direction == 'down'){
    $('#sectionTwoMenu').addClass('visible');
  } else {
    $('#sectionTwoMenu').removeClass('visible');
  }
}, { offset: '30%' });

$('#pageSectionTwo').waypoint(function(direction){
  if (direction == 'down'){
    $('#sectionTwoContentContainer').addClass('visible');
  } else {
    $('#sectionTwoContentContainer').removeClass('visible');
  }
}, { offset: '30%' });

$('#pageSectionThree').waypoint(function(direction){
  if (direction == 'down'){
    $('#pageSectionThreeContent ').addClass('visible');
  } else {
    $('#pageSectionThreeContent ').removeClass('visible');
  }
}, { offset: '30%' });

$('#pageSectionFour').waypoint(function(direction){
  if (direction == 'down'){
    $('#pageSectionFourContent ').addClass('visible');
  } else {
    $('#pageSectionFourContent ').removeClass('visible');
  }
}, { offset: '30%' });

$('#pageSectionFive').waypoint(function(direction){
  if (direction == 'down'){
    $('#pageSectionFiveContent ').addClass('visible');
  } else {
    $('#pageSectionFiveContent ').removeClass('visible');
  }
}, { offset: '30%' });

$('#pageSectionSix').waypoint(function(direction){
  if (direction == 'down'){
    $('#pageSectionSixContent ').addClass('visible');
  } else {
    $('#pageSectionSixContent ').removeClass('visible');
  }
}, { offset: '30%' });

$(document).ready(function(){
  $('#pageSectionOneContent').fadeIn(1000);
});
