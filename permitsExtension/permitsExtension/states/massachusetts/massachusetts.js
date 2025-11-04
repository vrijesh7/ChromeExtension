function massachusettsState1(dotvalue) 
{
  var onchange =  new Event('change', { bubbles: true });
  var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', // You can specify the key if needed
    char: '', // You can specify the character if needed
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });
  

  document.getElementById('SearchTerm').value = dotvalue.order.Company_Info.dot;
  document.getElementById('SearchTerm').dispatchEvent(keyup);

  document.getElementById('PageContentPlaceHolder1_ContactName').value = "Nash Turcan";//dotvalue.order.clientData.name;

  var phoneNumber = dotvalue.order.clientData.phone; // "+1 725 550 5862"


  var cleanedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\s+/g, '');
  document.getElementById('PageContentPlaceHolder1_ContactPhone').value = "9842938503"//cleanedPhoneNumber;

  document.getElementById('PageContentPlaceHolder1_ContactEmail').value = "synchronpermits@gmail.com";//dotvalue.order.clientData.email;
  var selectElement = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2');
  selectElement.value = 1;
  selectElement.dispatchEvent(onchange);

  document.getElementById('PageContentPlaceHolder1_tbDeliveryText1').value = "synchronpermits@gmail.com";

  var selectElement2 = document.getElementById('PermitTypeDD');
  selectElement2.value = 4;
  selectElement2.dispatchEvent(onchange);
}

function massachusettsState2(dotvalue) 
{

  var onchange =  new Event('change', { bubbles: true });
  var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', // You can specify the key if needed
    char: '', // You can specify the character if needed
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });

  var keypressEvent = new KeyboardEvent('keypress', {
    bubbles: true,
    cancelable: true,
    key: '', // Specify key properties if needed
    char: '', // Specify char properties if needed
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });

  var clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });

  const desiredTruckUnitId = dotvalue.order.truck_detail.unit_id;

  // Get the select element
  const truckSelect = document.getElementById('TruckSelect0_0');

  // Loop through the options and select the one with the matching label
  for (let i = 0; i < truckSelect.options.length; i++) {
    if (truckSelect.options[i].text === desiredTruckUnitId) {
      truckSelect.selectedIndex = i;
      truckSelect.dispatchEvent(onchange);
      break;
    }
  }

  document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;

  var selectElement3 = document.getElementById('PageContentPlaceHolder1_TruckYear0_0');
  selectElement3.value = dotvalue.order.truck_detail.year;


  document.getElementById('TruckMake0_0').value = dotvalue.order.truck_detail.make;
  document.getElementById('TruckMake0_0').dispatchEvent(onchange);

  document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
  document.getElementById('TruckVIN0_0').dispatchEvent(onchange);

  document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;
  document.getElementById('TruckLicense0_0').dispatchEvent(onchange);

  var selectElement = document.getElementById('PageContentPlaceHolder1_TruckState0_0');
  selectElement.value = dotvalue.order.truck_detail.license_state;

  var selectElement1 = document.getElementById('TruckTypeSlct0_0');
  selectElement1.value = "TT";
  selectElement1.dispatchEvent(onchange);

  document.getElementById('TrailerPlate0_0').value = dotvalue.order.Trailer_Info.license_plate;


  document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;


  // document.getElementById('chkLoadIndivisible0').checked = true;
  // document.getElementById('chkLoadIndivisible0').dispatchEvent(onchange);
  // document.getElementById('chkLoadIndivisible0').dispatchEvent(clickEvent);
    var checkbox = document.getElementById('chkLoadIndivisible0');
    checkbox.click(); 



  document.getElementById('LoadedWidthFeet0').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
  document.getElementById('LoadedWidthInches0').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
  document.getElementById('LoadedHeightFeet0').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
  document.getElementById('LoadedHeightInches0').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
  document.getElementById('LoadedLengthFeet0').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}`;
  document.getElementById('LoadedLengthInches0').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}`;


  document.getElementById('GVW_0').value = dotvalue.order.totalWeight;
  document.getElementById('GVW_0').dispatchEvent(keypressEvent);
  document.getElementById('GVW_0').dispatchEvent(onchange);


  document.getElementById('axleCountNpt20').value = dotvalue.order.axle_weight.length;
  document.getElementById('axleCountNpt20').dispatchEvent(onchange);
  document.getElementById('axleCountNpt20').dispatchEvent(keypressEvent);




}