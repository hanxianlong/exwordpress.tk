(function($) {
	$.fn.preloader = function(options) {
		// Adding variable for centering images along width and height
		var defaults = {
			delay: 100,
			preload_parent: "a",
			check_timer: 200,
			ondone: function() {},
			oneachload: function(image) {},
			fadein: 400
		};
		// variables declaration and precaching images and parent container
		var options = $.extend(defaults, options),
			root = $(this),
			images = root.find("img").css({
				"visibility": "hidden",
				opacity: 0
			}),
			timer, counter = 0,
			i = 0,
			checkFlag = [],
			delaySum = options.delay,
			init = function() {
				timer = setInterval(function() {
					if (counter >= checkFlag.length) {
						clearInterval(timer);
						options.ondone();
						return;
					}
					for (i = 0; i < images.length; i++) {
						if (images[i].complete == true) {
							if (checkFlag[i] == false) {
								checkFlag[i] = true;
								options.oneachload(images[i]);
								counter++;
								delaySum = delaySum + options.delay;
							};
							$(images[i]).css("visibility", "visible").delay(delaySum).animate({
								opacity: 1
							}, options.fadein, function() {
								$(this).parent().removeClass("preloader");
							});
						}
					}
				}, options.check_timer)
			};
		images.each(function() {
			$(this).parent().addClass("preloader");
			checkFlag[i++] = false;
		});
		images = $.makeArray(images);
		var icon = jQuery("<img />", {
			id: 'loadingicon',
			src: sg_template_url + '/images/loading.gif'
		}).hide().appendTo("body");
		timer = setInterval(function() {
			if (icon[0].complete == true) {
				clearInterval(timer);
				init();
				icon.remove();
				return;
			}
		}, 100);
	};
})(jQuery);