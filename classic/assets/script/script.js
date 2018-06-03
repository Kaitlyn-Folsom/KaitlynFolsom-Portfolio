
$(function() {

	// variables
	var doc = $('document');
	var	win = $('window');
	var	winW = win.width();
	var	winH = win.height();
	var	body = $('body');
	var	panels = $('.panel');
	var	panelsLen = panels.length;
	var	header = $('.header');
	var	linkScrollDuration = 800;
	var	isHomepage = body.hasClass('homepage');
		
	
	//////////////////////////
	// delegated events
	/////////////////////////
	
	// doc
	// .on("focusin", '.field, textarea', function(){
	// 	if (this.value == this.title){
	// 		this.value = '';	
	// 	} 
	// })
	// .on('focusout', '.field, textarea', function(){
	// 	if (this.value == ''){
	// 		this.value = this.title;	
	// 	} 
	// })
	// .on('change', '.radio input', function(){
	// 	var radioName = $(this).attr('name');
	// 	$('input[name='+radioName+']').closest('.radio').removeClass('checked')
	// 	$('input[name='+radioName+']:checked').closest('.radio').addClass('checked')
	// })
	// .on('change', '.checkbox input', function(){
	// 	var isChecked = $(this).is(':checked');
	// 	$(this).closest('.checkbox').toggleClass('checked', isChecked)
	// })
	// .on('click', '.popup .close', function(e) {
	// 	e.preventDefault();

	// 	$('.popup-overlay').hide();

	// 	var $popup = $(this).closest('.popup');

	// 	$popup.removeClass('show')
		
	// 	if ($popup.hasClass('popup-gallery')){
	// 		$popup.find('.popup-slideshow ul').trigger('destroy')
	// 	}

	// 	setTimeout(function() {
	// 		$popup.remove();
	// 	}, 300);
	// })
	// .on('submit', '.form-quote', function(e){ // quote form
	// 	e.preventDefault()
		
	// 	var $form = $(this),
	// 		$name = $('#quote-name').removeClass('field-error'),
	// 		$mail = $('#quote-email').removeClass('field-error'),
	// 		$message = $('#quote-comments').removeClass('field-error'),
	// 		$checkedRadio = $form.find('input[name="radio"]:checked'),
	// 		errorFound = false;
			
	// 	$form.find('.radio').removeClass('field-error');
		
	// 	if ($name.val() == '' || $name.val() == $name.attr('title')){
	// 		errorFound = true;
	// 		$name.addClass('field-error')
	// 	}
		
	// 	if ( !mailValidation($mail.val()) ) {
	// 		errorFound = true;
	// 		$mail.addClass('field-error');
	// 	}
		
	// 	if ( !$checkedRadio.length ) {
	// 		$('.radio', $form).addClass('field-error');
	// 		errorFound = true;
	// 	}
		
	// 	if ($message.val() == '' || $message.val() == $message.attr('title')){
	// 		$message.addClass('field-error')
	// 		errorFound = true;
	// 	}
		
	// 	if (!errorFound){ 
	// 		$.ajax({
	// 			type: 'POST',
	// 			url: this.action,
	// 			data: { 
	// 				name: $name.val(), 
	// 				email: $mail.val(),
	// 				radio: $checkedRadio.val(),
	// 				comments: $message.val() 
	// 			},
	// 			success: function( data ) {
	// 				if ( data == 'OK' ) {
	// 					$form.hide().next('.success-message').fadeIn(400);
	// 				} else {
	// 					$form.find('h1').text('Message Could Not Be Sent');
	// 				}
	// 			}
	// 		});
	// 	}
	// })
	// .on('submit', '.form-contact', function(e){ // contact form
	// 	e.preventDefault()
		
	// 	var $form = $(this),
	// 		$name = $('#contact-name').removeClass('field-error'),
	// 		$mail = $('#contact-email').removeClass('field-error'),
	// 		$message = $('#contact-comments').removeClass('field-error'),
	// 		errorFound = false;
			
	// 	if ($name.val() == '' || $name.val() == $name.attr('title')){
	// 		errorFound = true;
	// 		$name.addClass('field-error')
	// 	}
		
	// 	if ( !mailValidation($mail.val()) ) {
	// 		errorFound = true;
	// 		$mail.addClass('field-error');
	// 	}
	
	// 	if ($message.val() == '' || $message.val() == $message.attr('title')){
	// 		errorFound = true;
	// 		$message.addClass('field-error')
	// 	}
		
	// 	if (!errorFound){ 
	// 		$.ajax({
	// 			type: 'POST',
	// 			url: this.action,
	// 			data: { 
	// 				name: $name.val(), 
	// 				email: $mail.val(),
	// 				radio: 'false',
	// 				comments: $message.val() 
	// 			},
	// 			success: function( data ) {
	// 				if ( data == 'OK' ) {
	// 					$form.hide().next('.success-message').fadeIn(400);
	// 				} else {
	// 					$form.find('h1').text('Message Could Not Be Sent');
	// 				}
	// 			}
	// 		});
	// 	}
	// });

	
	////////////////
	// inits
	//////////////
	// $('[data-popup]').popup();
	
	$('.navigate, .goto').on('click', function(e){
		e.preventDefault()
	});
	
	// $('a.fullscreen, a.toggle-video, .client-video-overlay').on('click', function(e){
	// 	e.preventDefault()
		
	// 	var player = $(this).closest('.panel').find('.video-holder').addClass('visible').find('.jp-jplayer'),
	// 		sourceMP4 = player.data('mp4'),
	// 		sourceWEBMV = player.data('webmv'),
	// 		sourceOGV = player.data('ogv');
		
	// 	if (player.length){ // local
			
	// 		player.jPlayer("setMedia", {
	// 			m4v: sourceMP4,
	// 			ogv: sourceOGV,
	// 			webmv: sourceWEBMV
	// 		}).jPlayer('play');
			
	// 	} else { // external
	// 		var $externalPlayer = $(this).closest('.panel').find('.video-holder .video-external');
	// 		var externalSource = $externalPlayer.data('src');
			
	// 		if ($externalPlayer.find('iframe').length){
	// 			$externalPlayer.find('iframe').attr('src', externalSource)
	// 		} else {
	// 			$externalPlayer.append('<iframe src="'+externalSource+'" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
	// 		}
	// 	}
		
	// 	setTimeout(function(){
	// 		$body.addClass('video-active')
	// 	},linkScrollDuration)
	// })
	
	// $('.video-holder .close').on('click', function(e){
	// 	e.preventDefault();
		
	// 	var $holder = $(this).closest('.video-holder').removeClass('visible');
		
	// 	if ($holder.find('.jp-jplayer').length){
	// 		$holder.find('.jp-jplayer').find('.jp-jplayer').jPlayer("stop").jPlayer('clearMedia')
	// 	} else {
	// 		$holder.find('iframe').attr('src', '')
	// 	}
		
	// 	$body.removeClass('video-active')
		
	// 	if ($clientVideo.length){
	// 		$clientVideo.jPlayer("play")
	// 	}
	// })
	
	// $('.video-holder .jp-jplayer').each(function(){
	// 	var $player = $(this),
	// 		panel = $player.closest('.panel').attr("id");
			
	// 	$player.jPlayer({
	// 		fullWindow: true,
	// 		swfPath: "js",
	// 		supplied: "webmv, ogv, m4v",
	// 		cssSelectorAncestor: "#"+panel+' .video-holder .jp-video',
	// 		smoothPlayBar: true,
	// 		keyEnabled: true,
	// 		play: function(){
	// 			$(this).jPlayer("pauseOthers");
	// 		}
	// 	});
	// })
	
	// new jPlayerPlaylist({
	// 	jPlayer: ".client-video .jp-jplayer",
	// 	cssSelectorAncestor: ".client-video"
	// }, [
	// 	{
	// 		m4v: "video/snippet1.mp4",
	// 		webmv: "video/snippet1.webm"
	// 	},
	// 	{
	// 		m4v: "video/snippet2.mp4",
	// 		webmv: "video/snippet2.webm"
	// 	},
	// 	{
	// 		m4v: "video/snippet3.mp4",
	// 		webmv: "video/snippet3.webm"
	// 	}
	// ], {
	// 	swfPath: "js",
	// 	supplied: "webmv, m4v",  
	// 	loop:true,
	// 	size: {
	// 		width:'100%',	
	// 		height:'100%',	
	// 	},
	// 	keyEnabled: true,
	// 	ready: function(){
	// 		if (winW > 767){
	// 			$(this).jPlayer('play')
	// 		}
	// 	},
	// 	play:function(){
	// 		$(this).jPlayer("pauseOthers");
	// 	}
	// });

	
	$('.nav-toggle').on('click', function(e){
		e.preventDefault()
		body.toggleClass('header-expanded')
	});
	
	
	initPanels()
	
	s = skrollr.init({
		smoothScrollingDuration:linkScrollDuration,
		render: function(data){
			if (isHomepage){
				var secMax = data.maxTop/winH;
				var curSecIdx = Math.round(data.curTop / winH);
				
				for ( i=0; i <= secMax; i++){
					body.removeClass('panel-active-'+i)
				}
				
				body.addClass('panel-active-'+curSecIdx)
			}
		}
	});
	
	skrollr.menu.init(s, {
		duration: linkScrollDuration
	});
	
	/////////////////////
	// window events
	/////////////////////
	doc.ready(function(){ // load
		
		var winW = $("window").width();
		var winH = $("window").height();

		setTimeout(function(){ 
			body.addClass('loaded');
		}, 1000);
		
		$('.tst-slides').carouFredSel({
			auto:false,
			items: {
				visible:1
			},
			swipe:true,
			height:'variable',
			responsive: true,
			next: '.tst-next'
		});



	}).on('resize', function(){
		winW = win.width();
		winH = win.height();
	})
	
	//////////
	// funcs
	/////////

	function initPanels(){
		$.each(panels, function(panelIdx){
			var panel = panels.eq(panelIdx);
				// panelStart = panelIdx == 0 ? '0%' : '100%',
			panel.find('.navigate').attr('data-menu-top', (panelIdx+1)*100+'p')
			panel.find('.goto').attr('data-menu-top', '0p')
			// panel.find('a.fullscreen').attr('data-menu-top', (panelIdx)*100+'p')
			// panel.find('.video-holder .close').attr('data-menu-top', (panelIdx)*100+'p')
			
			
			panel.attr('data-'+(panelIdx-1)*100+'p', 'transform:translate(0,100%)') // -1 - in-start
			panel.attr('data-'+(panelIdx-0.5)*100+'p', 'transform:translate(0,0%)') // -0.5 - in-end
			panel.attr('data-'+(panelIdx)*100+'p', 'transform:translate(0,0%)') // 0 - out-start
			
			if (panelIdx + 1 < panelsLen){
				panel.attr('data-'+(panelIdx+1)*100+'p', 'transform:translate(0,-100%)') // +1 - out-end
			}
			
			
		})
	}
	
	
});
	
