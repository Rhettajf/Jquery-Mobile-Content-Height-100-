function doResize() {
var winhigh = $.mobile.getScreenHeight(); //Get available screen height, not including any browser chrome
var headhigh = $('[data-role="header"]').first().outerHeight(); //Get height of first page's header
var foothigh = $('[data-role="footer"]').first().outerHeight(); //Get height of first page's header
var $content=$('[data-role="content"]');
var contentpaddingheight=parseInt($content.css("padding-top").replace("px", ""))+parseInt($content.css("padding-bottom").replace("px", "")); //Get height of themes content containers padding
winhigh = winhigh - headhigh - foothigh - contentpaddingheight; //Calculate out new height (-2 if you have a 1px border on content container)
$content.css('min-height',winhigh + 'px'); //Set new content height
}
$(document).bind('pageshow',doResize); //Call function on page show
$(window).bind('resize orientationchange',doResize); //Call function on resize and orientation change
