const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("Fetching IP didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);

  fetchCoordsByIP(ip, (error, location) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log('It worked! Returned coordinates:' , location);

    fetchISSFlyOverTimes(location, (error, times) => {
      if (error) {
        console.log(error)
        return;
      }
      console.log('It worked! Times are:' , times)
    });
  });
});