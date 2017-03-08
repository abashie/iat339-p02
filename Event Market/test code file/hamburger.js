"user strict";
console.log("javascript is running");

var widthZepto = $(window).width();
console.log("Zepto:"+widthZepto);

if ( widthZepto < 965 ){
	$("#hamburger-icon").removeClass("hidden");
	$("hamburger-icon").attr("aria-hidden", "false"); //not be hidden

	$("#main-nav-links").addClass("hidden");
	$("main-nav-links").attr("aria-hidden", "true");

	$("#main-nav-links").attr("aria-labelledby","nav-toggle");

	$("#hamburger-icon").click(
		function(){
			console.log("#hamburger-icon clicked!");
			$("#main-nav-links").toggleClass("hidden");
		}
	);
}