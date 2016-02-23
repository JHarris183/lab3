var map = L.map('map').setView([36, -90], 4);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var WatchesWarningsAdvisories = L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/watch_warn_adv/MapServer/WMSServer", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "National Weather Service",
    opacity: 0.25,
}).addTo(map);

var Lightning = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "National Weather Service",
}).addTo(map);

var Doplar = L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/radar_base_reflectivity/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "National Weather Service",
}).addTo(map);

var baseMaps = {
  "Basemap": map
};

var overlayMaps = {
    "Watches and Warnings": WatchesWarningsAdvisories,
    "Lightning": Lightning,
    "Doplar": Doplar
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
