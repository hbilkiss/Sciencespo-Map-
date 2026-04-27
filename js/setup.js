// Create the map
var map = L.map('map', {
  center: [48.85383223396097, 2.328864447526347],
  zoom: 18
});

// Search address control
L.Control.geocoder({
  defaultMarkGeocode: false
})
.on('markgeocode', function(e) {
  map.fitBounds(e.geocode.bbox);
})
.addTo(map);

// Scale bar
L.control.scale().addTo(map);

// Basemap layers
var EsriSatellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  {
    attribution: 'Tiles © Esri'
  }
);

var CartoLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; OpenStreetMap contributors & CARTO'
  }
);

var CartoDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; OpenStreetMap contributors & CARTO'
  }
);

var OpenStreetMap = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; OpenStreetMap contributors'
  }
);

// Add default basemap
EsriSatellite.addTo(map);

// Style for the Sciences Po polygon
var myStyle = {
  fillColor: "#ff7800",
  color: "yellow",
  weight: 4,
  opacity: 1,
  fillOpacity: 0.75
};

// Add the GeoJSON polygon from tyler.js
var sciencesPoPolygon = L.geoJSON(tyler, {
  style: myStyle
})
.bindPopup(function(layer) {
  return layer.feature.properties.name;
})
.addTo(map);

// Zoom directly to the polygon so you can see it
map.fitBounds(sciencesPoPolygon.getBounds(), {
  padding: [30, 30]
});

// Marker: Sciences Po
var sciencesPoMarker = L.marker([48.85417442591539, 2.3283007287517545])
.addTo(map)
.bindPopup("Sciences Po College Universitaire");

// Marker: Café Noir
var cafeMarker = L.marker([48.85505929226488, 2.32632017043754])
.addTo(map)
.bindPopup("My favorite cafe: Café Noir");

// Layer control
var baseMaps = {
  "Satellite": EsriSatellite,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "OpenStreetMap": OpenStreetMap
};

var overlayMaps = {
  "Sciences Po Polygon": sciencesPoPolygon,
  "Study Area Circle": circle,
  "Sciences Po Marker": sciencesPoMarker,
  "Café Noir Marker": cafeMarker
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

console.log("Map loaded successfully!");
console.log("GeoJSON layer:", tyler);
