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
		screenshots: [
			"assets/images/dinner&show.png",
		],
		collaborators: [
			{
				name: "Kaitlyn Folsom",
				github: "https://github.com/Jewel0106"
			},
			{
				name: "Louis Hellinger",
				github: "https://github.com/louisHellinger"
			},
			{
				name: "Charles Dunn",
				github: "https://github.com/crdunn"
			},
			{
				name: "Anthony DiTomasso",
				github: "https://github.com/Antditto"
			}			
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
		screenshots: [
			"assets/images/rxMinder-1.png",
			"assets/images/rxMinder-2.png",
			"assets/images/rxMinder-3.png",
			"assets/images/rxMinder-4.png"
		],
		collaborators: [
			{
				name: "Andrew Apicello",
				github: "https://github.com/andrew-apicello"
			},
			{
				name: "Kaitlyn Folsom",
				github: "https://github.com/Jewel0106"
			},
			{
				name: "Nicole Carvalho",
				github: "https://github.com/nicolelcarvalho"
			},
			{
				name: "Annie Leote",
				github: "https://github.com/aleote"
			}
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
		screenshots: [
			"assets/images/friend-forum-1.png",
			"assets/images/friend-forum-2.png",
			"assets/images/friend-forum-3.png",
			"assets/images/friend-forum-4.png"
		],
		collaborators: [
			{
				name: "Andrew Apicello",
				github: "https://github.com/andrew-apicello"
			},
			{
				name: "Kaitlyn Folsom",
				github: "https://github.com/Jewel0106"
			},
			{
				name: "Benjamin Danis",
				github: "https://github.com/benjaminDanis"
			},
			{
				name: "Alexander Paulino",
				github: "https://github.com/alexanderpaulino"
			}
			
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
		screenshots: [
			"assets/images/trivia-1.png",
			"assets/images/trivia-2.png",
			"assets/images/trivia-3.png",
			"assets/images/trivia-4.png"
		],
		collaborators: [],
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
		collaborators: [],
		githubLink: "",
		projectLink: "http://www.knoxcuisine.com"
	}
]

$('document').ready(function(){

	for (var i = 0; i < projectObj.length; i++) {
		console.log(projectObj[i]);
	}

	$(".close-animatedModal").click(function() {
		$("#projectTitle").empty();

		$("#project-overview").empty();

		$(".tech-items").empty();

		$(".collaborators").empty();

		$(".project-slideshow").slick("unslick");
		$(".project-slideshow").empty();

		$(".links").empty();
	});


	// =======================
	// == ANIMATED MODAL =====
	// =======================

	$("#modal1").animatedModal();
	$("#modal1").click(function() {
		getProject(projectObj[0]);
	});

	$("#modal2").animatedModal();
	$("#modal2").click(function() {
		getProject(projectObj[1]);
	});

	$("#modal3").animatedModal();
	$("#modal3").click(function() {
		getProject(projectObj[2]);
	});

	$("#modal4").animatedModal();
	$("#modal4").click(function() {
		getProject(projectObj[3]);
	});

	$("#modal5").animatedModal();
	$("#modal5").click(function() {
		getProject(projectObj[4]);
	});


	function getProject(project) {
		console.log(project);

		$("#projectTitle").text(project.projectName);
		$("#project-overview").text(project.overview);

		for (var i = 0; i < project.tech.length; i++) {
			$(".tech-items").append("<li>" + project.tech[i] + "</li>")
		}

		for (var i = 0; i < project.screenshots.length; i++) {
			console.log(project.screenshots[i])
			$(".project-slideshow").append("<div><img src='" + project.screenshots[i] + "'></div>")
		}

		$('.project-slideshow').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			fade: true,
			arrows:false,
			dots:true,
			slidesToShow:1,
			customPaging: function(slider, i) {
				console.log(slider);
				console.log(i);
				$(".slideshow-dots").append("<img src='" + project.screenshots[i] + "'>");
			}, 
			infinite:true,
			dotsClass: "image-pagers",
			cssEase: 'linear',
			focusOnSelect: true,
		});

		if (project.collaborators.length > 1) {
			$(".collaborators-col").css("visibility", "visible");
			for (var i = 0; i < project.collaborators.length; i++) {
				$(".collaborators").append("<a href=" + project.collaborators[i].github + "><li>" + project.collaborators[i].name + "</li></a>")
			}
		} else {
			$(".collaborators-col").css("visibility", "hidden");
		}
		
		if (project.githubLink != "") {
			$(".links").append('<div class="project-links d-flex justify-content-center github-link" target="_blank"><a href="' + project.githubLink + '" class="shimmer">GITHUB REPO</a></div>')
		}

		if (project.projectLink != "") {
			$(".links").append('<div class="project-links d-flex justify-content-center github-link" target="_blank"><a href="' + project.projectLink + '" class="shimmer">PROJECT SITE</a></div>')
		}
	}

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
