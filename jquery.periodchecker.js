/**
 * check whether the specified date is within the option's day or not.
 *
 * This is the jquery plugin that checks whether the specified date is
 * within option's day or not.
 * If you use this plugin, you have to set the title attribute to each
 * target html elements.
 *
 * for example:
 *  $('span.new').periodchecker();
 * or
 *  $('span.new').periodchecker({
 *    day: 7,
 *    html: 'new!!'
 *  });
 * If you don't want to display before the day, following below.
 *  $('ul#news').periodchecker({
 *    day: 7,
 *    without: true
 *  });
 *
 * You may use this under the terms of either MIT License or
 * GNU General Public License (GPL) Version 2. (same as jQuery).
 *
 * Copyright (c) MIYAGINO.net. All Rights Reserved.
 */
(function($) {
	$.fn.periodchecker = function(opts) {
		var default_opts = {
			day: 7,
			html: 'New',
			without: false
		};

		opts = $.extend(default_opts, opts || {});

		var current_time = (new Date()).getTime();

		var get_time = function(tdate) {
			var ttime = 0;

			if (tdate.match(/^\d{4}[-./]\d{1,2}[-./]\d{1,2}$/)) {
				var date = tdate.replace(/[-.]/g, '/');
				ttime = Date.parse(date);
			}

			return ttime;
		};

		var is_within = function(t) {
			return (current_time - t)/(24*60*60*1000) < opts.day;
		};

		return this.each(function(i) {
			var within = is_within(get_time($(this).attr('title')));

			if (opts.without && !within) {
				$(this).remove();	// $(this).hide();
			} else if (!opts.without && within) {
				$(this).html(opts.html);
			}
		}); 
	}
})(jQuery);
