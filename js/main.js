/**
 * childTheme
 * @version 1.0
 * @updated 00.00.00
 **/
var childTheme = {
	
	
	
	/**
	 * navSwap
	 * @version 1.0
	 * @updated 00.00.00
	 **/
	init : function() {
		
		this.navSwap();
		
	} // end init : function
	
	
	
	/**
	 * navSwap
	 * @version 1.0
	 * @updated 00.00.00
	 **/
	,navSwap : function() {
		
		jQuery('.view-icons .icon-smiley').hover(
			function() {
				jQuery(this).removeClass('icon-smiley').addClass('icon-grin');
			},
			function() {
				jQuery(this).removeClass('icon-grin').addClass('icon-smiley');
			}
		);
		jQuery('.view-icons .icon-github').hover(
			function() {
				jQuery(this).removeClass('icon-github').addClass('icon-github2');
			},
			function() {
				jQuery(this).removeClass('icon-github2').addClass('icon-github');
			}
		);
		
	}, // end navSwap : function
	
};

jQuery(document).ready(function() {
	
	childTheme.init();
	jQuery('body').addClass('in').removeClass('out');
	
}); // end jQuery(document).ready(function()