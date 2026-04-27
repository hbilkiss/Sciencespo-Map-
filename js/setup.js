var map = L.map('map', {
  center: [48.85383223396097, 2.328864447526347],
  zoom: 18,
});

// Search Addresses
L.Control.geocoder({
  defaultMarkGeocode: false
})
  .on('markgeocode', function(e) {
    map.fitBounds(e.geocode.bbox);
  })
  .addTo(map);

// OPTIONAL: this moves the map to your current physical location.
// Comment it out if you want the map to stay centered on Sciences Po.
// map.locate({ setView: true, maxZoom: 18 });

// map.on('locationfound', function(e) {
//   L.marker(e.latlng).addTo(map)
//     .bindPopup("You are here").openPopup();
// });

// Scale bar
L.control.scale().addTo(map);

// --- Basemap options ---
var EsriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

var CartoLight = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var CartoDark = L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  { attribution: '&copy; OpenStreetMap contributors & CARTO' }
);

var StamenTerrain = L.tileLayer(
  'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
  { attribution: 'Map tiles by Stamen Design — Data © OpenStreetMap' }
);

var EsriTopo = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// Default basemap
EsriSat.addTo(map);

var baseMaps = {
  "Satellite Esri": EsriSat,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);

// Style for GeoJSON building polygon
var myStyle = {
  fillColor: "#ff7800",
  color: "#000",
  weight: 2,
  opacity: 1,
  fillOpacity: 0.7
};

// Load Sciences Po polygon from tyler.js
L.geoJSON(tyler, {
  style: myStyle
})
  .bindPopup(function(layer) {
    return layer.feature.properties.name;
  })
  .addTo(map);

// Circle near Sciences Po
var circle = L.circle([48.85405, 2.32865], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 15
}).addTo(map).bindPopup("Study area circle");

// Marker: Sciences Po
L.marker([48.85417442591539, 2.3283007287517545])
  .addTo(map)
  .bindPopup("Sciences Po College Universitaire");

// Marker: Café Noir
L.marker([48.85505929226488, 2.32632017043754])
  .addTo(map)
  .bindPopup("My favorite cafe: Café Noir");

console.log("Map loaded successfully!");
