const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(swRegistration => {

        })
        .catch(registrationError => {
          console.log("SW registration failed: ", registrationError); // eslint-disable-line
        })
    })
  }
}

export default registerServiceWorker
