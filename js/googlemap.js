function initMap() {
	var uluru = {lat: 56.4609533, lng: 84.967001};
	var map = new google.maps.Map(document.getElementById('mapbody'), {
		zoom: 18,
		center: uluru,
    scrollwheel: false
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

