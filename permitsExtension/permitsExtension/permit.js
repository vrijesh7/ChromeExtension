document.addEventListener('DOMContentLoaded', () => {

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let activeTab = tabs[0];
    let url = activeTab.url;
    chrome.cookies.get({ url: 'https://permits.synchrontms.com/team-dashboard', name: 'loginToken' }, cookie => {

      if (cookie) {

        let urlParams = new URLSearchParams(new URL(url).search);
        let orderId = urlParams.get('orderId');
        if (orderId) {


          const order_detail_value = '89_CT EXPRESS LLC_8_9_118 CA-MI_' + orderId;
          const [percentage, ordername, permitcount, statuscount, state, orderToken] = order_detail_value.split("_");
          getOrderDetail(percentage, ordername, permitcount, statuscount, state, orderToken);
        }
      }
    });

  });


  checkLoginCookie();
  const autofillFormLogin = document.getElementById('login');
  const autofillFormOTPVerify = document.getElementById('verifyOtp');


  autofillFormLogin.addEventListener('click', () => {
    if (validateLoginForm()) {
      showLoader('loginLoader');
      sendMessageToContentScript('login');

    }
  });

  autofillFormOTPVerify.addEventListener('click', () => {
    if (validateOtpForm()) {
      showLoader('otpLoader');
      sendMessageToContentScriptForOtpVerification('otp');
    }

  });


  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length > 0) {
      var currentTab = tabs[0];
      var currentUrl = currentTab.url;
    }

  });


  /*document.getElementById('logoutButton').addEventListener('click', () => {
    // Unset the cookie and reload the page
    chrome.cookies.remove({ url: 'https://permits.synchrontms.com/team-dashboard', name: 'loginToken' }, () => {
      location.reload();
    });
  });*/
});


function Logout() {

  chrome.storage.local.remove('orderListData', function () {
    console.log('orderListData removed from Chrome storage');
  });

  chrome.storage.local.remove('orderDetailData', function () {
    console.log('orderDetailData removed from Chrome storage');
  });

  chrome.storage.local.remove('loginUser', function () {
    console.log('name removed from Chrome storage');
  });



  chrome.cookies.remove({ url: 'https://permits.synchrontms.com/team-dashboard', name: 'loginToken' }, () => {

    location.reload();
  });
}


function validateLoginForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  let isValid = true;

  if (username.trim() === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  if (password.trim() === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  return isValid;
}


function validateOtpForm() {
  const inputOtp = document.getElementById("otpInput").value;
  const optdetailError = document.getElementById("otpError");

  let isValid = true;

  if (inputOtp.trim() === "") {
    optdetailError.textContent = "Otp is required";
    isValid = false;
  } else {
    optdetailError.textContent = "";
  }

  return isValid;
}

function showLoader(loaderId) {

  const loader = document.getElementById(loaderId);
  loader.style.display = 'block';
}

function hideLoader(loaderId) {
  const loader = document.getElementById(loaderId);
  loader.style.display = 'none';
}


function sendMessageToContentScript(action) {

  const a = document.getElementById("username").value;
  const b = document.getElementById("password").value;

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {

    chrome.tabs.sendMessage(tabs[0].id, { action, a, b }, response => {

      hideLoader('loginLoader');

      if (response.orderDetailsResult.message == "Success") {

        // Login successful, hide login form and show OTP form
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('otpForm').style.display = 'block';
        document.getElementById('tokenvalue').value = response.orderDetailsResult.token;

        chrome.storage.local.set({ 'loginUser': response.orderDetailsResult.name }, function () {
          console.log('Data stored in Chrome storage:', response.orderDetailsResult.name);

          // Retrieve the data from Chrome storage immediately after storing it

        });

        chrome.storage.local.get('loginUser', function (data) {

          if (data.loginUser) {

            document.getElementById('nameval').value = data.loginUser;
          }

        });

      } else {
        credentailError.textContent = "Either email or Password incorrect";
      }
    });

  });

}


