
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if (request.action === 'getOrderDetails') {
      alert("eeeee");
      //fetchOrderDetails()
      fetchLoginDetails()
        .then(orderDetails => {
          alert(orderDetails.token);
          sendResponse({ success: true, orderDetails });

        })
        .catch(error => {
          console.error('Error fetching order details:', error);
          sendResponse({ error: 'Failed to fetch order details' });
        });
      return true; // Required to use sendResponse asynchronously

  }

});


/*function fetchOrderDetails() {
  
      return fetch(`https://dummyjson.com/users`)
      .then(response => response.json());
    
}*/


function fetchLoginDetails() {
    const email = "sizhitsolutions@gmail.com";
    const password = "sizh@123";
    
    return fetch(`https://permits.synchrontms.com/api/v1/login?email=${email}&password=${password}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(response => response.json());

}

