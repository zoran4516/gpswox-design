var markers = [
    'objects2a_03.png',
    'objects2a_04.png',
    'objects2a_05.png',
    'objects2a_07.png',
    'objects2a_09.png',
    'objects2a_11.png',
    'objects2a_15.png',
    'objects2a_17.png',
    'objects2a_19.png',
    'objects2a_21.png',
    'objects2a_33.png',
    'objects2a_34.png',
    'objects2a_35.png',
    'objects2a_36.png',
    'objects2a_38.png',
    'objects2a_40.png',
    'objects2a_41.png',
    'objects2a_42.png',
    'objects2a_43.png',
    'objects2a_44.png',
    'objects2a_55.png',
    'objects2a_56.png',
    'objects2a_57.png',
    'objects2a_58.png',
    'objects2a_60.png',
    'objects2a_61.png',
    'objects2a_62.png',
    'objects2a_63.png',
    'objects2a_64.png',
    'objects2a_65.png',
    'objects2a_76.png',
    'objects2a_77.png',
    'objects2a_78.png',
    'objects2a_79.png',
    'objects2a_80.png',
    'objects2a_81.png',
    'objects2a_82.png',
    'objects2a_83.png',
    'objects2a_84.png',
    'objects2a_87.png',
    'objects2a_88.png'
];

var markers_small = [
    'objects2a_03.png',
    'objects2a_05.png',
    'objects2a_07.png',
    'objects2a_09.png',
    'objects2a_11.png',
    'objects2a_13.png',
    'objects2a_15.png',
    'objects2a_17.png',
    'objects2a_19.png',
    'objects2a_21.png',
    'objects2a_33.png',
    'objects2a_34.png',
    'objects2a_35.png',
    'objects2a_36.png',
    'objects2a_37.png',
    'objects2a_38.png',
    'objects2a_39.png',
    'objects2a_40.png',
    'objects2a_41.png',
    'objects2a_42.png',
    'objects2a_53.png',
    'objects2a_55.png',
    'objects2a_57.png',
    'objects2a_59.png',
    'objects2a_61.png',
    'objects2a_62.png',
    'objects2a_63.png',
    'objects2a_64.png',
    'objects2a_65.png',
    'objects2a_66.png',
    'objects2a_77.png',
    'objects2a_78.png',
    'objects2a_79.png',
    'objects2a_80.png',
    'objects2a_81.png',
    'objects2a_82.png',
    'objects2a_83.png',
    'objects2a_85.png',
    'objects2a_87.png',
    'objects2a_88.png',
    'objects2a_90.png'
]

var pois = [
    'POI_03.png',
    'POI_05.png',
    'POI_07.png',
    'POI_09.png',
    'POI_11.png',
    'POI_13.png',
    'POI_15.png',
    'POI_17.png',
    'POI_28.png',
    'POI_30.png',
    'POI_31.png',
    'POI_32.png',
    'POI_33.png',
    'POI_34.png',
    'POI_42.png',
    'POI_43.png',
    'POI_44.png',
    'POI_45.png',
    'POI_46.png',
    'POI_47.png',
    'POI_48.png',
    'POI_49.png',
    'POI_51.png',
    'POI_53.png',
    'POI_65.png',
    'POI_67.png',
    'POI_68.png',
    'POI_69.png',
    'POI_70.png',
    'POI_71.png',
    'POI_72.png',
    'POI_73.png',
    'POI_74.png',
    'POI_75.png',
    'POI_86.png',
    'POI_87.png',
    'POI_90.png',
    'POI_91.png',
    'POI_92.png',
    'POI_93.png',
    'POI_94.png',
    'POI_96.png',
    'POI_98.png',
    'POI_99.png',
    'POI_100.png',
    'POI_101.png',
    'POI_112.png',
    'POI_113.png',
    'POI_114.png',
    'POI_115.png',
    'POI_116.png',
    'POI_117.png',
    'POI_119.png',
    'POI_120.png',
    'POI_121.png',
    'POI_122.png',
    'POI_134.png',
    'POI_135.png',
    'POI_136.png',
    'POI_137.png',
    'POI_138.png',
    'POI_139.png',
    'POI_140.png',
    'POI_141.png',
    'POI_142.png',
    'POI_143.png',
    'POI_154.png',
    'POI_155.png',
    'POI_156.png',
    'POI_157.png',
    'POI_158.png',
    'POI_159.png',
    'POI_160.png',
    'POI_161.png',
    'POI_162.png',
    'POI_163.png',
    'POI_174.png',
    'POI_176.png',
    'POI_178.png',
    'POI_179.png',
    'POI_180.png',
    'POI_181.png',
    'POI_182.png',
    'POI_183.png',
    'POI_184.png',
    'POI_185.png',
    'POI_196.png',
    'POI_197.png',
    'POI_198.png',
    'POI_199.png',
    'POI_200.png',
    'POI_201.png',
    'POI_203.png',
    'POI_204.png',
    'POI_205.png',
    'POI_206.png',
    'POI_217.png',
    'POI_218.png',
    'POI_219.png',
    'POI_220.png',
    'POI_221.png',
    'POI_223.png',
    'POI_224.png'
];

function randomMarker(small) {
    if (small === true) {
        return markers_small[Math.floor(Math.random() * markers_small.length)];
    }
    return markers[Math.floor(Math.random() * markers.length)];
}

function randomPoi() {
    return pois[Math.floor(Math.random() * pois.length)];
}

