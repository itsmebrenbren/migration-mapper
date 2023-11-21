import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
'pk.eyJ1IjoiaXRzbWVicmVuYnJlbiIsImEiOiJjbHA4ZDNzYmYyNm93MnFvNDU0bTk3aDkyIn0.uGVEyxG4tYGsLBLJzexM8Q'



let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/itsmebrenbren/clp8es71c014p01qq3wqz7v19',
    center: [-71.104081, 42.365554],
    zoom: 5,
  });