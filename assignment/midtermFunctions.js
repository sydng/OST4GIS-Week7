/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

//set up map and map styles


//set up global variables
var dataset = "URL of GeoJSON";


//change slides on button clicks
var changeSlide = function() {

};

//filter data for each slide
var filterData = function() {

};

//display document when data is ready
//within this function the data is retrieved and parsed
//the GeoJSON is prepared for mapping -- feature group with styles are made
$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
        //attributes of styles and filters are put in here
    }).addTo(map);   //data is added to the map
  });
});
