mapboxgl.accessToken = 'pk.eyJ1IjoidC1rdXNha2EiLCJhIjoiY2o4b29nd2M5MDViZDJ3cDFmZmVxc2t6byJ9.mIMfwywEvaa0iypN8X4BJQ';

let map = new mapboxgl.Map({
  container: 'map',
  center: [141.3564, 43.0611],
  zoom: 16,
  style: 'mapbox://styles/mapbox/streets-v9',
  hash: true
});

map.addControl(new mapboxgl.NavigationControl());
