function newYORKState1(dotvalue) {

    var event = new Event('keyup');
    var onchange = new Event('change');

    document.getElementById('SearchTerm').value = dotvalue.order.Company_Info.dot;
    document.getElementById('SearchTerm').dispatchEvent(event);


    document.getElementById('ContactName').value = dotvalue.order.clientData.name;  
 
  var phoneNumber = dotvalue.order.clientData.phone;


  var staticPhoneNumber = "9842938503";

var phoneNumber =staticPhoneNumber; 

var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');

var phoneInput = document.getElementById('ContactPhone');

if (phoneInput) {
  if (phoneInput.hasAttribute('readonly')) {
    phoneInput.removeAttribute('readonly');
  }

  phoneInput.value = formattedPhoneNumber;

  phoneInput.dispatchEvent(new Event('input'));
  phoneInput.dispatchEvent(new Event('change'));
}

  document.getElementById('ContactEmail').value = "synchronpermits@gmail.com"; 

    var selectElement = document.getElementById("DeliveryDropDown2");
    var selectedValue = "1";
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectedValue) {
            selectElement.options[i].selected = true;
            break;
        }
    }

    selectElement.dispatchEvent(onchange);


    var inputElementg = document.getElementById('PermitTypeDD');
    var inputElementgvalue = "1";
    for (var i = 0; i < inputElementg.options.length; i++) {
        if (inputElementg.options[i].value === inputElementgvalue) {
            inputElementg.options[i].selected = true;
            break;
        }
    }
    inputElementg.dispatchEvent(onchange);  //"txtUserText"

    var companyEmail5 = "TRC Logistics LLC";
    var companyEmailInput = document.getElementById('txtUserText');

    if (companyEmailInput) {

      if (companyEmailInput.hasAttribute('readonly')) {
        companyEmailInput.removeAttribute('readonly');
      }

      companyEmailInput.value = companyEmail5;

      companyEmailInput.dispatchEvent(input);
      companyEmailInput.dispatchEvent(onchange);
    }








    var inputElementdate = document.getElementById('FromDatePicker');
    var currentDate = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
    inputElementdate.value = currentDate;
    // inputElementdate.dispatchEvent(onchange);





}

