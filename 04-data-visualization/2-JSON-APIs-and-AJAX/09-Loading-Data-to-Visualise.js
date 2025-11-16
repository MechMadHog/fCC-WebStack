// Using Geolocation Data to Find A User's GPS Coordinates

// My Code:
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        document.getElementById('data').innerHTML =
        'latitude: ' +
        position.coords.latitude +
        '<br>longitude: ' +
        position.coords.longitude;
  });
}

/*  
  
<--- Rest of the Page --->
  
<h4>You are here:</h4>
<div id="data"></div>
  
*/