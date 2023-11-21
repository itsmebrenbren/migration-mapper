 // mapanimation.js

 export default async function fetchMoveBankData() {
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