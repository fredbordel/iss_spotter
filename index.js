const { fetchCoordsByIP } = require('./iss');


/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});
*/


fetchCoordsByIP('67.71.216.6',(error, coords) => {
  if (error) {
    console.log("It did not work.... sowy", error);
    return;
  } 
    console.log('It worked! Woohoo! Returned data:', coords);
  
});



