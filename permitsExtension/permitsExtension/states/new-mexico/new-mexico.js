function newMaxicoStep1(dotvalue) 
{
    var onchange =  new Event('change', { bubbles: true }); 
    var input = new Event('input', { bubbles: true });  
    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '', // You can specify the key if needed
        char: '', // You can specify the character if needed
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    });


    var selectElement0 =  document.getElementById('SearchType');
    var selectElementValue0 = "NUMBER";
     for(let i = 0; i<selectElement0.options.length; i++)
     {
        if(selectElement0.options[i].value === selectElementValue0)
        {
          selectElement0.options[i].selected = true;
          break;

        }
     }
     selectElement0.dispatchEvent(onchange);


    document.getElementById('SearchTerm').value = dotvalue.order.Company_Info.dot;
    document.getElementById('SearchTerm').dispatchEvent(keyup);

   // document.getElementById('PageContentPlaceHolder1_ContactName').value = "Nash Turcan";//dotvalue.order.clientData.name;
   var contactNameInput = document.getElementById('PageContentPlaceHolder1_ContactName');

   if (contactNameInput) {

     if (contactNameInput.hasAttribute('readonly')) {
       contactNameInput.removeAttribute('readonly');
     }

     contactNameInput.value = "Nash Turcan";//dotvalue.order.clientData.name;

     contactNameInput.dispatchEvent(input);
     contactNameInput.dispatchEvent(onchange);
   }


    // var phoneNumber = dotvalue.order.clientData.phone;
    // var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
    // document.getElementById('PageContentPlaceHolder1_ContactPhone').value = formattedPhoneNumber;
    var phoneNumber = "9842938503";
    var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');

    var phoneInput = document.getElementById('PageContentPlaceHolder1_ContactPhone');

    if (phoneInput) {

      if (phoneInput.hasAttribute('readonly')) {
        phoneInput.removeAttribute('readonly');
      }

      phoneInput.value = formattedPhoneNumber;

      phoneInput.dispatchEvent(input);
      phoneInput.dispatchEvent(onchange);
    }

    //document.getElementById('PageContentPlaceHolder1_ContactEmail').value = dotvalue.order.clientData.email;
    var contactEmailValue = "synchronpermits@gmail.com";
    var contactEmailInput = document.getElementById('PageContentPlaceHolder1_ContactEmail');
 
    if (contactEmailInput) {
 
      if (contactEmailInput.hasAttribute('readonly')) {
        contactEmailInput.removeAttribute('readonly');
      }
 
      contactEmailInput.value = contactEmailValue;
 
      contactEmailInput.dispatchEvent(input);
      contactEmailInput.dispatchEvent(onchange);
    }


    var deliveryType = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2');
    var industryTypevalue = "1";
    for (var i = 0; i < deliveryType.options.length; i++) {
        if (deliveryType.options[i].value === industryTypevalue) {
            deliveryType.options[i].selected = true;
            break;
        }
    }
    deliveryType.dispatchEvent(onchange);

    var deliveryEmail = "synchronpermits@gmail.com";
    var deliveryAddress1 = document.getElementById('PageContentPlaceHolder1_tbDeliveryText1');

    if (deliveryAddress1) {

      if (deliveryAddress1.hasAttribute('readonly')) {
        deliveryAddress1.removeAttribute('readonly');
      }

      deliveryAddress1.value = deliveryEmail;

      deliveryAddress1.dispatchEvent(input);
      deliveryAddress1.dispatchEvent(onchange);
    }

    var permitType = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
    var industryTypevalue = "1";
    for (var i = 0; i < permitType.options.length; i++) {
        if (permitType.options[i].value === industryTypevalue) {
            permitType.options[i].selected = true;
            permitType.dispatchEvent(onchange);
            break;
        }
    }
    

    var deliveryEmail5 = "TRC Logistics LLC";
    var deliveryAddress5 = document.getElementById('PageContentPlaceHolder1_txtUserText');

    if (deliveryAddress5) {

      if (deliveryAddress5.hasAttribute('readonly')) {
        deliveryAddress5.removeAttribute('readonly');
      }

      deliveryAddress5.value = deliveryEmail5;

      deliveryAddress5.dispatchEvent(input);
      deliveryAddress5.dispatchEvent(onchange);
    }

    //document.getElementById('PageContentPlaceHolder1_tbLoadDescription').value = dotvalue.order.commodityDataValue.description; 
}

