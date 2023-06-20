function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          error => {
            reject(error);
          }
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
}

  
getCurrentLocation().then(location => {
    console.log('Latitude:', location.latitude);
    console.log('Longitude:', location.longitude);
  }).catch(error => {
    console.error('Error:', error.message);
});
