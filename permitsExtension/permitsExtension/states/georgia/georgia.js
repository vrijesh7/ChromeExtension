function georgiaStep1(dotvalue) 
{
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
    key: 'a', // Specify the key value (e.g., 'a')
    code: 'KeyA', // Specify the physical key code (e.g., 'KeyA')
    charCode: 97, // ASCII value of the key (optional)
    keyCode: 97, // Legacy property (optional)
    bubbles: true, // Indicates the event bubbles up through the DOM
    cancelable: true // Indicates the event can be canceled
  });

  var inputElement = document.getElementById('SearchTerm');
  inputElement.value = dotvalue.order.Company_Info.dot;
  inputElement.dispatchEvent(keyup);


  // chrome.storage.local.get('loginUser', function (data) {
  //   if (data.loginUser) {
  //     document.getElementById('PageContentPlaceHolder1_ContactName').value = data.loginUser;
  //   }
  // });


  document.getElementById('PageContentPlaceHolder1_ContactName').value = "Nash Turcan";//dotvalue.order.clientData.name;

  var phoneNumber = dotvalue.order.clientData.phone;
  var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
  document.getElementById('PageContentPlaceHolder1_ContactPhone').value = "9842938503";//formattedPhoneNumber;

  document.getElementById('PageContentPlaceHolder1_ContactEmail').value = "synchronpermits@gmail.com";//dotvalue.order.clientData.email;

  var selectElement = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2');
  var selectElementValue = "1";
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].value === selectElementValue) {
      selectElement.options[i].selected = true;
      break;
    }
  }

  selectElement.dispatchEvent(onchange);

  document.getElementById('PageContentPlaceHolder1_tbDeliveryText1').value = "synchronpermits@gmail.com";

  document.getElementById('PageContentPlaceHolder1_tbLoadDescription').value = dotvalue.order.commodityDataValue.description;
  document.getElementById('PageContentPlaceHolder1_tbLoadDescription').dispatchEvent(onchange);

  var inputElementType = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
  var inputElementTypeValue = "1";
  for (let i = 0; i < inputElementType.options.length; i++) {
    if (inputElementType.options[i].value === inputElementTypeValue) {
      inputElementType.options[i].selected = true;
      break;

    }

  }

  inputElementType.dispatchEvent(onchange);

  // var inputElementdate = document.getElementById('FromDatePicker');
  // var toInput = document.getElementById('ToDatePicker');

  // var currentDate = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
  // inputElementdate.value = currentDate;
  // inputElementdate.dispatchEvent(onchange);
//   var inputElementdate = document.getElementById('FromDatePicker');
// var toInput = document.getElementById('ToDatePicker');

// // Set today's date in FromDatePicker
// var currentDate = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
// inputElementdate.value = currentDate;

// // Update ToDatePicker if it's less than FromDatePicker
// if (!toInput.value || new Date(toInput.value) < new Date(inputElementdate.value)) {
//     toInput.value = inputElementdate.value;
// }

// // Trigger the existing onchange event
// if (typeof inputElementdate.onchange === "function") {
//     inputElementdate.onchange();
// }



}

