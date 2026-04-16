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

map.locate({ setView: true, maxZoom: 18 });

map.on('locationfound', function(e) {
  L.marker(e.latlng).addTo(map)
    .bindPopup("You are here").openPopup();
});


//Scale bar
L.control.scale().addTo(map);

// --- Basemap options ---
var Satellite = L.tileLayer(
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

var EsriSat = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { attribution: 'Tiles © Esri' }
);

// Default basemap
Satellite.addTo(map);

// You can add or remove basemaps here. A button will appear top right of map to toggle.
var baseMaps = {
  "Satellite (Esri)": EsriSat,
  "CARTO Light": CartoLight,
  "CARTO Dark": CartoDark,
  "Stamen Terrain": StamenTerrain,
  "Esri Topo": EsriTopo
};

L.control.layers(baseMaps).addTo(map);

var polygon =  [
          [
            [
              2.3282223802136173,
              48.853991495991124
            ],
            [
              2.328834305613185,
              48.85367977778469
            ],
            [
              2.3288681448052557,
              48.853690910611306
            ],
            [
              2.3289160836616816,
              48.85366678948421
            ],
            [
              2.3289753022484945,
              48.85374657470675
            ],
            [
              2.3286735694482843,
              48.85389315652864
            ],
            [
              2.32871868837168,
              48.85393768762995
            ],
            [
              2.3288709647383143,
              48.85409911254047
            ],
            [
              2.328933003258186,
              48.85408983526037
            ],
            [
              2.329006321508416,
              48.85417518616788
            ],
            [
              2.328794826554997,
              48.8542512596803
            ],
            [
              2.328907623863415,
              48.85432547763014
            ],
            [
              2.3290599002300496,
              48.854269814178394
            ],
            [
              2.329107839086504,
              48.85434032120679
            ],
            [
              2.3289922218449988,
              48.85437928557451
            ],
            [
              2.3290993792882375,
              48.854481334965755
            ],
            [
              2.328955562719841,
              48.8545444199396
            ],
            [
              2.328625630591887,
              48.85430135680818
            ],
            [
              2.3282223802136173,
              48.853991495991124
            ]
          ]
        ].addTo(map); 


//// adding shapes to the map


// Make a simple circle
var circle = L.circle([39.983219999796114, -75.15256557830536], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(map);



// polygon.bindPopup("Sciences Po College Universitaire")
// ]).addTo(map);

// Add a marker
L.marker([48.85417442591539, 2.3283007287517545]).addTo(map). bindPopup("Sciences Po College Universitaire").addTo(map)
L.marker([48.85505929226488, 2.32632017043754]).addTo(map). bindPopup("My favorite Cafe!: Cafe Noir").addTo(map)