function randomLatLng() {
    var min = 4680006;
    var max = 5086838;
    var lat =  Math.floor(Math.random() * (max - min + 1) + min) / 100000;
    min =  171387;
    max = 1062378;
    var lng =  Math.floor(Math.random() * (max - min + 1) + min) / 100000;
    return [lat, lng];
}

var mapCenter = [49.08826, 5.07568];
var defaultZoom = 7;
var map = L.map('map', {
    zoomControl: false
}).setView(mapCenter, defaultZoom);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    attribution: '',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ'
}).addTo(map);

function onMarkerClick() {
    $('#gps-device-modal').modal('show');
}

// Generate Random Markers
for (var i = 0; i < 10; i++) {
    var marker = randomMarker(true);
    var latlang = randomLatLng();

    L.marker(latlang, {
        icon: L.icon({
            iconUrl: 'assets/image/markers_small/' + marker,
            iconRetinaUrl: 'assets/image/markers_small/' + marker,
            iconSize: [30, 42],
            iconAnchor: [15, 41],
            popupAnchor: null,
            shadowUrl: null,
            shadowRetinaUrl: null,
            shadowSize: null,
            shadowAnchor: null
        })
    }).addTo(map).on('click', onMarkerClick);

    if ((i % 2) == 1) {
        L.marker(latlang, {
            icon: L.icon({
                iconUrl: 'assets/image/map_arrow_up.png',
                iconRetinaUrl: 'assets/image/map_arrow_up.png',
                iconSize: [16, 16],
                iconAnchor: [8, 8],
                popupAnchor: null,
                shadowUrl: null,
                shadowRetinaUrl: null,
                shadowSize: null,
                shadowAnchor: null
            })
        }).addTo(map).setRotationAngle(Math.floor(Math.random() * (360 - 1 + 1) + 1)).setRotationOrigin('center center');
    }
}

// Generate Random Pois
for (var i = 0; i < 10; i++) {
    var poi = randomPoi();
    L.marker(randomLatLng(), {
        icon: L.icon({
            iconUrl: 'assets/image/markers/' + poi,
            iconRetinaUrl: 'assets/image/markers/' + poi,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
            popupAnchor: null,
            shadowUrl: null,
            shadowRetinaUrl: null,
            shadowSize: null,
            shadowAnchor: null
        })
    }).addTo(map);
}

var mapPolygon = {
    color: '#146A83',
    weight: 3,
    opacity: 1,
    fill: true,
    fillColor: '#146A83',
    fillOpacity: 0.3
};

var polygon = L.polygon([
    [50.11353, 5.50415],
    [49.36091, 2.69165],
    [50.97226, 4.47144]
], mapPolygon).addTo(map);

var mapCircle = {
    color: '#146A83',
    weight: 3,
    opacity: 1,
    fill: true,
    fillColor: '#ffffff',
    fillOpacity: 1
};

L.circle([50.11353, 5.50415], 5000, mapCircle).addTo(map);
L.circle([49.36091, 2.69165], 5000, mapCircle).addTo(map);
L.circle([50.97226, 4.47144], 5000, mapCircle).addTo(map);

var mapPolyline = {
    color: '#146A83',
    weight: 3,
    opacity: 1,
    fill: false
};

var polyline = L.polyline([
    [48.84303, 2.35107],
    [47.31648, 5.05371],
    [48.56752, 7.76733]
], mapPolyline).addTo(map);

var pos1 = new L.LatLng(48.84303, 2.35107);
var pos2 = new L.LatLng(47.31648, 5.05371);
var pos3 = new L.LatLng(48.56752, 7.76733);

var distance1 = pos1.distanceTo(pos2) / 1000;
distance1 = distance1.toFixed(0) + ' km';

var distance2 = pos2.distanceTo(pos3) / 1000;
distance2 = distance2.toFixed(0) + ' km';

var popup2 = L.popup({closeButton: false}).setLatLng(pos2).setContent(distance1).openOn(map);

L.circle([48.84303, 2.35107], 5000, mapCircle).addTo(map).bindPopup('Home', {closeButton: false});
L.circle([47.31648, 5.05371], 5000, mapCircle).addTo(map).bindPopup(distance1, {closeButton: false});
L.circle([48.56752, 7.76733], 5000, mapCircle).addTo(map).bindPopup(distance2, {closeButton: false});

var popup = L.popup({closeButton: false});
function onMapClick(e) {
    popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
}
map.on('click', onMapClick);

$('.map-zoom-in').on('click', function() {
    map.setView(map.getCenter() ,map.getZoom() + 1);
});
$('.map-zoom-out').on('click', function() {
    map.setView(map.getCenter() ,map.getZoom() - 1);
});

// Polyline with rotated Icon.
var markerLine = L.polyline([
    [ 49.61, 4.59 ],
    [ 49.24, 4.04 ],
    [ 48.65, 4.25 ],
    [ 49.21, 6.99 ],
    [ 48.77, 9.19 ],
    [ 47.37, 8.54 ],
    [ 49.60, 6.11 ]
], {
    color: '#2FAF62',
    weight: 5,
    opacity: 0.8,
    fill: false
}).addTo(map);

var pathPattern = L.polylineDecorator(markerLine,
    {
        patterns: [
            { offset: 0, repeat: '50px', symbol: L.Symbol.marker({rotate: true, markerOptions: {
                icon: L.icon({
                    iconUrl: 'assets/image/map_arrow_up.png',
                    iconAnchor: [8, 8]
                })
            }})}
        ]
    }
).addTo(map);