function initialize() {

    var loc1 = new google.maps.LatLng(33.9195276,-84.3493754);
    var loc2 = new google.maps.LatLng(34.1791226,-84.1391884);
    var loc3 = new google.maps.LatLng(33.8076858,-84.3937393);
    var loc4 = new google.maps.LatLng(34.1031764,-84.5340736);

    var main_color = '#9dade0',
    saturation_value= -55,
    weight_value = 1.5,
    brightness_value= 30;

    var mapOptions = {
      center: loc1,
      zoom: 15,
      draggable: true,
      scrollwheel: false,
      panControl: false,
      streetViewControl: true,
      zoomControl: false, 
      minZoom: 10,
      styles: [
        {
          "stylers": [
            { "hue": main_color },
            { "saturation": saturation_value },
            { "lightness": brightness_value },
            { "weight": weight_value }
          ]
        },
        {
          featureType: "poi",
          "stylers": [
            { visibility: "off" }
          ]   
        }
      ]
    };



    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Atlanta Office
    var marker1 = new google.maps.Marker({
        position: loc1,
        map: map,
        title: 'Atlanta Office'
    });
    // Cumming Office
    var marker2 = new google.maps.Marker({
        position: loc2,
        map: map,
        title: 'Cumming Office'
    });
    // Buckhead Office
    var marker3 = new google.maps.Marker({
        position: loc3,
        map: map,
        title: 'Buckhead Office'
    });
    // Canton Office
    var marker4 = new google.maps.Marker({
        position: loc4,
        map: map,
        title: 'Canton Office'
    });

    $('#locationOne').click(function(){
        map.panTo(loc1);
    });

    $('#locationTwo').click(function(){
        map.panTo(loc2);
    });

    $('#locationThree').click(function(){
        map.panTo(loc3);
    });

    $('#locationFour').click(function(){
        map.panTo(loc4);
    });

    function ZoomControl(controlDiv, map) {
      
      // Creating divs & styles for custom zoom control
      controlDiv.style.padding = '5px';

      // Set CSS for the control wrapper
      var controlWrapper = document.createElement('div');
      controlWrapper.style.backgroundColor = 'transparent';
      controlWrapper.style.borderStyle = 'solid';
      controlWrapper.style.borderColor = 'gray';
      controlWrapper.style.borderWidth = '0px';
      controlWrapper.style.cursor = 'pointer';
      controlWrapper.style.textAlign = 'center';
      controlWrapper.style.width = '32px'; 
      controlWrapper.style.height = '64px';
      controlDiv.appendChild(controlWrapper);
      
      // Set CSS for the zoomIn
      var zoomInButton = document.createElement('div');
      zoomInButton.style.width = '32px'; 
      zoomInButton.style.height = '32px';
      /* Change this to be the .png image you want to use */
      zoomInButton.style.backgroundImage = 'url("plus.jpg")';
      controlWrapper.appendChild(zoomInButton);
        
      // Set CSS for the zoomOut
      var zoomOutButton = document.createElement('div');
      zoomOutButton.style.width = '32px'; 
      zoomOutButton.style.height = '32px';
      zoomOutButton.style.marginTop = '2px';
      /* Change this to be the .png image you want to use */
      zoomOutButton.style.backgroundImage = 'url("minus.jpg")';
      controlWrapper.appendChild(zoomOutButton);

      // Setup the click event listener - zoomIn
      google.maps.event.addDomListener(zoomInButton, 'click', function() {
        map.setZoom(map.getZoom() + 1);
      });
        
      // Setup the click event listener - zoomOut
      google.maps.event.addDomListener(zoomOutButton, 'click', function() {
        map.setZoom(map.getZoom() - 1);
      });  
        
    }

    // Create the DIV to hold the control and call the ZoomControl() constructor
    // passing in this DIV.
    var zoomControlDiv = document.createElement('div');
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);

    // INFO WINDOWS - POPUP MODAL
    // Atlanta Office Details
    var atlantaDetails = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Atlanta Office</h1>'+
      '<div id="bodyContent">'+
      '<p>Perimeter Town Center' +
      '<br>1150 Hammond Dr Bldg E'+
      '<br>Suite 400'+
      '<br>Atlanta, GA 30328'+
      '<br>404.445.5581</p>'+
      '<p>Directions: Google Map, <a href="#" target="_blank">Click Here</a></p>'+
      '</div>'+
      '</div>';

    // Cumming Office Details
    var cummingDetails = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Cumming Office</h1>'+
      '<div id="bodyContent">'+
      '<p>1100 Northside Forsyth Drive' +
      '<br>Suite 345'+
      '<br>Cumming, GA 30041'+
      '<br>404.445.5581</p>'+
      '<p>Directions: Google Map, <a href="#" target="_blank">Click Here</a></p>'+
      '</div>'+
      '</div>';
    

    // Buckhead Office Details
    var buckheadDetails = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Buckhead Office</h1>'+
      '<div id="bodyContent">'+
      '<p>Effective February 3rd our Cherokee office will be located at:</p>' +
      '<p>Northside Towne Lake'+
      '<br>900 Towne Lake Parkway, Suite 302'+
      '<br>Woodstock, Georgia 30189</p>'+
      '<p>Directions: Google Map, <a href="#" target="_blank">Click Here</a></p>'+
      '</div>'+
      '</div>';

    // Canton Office Details
    var cantonDetails = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Canton/Cherokee Office</h1>'+
      '<div id="bodyContent">'+
      '<p>Effective February 3rd our Cherokee office will be located at:</p>' +
      '<p>Northside Towne Lake'+
      '<br>900 Towne Lake Parkway, Suite 302'+
      '<br>Woodstock, Georgia 30189</p>'+
      '<p>Directions: Google Map, <a href="#" target="_blank">Click Here</a></p>'+
      '</div>'+
      '</div>';

    var atlanta = new google.maps.InfoWindow({
        content: atlantaDetails
    });
    var cumming = new google.maps.InfoWindow({
        content: cummingDetails
    });
    var buckhead = new google.maps.InfoWindow({
        content: buckheadDetails
    });
    var canton = new google.maps.InfoWindow({
        content: cantonDetails
    });

    google.maps.event.addListener(marker1, 'click', function() {
      atlanta.open(map,marker1);
    });

    google.maps.event.addListener(marker2, 'click', function() {
      cumming.open(map,marker2);
    });

    google.maps.event.addListener(marker3, 'click', function() {
      buckhead.open(map,marker3);
    });

    google.maps.event.addListener(marker4, 'click', function() {
      canton.open(map,marker4);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(function () {

    
});