function sendMessageToContentScriptForOtpVerification(action) {
  const a = document.getElementById("tokenvalue").value;
  const b = document.getElementById("otpInput").value;
  const otpMatchErrro = document.getElementById("otpMatchError");

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { action, a, b }, response => {
      //hideLoader('otpLoader');
      if (response.otpresult.message == "Success") {

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);
        chrome.cookies.set({
          url: 'https://permits.synchrontms.com/team-dashboard',
          name: 'loginToken',
          value: a,
          expirationDate: expirationDate.getTime()
        });
        // Hide the OTP form and show the order list
        document.getElementById('otpForm').style.display = 'none';
        document.getElementById('orderList').style.display = 'block';

        fetchOrderList();

      }
      else {
        otpMatchErrro.textContent = "Entered OTP is incorrect.";
      }
    });
  });
}


async function fetchOrderList() {

  const nameField = document.querySelector("#nameval");
   const fullname = await new Promise(resolve => {
    chrome.storage.local.get('loginUser', function (result) {
      if (result.loginUser) {
        nameField.value = result.loginUser;
        resolve(result.loginUser);
      } else {
        resolve('');
      }
    });
  });


  // Get auth token from chrome storage
 

  const token = await new Promise(resolve => {
        chrome.storage.local.get(['authToken'], function (result) {
            if (result.authToken) {
                // Create and append hidden input
                const hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.id = 'authToken';
                hiddenInput.value = result.authToken;
                document.body.appendChild(hiddenInput);
 
                resolve(result.authToken);
            } else {
                resolve('');
            }
        });
    });
 
    if (!token) {
        console.error('Token not found in storage.');
 
        // Clear all storage
        chrome.storage.local.clear(function() {
            console.log('Storage cleared.');
            // // Redirect to login page
            // window.location.href = '/login.html'; // Replace with your login page URL
            const loginForm = document.getElementById('loginForm');
            if (loginForm) loginForm.style.display = 'block';
 
            // Hide order list loader
            const orderListLoader = document.getElementById('orderListLoader');
            if (orderListLoader) orderListLoader.style.display = 'none';
        });
    }


  var div = document.querySelector("#orderList");
  var innerhtmlval = "";

  // Call the API to fetch the order list
  fetch("https://permits.synchrontms.com/api/v1/getPermitsQueue?token=" + token)
    .then(response => response.json())
    .then(data => {

      const storeval = data;

      chrome.storage.local.set({ 'orderListData': storeval }, function () {
        console.log('Data stored in Chrome storage:', storeval);

        // Retrieve the data from Chrome storage immediately after storing it

      });

      const datares = data.PermitsQueue;
      const permitvalue = datares.permitsvalue;

      //alert(datares.orderdata[0].id);
      // Display the order list in the popup
      const orderListElement = document.getElementById('orderList');


      div.innerHTML = `<header class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="row w-100">
          <div class="col-7 col-lg-7" style="line-height: 37px;font-width:bold;font-weight: 700;"><input type="hidden" id="nameval" />${fullname}</div>
          <div class="col-5 col-lg-5" style="text-align:right">
            <button class="btn btn-primary" id="logoutButton" style="display: block;">Logout</button>
          </div>
        </div>
      </header>
    <div class=" mt-3">
    <div class="col-12 col-12 col-xl-12 col-md-12">
      <div class="card">
        <div class="row">
          <div class=" col-10 col-lg-6">
            <h4> Permit Queue</h4>
          </div>
          <div class=" col-2 col-lg-6" style="text-align:right; font-size:19px;"></div>
        </div>`;
      // ${permitvalue}
      var card = "";
      var state1 = "";
      var stateval = "";

      datares.orderdata.forEach(order => {

        const percentage = datares.productNames[order.id]?.percentage;

        if (percentage < 100) {

          let isPermitCountSet = datares.productNames[order.id]?.permitStatusCount ?? null;
          let isStatusAllCount = datares.productNames[order.id]?.statusAllCount ?? null;
          if (isStatusAllCount === 0) {
            return;
          }

          const pickupAddressData = JSON.parse(data.PermitsQueue.pickupAddress[order.id].value);
          if (pickupAddressData.pickup_address === null) {

            stateval = 'NA';

          }
          else {

            pickupAddressData.pickup_address.forEach(address => {
              if (address && typeof address === 'string') {
                const pattern = /, ([A-Z]{2})(?: \d{5})?(?:, (USA|United States))?/;
                const matches = address.match(pattern);
                stateval = matches ? matches[1] : 'NA';
              } else {
                stateval = 'NA';
              }



            });

          }

          stateval = stateval + "-";

          const deliveryAddData = JSON.parse(datares.deliveryAdd[order.id].value);



          if (deliveryAddData.delivery_address === null) {
            state1 = 'NA';

          } else {

            for (const address of deliveryAddData.delivery_address) {
              if (address && typeof address === 'string') {
                const pattern = /, ([A-Z]{2})(?: \d{5})?(?:, (USA|United States))?/;
                const matches = address.match(pattern);
                state1 = matches ? matches[1] : 'NA';

              }
              else {
                state1 = 'NA';
              }
              break;
              // Exit the loop after processing the first address
            }
          }


          div.innerHTML += `<div class="row mt-2">
                                    <div class=" col-2 col-lg-3">
                                        ${datares.productNames[order.id]?.percentage}%
                                    </div>
                                    <div class=" col-8 col-lg-8" style="font-size: 15px; cursor: pointer;" data-token="${order.token}" data-order-token="${datares.productNames[order.id]?.percentage}_${datares.carrierName[order.id]?.name}_${isPermitCountSet}_${isStatusAllCount}_${data.PermitsQueue.unitIds[order.id]}
                                    ${stateval}
                                    ${state1}_${order.token}">
                                    <h6>${datares.carrierName[order.id]?.name}</h6>
                                    <small>
                                    ${data.PermitsQueue.unitIds[order.id]}
                                    ${stateval}
                                    ${state1}
                                    </small>
                                    </div>
                                    <div class=" col-2  col-lg-1" style="text-align:right; ">${isPermitCountSet}/${isStatusAllCount}</div>
                            </div><hr>`;
        }
      });

      div.innerHTML += innerhtmlval;

      // Bind the Logout function to the logout button
      const logoutButton = document.getElementById('logoutButton');
      logoutButton.addEventListener('click', Logout);


      // Bind the getOrderDetail function to the order rows
      const orderRows = document.querySelectorAll('.col-8.col-lg-8');
      orderRows.forEach(row => {
        row.addEventListener('click', () => {
          const order_detail_value = row.getAttribute('data-order-token');
          const [percentage, ordername, permitcount, statuscount, state, orderToken] = order_detail_value.split("_");

          getOrderDetail(percentage, ordername, permitcount, statuscount, state, orderToken);
        });
      });

    })
    .catch(error => {
      console.error('Error fetching order list:', error);
    });

  div.innerHTML += `</div></div></div>`;
  hideLoader('otpLoader');

  return 1;
}


