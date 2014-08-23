(function($) {
	$(document).ready(function() {
		//Skype Click to Call Disable
		//Due to a combination of intrusive installation of crapware by Microsoft
		//the lack of developer notes on how to tell the Skype click to call what is a phone number and what isnt
		//the bad coding of the Skype click to call plugin, the lack of RFDa support
		//and the alteration of the page design messing up what users see, this code below searches for any skype click to call tags and removes them.  
		//This also adds the old number back in with a span tag for each character
		var timeout = 50;
		//This value works well on my pc and does not cause a flicker of the skype logo on page load (most of the time)
		var timerobj = window.setInterval(function(){
			var selector_show = "span[class^='skype_c2c_print_container'],span[class*=' skype_c2c_print_container']";
			var selector_hide = "span[class^='skype_c2c_container'],span[class*=' skype_c2c_container']";
			
			$(selector_show).each(function() {
				var original_number = $(this).text();
				//Create a span tag for every single character
				var prev_tag = $(this);
				for (var i = 0; i < original_number.length; i++) {
					var new_tag = $("<span />").text(original_number[i]).css("display", "inline");
					prev_tag.after(new_tag);
					prev_tag = new_tag;
				}
				$(this).remove();
			});
			
			$(selector_hide).each(function() {
				$(this).remove();
			});
		}, timeout);
		
		//As it is quite intensive to loop so fast, we stop doing it after 5 seconds
		setTimeout(function(){
			clearInterval(timerobj);
		}, 5000);
		
	});
})(jQuery);