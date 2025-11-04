function floridaState1(dotvalue)
{

  var blurEvent = new Event('blur');
  var click = new Event('click');
  var onchange = new Event('change');

    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '', // You can specify the key if needed
        char: '', // You can specify the character if needed
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
      });
      
       var selectElement = document.getElementById('Permittee');
      var selectedValue = dotvalue.order.Company_Info.name;
       for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectedValue) {
            selectElement.options[i].selected = true;
            break;
        }
     }

    selectElement.dispatchEvent(onchange);

     document.getElementById('BusinessName').value = dotvalue.order.Company_Info.name;
     document.getElementById('BusinessName').dispatchEvent(blurEvent);
     document.getElementById('BusinessName').dispatchEvent(onchange);
     //blurEvent
  

     document.getElementById('AddressLine1').value = dotvalue.order.Company_physical_address;
     document.getElementById('AddressLine1').dispatchEvent(onchange);
     
    var countrySelect = document.getElementById('Country');
    var countrySelectValue = "US"; 
    for (var i = 0; i < countrySelect.options.length; i++) {
      if (countrySelect.options[i].value === countrySelectValue) 
        {
        countrySelect.options[i].selected = true;
          break;
      }
    } 
    countrySelect.dispatchEvent(onchange);

     document.getElementById('City').value = dotvalue.order.Company_city;
     document.getElementById('City').dispatchEvent(onchange);

     var stateSelect = document.getElementById('State');
     var stateValue =   "NV";     //dotvalue.order.Company_state; //State
     for (var i = 0; i < stateSelect.options.length; i++) {
       if (stateSelect.options[i].value === stateValue) 
         {
          stateSelect.options[i].selected = true;
           break;
       }
     } 
     stateSelect.dispatchEvent(blurEvent);
     stateSelect.dispatchEvent(onchange);

     document.getElementById('ZipCode').value =  dotvalue.order.Company_zip_code; //dotvalue.order.Company_Info.name;
     document.getElementById('ZipCode').dispatchEvent(onchange);
     document.getElementById('PhoneNumber').value = dotvalue.order.Company_phone_number;
     document.getElementById('PhoneNumber').dispatchEvent(blurEvent);
     document.getElementById('PhoneNumber').dispatchEvent(onchange);

     var button =  document.querySelector('.ClientActionButton');  //.click();
     button.dispatchEvent(click);


     document.getElementById('SkipAddressVerification').checked = true;  //SkipAddressVerification_validationMessage
     document.getElementById('SkipAddressVerification').dispatchEvent(blurEvent);
     document.getElementById('SkipAddressVerification').dispatchEvent(click);
     document.getElementById('SkipAddressVerification').dispatchEvent(onchange);//

     document.getElementById('Email').checked = "synchronpermits@gmail.com"; 

     document.getElementById('InvoiceeFirstName').value =  "NASH";
     document.getElementById('InvoiceeLastName').value =  "kapoor";
     document.getElementById('InvoiceeBusinessName').value =  "TRS LOGISTICS LLC";
     document.getElementById('InvoiceeBusinessName').dispatchEvent(blurEvent);
     document.getElementById('InvoiceeBusinessName').dispatchEvent(onchange);

}