function checkLoginCookie() {

  chrome.cookies.get({ url: 'https://permits.synchrontms.com/team-dashboard', name: 'loginToken' }, cookie => {

    if (cookie) {

      chrome.storage.local.get('orderDetailData', function (data) {
        if (data.orderDetailData) {
          // console.log('Retrieved data from Chrome order detail storage:', data.orderDetailData);
          document.getElementById('loginForm').style.display = 'none';

          const keys = ['percentage', 'ordername', 'permitcount', 'statuscount', 'state'];

          chrome.storage.local.get(keys, function (result) {
            const { percentage, ordername, permitcount, statuscount, state } = result;
            renderOrderDetails(data.orderDetailData, percentage, ordername, permitcount, statuscount, state);
          });



        } else {

        }
      });

      // User is already logged in, hide the login form and show the order list
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('orderList').style.display = 'block';
      var val = 0;

      // Show the loader before fetching the order list
      const orderListLoader = document.getElementById('orderListLoader');
      orderListLoader.style.display = 'block';

      fetchOrderList().then(() => {
        // Hide the loader after fetchOrderList() completes
        orderListLoader.style.display = 'none';
      });

    } else {
      // User is not logged in, show the login form
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('orderList').style.display = 'none';

    }

  });

}


function getOrderDetail(percentage, ordername, permitcount, statuscount, state, orderToken) {
  // Show the loader before fetching the order details
  const orderListLoader = document.getElementById('orderDetailLoader');
  const backButton = document.getElementById('backButton');
  backButton.style.display = 'block';
  orderListLoader.style.display = 'block';


  fetch(`https://permits.synchrontms.com/api/v1/orders/${orderToken}`)
    .then(response => response.json())
    .then(data => {
      // Hide the loader after fetching the order details

      const storeOrderDetail = data;

      chrome.storage.local.set({ 'orderDetailData': storeOrderDetail }, function () {

        console.log('Data stored in Chrome storage:', storeOrderDetail);

      });

      chrome.storage.local.set(
        {
          'percentage': percentage,
          'ordername': ordername,
          'permitcount': permitcount,
          'statuscount': statuscount,
          'state': state
        }, function () {
        });

      orderListLoader.style.display = 'none';

      // Render the order details below the order list
      renderOrderDetails(data, percentage, ordername, permitcount, statuscount, state);
    })
    .catch(error => {
      console.error('Error fetching order details:', error);
      // Hide the loader in case of an error
      orderListLoader.style.display = 'none';
    });


}


