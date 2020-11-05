// はじめます

$(function(){

	// Q1
	$('#q1-btn').on('click',function(){
		$(this).addClass('small-btn');
	});

	// Q2
	$('#q2-btn').on('mouseover',function(){
		$(this).css('opacity',0.2);
	});

	// Q3
	$('#q3-btn').on('mouseover',function(){
		$(this).css('opacity',0.2);
	})
	.on('mouseleave',function(){
		$(this).css('opacity',1)
	});

	// Q4
	$('#q4-btn').on('click',function(){
		$('#q4-text').text('文字を変更した');
	});

	// Q5
	$('#q5-btn').on('click',function(){
		$('.orange').before('<li class="apple">りんご</li>');
	});

	// Q6
	$('#q6-btn').on('click',function(){
		$('.q6-text').after('<p class="red">追加文字</p>');
	});

	// Q7
	$('#q7-btn').on('click',function(){
		$('.js-hamburger').toggleClass('on');
	});

	// Q8
	$('#q8-btn').on('click',function(){
		$(this).siblings().slideToggle();
	});

	// Q9
	$('#q9-btn').on('click',function(){
		$('html, body').animate({scrollTop: 0}, 500);
	});

	// Q10
	$('.q10-show-btn').on('click',function(){
		$('.q10-target').animate({height: 'show'}, 500);
	});
	$('.q10-hide-btn').on('click',function(){
		$('.q10-target').animate({height: 'hide'}, 500);
	});

	// Q11
	$(window).on('scroll',function(){
		let q11_position = $('#q11').offset().top;
		let wh = $(window).height();
		let now_position = $(window).scrollTop();
		if (q11_position <= wh + now_position){
			$('.q11-target').removeClass('hide');
		}
	});

	// Q12
	$('#q12-btn').on('click',function(){
		$('.q12-target').toggleClass('hide');
	});

});