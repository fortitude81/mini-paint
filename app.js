$(document).ready(function(){

	var color = 'white';							//needs to be string
	var colors = 'white red blue green yellow';  //multiple classs sep by space

	$('.box').on('click', function() {
    	$(this).addClass(color);			//on all boxes, look for a click, then add white class
  	})

	$('.box').on('dblclick', function(){
		$(this).removeClass(colors);
	})

	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	})
//color palatte

  $('#red').on('click', function() {
    color = 'red';
  })

  $('#blue').on('click', function() {
    color = 'blue';
  })

  $('#green').on('click', function() {
    color = 'green';
  })

  $('#yellow').on('click', function() {
    color = 'yellow';
  })

  $('#white').on('click', function() {
    color = 'white';
  })

})