function newMaxicoStep2(dotvalue) 
{


    var onchange = new Event('change', { bubbles: true });

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

    var click = new Event('click');


    document.getElementById('TruckSelect0_0').value = dotvalue.order.truck_detail.unit_id;
    var selectElement1 = document.getElementById("TruckSelect0_0");
    var selectedValue1 = dotvalue.order.truck_detail.unit_id;

    for (var i = 0; i < selectElement1.options.length; i++) {
      if (selectElement1.options[i].text === selectedValue1) {
          selectElement1.options[i].selected = true;
          selectElement1.dispatchEvent(onchange);
          break;
      }
  }

    

    document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;


    var yearElement2 = document.getElementById("PageContentPlaceHolder1_TruckYear0_0");
    var yearValue2 = dotvalue.order.truck_detail.year;
    for (var i = 0; i < yearElement2.options.length; i++) {
        if (yearElement2.options[i].value === yearValue2) {
            yearElement2.options[i].selected = true;
            yearElement2.dispatchEvent(onchange);
            break;
        }
    }
    

    document.getElementById('TruckMake0_0').value = dotvalue.order.truck_detail.make;
    document.getElementById('TruckMake0_0').dispatchEvent(onchange);
    document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
    document.getElementById('TruckVIN0_0').dispatchEvent(onchange);
    document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;
    document.getElementById('TruckLicense0_0').dispatchEvent(onchange);

    var stateElement3 = document.getElementById("PageContentPlaceHolder1_TruckState0_0");
    var stateValue3 = dotvalue.order.truck_detail.license_state;
    for (var i = 0; i < stateElement3.options.length; i++) {
        if (stateElement3.options[i].value === stateValue3) {
            stateElement3.options[i].selected = true;
            stateElement3.dispatchEvent(onchange);
            break;
        }
    }
    

    var truckElement4 = document.getElementById("TruckTypeSlct0_0");
    var truckValue4 = "TT";
    for (let i = 0; i < truckElement4.options.length; i++) {
        if (truckElement4.options[i].value === truckValue4) {
            truckElement4.options[i].selected = true;
            truckElement4.dispatchEvent(onchange);
            break;
        }
    }
    


    var industryType5 = document.getElementById('IndustryDD_0');
    var industryTypevalue5 = "18";
    for (var i = 0; i < industryType5.options.length; i++) {
        if (industryType5.options[i].value === industryTypevalue5) {
            industryType5.options[i].selected = true;
            break;
        }
    }
    industryType5.dispatchEvent(onchange);

    if(document.getElementById('LoadDescription0'))
    {
    document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;
    }
    // document.getElementById('SerialNumber0').value = dotvalue.order.commodityDataValue.serial;
    if(document.getElementById('txtIndustryOtherDesc0'))
    {
    document.getElementById('txtIndustryOtherDesc0').value = dotvalue.order.commodityDataValue.description;
    }

    if(document.getElementById('chkLoadIndivisible0'))
    {
    document.getElementById('chkLoadIndivisible0').checked = true;   
    document.getElementById('chkLoadIndivisible0').dispatchEvent(click);
    }


    if(document.getElementById('LoadedWidthFeet0'))
    {
    document.getElementById('LoadedWidthFeet0').value = dotvalue.order.OverallOrderData.overallwidth.feet;
    }

    if(document.getElementById('LoadedWidthInches0'))
    {
    document.getElementById('LoadedWidthInches0').value = dotvalue.order.OverallOrderData.overallwidth.inch;
    }

    if(document.getElementById('LoadedHeightFeet0'))
    {
    document.getElementById('LoadedHeightFeet0').value = dotvalue.order.OverallOrderData.overallheight.feet
    }

    if(document.getElementById('LoadedHeightInches0'))
    {
    document.getElementById('LoadedHeightInches0').value = dotvalue.order.OverallOrderData.overallheight.inch
    }

    if(document.getElementById('LoadedLengthFeet0'))
    {
    document.getElementById('LoadedLengthFeet0').value = dotvalue.order.OverallOrderData.overalllength.feet;
    }

    if(document.getElementById('LoadedLengthInches0'))
    {
    document.getElementById('LoadedLengthInches0').value = dotvalue.order.OverallOrderData.overalllength.inch;
    }

    if(document.getElementById('LoadedTrailerFeet0'))
    {
    document.getElementById('LoadedTrailerFeet0').value = dotvalue.order.Trailer_Info.lenght;
    document.getElementById('LoadedTrailerFeet0').dispatchEvent(keypressEvent);
    }

    if(document.getElementById('LoadedTrailerInches0'))
    {
    document.getElementById('LoadedTrailerInches0').value = 0;
    document.getElementById('LoadedTrailerInches0').dispatchEvent(onchange);
    document.getElementById('LoadedTrailerInches0').dispatchEvent(keypressEvent);
    }

    if(document.getElementById('LoadedFrontOHangFeet0'))
    {
    document.getElementById('LoadedFrontOHangFeet0').value = dotvalue.order.OverallOrderData.front_overhang.feet;
    document.getElementById('LoadedFrontOHangFeet0').dispatchEvent(keypressEvent);
    }

    if(document.getElementById('LoadedFrontOHangInches0'))
    {
    document.getElementById('LoadedFrontOHangInches0').value = dotvalue.order.OverallOrderData.front_overhang.inch;
    document.getElementById('LoadedFrontOHangInches0').dispatchEvent(onchange);
    document.getElementById('LoadedFrontOHangInches0').dispatchEvent(keypressEvent);
    }

    if(document.getElementById('LoadedRearOHangFeet0'))
    {
    document.getElementById('LoadedRearOHangFeet0').value = dotvalue.order.OverallOrderData.rear_overhang.feet;
    document.getElementById('LoadedRearOHangFeet0').dispatchEvent(keypressEvent);
    }

    if(document.getElementById('LoadedRearOHangInches0'))
    {
    document.getElementById('LoadedRearOHangInches0').value = dotvalue.order.OverallOrderData.rear_overhang.inch;
    document.getElementById('LoadedRearOHangInches0').dispatchEvent(onchange);
    document.getElementById('LoadedRearOHangInches0').dispatchEvent(keypressEvent);
    }



    var button = document.getElementById('SetWeightButton0');
    button.click();

    var inputElementNumberofalex = document.getElementById('PageContentPlaceHolder1_NumOfAxles');
    if(inputElementNumberofalex)
    {
    inputElementNumberofalex.value = dotvalue.order.axle_weight.length;
    document.getElementById('PageContentPlaceHolder1_NumOfAxles').dispatchEvent(onchange);
    document.getElementById('PageContentPlaceHolder1_NumOfAxles').dispatchEvent(keypressEvent);
    }

    //click
    // if(document.getElementById('cbGauge'))
    // {
    // document.getElementById('cbGauge').checked = true; 
    // document.getElementById('cbGauge').click();
    // }
    if (document.getElementById('cbGauge')) 
    {
    const cb = document.getElementById('cbGauge');
    if (!cb.checked) cb.click(); 
    }
    if (document.getElementById('cbTireWidth')) 
    {
    const cb1 = document.getElementById('cbTireWidth');
    if (!cb1.checked) cb1.click(); 
    }
    //cbTireWidth

    dotvalue.order.axle_spacing.forEach(function (data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);
        var axleWeightFeetId = 'PageContentPlaceHolder1_AxleSpaceFt' + (index + 2);
        var axleWeightInchId = 'PageContentPlaceHolder1_AxleSpaceIn' + (index + 2);


        document.getElementById(axleWeightFeetId).value = feet;
        document.getElementById('LoadedRearOHangInches0').dispatchEvent(onchange);
        document.getElementById('LoadedRearOHangInches0').dispatchEvent(keypressEvent);


        document.getElementById(axleWeightInchId).value = inches;
        document.getElementById(axleWeightInchId).dispatchEvent(onchange);
        document.getElementById(axleWeightInchId).dispatchEvent(keypressEvent);


    });

    dotvalue.order.axle_weight.forEach(function (data, index) {

        var axleWeightId = 'PageContentPlaceHolder1_AxleWeight' + (index + 1);

        document.getElementById(axleWeightId).value = data.value;
        document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
        document.getElementById(axleWeightId).dispatchEvent(onchange);
    });

    // dotvalue.order.axle_weight.forEach(function (data, index) {

    //     var axleWeightId = 'AxleMfgMaxWt' + (index + 1);

    //     document.getElementById(axleWeightId).value = data.value;
    //     document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
    // });


    if (document.getElementById('GVW_0') && !document.getElementById('GVW_0').value) 
    {
    const input = document.getElementById('GVW_0');

    input.removeAttribute('readonly');

    input.value = dotvalue.order.totalWeight;

    const changeEvent = new Event('change', { bubbles: true });
    input.dispatchEvent(changeEvent);

    
    input.setAttribute('readonly', 'readonly');
    }


}

