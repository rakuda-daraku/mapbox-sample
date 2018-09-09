let map = new mapboxgl.Map({
  container: 'map',
  center: [141.3564, 43.0611],
  zoom: 16,
  style: {
    "version": 8,
    "sources": {
      "OSM": {
        "type": "raster",
        "tiles": ['http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
        "tileSize": 256
      }
    },
    "layers": [{
      "id": "OSM",
      "type": "raster",
      "source": "OSM",
      "minzoom": 0,
      "maxzoom": 22
    }]
  }
});

map.addControl(new mapboxgl.NavigationControl());
