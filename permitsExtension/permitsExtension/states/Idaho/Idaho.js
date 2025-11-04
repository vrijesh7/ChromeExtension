function idahoState1(dotvalue) 
{

  

  document.getElementById('SearchTerm').value = dotvalue.order.Company_Info.dot;
  var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', 
    char: '', 
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });

  var click = new Event('click');

  var event = new Event('change', { bubbles: true });

  var keypressEvent = new KeyboardEvent('keypress', {
    bubbles: true,
    cancelable: true,
    key: '', 
    char: '', 
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });

  document.getElementById('SearchTerm').dispatchEvent(keyup);

  chrome.storage.local.get('loginUser', function (data) {
    if (data.loginUser) {

      document.getElementById('PageContentPlaceHolder1_ContactName').value = "Nash Turcan";//data.loginUser;
    }
  });

  document.getElementById('PageContentPlaceHolder1_ContactPhone').value = "9842938503";
  document.getElementById('PageContentPlaceHolder1_ContactPhone').dispatchEvent(event);

  document.getElementById('PageContentPlaceHolder1_ContactEmail').value = "synchronpermits@gmail.com";
  document.getElementById('PageContentPlaceHolder1_ContactEmail').dispatchEvent(event);

  var selectElement = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown');
  if(selectElement)
  {
  selectElement.value = "0";
  selectElement.dispatchEvent(event);
  selectElement.dispatchEvent(keypressEvent);
  }

  if(document.getElementById('PageContentPlaceHolder1_tbDeliveryText1'))
  {
  document.getElementById('PageContentPlaceHolder1_tbDeliveryText1').value = "synchronpermits@gmail.com";
  document.getElementById('PageContentPlaceHolder1_tbDeliveryText1').dispatchEvent(event);
  document.getElementById('PageContentPlaceHolder1_tbDeliveryText1').dispatchEvent(keypressEvent);
  }

  var selectElement2 = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2');
  if(selectElement2)
  {
  selectElement2.value = "1";
  selectElement2.dispatchEvent(event);
  selectElement2.dispatchEvent(keypressEvent);
  selectElement2.dispatchEvent(click);
  }

  var companyInfo = document.getElementById('PageContentPlaceHolder1_txtUserText');
  if(companyInfo)
  {
  companyInfo.value = "TRC Logistics LLC"; 
  companyInfo.dispatchEvent(event);
  companyInfo.dispatchEvent(keypressEvent);
  companyInfo.dispatchEvent(click);
  }

  // var PageContentPlaceHolder1_PermitTypeDD = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
  // if(PageContentPlaceHolder1_PermitTypeDD)
  // {
  // PageContentPlaceHolder1_PermitTypeDD.value = "2"; 
  // PageContentPlaceHolder1_PermitTypeDD.dispatchEvent(event);
  // PageContentPlaceHolder1_PermitTypeDD.dispatchEvent(keypressEvent);
  // PageContentPlaceHolder1_PermitTypeDD.dispatchEvent(click);
  // }

  

  // var selPermitSubTypes = document.getElementById('selPermitSubTypes');
  // if(selPermitSubTypes)
  // {
  // selPermitSubTypes.value = "3";
  // selPermitSubTypes.dispatchEvent(event);
  // selPermitSubTypes.dispatchEvent(keypressEvent);
  // selPermitSubTypes.dispatchEvent(click);
  // }

  // var selPermitDefinition = document.getElementById('selPermitDefinition');
  // if(selPermitDefinition)
  // {
  // selPermitDefinition.value = "2099";
  // selPermitDefinition.dispatchEvent(event);
  // selPermitDefinition.dispatchEvent(click);
  // }


  function selectPermitValues(permitTypeValue, subTypeValue, definitionValue) {
    const event = new Event('change', { bubbles: true });

    const permitType = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
    if (!permitType) return;

    permitType.disabled = false; 
    permitType.value = permitTypeValue;
    permitType.dispatchEvent(event);

    const subTypeInterval = setInterval(() => {
        const subType = document.getElementById('selPermitSubTypes');
        if (subType && !subType.disabled) {
            clearInterval(subTypeInterval);
            subType.value = subTypeValue;
            subType.dispatchEvent(event);

            const defInterval = setInterval(() => {
                const definition = document.getElementById('selPermitDefinition');
                if (definition && !definition.disabled) {
                    clearInterval(defInterval);
                    definition.value = definitionValue;
                    definition.dispatchEvent(event);
                }
            }, 50);
        }
    }, 50);
}

