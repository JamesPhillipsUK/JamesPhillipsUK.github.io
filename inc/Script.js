/**
 *
 * This program is Copyright (C) James Phillips <james@jamesphillipsuk.com>, 2017.  Released under the GNU GPL V3 or later.
 * @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later
 *
**/

console.log("If you\'re reading this, you must be a nerd too! - If you want to collab on a free software project, my email address is in the footer.");
//function to handle what happens on scroll event.
function scrollFunction()
{
	if ($(document).scrollTop() > 15)
	{
		$("#ButtonToTop").fadeTo("slow", 0.7);
	}
	else
	{
		$("#ButtonToTop").css("display","none");
	}
}
//All of the fancy fly in effects on load.
function pullInPanel(){$('.JFirstSection .container-fluid .row section .panel').toggle("slide", { direction: "left" },800);}
function pullInPanelText(){$('.JFirstSection .container-fluid .row section .panel .panel-body p').fadeIn(800);}
function pullInAside(){$('.JPullOut').toggle("slide", { direction: "right" },800);}
function fadeInTable(){$('.JSecondSection').fadeIn(800);}
$(document).ready(function()
{
	scrollFunction();
	if ($(window).width() >= 768)
	{
		$('.JFirstSection .container-fluid .row').css("display" , "flex");
	}
	pullInPanel();
	setTimeout(pullInPanelText,1000);
	setTimeout(pullInAside,2400);
	setTimeout(fadeInTable,4000);
});
//call scrollFunction when window is scrolled.
window.onscroll = function() {scrollFunction()};
//function to handle what happens when #ButtonToTop is pressed.
function topFunction(){$("html, body").animate({ scrollTop: 0 }, "slow");}
//handle resizing
$(window).resize(function() {
	if ($(window).width() >= 768){$('.JFirstSection .container-fluid .row').css("display", "flex");}
	else{$('.JFirstSection .container-fluid .row').css("display", "block");}
});
/**
 *
 *@license-end
 *
**/