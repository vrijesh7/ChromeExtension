function kansasStep1(dotvalue) 
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

  var inputElement = document.getElementById('SearchTerm');
  inputElement.value = dotvalue.order.Company_Info.dot;
  inputElement.dispatchEvent(keyup);


  document.getElementById('PageContentPlaceHolder1_ContactName').value = dotvalue.order.clientData.name;
  
  var phoneNumber = dotvalue.order.clientData.phone;
  var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
  
  document.getElementById('PageContentPlaceHolder1_ContactPhone').value = formattedPhoneNumber;
  document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2').value = "1";
  document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2').dispatchEvent(onchange);

  var inputElementg = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
  inputElementg.value = 1;
  inputElementg.dispatchEvent(onchange);

  var inputElementdate = document.getElementById('FromDatePicker');
  var currentDate = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
  inputElementdate.value = currentDate;
  inputElementdate.dispatchEvent(onchange);
}

function kansasStep2(dotvalue) {
  
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
  var desiredTruckUnitIdValue = dotvalue.order.truck_detail.unit_id;
  for (let i = 0; i < truckSelect.options.length; i++) {
    if (truckSelect.options[i].value === desiredTruckUnitIdValue) {
      truckSelect.options[i].selected = true;
      break;
    }
  }
  truckSelect.dispatchEvent(onchange);

 
  document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;
 var truckYear = document.getElementById('PageContentPlaceHolder1_TruckYear0_0');
 var truckYearValue = dotvalue.order.truck_detail.year;
  for (let i = 0; i < truckYear.options.length; i++) {
    if (truckYear.options[i].value === truckYearValue) {
      truckYear.options[i].selected = true;
      break;
    }
  }
  truckYear.dispatchEvent(onchange);

  document.getElementById('TruckMake0_0').value = dotvalue.order.truck_detail.make;
  document.getElementById('TruckMake0_0').dispatchEvent(onchange);

  document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
  document.getElementById('TruckVIN0_0').dispatchEvent(onchange);
  document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;
  document.getElementById('TruckLicense0_0').dispatchEvent(onchange);
  
  var truckState =   document.getElementById('PageContentPlaceHolder1_TruckState0_0');
  var truckStateValue = dotvalue.order.truck_detail.license_state;
  for (let i = 0; i < truckState.options.length; i++) {
    if (truckState.options[i].value === truckStateValue) {
      truckState.options[i].selected = true;
      break;
    }
  }
  truckState.dispatchEvent(onchange);
  
  var truckGvm =   document.getElementById('TruckRegGVW0_0');
  var truckGvmalue = "80000";
  for (let i = 0; i < truckGvm.options.length; i++) {
    if (truckGvm.options[i].value === truckGvmalue) {
      truckGvm.options[i].selected = true;
      break;
    }
  }
  truckGvm.dispatchEvent(onchange);


  var truckType =  document.getElementById('TruckTypeSlct0_0');
  var truckTypeValue = "TT";
  for (let i = 0; i < truckType.options.length; i++) {
    if (truckType.options[i].value === truckTypeValue) {
      truckType.options[i].selected = true;
      break;
    }
  }
  truckType.dispatchEvent(onchange);


  var industry = document.getElementById("IndustryDD_0");
  var industryValue = "15";
  for (let i = 0; i < industry.options.length; i++) {
    if (industry.options[i].value === industryValue) {
      industry.options[i].selected = true;
      break;
    }
  }
  industry.dispatchEvent(onchange);
  

  document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;

  //document.getElementById('txtIndustryOtherDesc0').value = dotvalue.order.commodityDataValue.description;
  document.getElementById('chkLoadIndivisible0').checked = true;
  document.getElementById('chkLoadIndivisible0').dispatchEvent(click);
  document.getElementById('LoadedWidthFeet0').value = dotvalue.order.OverallOrderData.overallwidth.feet;
  document.getElementById('LoadedWidthFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedWidthInches0').value = dotvalue.order.OverallOrderData.overallwidth.inch;
  document.getElementById('LoadedWidthInches0').dispatchEvent(onchange);
  document.getElementById('LoadedWidthInches0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedHeightFeet0').value = dotvalue.order.OverallOrderData.overallheight.feet
  document.getElementById('LoadedHeightFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedHeightInches0').value = dotvalue.order.OverallOrderData.overallheight.inch
  document.getElementById('LoadedHeightInches0').dispatchEvent(onchange);
  document.getElementById('LoadedHeightInches0').dispatchEvent(keypressEvent);

  document.getElementById('LoadedLengthFeet0').value = dotvalue.order.OverallOrderData.overalllength.feet;
  document.getElementById('LoadedLengthFeet0').dispatchEvent(keypressEvent);
  document.getElementById('LoadedLengthInches0').value = dotvalue.order.OverallOrderData.overalllength.inch;
  document.getElementById('LoadedLengthInches0').dispatchEvent(onchange);
  document.getElementById('LoadedLengthInches0').dispatchEvent(keypressEvent);
 
  document.getElementById('LoadedFrontOHangInches0').value = 0;
  

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
  document.getElementById("SetWeightButton20").dispatchEvent(click);

  var inputElementNumberofalex = document.getElementById('PageContentPlaceHolder1_NumOfAxles');
  inputElementNumberofalex.value = dotvalue.order.axle_weight.length;
  inputElementNumberofalex.dispatchEvent(onchange);

  dotvalue.order.axle_weight.forEach(function (data, index) {

    var axleWeightId = 'PageContentPlaceHolder1_AxleWeight' + (index + 1);

    document.getElementById(axleWeightId).value = data.value;
    document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
    document.getElementById(axleWeightId).dispatchEvent(onchange);

    
    if(index == 0)
    {
    
    var axleTireId = 'PageContentPlaceHolder1_AxleGroup' + (index + 1);
    document.getElementById(axleTireId).value = 1;
    document.getElementById(axleTireId).dispatchEvent(onchange);
   
    }
    if(index >= 1 && index< (parseInt(dotvalue.order.axle_weight.length) - parseInt(dotvalue.order.Trailer_Info.axle)))
    {
        var axleTireId = 'PageContentPlaceHolder1_AxleGroup' + (index + 1);
        document.getElementById(axleTireId).value = 2;
        document.getElementById(axleTireId).dispatchEvent(onchange);
           
      
    }
    if(index >= (parseInt(dotvalue.order.axle_weight.length) - parseInt(dotvalue.order.Trailer_Info.axle))  && index< parseInt(dotvalue.order.axle_weight.length))
    {
      
      var axleTireId = 'PageContentPlaceHolder1_AxleGroup' + (index + 1);
      document.getElementById(axleTireId).value = 3;
      document.getElementById(axleTireId).dispatchEvent(onchange);
           

    }
  

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

function kansasStep3(dotvalue) {



}



