$(document).ready(function(){
	$('#details').on('click',function(e){
		let movieid = $('#id')
		movieid.modal('show')
	let name = $(this).closest('.info').children('.row').children('div').children('#name').text();
	$('.modal-body').find('#name').text(name);

	let image = $(this).closest('.col-item').find('img').attr('src');
	$('.modal-body').find('image').attr('src', image);
	
	let price = $(this).closest('.info').children('.row').children('div').children('#price').text();
	$('.modal-body').find('#price').text(price);

	let rating = $(this).closest('.info').find('#rating').html();
	$('.modal-body').find('#rating').html(rating);
	})

});