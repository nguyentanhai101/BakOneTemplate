$(".portfolio button").click(function(event) {
	/* Act on the event */
	var dataValue = $(this).attr("data");

	//Active clicked button
	$(this).addClass('active');

	// Unactive unclicked buttons
	$(this).siblings('button.active').removeClass('active');

	if (dataValue == undefined) {
		//show all
		$(this).siblings('.row').children().show();
	}
	else {
		var shownCols = $(`[data=${dataValue}]`);
		var hiddenCols = $(this).siblings('.row').children().not(shownCols);
		$(shownCols).show();
		$(hiddenCols).hide();
	}
	
});

$(".back-to-top").click(function(event) {
	/* Act on the event */
	// đơn vị thời gian là ms
	// button back to top so với top
	//Lấy top của button back to top
	//offset() là vị trí của phần tử so với document
	//position() là vị trí của phần tử so với cha trực tiếp 
	var distance = $(this).offset().top;
	var v = 2; //2px/ms
	var time = distance / v;
	$("html").animate({scrollTop: 0}, time);
});

// $(window).scroll(function(event) {
// 	 Act on the event 
// 	var top = $(this).scrollTop();
// 	console.log(top);
// });

$(window).scroll(function(event) {
	/* Act on the event */
	var windowTop = $(this).scrollTop();
	if(windowTop>= $("#portfolio").offset().top - 1){
		$("header nav").addClass('fixed-top');
		$("header").addClass('dummy-menu-padding-top');
	}
	else{
		$("header nav").removeClass('fixed-top');
		$("header").removeClass('dummy-menu-padding-top');
	}
});