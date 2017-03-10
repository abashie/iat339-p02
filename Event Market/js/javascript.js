
/*main-nav*/
"user strict";
console.log("javascript is running");

var width=
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

console.log("Plain JS:"+width);

if ( width < 965 ){
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

/*map*/
function initMap() {
  var uluru = {lat: 49.282482, lng: -123.108192};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