function floridaState2(dotvalue)
{   
  var click = new Event('click');
  var onchange = new Event('change', { bubbles: true });
  var blurEvent = new Event('blur');

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

    var keyupEvent = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      key: 'Enter', // Simulate the Enter key press
      keyCode: 13, // Simulate the Enter key code
      which: 13 // Simulate the Enter key
  });

   var event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
      
  //  var inputElementdate = document.getElementById('TravelBeginDate');
  //   var currentDate = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
  //   inputElementdate.value = currentDate;
  //   inputElementdate.dispatchEvent(onchange);

 
  // var countrySelectVehicle = document.getElementById('SavedVehicle');
  // var countrySelectValueVehicle = "NEW"; 
  // for (var i = 0; i < countrySelectVehicle.options.length; i++) {
  //   if (countrySelectVehicle.options[i].value === countrySelectValueVehicle) {
  //     countrySelectVehicle.options[i].selected = true;
  //     countrySelectVehicle.dispatchEvent(onchange);
  //     countrySelectVehicle.dispatchEvent(event);
  //     countrySelectVehicle.dispatchEvent(blurEvent);
  //     break;
  //   }
  // }

  var savedVehicleEl = document.getElementById('SavedVehicle');
  if (savedVehicleEl && savedVehicleEl.value !== "NEW") {
      savedVehicleEl.value = "NEW";  
      savedVehicleEl.dispatchEvent(onchange);
      savedVehicleEl.dispatchEvent(blurEvent);
      savedVehicleEl.dispatchEvent(click);
  }
 
 

  
   var stateSelect11 = document.getElementById('VehicleConfigurationCode');
   var stateValue11 = "900"; 
   for (var i = 0; i < stateSelect11.options.length; i++) {
     if (stateSelect11.options[i].value === stateValue11) 
       {
        stateSelect11.options[i].selected = true;
         break;
     }
   } 
   
   stateSelect11.dispatchEvent(onchange);

   
  

    document.getElementById('TotalHeightFeet').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
    document.getElementById('TotalHeightFeet').dispatchEvent(onchange);
    document.getElementById('TotalHeightInches').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
    document.getElementById('TotalHeightInches').dispatchEvent(blurEvent);
    document.getElementById('TotalHeightInches').dispatchEvent(onchange);
    document.getElementById('TotalWidthFeet').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
    document.getElementById('TotalWidthFeet').dispatchEvent(onchange);
    document.getElementById('TotalWidthInches').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
    document.getElementById('TotalWidthInches').dispatchEvent(blurEvent);
    document.getElementById('TotalWidthInches').dispatchEvent(onchange);
    document.getElementById('TotalLengthFeet').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}`;
    document.getElementById('TotalLengthFeet').dispatchEvent(onchange);
    document.getElementById('TotalLengthInches').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}`;
    document.getElementById('TotalLengthInches').dispatchEvent(blurEvent);
    document.getElementById('TotalLengthInches').dispatchEvent(onchange);
   

    document.getElementById('801').dispatchEvent(click);
    document.getElementById('801').dispatchEvent(onchange);

    // document.getElementById('927').value = dotvalue.order.commodityDataValue.description;
    // document.getElementById('927').dispatchEvent(onchange);
  
  var stateSelect1 = document.getElementById('IdentityOfLoadType');
   var stateValue1 = "830"; 
   for (var i = 0; i < stateSelect1.options.length; i++) {
     if (stateSelect1.options[i].value === stateValue1) 
       {
        stateSelect1.options[i].selected = true;
         break;
     }
   } 
   stateSelect1.dispatchEvent(blurEvent);
   stateSelect1.dispatchEvent(onchange);

    
    document.getElementById('IdentityOfLoad').value = dotvalue.order.truck_detail.unit_id;//dotvalue.order.commodityDataValue.bol;
    document.getElementById('IdentityOfLoad').dispatchEvent(onchange);

    document.getElementById('TrailerLengthFeet').value = dotvalue.order.Trailer_Info.lenght;
    document.getElementById('TrailerLengthFeet').dispatchEvent(onchange);
    document.getElementById('KingpinDistanceFeet').value = dotvalue.order.Trailer_Info.king_pin;
    document.getElementById('KingpinDistanceFeet').dispatchEvent(onchange);

    document.getElementById('FrontOverhangFeet').value = dotvalue.order.OverallOrderData.front_overhang.feet;
    document.getElementById('FrontOverhangFeet').dispatchEvent(onchange);
    document.getElementById('FrontOverhangInches').value = dotvalue.order.OverallOrderData.front_overhang.inch;
    document.getElementById('FrontOverhangInches').dispatchEvent(blurEvent);
    document.getElementById('FrontOverhangInches').dispatchEvent(onchange);
    document.getElementById('RearOverhangFeet').value = dotvalue.order.OverallOrderData.rear_overhang.feet;
    document.getElementById('RearOverhangFeet').dispatchEvent(onchange);
    document.getElementById('RearOverhangInches').value = dotvalue.order.OverallOrderData.rear_overhang.inch;
     document.getElementById('RearOverhangInches').dispatchEvent(blurEvent);
    document.getElementById('RearOverhangInches').dispatchEvent(onchange);
    
    document.querySelector('input[title="Number of Axles"]').value = dotvalue.order.axle_weight.length;
    document.querySelector('input[title="Number of Axles"]').dispatchEvent(keyupEvent);
    document.querySelector('input[title="Number of Axles"]').dispatchEvent(onchange);
    
   
   
    dotvalue.order.axle_weight.forEach(function(data,index) {
 
      document.querySelectorAll('#AxleWeight').forEach((element, idx) => {
        if (idx === index) {
            element.value = data.value;
            element.dispatchEvent(keyupEvent);
            element.dispatchEvent(onchange);
            
        }
    });
  }); 

      
     dotvalue.order.axle_spacing.forEach(function(data, index) {
      
      var { feet, inches } = convertValueSpacingftinch(data.value);
                var feetval = feet;
                var inchesval = inches;

                document.querySelectorAll('#FeetFromPreviousAxle').forEach((element, idx) =>
                {
                  if(index === idx){
                  element.value = feetval;
                  element.dispatchEvent(onchange);
                  element.dispatchEvent(keyupEvent);
                }
              });
                document.querySelectorAll('#InchesFromPreviousAxle').forEach((element, idx) =>
                {
                  if(index === idx){
                  element.value = inchesval;
                  element.dispatchEvent(onchange);
                  element.dispatchEvent(keyupEvent);
                }
              });  

  });


    
}