jQuery(document).ready(function(e){function t(e,t){var i=document.getElementById("zoom-in"),o=document.getElementById("zoom-out");e.appendChild(i),e.appendChild(o),google.maps.event.addDomListener(i,"click",function(){t.setZoom(t.getZoom()+1)}),google.maps.event.addDomListener(o,"click",function(){t.setZoom(t.getZoom()-1)})}var i=[{elementType:"labels",stylers:[{saturation:-20}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"on"}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"on"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"poi.government",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"poi.sport_complex",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"landscape",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#77B1AF"},{visibility:"on"},{lightness:5},{saturation:-20}]}],o={center:new google.maps.LatLng(-33.862973,151.212311),zoom:18,panControl:!1,zoomControl:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:i},l=new google.maps.Map(document.getElementById("google-container"),o),s=(new google.maps.Marker({position:new google.maps.LatLng(-33.862973,151.212311),map:l,visible:!0,icon:"img/Flag_icon_orange_4.svg"}),document.createElement("div"));new t(s,l);l.controls[google.maps.ControlPosition.LEFT_TOP].push(s)});
