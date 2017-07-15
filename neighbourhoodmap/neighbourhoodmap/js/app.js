var markers = [];
var places = [{
        location: {
            lat: 28.0219,
            lng: 73.3186
        },
        name: 'Junagarh Fort',
        selected: false,
        fsquareid: '4cd8d7925e1b721e4e593cd9',
        charted: true
    },
    {
        location: {
            lat: 28.0277,
            lng: 73.3248

        },
        name: 'Hotel Harasar Haveli',
        selected: false,
        fsquareid: '4bd793d9304fce7299b833ab',
        charted: true
    },
    {
        location: {
            lat: 28.0402,
            lng: 73.3312
        },
        name: 'Laxmi Niwas',
        selected: false,
        fsquareid: '4bc8e76e762beee17eac3d38',
        charted: true
    },
    {
        location: {
            lat: 27.9451,
            lng: 73.0527
        },
        name: 'Gajner Palace',
        selected: false,
        fsquareid: '4bd1cf355e0cce721f06a284',
        charted: true
    },
    {
        location: {
            lat: 28.0146,
            lng: 73.3160
        },
        name: 'Bikaner Railway Station',
        selected: false,
        fsquareid: '4e9c2dfc2c5b4d640606eb66',
        charted: true
    }
];
var self=this;
var viewmodel = function() {
    var Infowindow = new google.maps.InfoWindow();
    var Markercolor = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    for (var i = 0; i < places.length; i++) {
        var pos = places[i].location;
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(places[i].location.lat, places[i].location.lng),
            title: places[i].name,
            map: map,
            animation: google.maps.Animation.Drop,
            id: places[i].fsquareid,
            charted: ko.observable(true)
        });
        markers.push(marker);
        marker.addListener('click', function() {
            InfoWindowopen(this, Infowindow);
            this.setAnimation(google.maps.Animation.DROP);
        });
        marker.addListener('mouseover', function() {
            this.setIcon(Markercolor);

        });
        marker.addListener('mouseout', function() {
            this.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
        })
    }

    markers.forEach(function(mk) {
        $.ajax({
            method: 'GET',
            datatype: 'json',
            url: "https://api.foursquare.com/v2/venues/" + mk.id + "?client_id=ACSFXDN1XFCUYQQMMNTZV25E51VSU3RA3ULYGJ4OOSX0NSUR&client_secret=IXNOB10NI5ODE2UUSWETED3UQHBGNDJBMCSPN4YZOONKZBH0&v=20170430",
            success: function(data) {
                var venue = data.response.venue;
                if ((venue.hasOwnProperty('rating'))) {
                    mk.rating = venue.rating;

                } else {
                    mk.rating = 'Not available';

                }
            },
            error: function(e) //error function
            {
                alert("Try Again");
            }
        });

    });

    function InfoWindowopen(marker, infowindow) {
        if (infowindow.marker != marker) {

            infowindow.marker = marker;
            infowindow.setContent('<div class="new">' + '<h3>' + marker.title + '</h3>' + "<h4>Ratings:" + '</h4>' + marker.rating + '</div>'); //set content of  info window

            if (marker.rating != null) {
                infowindow.open(map, marker);
            }
            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });
        }
    };
    this.selectme = function(marker) {
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/yellow-dot.png')
        InfoWindowopen(marker, Infowindow)
        marker.selected = true;
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            marker.setAnimation(null);
        }, 1000)

        if (this.Infowindow == null) {
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
        }


    }
    Infowindow.close();
    //reference taken from w3school.com
    this.inputname = ko.observable('');
    this.searching = function() {
        var input = this.inputname();
        if (input.length === 0) {
            this.Allbuttons(true);

        } else {
            for (i = 0; i < markers.length; i++) {
                var nameofplace = markers[i].title.toLowerCase();
                var input = input.toLowerCase();
                if (nameofplace.indexOf(input) > -1) {
                    markers[i].charted(true);
                    markers[i].setVisible(true);
                } else {
                    markers[i].charted(false);
                    markers[i].setVisible(false);
                }
            }
        }
        Infowindow.close();
    };
    this.Allbuttons = function(number) {
        for (i = 0; i < markers.length; i++) {
            markers[i].charted(number);
            markers[i].setVisible(number);
        }

    };
};
