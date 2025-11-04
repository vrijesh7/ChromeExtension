function montanaState1(dotvalue) {

  document.getElementById('UsdotNo').value = dotvalue.order.Company_Info.dot;


}

function montanaState2(dotvalue) {
  
  document.getElementById('ContactNameOther').value = dotvalue.order.clientData.name;
  var phoneNumber = dotvalue.order.clientData.phone;
  var formattedPhoneNumber = phoneNumber.replace("+1 ", "");
  formattedPhoneNumber = formattedPhoneNumber.replace(/(\d{3}) (\d{3}) (\d{4})/, "$1-$2-$3");
  document.getElementById('BusinessPhoneNo').value = formattedPhoneNumber;
  document.getElementById('PermitHolderEmail').value = dotvalue.order.clientData.email;
  document.getElementById('Email').value = dotvalue.order.clientData.email;

  document.querySelector('input[id="TempFuelF"][value="N"]').click();

}


function montanaState3(dotvalue) {

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

  var inputEvent = new Event('input');

  if (document.getElementById('LoadDetails_LoadDetailsGridRows_0__LoadDescription')) {
    var deliveryType = document.getElementById('LoadDetails_LoadDetailsGridRows_0__LoadCode');
    var industryTypevalue = "37";
    for (var i = 0; i < deliveryType.options.length; i++) {
      if (deliveryType.options[i].value === industryTypevalue) {
        deliveryType.options[i].selected = true;
        break;
      }
    }


    document.getElementById('LoadDetails_LoadDetailsGridRows_0__LoadDescription').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('SingleTripLoadDetails_PlateDetailRowS_0__TrailerPlateNo').value = dotvalue.order.Trailer_Info.license_plate;
    document.getElementById('SingleTripLoadDetails_PlateDetailRowS_0__State').value = dotvalue.order.Trailer_Info.state;

    var selectElement = document.getElementById('SingleTripLoadDetails_PlateDetailRowS_0__SaddleMountsPlate');
    var value = "AP";
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === value) {
        selectElement.options[i].selected = true;
        break;
      }
    }


    document.getElementById('SingleTripDimensionDetails_OverallWidthFt').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
    document.getElementById('SingleTripDimensionDetails_OverallWidthIn').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
    document.getElementById('SingleTripDimensionDetails_OverallHeightFt').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
    document.getElementById('SingleTripDimensionDetails_OverallHeightIn').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
    document.getElementById('SingleTripDimensionDetails_OverallLengthFt').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}`;
    document.getElementById('SingleTripDimensionDetails_OverallLengthIn').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}`;
    document.getElementById('SingleTripDimensionDetails_TrailerLengthFt').value = dotvalue.order.Trailer_Info.lenght;
    // document.getElementById('LoadedFrontOHangFeet0').value = `${dotvalue.order.OverallOrderData.front_overhang.feet}`;
    // document.getElementById('LoadedFrontOHangInches0').value = `${dotvalue.order.OverallOrderData.front_overhang.inch}`;
    document.getElementById('SingleTripDimensionDetails_RearOverhangFt').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}`;
    document.getElementById('SingleTripDimensionDetails_RearOverhangIn').value = `${dotvalue.order.OverallOrderData.rear_overhang.inch}`;
    document.querySelector('input[id="SingleTripDimensionDetails_GrossWeight"][value="OLW"]').click();

  }

  if (document.getElementById('ui-id-1')) {

    document.getElementById('tableSearch_3').value = dotvalue.order.truck_detail.unit_id;
    document.getElementById('tableSearch_3').dispatchEvent(inputEvent);
    //  simulateTyping('#tableSearch_3',dotvalue.order.truck_detail.unit_id,400)
    //   document.getElementById('tableSearch_3').dispatchEvent(click);
    //  document.getElementById('tableSearch_3').dispatchEvent(keypressEvent);
    //   document.getElementById('tableSearch_3').dispatchEvent(keydownEvent);
    //   document.getElementById('tableSearch_3').dispatchEvent(onchange);



  }

  if(document.getElementById('axleDetailTable0'))
  {
  var table = document.getElementById('axleDetailTable0');
  
  var oddRows = table.querySelectorAll('tr.odd');
  
  
  var oddRowsWithName = Array.from(oddRows).filter(function (row) {
    return row.hasAttribute('name');
  });
  console.log(Array.from(oddRows));
  console.log(oddRowsWithName);
  var currentIndex = oddRowsWithName.length;


  var trailerAxle = dotvalue.order.Trailer_Info.axle;

  var totalNumberOfAxle = dotvalue.order.axle_weight.length;
  var totalNumberOfAxleInTruck = totalNumberOfAxle - trailerAxle;


  function fillAxleDetails(axleData, selectElementValue, axle, tireCount) {

    let selectElement1 = document.getElementById('AxleDescriptionVM1_AxleType');
    for (let i = 0; i < selectElement1.options.length; i++) {
      if (selectElement1.options[i].value === selectElementValue) {
        selectElement1.options[i].selected = true;
        break;
      }
    }
    document.getElementById('AxleDescriptionVM1_NoOfAxle').value = axle;
    document.getElementById('AxleDescriptionVM1_Weight').value = axleData;
    document.getElementById('AxleDescriptionVM1_NoOfTiresPerAxle').value = tireCount;
  }

  function processAxle(currentIndex) {

    if (currentIndex < totalNumberOfAxle) {
      let truckValue = 0;
      let pusherValue = 0;
      let trailerValue = 0;
      let Axle = 1;

      if (currentIndex == 0) {
        currentIndex++;
        truckValue += parseInt(dotvalue.order.axle_weight[0].value);   //AxleDescriptionVM1_AxleList_1__InterAxleSpacingFt
        fillAxleDetails(truckValue, "STR", Axle, 2);      //AxleDescriptionVM1_AxleList_1__InterAxleSpacingIn

        return;
      }


      if (currentIndex == 1 && currentIndex < totalNumberOfAxleInTruck) {
        Axle = 0;
        for (let i = 1; i < totalNumberOfAxleInTruck; i++) {

          pusherValue += parseInt(dotvalue.order.axle_weight[i].value);

          currentIndex++;
          Axle++;

        }
        fillAxleDetails(pusherValue, "JEP", Axle, 4);
        return;
      }


      if (currentIndex > 1) {
        Axle = 0;
        for (let i = totalNumberOfAxleInTruck; i < totalNumberOfAxle; i++) {
          trailerValue += parseInt(dotvalue.order.axle_weight[i].value);
          currentIndex++
          Axle++
        }
        fillAxleDetails(trailerValue, "TRL", Axle, 4);
      }

    }
    else {

      dotvalue.order.axle_spacing.forEach(function (data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);

        var axlespacingFeet = 'AxleDescriptionVM1_AxleList_' + (index + 1) + '__InterAxleSpacingFt';
        var axlespacingInc = 'AxleDescriptionVM1_AxleList_' + (index + 1) + '__InterAxleSpacingIn';
        document.getElementById(axlespacingFeet).value = feet;
        document.getElementById(axlespacingInc).value = inches;

      });
    }
  }

  processAxle(currentIndex);

}
}


