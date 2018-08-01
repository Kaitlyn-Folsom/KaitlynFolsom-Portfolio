

$('document').ready(function(){
	$('.carousel').carousel()

	// ===================
	// == ANIMATED MODAL
	// ===================

	$("#modal1").animatedModal();
	$("#modal1").click(function() {
		getdinnerShowProject();
	});

	$("#modal2").animatedModal();
	$("#modal2").click(function() {
		getRxProject();
	});

	$("#modal3").animatedModal();
	$("#modal3").click(function() {
		getforumProject();
	});

	$("#modal4").animatedModal();
	$("#modal4").click(function() {
		getTriviaProject();
	});

	$("#modal5").animatedModal();
	$("#modal5").click(function() {
		getCuisineProject();
	});

	function getdinnerShowProject() {
		$("#projectTitle").text("Dinner & A Show");
	}

	function getForumProject() {
		$("#projectTitle").text("Friend Forum");
	}

	function getRxProject() {
		$("#projectTitle").text("RxMinder");
	}

	function getTriviaProject() {
		$("#projectTitle").text("Wine Trivia");
	}

	function getCuisineProject() {
		$("#projectTitle").text("Knox Cuisine");
	}


	// NAVIGATION
	$('#nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('#overlay').toggleClass('open');
	 });
	 
	 $('#overlay ul li a').click(function() {
		 $('#nav-toggle').toggleClass('active');
		 $('#overlay').toggleClass('open');
	 });


	var contentSections = $('.cd-section'),
		navigationItems = $('.cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});
