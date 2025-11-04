function maineState1(dotvalue)
{
    document.getElementById('SearchTerm').value = dotvalue.order.Company_Info.dot;
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
      var input = new Event('input', { bubbles: true });
      var onchange = new Event('change', { bubbles: true });

      document.getElementById('SearchTerm').dispatchEvent(keyup);
     
        
//document.getElementById('PageContentPlaceHolder1_ContactName').value = "Nash Turcan";
var contactNameInput = document.getElementById('PageContentPlaceHolder1_ContactName');

    if (contactNameInput) {

      if (contactNameInput.hasAttribute('readonly')) {
        contactNameInput.removeAttribute('readonly');
      }

      contactNameInput.value = dotvalue.order.clientData.name;

      contactNameInput.dispatchEvent(input);
      contactNameInput.dispatchEvent(onchange);
    }


  // var originalPhone = "9842938503";
  // var numberFormate = originalPhone.replace('+1', '').replace(/\s/g, '');
  // document.getElementById('PageContentPlaceHolder1_ContactPhone').value = numberFormate;

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

   //document.getElementById('PageContentPlaceHolder1_ContactEmail').value = "synchronpermits@gmail.com";

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

    // var field = document.getElementById('PageContentPlaceHolder1_tbDeliveryText1');
    // if (field) {
    //     field.value = "synchronpermits@gmail.com";
    // }

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

     //PageContentPlaceHolder1_tbDeliveryText1

      var selectElement1 = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2');
      var selectElementValue1 = "1";
      for(let i = 0; i<selectElement1.options.length; i++)
      {
        if(selectElement1.options[i].value === selectElementValue1)
        {
          selectElement1.options[i].selected = true;
          break;
        }
      }
      selectElement1.dispatchEvent(event);

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


    var selectElement2 = document.getElementById('selTripTypes');
    var selectElementValue2 = "4";
    for(let i = 0; i<selectElement2.options.length; i++)
    {
      if(selectElement2.options[i].value === selectElementValue2)
      {
        selectElement2.options[i].selected = true;
        break;
      }
    }
    selectElement2.dispatchEvent(event);
}

