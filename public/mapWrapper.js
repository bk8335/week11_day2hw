var MapWrapper = function(coords, zoom, container) {
  this.googleMap = new google.maps.Map(container, {
    zoom: zoom, 
    center: coords
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords, contentString){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    // 
    var infoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infoWindow.open(this.googleMap, marker);
    });
  },

  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event) {
      var position = {
        lat: event.latLng.lat() ,
        lng: event.latLng.lng()
      };
      this.addMarker(position)
    }.bind(this));
  },

  setNewCenter: function(){
    this.googleMap.setCenter({lat: 1.283563, lng: 103.860687})
  }



}