function renderOrderDetails(orderData, percentage, ordername, permitcount, statuscount, state) {


  const orderDetailsElement = document.getElementById('orderDetailsBlock');
  orderDetailsElement.innerHTML = '';

  // Create the HTML markup for the order details
  var orderDetailsHTML = `<div class="row mt-2">
            <div><button class="btn btn-primary" id="companyAutoFill" company-all-value='${JSON.stringify(orderData)}'>Auto Fill</button></div>
            </div><hr>
            <div class="row mt-2">
                                    <div class=" col-2 col-lg-3">
                                    ${orderData.order.percentage}%
                                    </div>
                                    <div class=" col-8 col-lg-8" style="font-size: 15px; cursor: pointer;">
                                    <h6>${orderData.order.Company_Info.name}</h6>
                                    <small>
                                    ${orderData.order.state_data}
                                    </small>
                                    </div>
                                    <div class=" col-2  col-lg-1" style="text-align:right; ">${orderData.order.permitcount}/${orderData.order.statuscount}</div>
                            </div><hr>
    <div class="accordion" id="orderDetailsAccordion">
    <div class="accordion-item">
      <h2 class="accordion-header" id="companyInfoHeader">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#companyInfoCollapse" aria-expanded="false" aria-controls="companyInfoCollapse">
          <h5>Company Info</h5>
        </button>
      </h2>
      <div id="companyInfoCollapse" class="accordion-collapse collapse" aria-labelledby="companyInfoHeader" data-bs-parent="#orderDetailsAccordion">
        <div class="accordion-body">
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Company Name</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_Info.name}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>MC Number</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_Info.mc}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>DOT Number</h6>
              </div>
              <div class="col-6 col-lg-6 companydot" style="text-align:left;" dot-val="${orderData.order.Company_Info.dot}">${orderData.order.Company_Info.dot}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Tax ID</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_Info.tax_id}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>IFTA License Number</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_Info.ifta_number}</div>
            </div>
            <div class="row mt-2">
              <div class="col-3 col-lg-3" style="font-size: 15px; cursor: pointer;">
                <h6>Email</h6>
              </div>
              <div class="col-9 col-lg-9" style="text-align:left;">${orderData.order.Company_email}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Phone number</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_phone_number}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Physical Address</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_physical_address}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>City</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_city}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>State</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_state}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Zip Code</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Company_zip_code}</div>
            </div>
            </div>
            </div>
          </div>`;


  orderDetailsHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="truckInfoHeader">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#truckInfoCollapse" aria-expanded="false" aria-controls="truckInfoCollapse">
              <h5>Truck Info</h5>
              </button>
            </h2>
            <div id="truckInfoCollapse" class="accordion-collapse collapse" aria-labelledby="truckInfoHeader" data-bs-parent="#orderDetailsAccordion">
              <div class="accordion-body">
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Unit</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.unit_id}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Year</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.year}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Make</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.make}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Model</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.model}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>License</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.license_plate}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>State</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.license_state}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Vin</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.vin}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Axles</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.axle}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Registration Expiration</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.truck_detail.registration_exp}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Toll Pass</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;"></div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Empty Weight</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.EmptyWeightAttributes}</div>
            </div>
            </div>
            </div>
          </div>`;



  orderDetailsHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="truckInfoHeader">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#truckInfoCollapse" aria-expanded="false" aria-controls="truckInfoCollapse">
              <h5>Trailer Info</h5>
              </button>
            </h2>
            <div id="truckInfoCollapse" class="accordion-collapse collapse" aria-labelledby="truckInfoHeader" data-bs-parent="#orderDetailsAccordion">
              <div class="accordion-body">
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Unit</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.trailer_id}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Trailer Type</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Type}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Vin</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.vin}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Year</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.year}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Make</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.make}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Model</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.model}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>License</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.license_plate}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>State</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.state}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Registration Expiration</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.registration_exp}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Axcle</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.axle}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Axcle Type </h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.axle_type}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Drop Axcle </h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.drop_axle}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Length</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.lenght}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Deck Height </h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.standard_Ft}'${orderData.order.Trailer_Info.Inch}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Empty Weight</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.empty_weight}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>KPTRA </h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.Trailer_Info.king_pin}'${orderData.order.Trailer_Info.kin_pin_in}</div>
            </div>
            </div>
            </div>
          </div>`;

  orderDetailsHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="truckInfoHeader">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#truckInfoCollapse" aria-expanded="false" aria-controls="truckInfoCollapse">
              <h5>Axle Weight</h5>
              </button>
            </h2>
            <div id="truckInfoCollapse" class="accordion-collapse collapse" aria-labelledby="truckInfoHeader" data-bs-parent="#orderDetailsAccordion">
              <div class="accordion-body">`;

  var axleHtml = "";

  orderData.order.axle_weight.forEach(function (data) {

    axleHtml += `<div class="row mt-2">
                <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                  <h6>${data.name}</h6>
                </div>
                <div class="col-6 col-lg-6" style="text-align:left;">${data.value}</div>
              </div>`;

  });

  orderDetailsHTML += axleHtml;

  orderDetailsHTML += `</div>
            </div>
          </div>`;

  orderDetailsHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="truckInfoHeader">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#truckInfoCollapse" aria-expanded="false" aria-controls="truckInfoCollapse">
              <h5>Axle Spacing</h5>
              </button>
            </h2>
            <div id="truckInfoCollapse" class="accordion-collapse collapse" aria-labelledby="truckInfoHeader" data-bs-parent="#orderDetailsAccordion">
              <div class="accordion-body">`;

  var axleSpacing = "";
  orderData.order.axle_spacing.forEach(function (data) {

    axleSpacing += `<div class="row mt-2">
                <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                  <h6>${data.name}</h6>
                </div>
                <div class="col-6 col-lg-6" style="text-align:left;">${data.value}</div>
              </div>`;

  });

  orderDetailsHTML += axleSpacing;

  orderDetailsHTML += `</div>
            </div>
          </div>`;


  orderDetailsHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="truckInfoHeader">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#truckInfoCollapse" aria-expanded="false" aria-controls="truckInfoCollapse">
              <h5> Overall Dimensions</h5>
              </button>
            </h2>
            <div id="truckInfoCollapse" class="accordion-collapse collapse" aria-labelledby="truckInfoHeader" data-bs-parent="#orderDetailsAccordion">
              <div class="accordion-body">
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Truck + Trailer</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.OverallOrderData.overalltrucktrailer.feet}ft${orderData.order.OverallOrderData.overalltrucktrailer.inch}in</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Length</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.OverallOrderData.overalllength.feet}ft${orderData.order.OverallOrderData.overalllength.inch}in</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Width</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.OverallOrderData.overallwidth.feet}ft${orderData.order.OverallOrderData.overallwidth.inch}in</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Height</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.OverallOrderData.overallheight.feet}ft${orderData.order.OverallOrderData.overallheight.inch}in</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Weight</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.totalWeight}</div>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Fron Overhang</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.OverallOrderData.front_overhang.feet}ft${orderData.order.OverallOrderData.front_overhang.inch}in</div>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Rear Overhand</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.OverallOrderData.rear_overhang.feet}ft${orderData.order.OverallOrderData.rear_overhang.inch}in</div>
            </div></div>
            </div>
          </div>`;




  orderDetailsHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="truckInfoHeader">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#truckInfoCollapse" aria-expanded="false" aria-controls="truckInfoCollapse">
              <h5>Routing Info</h5>
              </button>
            </h2>
            <div id="truckInfoCollapse" class="accordion-collapse collapse" aria-labelledby="truckInfoHeader" data-bs-parent="#orderDetailsAccordion">
              <div class="accordion-body">
            <div class="row mt-2">
                <h3>Pickup Address</h3>
                ${orderData.order.pickupFormattedAddress}
            </div>

            <div class="row mt-2">
            <table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th style="border: 1px solid black; padding: 8px;">States</th>
      <th style="border: 1px solid black; padding: 8px;">StartDate</th>
      <th style="border: 1px solid black; padding: 8px;">Toll Roads</th>
    </tr>
  </thead>
  <tbody>`;


  var routingInfo = "";
  var website_name = "";
  var productArray = ["Alabama", "Ohio", "Georgia", "Oklahoma", "Tennessee", "Mississippi", "Arizona", "Georgia", "New Mexico", "Texas", "Kansas", "Indiana", "Kentucky", "Idaho", "Iowa", "Maine", "Illinois", "West Virginia", "New Jersey", "Washington", "New Hampshire", "Rhode Island", "Maryland", "Colorado", "Arkansas", "Missouri", "Florida", "Massachusetts", "Michigan", "Delaware", "Connecticut", "South Carolina", "North Dakota", "New York", "North Carolina", "Wisconsin", "Louisiana", "Nebraska", "Montana", "South Dakota", "Minnesota", "Oregon", "Nevada", "Virginia", "California", "Pennsylvania", "Utah", "Wyoming"];
  orderData.order.routeData.forEach(function (data) {


    for (let i = 0; i < orderData.order.state_webstie_detail.length; i++) {
      if (orderData.order.state_webstie_detail[i].id === data.state_id) {
        website_name = orderData.order.state_webstie_detail[i].state_website;
      }
    }
    var link = productArray.includes(data.product_name) ? website_name : "javascript:;";
    var tollStatus = data.use_tolls == 1 ? "Yes" : "No";
    var _class = productArray.includes(data.product_name) ? 'blue' : "black";


    routingInfo += `<tr>
    <td style="border: 1px solid black; padding: 8px;"><a href="${link}" class="${_class}" target="_blank">${data.product_name}</a></td>
    <td style="border: 1px solid black; padding: 8px;"><a href="${link}"  class="${_class}" target="_blank">${data.product_name}</a></td>
    <td style="border: 1px solid black; padding: 8px;">${data.start_date}</td>
    <td style="border: 1px solid black; padding: 8px;">${tollStatus}</td>
  </tr>`;

  });

  orderDetailsHTML += routingInfo;

  orderDetailsHTML += `</tbody>
            </table>
            </div>
            <div class="row mt-2">
            <h3>Delivery Address</h3>
                ${orderData.order.deliveryFormatedAddress}
            </div>
            </div>
            </div>
          </div>`;


  orderDetailsHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="truckInfoHeader">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#truckInfoCollapse" aria-expanded="false" aria-controls="truckInfoCollapse">
              <h5>Contact Info</h5>
              </button>
            </h2>
            <div id="truckInfoCollapse" class="accordion-collapse collapse" aria-labelledby="truckInfoHeader" data-bs-parent="#orderDetailsAccordion">
                <div class="accordion-body">
            <div class="row mt-2">
                <h4>Client</h4>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Client Name</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.clientData.name}</div>
            </div>
            <div class="row mt-2">
              <div class="col-3 col-lg-3" style="font-size: 15px; cursor: pointer;">
                <h6>Client Email</h6>
              </div>
              <div class="col-9 col-lg-9" style="text-align:left;">${orderData.order.clientData.email}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Client Phone</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.clientData.phone}</div>
            </div>
            <div class="row mt-2">
                <h4>Driver</h4>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Name</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.clientData.name}</div>
            </div>
            <div class="row mt-2">
            <div class="col-3 col-lg-3" style="font-size: 15px; cursor: pointer;">
              <h6>Email</h6>
            </div>
            <div class="col-9 col-lg-9" style="text-align:left;">${orderData.order.clientData.email}</div>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Phone</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.clientData.phone}</div>
            </div>
            </div>
            </div>
          </div>`;


  orderDetailsHTML += `
          <div class="accordion-item">
            <h2 class="accordion-header" id="truckInfoHeader">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#truckInfoCollapse" aria-expanded="false" aria-controls="truckInfoCollapse">
              <h5>Commodity Info</h5>
              </button>
            </h2>
            <div id="truckInfoCollapse" class="accordion-collapse collapse" aria-labelledby="truckInfoHeader" data-bs-parent="#orderDetailsAccordion">
              <div class="accordion-body">
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Description</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.description}</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Length</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.length.feet}ft${orderData.order.commodityDataValue.length.inch}in</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Width</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.width.feet}ft${orderData.order.commodityDataValue.width.inch}in</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Height</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.height.feet}ft${orderData.order.commodityDataValue.height.inch}in</div>
            </div>
            <div class="row mt-2">
              <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
                <h6>Weight</h6>
              </div>
              <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.weight}</div>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Piece Count</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.piece_count}</div>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Make</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.make}</div>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Model</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.model}</div>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Serial</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.serial}</div>
            </div>
            <div class="row mt-2">
            <div class="col-6 col-lg-6" style="font-size: 15px; cursor: pointer;">
              <h6>Bol</h6>
            </div>
            <div class="col-6 col-lg-6" style="text-align:left;">${orderData.order.commodityDataValue.bol}</div>
            </div>
            </div>
            </div>
          </div>`;

  orderDetailsHTML += `</div>`;


  // Append the order details HTML to the orderDetails element
  orderDetailsElement.innerHTML = orderDetailsHTML;

  // Bind the getOrderDetail function to the order rows
  /*const orderRows = document.querySelectorAll('.companydot');
  orderRows.forEach(row => {
    row.addEventListener('click', () => {
        const dotval = row.getAttribute('dot-val');
        fillDotValue(dotval);
    });
  });*/


  const orderRow = document.querySelector('#companyAutoFill');

  if (orderRow) {

    orderRow.addEventListener('click', () => {
      const dotvalString = orderRow.getAttribute('company-all-value');
      // Replace single quotes with double quotes
      const dotval = JSON.parse(dotvalString);
      fillDotValue(dotval);
    });
  }


  const backButton = document.getElementById('backButton');
  backButton.style.display = 'block';
  // Slide up the order list and show the order details
  const orderListElement = document.getElementById('orderList');
  orderListElement.style.display = 'none';
  orderDetailsElement.style.display = 'block';

  const backToOrderList = document.getElementById('backtoOrderList');
  backToOrderList.style.display = 'block';

  setTimeout(function () {
    var accordionElement = document.getElementById('orderDetailsAccordion');
    var accordionItems = accordionElement.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
      var button = item.querySelector('.accordion-button');
      var collapseElement = item.querySelector('.accordion-collapse');

      button.addEventListener('click', function () {
        button.classList.toggle('collapsed');
        collapseElement.classList.toggle('show');
      });
    });

    // Open the first accordion item by default
    // accordionItems[0].querySelector('.accordion-button').classList.remove('collapsed');
    // accordionItems[0].querySelector('.accordion-collapse').classList.add('show');
  }, 0);

}


const backButton = document.getElementById('backButton');
backButton.addEventListener('click', () => {
  const orderListElement = document.getElementById('orderList');
  const orderDetailsElement = document.getElementById('orderDetailsBlock');

  // Hide the order details and show the order list
  orderDetailsElement.style.display = 'none';
  orderListElement.style.display = 'block';

  if (orderDetailsElement.style.display == 'none') {
    backButton.style.display = 'none';
  }
  // Clear the order details content
  orderDetailsElement.innerHTML = '';

});


function fillDotValue(dotvalue) {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {

    try {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'company', data: dotvalue, pagename: tabs[0].url }, response => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
        } else {
          console.log("Message sent successfully");
        }
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  });
}
