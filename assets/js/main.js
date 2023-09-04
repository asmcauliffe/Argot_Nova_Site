var modalContainers = document.getElementsByClassName("modal-container");

function openModal() {
  var modalId = event.target.dataset.modal;
  var modalContainer = document.getElementById(modalId);
  modalContainer.style.display = "block";
}

// Add event listeners to each button
var buttons = document.getElementsByClassName("play-button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", openModal);
}

// Add event listener to close the modal when clicking outside the content area
var modalContents = document.getElementsByClassName("modal-content");
for (var i = 0; i < modalContents.length; i++) {
  modalContents[i].addEventListener("click", function(event) {
    event.stopPropagation();
  });
}

var modalContainers = document.getElementsByClassName("modal-container");
for (var i = 0; i < modalContainers.length; i++) {
  modalContainers[i].addEventListener("click", function(event) {
    if (event.target === this) {
      this.style.display = "none";
    }
  });
}


(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}


})(jQuery);