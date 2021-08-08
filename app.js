document.addEventListener("DOMContentLoaded", function(event) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          console.log(position)
          const KEY ="AIzaSyB5sjZlm9nhTS6K-zzOcoZk6nrwJY0bfiI";
          const LAT = position.coords.latitude;
          const LNG = position.coords.longitude;
          let url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}';
          fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(err => console.warn(err.message));
        });        
        
    }
    });