selectPermitValues("2", "3", "2099");


}

function idahoState2(dotvalue) {

  var event = new Event('change', {
    bubbles: true,
    cancelable: true
  });

  var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', 
    char: '', 
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });

  var keypressEvent = new KeyboardEvent('keypress', {
    bubbles: true,
    cancelable: true,
    key: '', 
    char: '', 
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });


  const inputEvent = new Event('input', { bubbles: true, cancelable: true });
  const blurEvent = new Event('blur', { bubbles: true });

  var click = new Event('click');
  document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;
 
  const desiredTruckUnitId = dotvalue.order.truck_detail.unit_id;

  
  const truckSelect = document.getElementById('TruckSelect0_0');

  
  for (let i = 0; i < truckSelect.options.length; i++) {
    if (truckSelect.options[i].text === desiredTruckUnitId) {
      truckSelect.selectedIndex = i;
      truckSelect.dispatchEvent(event);
      break;
    }
  }

  document.getElementById('TruckYear0_0').value = dotvalue.order.truck_detail.year;

  document.getElementById('TruckMakeDD0_0').value = dotvalue.order.truck_detail.make.toUpperCase();
  document.getElementById('TruckMakeDD0_0').dispatchEvent(event);


  document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
  document.getElementById('TruckState0_0').value = dotvalue.order.truck_detail.license_state;
  document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;




  document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;
  var selectElement = document.getElementById('IndustryDD_0');
  if (selectElement) {
    for (var i = 0; i < selectElement.options.length; i++) {
      var option = selectElement.options[i];
      if (option.value == "71") {
        option.selected = true;
        break;
      }
    }
    selectElement.dispatchEvent(new Event('change'));
  }
  document.getElementById('chkLoadIndivisible0').checked = true;
  document.getElementById('chkLoadIndivisible0').dispatchEvent(event);

  document.getElementById('LoadedWidthFeet0').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
  document.getElementById('LoadedWidthFeet0').dispatchEvent(inputEvent);
  document.getElementById('LoadedWidthFeet0').dispatchEvent(event);
  document.getElementById('LoadedWidthFeet0').dispatchEvent(blurEvent);


  document.getElementById('LoadedWidthInches0').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
  document.getElementById('LoadedWidthInches0').dispatchEvent(inputEvent);
  document.getElementById('LoadedWidthInches0').dispatchEvent(event);
  document.getElementById('LoadedWidthInches0').dispatchEvent(blurEvent);

  document.getElementById('LoadedHeightFeet0').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
  document.getElementById('LoadedHeightFeet0').dispatchEvent(inputEvent);
  document.getElementById('LoadedHeightFeet0').dispatchEvent(event);
  document.getElementById('LoadedHeightFeet0').dispatchEvent(blurEvent);

  document.getElementById('LoadedHeightInches0').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
  document.getElementById('LoadedHeightInches0').dispatchEvent(inputEvent);
  document.getElementById('LoadedHeightInches0').dispatchEvent(event);
  document.getElementById('LoadedHeightInches0').dispatchEvent(blurEvent);

  document.getElementById('LoadedLengthFeet0').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}`;
  document.getElementById('LoadedLengthFeet0').dispatchEvent(inputEvent);
  document.getElementById('LoadedLengthFeet0').dispatchEvent(event);
  document.getElementById('LoadedLengthFeet0').dispatchEvent(blurEvent);

  document.getElementById('LoadedLengthInches0').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}`;
  document.getElementById('LoadedLengthInches0').dispatchEvent(inputEvent);
  document.getElementById('LoadedLengthInches0').dispatchEvent(event);
  document.getElementById('LoadedLengthInches0').dispatchEvent(blurEvent);

  document.getElementById('LoadedFrontOHangFeet0').value =    0 ;//`${dotvalue.order.OverallOrderData.front_overhang.feet}`;
  document.getElementById('LoadedFrontOHangFeet0').dispatchEvent(inputEvent);
  document.getElementById('LoadedFrontOHangFeet0').dispatchEvent(event);
  document.getElementById('LoadedFrontOHangFeet0').dispatchEvent(blurEvent);

  document.getElementById('LoadedFrontOHangInches0').value =  0 ;//`${dotvalue.order.OverallOrderData.front_overhang.inch}`;
  document.getElementById('LoadedFrontOHangInches0').dispatchEvent(inputEvent);
  document.getElementById('LoadedFrontOHangInches0').dispatchEvent(event);
  document.getElementById('LoadedFrontOHangInches0').dispatchEvent(blurEvent);

  document.getElementById('LoadedRearOHangFeet0').value = 0 ; //`${dotvalue.order.OverallOrderData.rear_overhang.feet}`;
  document.getElementById('LoadedRearOHangFeet0').dispatchEvent(inputEvent);
  document.getElementById('LoadedRearOHangFeet0').dispatchEvent(event);
  document.getElementById('LoadedRearOHangFeet0').dispatchEvent(blurEvent);

  document.getElementById('LoadedRearOHangInches0').value = 0 ; //`${dotvalue.order.OverallOrderData.rear_overhang.inch}`;
  document.getElementById('LoadedRearOHangInches0').dispatchEvent(inputEvent);
  document.getElementById('LoadedRearOHangInches0').dispatchEvent(event);
  document.getElementById('LoadedRearOHangInches0').dispatchEvent(blurEvent);

  document.getElementById('GVW_0').value = dotvalue.order.totalWeight;

  var SetWeightButton20 = document.getElementById('SetWeightButton20');

  SetWeightButton20.dispatchEvent(click);

  document.getElementById('NumOfAxles').value = dotvalue.order.axle_weight.length;
  document.getElementById('NumOfAxles').dispatchEvent(inputEvent);
  document.getElementById('NumOfAxles').dispatchEvent(keypressEvent);
  document.getElementById('NumOfAxles').dispatchEvent(event);
  document.getElementById('NumOfAxles').dispatchEvent(blurEvent);


  dotvalue.order.axle_weight.forEach(function (data, index) {
    var axleId = 'AxleWeight' + (index + 1);
    
    document.getElementById(axleId).value = data.value;
    document.getElementById(axleId).dispatchEvent(inputEvent);
    document.getElementById(axleId).dispatchEvent(event);
    document.getElementById(axleId).dispatchEvent(blurEvent);
  });

  dotvalue.order.axle_spacing.forEach(function (data, index) {
    const { feet, inches } = convertValueSpacingftinch(data.value);
    var feetval = feet;
    var inchesval = inches;
    var feetId = 'AxleSpaceFt' + (index + 2);
    var inchesId = 'AxleSpaceIn' + (index + 2);
    document.getElementById(feetId).value = feetval;
    document.getElementById(feetId).dispatchEvent(inputEvent);
    document.getElementById(feetId).dispatchEvent(event);
    document.getElementById(feetId).dispatchEvent(blurEvent);

    document.getElementById(inchesId).value = inchesval;
    document.getElementById(inchesId).dispatchEvent(inputEvent);
    document.getElementById(inchesId).dispatchEvent(event);
    document.getElementById(inchesId).dispatchEvent(blurEvent);
  });

}