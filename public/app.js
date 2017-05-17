var initialize = function(){
  var center = {lat: 51.5, lng: -0.12}
  var zoom = 10;
  var container = document.getElementById("main-map");
  var mainMap = new MapWrapper(center, zoom, container);
  var contentString = "here is a string";



  mainMap.addMarker(center, contentString);

  mainMap.addMarker({lat:51.507601 , lng: -0.133682}, contentString)
  mainMap.addMarker({lat:51.177787 , lng: -0.622430}, contentString)

  // mainMap.addMarker({lat:1.283563 , lng: 103.860687}, contentString)

  mainMap.addMarker({lat:35.689487 , lng: 139.691706}, contentString)

  mainMap.addClickEvent();


  // var setNewCenter = function(map){
  //   map.setCenter({lat: 1.283563, lng: 103.860687})
  // }

  
  var button = document.getElementById("button");
  button.addEventListener("click", setNewCenter);
}

window.addEventListener('load', initialize);