function newYORKState2(dotvalue) {


    var click = new Event('click');
    var onchange = new Event('change');

    var keypressEvent = new KeyboardEvent('keypress', {
        key: 'a', 
        code: 'KeyA', 
        charCode: 97,
        keyCode: 97, 
        bubbles: true, 
        cancelable: true 
    });

    document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;
    var selectElement = document.getElementById("TruckSelect0_0");
    var selectedValue = "11";
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectedValue) {
            selectElement.options[i].selected = true;
            break;
        }
    }
    selectElement.dispatchEvent(onchange);




    var yearElement = document.getElementById("TruckYear0_0");
    var yearValue = dotvalue.order.truck_detail.year;
    for (var i = 0; i < yearElement.options.length; i++) {
        if (yearElement.options[i].value === yearValue) {
            yearElement.options[i].selected = true;
            break;
        }
    }


    document.getElementById('TruckMake0_0').value = dotvalue.order.truck_detail.make;
    document.getElementById('TruckMake0_0').dispatchEvent(onchange);
    document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
    document.getElementById('TruckVIN0_0').dispatchEvent(onchange);
    document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;
    document.getElementById('TruckLicense0_0').dispatchEvent(onchange);

    var stateElement = document.getElementById("TruckState0_0");
    var stateValue = dotvalue.order.truck_detail.license_state;
    for (var i = 0; i < stateElement.options.length; i++) {
        if (stateElement.options[i].value === stateValue) {
            stateElement.options[i].selected = true;
            break;
        }
    }


    var truckElement = document.getElementById("TruckTypeSlct0_0");
    var truckValue = "KR";
    for (var i = 0; i < truckElement.options.length; i++) {
        if (truckElement.options[i].value === truckValue) {
            truckElement.options[i].selected = true;
            break;
        }
    }
    truckElement.dispatchEvent(onchange);


    //Trailer Information


    document.getElementById('TrlrNumber0_0_0').value = dotvalue.order.Trailer_Info.trailer_id;
    document.getElementById('TrlrNumber0_0_0').dispatchEvent(onchange);
    var trailerElement = document.getElementById("TrlrSelect0_0_0");
    var trailerValue = "4";
    for (var i = 0; i < trailerElement.options.length; i++) {
        if (trailerElement.options[i].value === trailerValue) {
            trailerElement.options[i].selected = true;
            break;
        }
    }
    trailerElement.dispatchEvent(onchange);


    var trlyearElement = document.getElementById("TrlrYear0_0_0");
    var trlyearValue = dotvalue.order.Trailer_Info.year;
    for (var i = 0; i < trlyearElement.options.length; i++) {
        if (trlyearElement.options[i].value === trlyearValue) {
            trlyearElement.options[i].selected = true;
            break;
        }
    }


    document.getElementById('TrlrMake0_0_0').value = dotvalue.order.Trailer_Info.make;
    document.getElementById('TrlrMake0_0_0').dispatchEvent(onchange);
    document.getElementById('TrlrLicense0_0_0').value = dotvalue.order.Trailer_Info.license_plate;
    document.getElementById('TrlrLicense0_0_0').dispatchEvent(onchange);

    var trlstateElement = document.getElementById("TrlrState0_0_0");
    var trlstateValue = dotvalue.order.Trailer_Info.state;
    for (var i = 0; i < trlstateElement.options.length; i++) {
        if (trlstateElement.options[i].value === trlstateValue) {
            trlstateElement.options[i].selected = true;
            break;
        }
    }


    var trlElement = document.getElementById("TrlrTypeSlct0_0_0");
    var trlValue = "TR";
    for (var i = 0; i < trlElement.options.length; i++) {
        if (trlElement.options[i].value === trlValue) {
            trlElement.options[i].selected = true;
            break;
        }
    }




    var industryType = document.getElementById('IndustryDD_0');
    var industryTypevalue = "18";
    for (var i = 0; i < industryType.options.length; i++) {
        if (industryType.options[i].value === industryTypevalue) {
            industryType.options[i].selected = true;
            break;
        }
    }
    industryType.dispatchEvent(onchange);
    document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('SerialNumber0').value = dotvalue.order.commodityDataValue.serial;



    document.getElementById('chkLoadIndivisible0').checked = true;   //
    document.getElementById('chkLoadIndivisible0').dispatchEvent(click);



    document.getElementById('LoadedWidthFeet0').value = dotvalue.order.OverallOrderData.overallwidth.feet;
    document.getElementById('LoadedWidthInches0').value = dotvalue.order.OverallOrderData.overallwidth.inch;

    document.getElementById('LoadedHeightFeet0').value = dotvalue.order.OverallOrderData.overallheight.feet
    document.getElementById('LoadedHeightInches0').value = dotvalue.order.OverallOrderData.overallheight.inch

    document.getElementById('LoadedLengthFeet0').value = dotvalue.order.OverallOrderData.overalllength.feet;
    document.getElementById('LoadedLengthInches0').value = dotvalue.order.OverallOrderData.overalllength.inch;

    document.getElementById('LoadedTrailerFeet0').value = dotvalue.order.Trailer_Info.lenght;
    document.getElementById('LoadedTrailerFeet0').dispatchEvent(keypressEvent);

    document.getElementById('LoadedTrailerInches0').value = 0;
    document.getElementById('LoadedTrailerInches0').dispatchEvent(onchange);
    document.getElementById('LoadedTrailerInches0').dispatchEvent(keypressEvent);

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



    var button = document.getElementById('SetWeightButton0');
    button.click();

    var inputElementNumberofalex = document.getElementById('NumOfAxles');
    inputElementNumberofalex.value = dotvalue.order.axle_weight.length;
    document.getElementById('NumOfAxles').dispatchEvent(onchange);
    document.getElementById('NumOfAxles').dispatchEvent(keypressEvent);

    dotvalue.order.axle_spacing.forEach(function (data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);
        var axleWeightFeetId = 'AxleSpaceFt' + (index + 2);
        var axleWeightInchId = 'AxleSpaceIn' + (index + 2);


        document.getElementById(axleWeightFeetId).value = feet;
        document.getElementById('LoadedRearOHangInches0').dispatchEvent(onchange);
        document.getElementById('LoadedRearOHangInches0').dispatchEvent(keypressEvent);


        document.getElementById(axleWeightInchId).value = inches;
        document.getElementById(axleWeightInchId).dispatchEvent(onchange);
        document.getElementById(axleWeightInchId).dispatchEvent(keypressEvent);


    });

    dotvalue.order.axle_weight.forEach(function (data, index) {

        var axleWeightId = 'AxleWeight' + (index + 1);

        document.getElementById(axleWeightId).value = data.value;
        document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
        document.getElementById(axleWeightId).dispatchEvent(onchange);
    });

    dotvalue.order.axle_weight.forEach(function (data, index) {

        var axleWeightId = 'AxleMfgMaxWt' + (index + 1);

        document.getElementById(axleWeightId).value = data.value;
        document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
    });


    document.getElementById('GVW_0').value = dotvalue.order.totalWeight;
    document.getElementById('GVW_0').selectElement.dispatchEvent(keypressEvent);


}



