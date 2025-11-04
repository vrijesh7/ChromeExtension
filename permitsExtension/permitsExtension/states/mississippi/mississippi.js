function mississippiStep1(dotvalue) 
{
  document.getElementById("soncb0").checked = true;
  document.getElementById("soncb1").checked = true;
}

function mississippiStep2(dotvalue) 
{

  var blurEvent = new Event('blur');
  var onchange = new Event('change', { bubbles: true });
  var click = new Event('click');
  var keypressEvent = new KeyboardEvent('keypress', {
    key: 'a', // Specify the key value (e.g., 'a')
    code: 'KeyA', // Specify the physical key code (e.g., 'KeyA')
    charCode: 97, // ASCII value of the key (optional)
    keyCode: 97, // Legacy property (optional)
    bubbles: true, // Indicates the event bubbles up through the DOM
    cancelable: true // Indicates the event can be canceled
  });
  var keydownEvent = new KeyboardEvent('keydown', {
    key: 'a', // Specify the key value (e.g., 'a')
    code: 'KeyA', // Specify the physical key code (e.g., 'KeyA')
    keyCode: 65, // ASCII value for 'A'
    bubbles: true, // Indicates the event bubbles up through the DOM
    cancelable: true // Indicates the event can be canceled
  });
  var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', // You can specify the key if needed
    char: '', // You can specify the character if needed
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });


  var dotNumber = document.getElementById('SearchType');
  var dotNumberValue = "NUMBER";
  for(let i = 0; i<dotNumber.options.length; i++)
  {
    if(dotNumber.options[i].value === dotNumberValue)
    {
      dotNumber.options[i].selected = true;
      break;
    }
  }
  dotNumber.dispatchEvent(onchange);

  var inputElement = document.getElementById('SearchTerm');
  inputElement.value = dotvalue.order.Company_Info.dot;
  inputElement.dispatchEvent(keyup);


  
  document.getElementById('PageContentPlaceHolder1_ContactName').value = "Nash Turcan";

  var phoneNumber = dotvalue.order.clientData.phone;
  var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
  document.getElementById('PageContentPlaceHolder1_ContactPhone').value = formattedPhoneNumber;
  document.getElementById('PageContentPlaceHolder1_ContactEmail').value = dotvalue.order.clientData.email;

  var deliveryType = document.getElementById("PageContentPlaceHolder1_DeliveryDropDown2");  //
  var deliveryTypeValue = "1";
  for (let i = 0; i < deliveryType.options.length; i++) {
    if (deliveryType.options[i].value === deliveryTypeValue) {
      deliveryType.options[i].selected = true;
      break;

    }
  }
  deliveryType.dispatchEvent(onchange);

  var permitType = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
  var permitTypeValue = "1";
  for (let i = 0; i < permitType.options.length; i++) {
    if (permitType.options[i].value === permitTypeValue) {
      permitType.options[i].selected = true ;
      break;
    }

  }
  permitType.dispatchEvent(onchange);

  var inputElementdate = document.getElementById('FromDatePicker');

  var currentDate = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
  inputElementdate.value = currentDate;

  inputElementdate.dispatchEvent(new Event('change'));


}
function mississippiStep3(dotvalue) {


  var event = new Event('change', {
    bubbles: true,
    cancelable: true
  });

  var onchange = new Event('change', { bubbles: true });
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

  var click = new Event('click');

  

  var truckSelect = document.getElementById('TruckSelect0_0');
  var desiredTruckUnitId = dotvalue.order.truck_detail.unit_id.toString();

  for (let i = 0; i < truckSelect.options.length; i++) {
    if (truckSelect.options[i].innerHTML === desiredTruckUnitId) {
      truckSelect.selectedIndex = i;
      break;
    }
  }

  truckSelect.dispatchEvent(onchange);


  document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;  // 
  var truckYear = document.getElementById('TruckYear0_0');
  var truckYearValue = dotvalue.order.truck_detail.year;
  for (let i = 0; i < truckYear.options.length; i++) {
    if (truckYear.options[i].value === truckYearValue) {
      truckYear.selectedIndex = i;
      break;
    }
  }
  truckYear.dispatchEvent(onchange);

  var truckMake = document.getElementById('TruckMake0_0');
  var truckmakeValue = dotvalue.order.truck_detail.make
  for (let i = 0; i < truckMake.options.length; i++) {
    if (truckMake.options[i].value === truckmakeValue) {
      truckMake.selectedIndex = i;
      break;
    }
  }
  truckMake.dispatchEvent(onchange);

  document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
  document.getElementById('TruckVIN0_0').dispatchEvent(onchange);

  document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;
  document.getElementById('TruckLicense0_0').dispatchEvent(onchange);

  var truckState = document.getElementById('TruckState0_0');
  var truckStateValue = dotvalue.order.truck_detail.license_state;
  for (let i = 0; i < truckState.options.length; i++) {
    if (truckState.options[i].value === truckStateValue) {
        truckState.selectedIndex = i;
      break;
    }

  }
  truckState.dispatchEvent(onchange);

  document.getElementById("chkLegalY0_0").checked = true;
  document.getElementById("chkLegalY0_0").dispatchEvent(onchange);

  var commodityType = document.getElementById("IndustryDD_0");
  var commodityTypeValue = "18";
  for (let i = 0; i < commodityType.options.length; i++) {
    if (commodityType.options[i].value === commodityTypeValue) {
      commodityType.selectedIndex = i;
      break;
    }
  }
  commodityType.dispatchEvent(onchange);

  document.getElementById("LoadDescription0").value = dotvalue.order.commodityDataValue.description;
  document.getElementById("chkLoadIndivisible0").checked = true;
  document.getElementById("chkLoadIndivisible0").dispatchEvent(onchange);

  document.getElementById('LoadedWidthFeet0').value = dotvalue.order.OverallOrderData.overallwidth.feet;
  document.getElementById('LoadedWidthFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedWidthInches0').value = dotvalue.order.OverallOrderData.overallwidth.inch;
  document.getElementById('LoadedWidthInches0').dispatchEvent(onchange);
  document.getElementById('LoadedWidthInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedHeightFeet0').value = dotvalue.order.OverallOrderData.overallheight.feet;
  document.getElementById('LoadedHeightFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedHeightInches0').value = dotvalue.order.OverallOrderData.overallheight.inch;
  document.getElementById('LoadedHeightInches0').dispatchEvent(onchange);
  document.getElementById('LoadedHeightInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedLengthFeet0').value = dotvalue.order.OverallOrderData.overalllength.feet;
  document.getElementById('LoadedLengthFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedLengthInches0').value = dotvalue.order.OverallOrderData.overalllength.inch;
  document.getElementById('LoadedLengthInches0').dispatchEvent(onchange);
  document.getElementById('LoadedLengthInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedFrontOHangFeet0').value = dotvalue.order.OverallOrderData.front_overhang.feet;
  document.getElementById('LoadedFrontOHangFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedFrontOHangInches0').value = dotvalue.order.OverallOrderData.front_overhang.inch;
  document.getElementById('LoadedFrontOHangInches0').dispatchEvent(onchange);
  document.getElementById('LoadedFrontOHangInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedRearOHangFeet0').value = dotvalue.order.OverallOrderData.rear_overhang.feet;
  document.getElementById('LoadedRearOHangFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedRearOHangInches0').value = dotvalue.order.OverallOrderData.rear_overhang.inch;
  document.getElementById('LoadedRearOHangInches0').dispatchEvent(onchange);
  document.getElementById('LoadedRearOHangInches0').dispatchEvent(keypressEvent);


  var SetWeightButton20 = document.getElementById('SetWeightButton20');
  SetWeightButton20.dispatchEvent(click);

  var inputElementNumberofalex = document.getElementById('NumOfAxles');
  inputElementNumberofalex.value = dotvalue.order.axle_weight.length;
  inputElementNumberofalex.dispatchEvent(onchange);

  dotvalue.order.axle_weight.forEach(function (data, index) {

    var axleWeightId = 'AxleWeight' + (index + 1);

    document.getElementById(axleWeightId).value = data.value;
    document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
    document.getElementById(axleWeightId).dispatchEvent(onchange);

  });


  dotvalue.order.axle_spacing.forEach(function (data, index) {

    const { feet, inches } = convertValueSpacingftinch(data.value);

    var axlespacingFeet = 'AxleSpaceFt' + (index + 2);
    var axlespacingInc = 'AxleSpaceIn' + (index + 2);

    document.getElementById(axlespacingFeet).value = feet;
    document.getElementById(axlespacingFeet).dispatchEvent(onchange);
    document.getElementById(axlespacingFeet).dispatchEvent(keypressEvent);

    document.getElementById(axlespacingInc).value = inches;
    document.getElementById(axlespacingInc).dispatchEvent(onchange);
    document.getElementById(axlespacingInc).dispatchEvent(keypressEvent);


  });

}
