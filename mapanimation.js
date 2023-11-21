 // Remove Node.js-specific and unnecessary imports
// let mapboxgl = ...; // Already included in the HTML
// import { response } from 'express'; // Not usable in browser
// import moveBank from './movebank.js'; // Ensure this is browser-compatible if needed

// Import your fetch function if it's in a separate file
async function fetchMoveBankData() {
    try {
      const response = await fetch('https://www.movebank.org/movebank/service/public/json?&study_id=2911040&individual_local_identifiers=4262-84830876&sensor_type=gps&event_reduction_profile=EURING_01');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data); // Use your JSON data here
      return data; // Return the data for use in other modules
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      throw error; // Rethrow the error if you want calling code to handle it
    }
  }
  
  let locations = [];
  
  async function processMoveBankData() {
    try {
      const data = await fetchMoveBankData();
      console.log('Data fetched:', data);
      locations = data.individuals[0].locations;
      return locations;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  function move(marker, locations, counter = 0) {
    if (counter >= locations.length) return;
    const lat = locations[counter].location_lat;
    const long = locations[counter].location_long;
    marker.setLngLat([long, lat]);
    console.log(long, lat);
    setTimeout(() => move(marker, locations, counter + 1), 1000);
  }
  
  async function applyMarkers() {
    const locations = await processMoveBankData();
    console.log(locations);
    if (locations && locations.length > 0) {
      const initialLat = locations[0].location_lat;
      const initialLong = locations[0].location_long;
      let marker = new mapboxgl.Marker()
        .setLngLat([initialLong, initialLat])
        .addTo(map);
      move(marker, locations);
    }
  }
  
  applyMarkers();