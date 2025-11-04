function coloradoState1(dotvalue) {
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
  var event = new Event('change');

  var searchType = document.getElementById('SearchType');
  var searchTypeValue = "NUMBER";
  for (let i = 0; i < searchType.options.length; i++) {
    if (searchType.options[i].value === searchTypeValue) {
      searchType.options[i].selected = true;
      break;
    }
  }
  searchType.dispatchEvent(onchange);

  document.getElementById('SearchTerm').value = dotvalue.order.Company_Info.dot;
  document.getElementById('SearchTerm').dispatchEvent(keyup);

  document.getElementById('PageContentPlaceHolder1_ContactName').value = dotvalue.order.clientData.name;



  let phoneNumber = dotvalue.order.clientData.phone;
  let formattedPhoneNumber = phoneNumber.replace('+1 ', '').replace(/\s+/g, '');
  document.getElementById('PageContentPlaceHolder1_ContactPhone').value = formattedPhoneNumber;
  document.getElementById('PageContentPlaceHolder1_ContactEmail').value = dotvalue.order.clientData.email;

  document.getElementById('PageContentPlaceHolder1_EmergencyContactName').value = dotvalue.order.clientData.name;
  document.getElementById('PageContentPlaceHolder1_EmergencyContactPhone').value = formattedPhoneNumber;
  document.getElementById('PageContentPlaceHolder1_EmergencyContactEmail').value = dotvalue.order.clientData.email;

  var selectElement = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2');
  var selectElementValue = "1";
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].value === selectElementValue) {
      selectElement.options[i].selected = true;
      break;
    }
  }
  selectElement.dispatchEvent(onchange);

  var selectElement1 = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
  var selectElement1Value = "1";
  for (let i = 0; i < selectElement1.options.length; i++) {
    if (selectElement1.options[i].value === selectElement1Value) {
      selectElement1.options[i].selected = true;
      break;
    }
  }
  selectElement1.dispatchEvent(onchange);
}

function coloradoState2(dotvalue) {
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

  var selectElement = document.getElementById('PageContentPlaceHolder1_TruckYear0_0');
  var selectElementValue = "2022";
  for (let i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].value === selectElementValue) {
      selectElement.options[i].selected = true;
      break;
    }
  }
  selectElement.dispatchEvent(onchange);

  document.getElementById('TruckMake0_0').value = dotvalue.order.truck_detail.make;
  document.getElementById('TruckMake0_0').dispatchEvent(onchange);

  document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
  document.getElementById('TruckVIN0_0').dispatchEvent(onchange);

  document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;
  document.getElementById('LoadDescription0').dispatchEvent(onchange);

  var selectElement1 = document.getElementById('IndustryDD_0');
  var selectElementValue1 = "18";
  for (let i = 0; i < selectElement1.options.length; i++) {
    if (selectElement1.options[i].value === selectElementValue1) {
      selectElement1.options[i].selected = true;
      break;
    }

  }
  selectElement1.dispatchEvent(onchange);

  document.getElementById('chkLoadIndivisible0').checked = true;
  document.getElementById('chkLoadIndivisible0').dispatchEvent(onchange);

  document.getElementById('LoadedWidthFeet0').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
  document.getElementById('LoadedWidthFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedWidthInches0').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
  document.getElementById('LoadedWidthInches0').dispatchEvent(onchange);
  document.getElementById('LoadedWidthInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedHeightFeet0').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
  document.getElementById('LoadedHeightFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedHeightInches0').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
  document.getElementById('LoadedHeightInches0').dispatchEvent(onchange);
  document.getElementById('LoadedHeightInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedLengthFeet0').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}`;
  document.getElementById('LoadedLengthFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedLengthInches0').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}`;
  document.getElementById('LoadedLengthInches0').dispatchEvent(onchange);
  document.getElementById('LoadedLengthInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedTrailerFeet0').value = `${dotvalue.order.Trailer_Info.lenght}`;
  document.getElementById('LoadedTrailerFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedTrailerInches0').value = 0;
  document.getElementById('LoadedTrailerInches0').dispatchEvent(onchange);
  document.getElementById('LoadedTrailerInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedFrontOHangFeet0').value = `${dotvalue.order.OverallOrderData.front_overhang.feet}`;
  document.getElementById('LoadedFrontOHangFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedFrontOHangInches0').value = `${dotvalue.order.OverallOrderData.front_overhang.inch}`;
  document.getElementById('LoadedFrontOHangInches0').dispatchEvent(onchange);
  document.getElementById('LoadedFrontOHangInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedRearOHangFeet0').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}`;
  document.getElementById('LoadedRearOHangFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedRearOHangInches0').value = `${dotvalue.order.OverallOrderData.rear_overhang.inch}`;
  document.getElementById('LoadedRearOHangInches0').dispatchEvent(onchange);
  document.getElementById('LoadedRearOHangInches0').dispatchEvent(keypressEvent);



  //    document.getElementById('axleCountNpt0').value = dotvalue.order.axle_weight.length;
  //    document.getElementById('axleCountNpt0').dispatchEvent(keypressEvent);
  //    document.getElementById('axleCountNpt0').dispatchEvent(event);

  document.getElementById('GVW_0').value = dotvalue.order.totalWeight;
  document.getElementById('GVW_0').dispatchEvent(keypressEvent);

  var SetWeightButton21 = document.getElementById('SetWeightButton0');
  SetWeightButton21.dispatchEvent(click);

  document.getElementById('PageContentPlaceHolder1_NumOfAxles').value = dotvalue.order.axle_weight.length;
  document.getElementById('PageContentPlaceHolder1_NumOfAxles').dispatchEvent(onchange);
  document.getElementById('PageContentPlaceHolder1_NumOfAxles').dispatchEvent(keypressEvent);


  dotvalue.order.axle_spacing.forEach(function (data, index) {
    const { feet, inches } = convertValueSpacingftinch(data.value);
    var feetval = feet;
    var inchesval = inches;
    var feetId = 'PageContentPlaceHolder1_AxleSpaceFt' + (index + 2);
    var inchesId = 'PageContentPlaceHolder1_AxleSpaceIn' + (index + 2);
    document.getElementById(feetId).value = feetval;
    document.getElementById(feetId).dispatchEvent(onchange);
    document.getElementById(feetId).dispatchEvent(keypressEvent);

    document.getElementById(inchesId).value = inchesval;
    document.getElementById(inchesId).dispatchEvent(onchange);
    document.getElementById(inchesId).dispatchEvent(keypressEvent);
  });

  dotvalue.order.axle_weight.forEach(function (data, index) {
    var axleId = 'PageContentPlaceHolder1_AxleWeight' + (index + 1);
    document.getElementById(axleId).value = data.value;
    document.getElementById(axleId).dispatchEvent(keypressEvent);
    document.getElementById(axleId).dispatchEvent(onchange);

  });

  document.getElementById('rbLowBoyY0').checked = true;
  document.getElementById('rbLowBoyY0').dispatchEvent(onchange);
  // var SetWeightButton21 = document.getElementById('btnValidateWeightsClose');
  // SetWeightButton21.dispatchEvent(click);


}