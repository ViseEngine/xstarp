/**
 * Created by fizz on 2017/2/13.
 */

var LngLat = require('./LngLat');
var Bounds = require('./Bounds');
var Pixel = require('./Pixel');
var Size = require('./Size');
var Map = require('./Map');
var Marker = require('./Marker');
var event = require('./event');
var InfoWindow = require('./InfoWindow');
var Polyline = require('./Polyline');
var Polygon = require('./Polygon');
var Circle = require('./Circle');
var MarkerClusterer = require('./MarkerClusterer');

var GMap = {};

GMap.event = event;

GMap.LngLat = LngLat;
GMap.Bounds = Bounds;
GMap.Pixel = Pixel;
GMap.Size = Size;

GMap.Map = Map;
GMap.Marker = Marker;
GMap.InfoWindow = InfoWindow;
GMap.Polyline = Polyline;
GMap.Polygon = Polygon;
GMap.Circle = Circle;
GMap.MarkerClusterer = MarkerClusterer;

module.exports = window.GMap = GMap;