function georgiaStep2(dotvalue) {

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


  document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;


  var truckSelect = document.getElementById('TruckSelect0_0');
  var truckSelectValue = dotvalue.order.truck_detail.unit_id;
  for (let i = 0; i < truckSelect.options.length; i++) {
    if (truckSelect.options[i].text === truckSelectValue) {
      truckSelect.options[i].selected = true;

      break;
    }
  }
  truckSelect.dispatchEvent(onchange);

  document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;
  document.getElementById('TruckLicense0_0').dispatchEvent(onchange);

  var selectState = document.getElementById('PageContentPlaceHolder1_TruckState0_0');
  var stateValue = dotvalue.order.truck_detail.license_state;
  for (let i = 0; i < selectState.options.length; i++) {
    if (selectState.options[i].value === stateValue) {
      selectState.options[i].selected = true;
      break;

    }


  }

  selectState.dispatchEvent(onchange);

  var selectMake = document.getElementById('PageContentPlaceHolder1_TruckMake0_0');
  var selectMakeValue = dotvalue.order.truck_detail.make;

  for (let i = 1; i < selectMake.options.length; i++) {
    if (selectMake.options[i].value === selectMakeValue) {
      selectMake.options[i].selected = true;
      break;
    }
  }

  selectMake.dispatchEvent(onchange);

  document.getElementById('TrailerPlate0_0').value = dotvalue.order.Trailer_Info.license_plate;

  var trailerState = document.getElementById('PageContentPlaceHolder1_TrailerState0_0');
  var trailerStateValue = dotvalue.order.Trailer_Info.state;
  for (let i = 0; i < trailerState.options.length; i++) {
    if (trailerState.options[i].value === trailerStateValue) {
      trailerState.options[i].selected = true;
      break;

    }
  }

  trailerState.dispatchEvent(onchange);

  document.getElementById("chkLoadIndivisible0").checked = true;
  document.getElementById("chkLoadIndivisible0").dispatchEvent(click);


  document.getElementById('LoadedWidthFeet0').value = dotvalue.order.OverallOrderData.overallwidth.feet;
  document.getElementById('LoadedWidthFeet0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedWidthInches0').value = dotvalue.order.OverallOrderData.overallwidth.inch;
  document.getElementById('LoadedWidthInches0').dispatchEvent(onchange);
  document.getElementById('LoadedWidthInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedHeightFeet0').value = dotvalue.order.OverallOrderData.overallheight.feet;
  document.getElementById('LoadedHeightFeet0').dispatchEvent(onchange);
  document.getElementById('LoadedHeightFeet0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedHeightInches0').value = dotvalue.order.OverallOrderData.overallheight.inch;
  document.getElementById('LoadedHeightInches0').dispatchEvent(onchange);
  document.getElementById('LoadedHeightInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedLengthFeet0').value = dotvalue.order.OverallOrderData.overalllength.feet;
  document.getElementById('LoadedLengthFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedLengthFeet0').dispatchEvent(onchange);



  document.getElementById('GVW_0').value = dotvalue.order.totalWeight;
  document.getElementById('GVW_0').dispatchEvent(keypressEvent);
  document.getElementById('GVW_0').dispatchEvent(onchange);

  document.getElementById('axleCountNpt0').value = dotvalue.order.axle_weight.length;
  document.getElementById('axleCountNpt0').dispatchEvent(keypressEvent);

  document.getElementById("SetWeightButton0").dispatchEvent(click);

  document.getElementById('PageContentPlaceHolder1_NumOfAxles').value = dotvalue.order.axle_weight.length;
  document.getElementById("PageContentPlaceHolder1_NumOfAxles").dispatchEvent(onchange);
  document.getElementById("PageContentPlaceHolder1_NumOfAxles").dispatchEvent(keypressEvent);

  dotvalue.order.axle_weight.forEach(function (data, index) {
    var axleWeightId = 'PageContentPlaceHolder1_AxleWeight' + (index + 1);
    document.getElementById(axleWeightId).value = data.value;
    document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
    document.getElementById(axleWeightId).dispatchEvent(onchange);
  });

  dotvalue.order.axle_spacing.forEach(function (data, index) {
    const { feet, inches } = convertValueSpacingftinch(data.value);

    var axlespacingFeet = 'PageContentPlaceHolder1_AxleSpaceFt' + (index + 2);
    var axlespacingInc = 'PageContentPlaceHolder1_AxleSpaceIn' + (index + 2);
    document.getElementById(axlespacingFeet).value = feet;
    document.getElementById(axlespacingInc).value = inches;
    document.getElementById(axlespacingFeet).dispatchEvent(onchange);
    document.getElementById(axlespacingFeet).dispatchEvent(keypressEvent);
    document.getElementById(axlespacingInc).dispatchEvent(onchange);
    document.getElementById(axlespacingInc).dispatchEvent(keypressEvent);

  });

}

function convertValueSpacingftinch(value) {
  const [feet, inches] = value.split('ft');
  return {
    feet: parseInt(feet, 10),
    inches: parseInt(inches.replace('in', ''), 10)
  };
}