    $("#inc").click(function() {
      var fontSize = parseInt($("body").css("font-size"));
      fontSize = fontSize + 1 + "px";
      $("body").css({'font-size': fontSize});
    });

    $("#dec").click(function() {
        var fontSize = parseInt($("body").css("font-size"));

        if (fontSize <= 0) {
            fontSize = 0;
            fontSize = fontSize;
        } else {
            fontSize = fontSize - 1 + "px";
        }

        $("body").css({'font-size': fontSize});
    });


    $(document).ready(function(){
        $('.lecturers').bxSlider({
            captions: true
        });
    });

    var myCenter = new google.maps.LatLng(60.170486, 24.932752);

    function initialize() {

        var mapProp = {
            center: myCenter,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

        var marker = new google.maps.Marker({
            position: myCenter
        });

        marker.setMap(map);
    }

    google.maps.event.addDomListener(window, 'load', initialize);