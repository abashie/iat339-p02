"user strict";
console.log("javascript is running");

var widthZepto = $(window).width();
console.log("Zepto:"+widthZepto);

if ( widthZepto < 965 ){
	$("#hamburger-icon").removeClass("hidden");

	//document.getElementById("nav-toggle").setAttribute("aria-hideen", "false");
	$("hamburger-icon").attr("aria-hidden", "false"); //not be hidden

	//hide our navigation items
	$("#main-nav-links").addClass("hidden");
	$("main-nav-links").attr("aria-hidden", "true");

	$("#hamburger-icon").attr("aria-labelledby","nav-toggle");

	$("#hamburger-icon").click(
		function(){
			console.log("#hamburger-icon clicked!");
			$("#nmain-nav-links").toggleClass("hidden");

			if(! $("#main-nav-links").hasClass("hidden")){
				$("#main-nav-links a").first().focus();
			}
		}
	);
}