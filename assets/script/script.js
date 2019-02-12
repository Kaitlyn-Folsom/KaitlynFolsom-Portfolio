var projectObj = [
	{
		projectName: "Dinner and A Show",
		overview: "A web application that helps you discover highly rated, local restaurants based on the Broadway show you are attending in New York City. This site uses four API's to create an application for users to search for a broadway show (SeatGeek API) and a place to eat nearby (Yelp API). Additionally, you can get walking directions (Google Maps API) from the restaurant to the theatre and the current weather(Open Weather API).",
		tech: [
			"Javascript",
			"JQuery",
			"HTML",
			"CSS",
			"SeatGeek API",
			"Open Weather API",
			"Google Maps",
			"Yelp API"
		],
		githubLink: "https://github.com/Jewel0106/DinnerAndAShow",
		projectLink: "https://jewel0106.github.io/DinnerAndAShow/index.html"
	},
	{
		projectName: "RxMinder",
		overview: "A React-based web application designed to schedule medication reminders for others. Gives you, as the caretaker or family member, peace of mind while your patient or loved one maintains their independence. Allows you to remain at ease knowing that they are following their regimen.",
		tech: [
			"React",
			"JSX",
			"Passport",
			"Twilio",
			"NodeJs",
			"Express",
			"Mongo",
			"Passport"
		],
		githubLink: "https://github.com/Jewel0106/RxMinder",
		projectLink: "https://rx-minder.herokuapp.com/"
	},
	{
		projectName: "Friend Forum",
		overview: "A social media web application those who wish to have professional discussions with people around the country on topics you share interests in. Chat and debate through our live chat feature specific to each topic or send out a mesage in our global feed for all users to see.",
		tech: [
			"Javascript",
			"JQuery",
			"HTML",
			"CSS",
			"Bootstrap",
			"Handlebars",
			"MySql",
			"Sequelize",
			"Express",
			"Socket.io",
			"Moment",
			"News API"
		],
		githubLink: "https://github.com/Jewel0106/Friend-Forum",
		projectLink: "https://friend-forum-social.herokuapp.com"
	},
	{
		projectName: "Wine Trivia",
		overview: "This quiz on random wine facts has 10 multiple choice questions. You will have 30 seconds to answer each question. If you make it to the end you will see a summary of your results. Good Luck!",
		tech: [
			"Javascript",
			"JQuery",
			"HTML",
			"CSS"
		],
		githubLink: "https://github.com/Jewel0106/TriviaGame",
		projectLink: "https://www.kaitlynfolsom.com/trivia"
	},
	{
		projectName: "Knox Cuisine",
		overview: "Knox Cuisine is a startup catering company based out of Summit, NJ. It is owned by Hamza Knox who is also the head chef. Their services include sit-down dinners, buffets, corporate lunches, butler passes, custom menus, and a private chef.",
		tech: [
			"Wordpress",
			"Javascript",
			"CSS",
		],
		screenshots: [
			"assets/images/knoxCuisine-1.png",
			"assets/images/knoxCuisine-2.png",
			"assets/images/knoxCuisine-3.png",
			"assets/images/knoxCuisine-4.png"
		],
		githubLink: "",
		projectLink: "http://www.knoxcuisine.com"
	}
]


$(document).ready(function(){
	$('.project-slider').slick({
		dots:true,
		appendArrows: $(".slider-nav-btns"),
		appendDots: $(".slider-dots"),
		speed:600,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {

			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				dots:false
			  }
			}
		],
	});

	$(".slick-arrow").empty();
	$(".slick-dots li button").empty();

	$('.grid').packery({
		// options
		itemSelector: '.grid-item',
		stagger:30,
		resize:false,
		percentPosition:true,
	  });

	// ===================
	// == NAVIGATION =====
	// ===================
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