function maineState2(dotvalue)
{
    var event = new Event('change', {
        bubbles: true,
        cancelable: true
      });
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
     
    var selectElement1 = document.getElementById('TruckYear0_0');
    var selectElementValue1 = dotvalue.order.truck_detail.year;
    for(let i = 0; i<selectElement1.options.length; i++)
    {
     if(selectElement1.options[i].text === selectElementValue1)
     {
      selectElement1.selectedIndex = i;
      selectElement1.dispatchEvent(onchange);
      break;

     }
    }
    

    document.getElementById('TruckMake0_0').value=dotvalue.order.truck_detail.make;
    document.getElementById('TruckMake0_0').dispatchEvent(onchange);

    document.getElementById('TruckVIN0_0').value=dotvalue.order.truck_detail.vin;
    document.getElementById('TruckVIN0_0').dispatchEvent(onchange);

    document.getElementById('TruckLicense0_0').value=dotvalue.order.truck_detail.license_plate;
    document.getElementById('TruckLicense0_0').dispatchEvent(onchange);

    var selectElement2 = document.getElementById('TruckState0_0');
    var selectElementValue2 = dotvalue.order.truck_detail.license_state;
    for(let i = 0; i<selectElement2.options.length; i++)
    {
      if(selectElement2.options[i].text === selectElementValue2)
      {
        selectElement2.selectedIndex = i;
        selectElement2.dispatchEvent(onchange);
        break;
      }
    }

    document.getElementById('TruckRegGVW0_0').value=80000;
    document.getElementById('TruckRegGVW0_0').dispatchEvent(keyup);

    var selectElement3 = document.getElementById('TruckTypeSlct0_0');
    var  selectElementValue3 = "TS";
    for(let i = 0; i<selectElement3.options.length; i++)
    {
      if(selectElement3.options[i].value === selectElementValue3)
      {
        selectElement3.options[i].selected = true;
        break;
      }
    }
    selectElement3.dispatchEvent(onchange);

    var selectElement4 = document.getElementById('TrlrSelect0_0_0'); 
    var selectElementValue4 = dotvalue.order.Trailer_Info.trailer_id; 

    for (let i = 0; i < selectElement4.options.length; i++) {
        if (selectElement4.options[i].text === selectElementValue4) {
            selectElement4.selectedIndex = i;
            selectElement4.dispatchEvent(onchange);
            break;
        }
    }

    
    document.getElementById('TrlrNumber0_0_0').value=dotvalue.order.Trailer_Info.trailer_id;
    document.getElementById('TrlrNumber0_0_0').dispatchEvent(onchange);
     
    var selectElement5 = document.getElementById('TrlrYear0_0_0');
    var selectElementValue5 = dotvalue.order.Trailer_Info.year;
    for(let i = 0; i<selectElement5.options.length; i++)
    {
      if(selectElement5.options[i].text === selectElementValue5)
      {
        selectElement5.selectedIndex = i;
        selectElement5.dispatchEvent(onchange);
        break;
      }
    }
    

    document.getElementById('TrlrMake0_0_0').value=dotvalue.order.Trailer_Info.make;
    document.getElementById('TrlrMake0_0_0').dispatchEvent(onchange);

    document.getElementById('TrlrVIN0_0_0').value=dotvalue.order.Trailer_Info.vin;
    document.getElementById('TrlrVIN0_0_0').dispatchEvent(onchange);

    document.getElementById('TrlrLicense0_0_0').value=dotvalue.order.Trailer_Info.license_plate;
    document.getElementById('TrlrLicense0_0_0').dispatchEvent(onchange);

    var selectElement6 = document.getElementById('TrlrState0_0_0');
    var selectElementValue6 = dotvalue.order.Trailer_Info.state;
    for(let i=0; i<selectElement6.options.length; i++)
    {
      if(selectElement6.options[i].text === selectElementValue6)
      {
        selectElement6.selectedIndex = i;
        selectElement6.dispatchEvent(onchange);
        break;
      }
    }
    

    document.getElementById('LoadDescDD_0').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('LoadDescDD_0').dispatchEvent(onchange);


    setTimeout(function () {
    var selectElement7 = document.getElementById('IndustryDD_0');
    var selectElementValue7 = "18";
    for(let i = 0; i<selectElement7.options.length; i++)
    {
      if(selectElement7.options[i].value === selectElementValue7)
      {
        selectElement7.options[i].selected = true;
        break;
      }
    }
    selectElement7.dispatchEvent(onchange); 

    var selectElement8 = document.getElementById('LoadDescDD_0');
    if(selectElement8)
    {
    var selectElementValue8 = "57";
    for(let i = 0; i<selectElement8.options.length; i++)
    {
      if(selectElement8.options[i].value === selectElementValue8)
      {
        selectElement8.options[i].selected = true;
        selectElement8.dispatchEvent(onchange);
        break;
      }
    }
  }

     if(document.getElementById('LoadDescription0'))
     {
    document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('LoadDescription0').dispatchEvent(onchange);
     }
  }, 500); 


    document.getElementById('chkLoadIndivisible0').checked =true;
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

   document.getElementById('axleCountNpt0').value = dotvalue.order.axle_weight.length;
   document.getElementById('axleCountNpt0').dispatchEvent(keypressEvent);
   document.getElementById('axleCountNpt0').dispatchEvent(onchange);
  
   document.getElementById('GVW_0').value= dotvalue.order.totalWeight;
   document.getElementById('GVW_0').dispatchEvent(keypressEvent);
   document.getElementById('GVW_0').dispatchEvent(onchange);

   var selectElement8 = document.getElementById('ddlTrailerLengthRange0');
   var selectElementValue8 = "2";
   for(let i = 0; i<selectElement8.options.length; i++)
   {
    if(selectElement8.options[i].value === selectElementValue8)
    {
      selectElement8.options[i].selected = true;
      break;
    }
   }
   selectElement8.dispatchEvent(onchange);

    document.getElementById('cbAttestRegistered').checked =true;
    document.getElementById('cbAttestRegistered').dispatchEvent(onchange);



}