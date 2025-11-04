function virginiaState1(dotvalue) 
{
  
  var blurEvent = new Event('blur');
  var onchange = new Event('change', { bubbles: true });
  var click = new Event('click');
  var input = new Event('input', { bubbles: true });
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


  if (document.querySelector('input[placeholder="Enter USDOT"]')) {
    document.querySelector('input[placeholder="Enter USDOT"]').value = '';
    simulateTyping('input[placeholder="Enter USDOT"]', dotvalue.order.Company_Info.dot, 500)

    document.querySelector('input[placeholder="Enter USDOT"]').dispatchEvent(keypressEvent);
    document.querySelector('input[placeholder="Enter USDOT"]').dispatchEvent(keydownEvent);
    document.querySelector('input[placeholder="Enter USDOT"]').dispatchEvent(onchange);
  }


    if (document.getElementById('contactName')) {
  
      var contactNameInput = document.getElementById('contactName');

      if (contactNameInput) {
  
        if (contactNameInput.hasAttribute('readonly')) {
          contactNameInput.removeAttribute('readonly');
        }
  
        contactNameInput.value = dotvalue.order.clientData.name;
  
        contactNameInput.dispatchEvent(input);
        contactNameInput.dispatchEvent(onchange);
      }

      var phoneNumber = "9842938503";
      var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
      var phoneInput = document.querySelector('input[class="form-control  valid"]');
      if (phoneInput) {

        if (phoneInput.hasAttribute('readonly')) {
          phoneInput.removeAttribute('readonly');
        }
  
        phoneInput.value = formattedPhoneNumber;
  
        phoneInput.dispatchEvent(input);
        phoneInput.dispatchEvent(onchange);
      }


      var contactEmailValue = "synchronpermits@gmail.com";
      var contactEmailInput = document.getElementById('contactEmail');
  
      if (contactEmailInput) {
  
        if (contactEmailInput.hasAttribute('readonly')) {
          contactEmailInput.removeAttribute('readonly');
        }
  
        contactEmailInput.value = contactEmailValue;
  
        contactEmailInput.dispatchEvent(input);
        contactEmailInput.dispatchEvent(onchange);
      }

  // document.getElementById('contactEmail').value = dotvalue.order.clientData.email; 
  // document.getElementById('contactEmail').dispatchEvent(keydownEvent); 


  // var selectElement = document.querySelector('select.form-control.form-select.modified.valid');

  //   var selectElementValue = "";
  //   for (var i = 0; i < selectElement.options.length; i++) {
  //     if (selectElement.options[i].value === selectElementValue) {
  //       selectElement.options[i].selected = true;
  //       selectElement.dispatchEvent(onchange);
  //       break;
  //     }
  //   }


    


    //companyReference
    var deliveryEmail = "synchronpermits@gmail.com";
    var deliveryAddress1 = document.getElementById('deliveryAddress1');

    if (deliveryAddress1) {

      if (deliveryAddress1.hasAttribute('readonly')) {
        deliveryAddress1.removeAttribute('readonly');
      }

      deliveryAddress1.value = deliveryEmail;

      deliveryAddress1.dispatchEvent(input);
      deliveryAddress1.dispatchEvent(onchange);
    }

    var deliveryEmail5 = "TRC Logistics LLC";
    var deliveryAddress5 = document.getElementById('companyReference');

    if (deliveryAddress5) {

      if (deliveryAddress5.hasAttribute('readonly')) {
        deliveryAddress5.removeAttribute('readonly');
      }

      deliveryAddress5.value = deliveryEmail5;

      deliveryAddress5.dispatchEvent(input);
      deliveryAddress5.dispatchEvent(onchange);
    }




  }

  if (document.getElementById('permitType')) {
    var selectElement = document.getElementById('permitType');
    var selectElementValue = "64";
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === selectElementValue) {
        selectElement.options[i].selected = true;
        break;
      }
    }
    selectElement.dispatchEvent(keypressEvent);
    selectElement.dispatchEvent(onchange);

    var selectElement1 = document.getElementById('permitDefinitionSelect');
    var selectElementValue1 = "2771";
    for (var i = 0; i < selectElement1.options.length; i++) {
      if (selectElement1.options[i].value === selectElementValue1) {
        selectElement1.options[i].selected = true;
        break;
      }
    }
    selectElement1.dispatchEvent(keypressEvent);
    // selectElement1.dispatchEvent(keydownEvent);
    selectElement1.dispatchEvent(onchange);

  }


  if (document.getElementById('customerVehicleSelect')) 
    {
    // var selectElement1 = document.getElementById('customerVehicleSelect');
    // var selectElementValue1 = dotvalue.order.truck_detail.unit_id;
    // for (var i = 0; i < selectElement1.options.length; i++) {
    //   if (selectElement1.options[i].value === selectElementValue1) {
    //     selectElement1.options[i].selected = true;
    //     break;
    //   }
    // }
    // selectElement1.dispatchEvent(onchange);
    // selectElement1.dispatchEvent(blurEvent);



    
    const dropdown = document.querySelector('select[id="customerVehicleSelect"]');
    if (dropdown) {
      for (let option of dropdown.options) {
        if (option.text.trim() === dotvalue.order.truck_detail.unit_id) {  
          dropdown.value = option.value;   
          dropdown.dispatchEvent(new Event('change', { bubbles: true }));
          console.log(`Dropdown updated to ${option.value} (798)`);
          break;
        }
      }
    }



    document.getElementById('vehicleUnitNumber').value = dotvalue.order.truck_detail.unit_id;
    document.getElementById('vehicleUnitNumber').dispatchEvent(onchange);
    document.getElementById('vin').value = dotvalue.order.truck_detail.vin.slice(-5);
    document.getElementById('vin').dispatchEvent(onchange);

    var selectElement = document.getElementById('year');
    var selectElementValue = "Vehicle Combination";
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === selectElementValue) {
        selectElement.options[i].selected = true;
        break;
      }
    }
    selectElement.dispatchEvent(onchange); //blurEvent
    selectElement.dispatchEvent(blurEvent);

    var selectElement = document.getElementById('year');
    var selectElementValue = "Vehicle Combination";
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === selectElementValue) {
        selectElement.options[i].selected = true;
        break;
      }
    }
    selectElement.dispatchEvent(onchange);
    selectElement.dispatchEvent(blurEvent);

   
    document.getElementById('licenseNumber').value=dotvalue.order.truck_detail.license_plate;
    document.getElementById('licenseNumber').dispatchEvent(onchange);

    document.getElementById('licenseState').value=dotvalue.order.truck_detail.license_state;
    document.getElementById('licenseState').dispatchEvent(onchange);

  }


  if (document.getElementById('industryCodeSelect')) {
    var selectElement = document.getElementById('industryCodeSelect');
    selectElement.value = "3187";
    selectElement.dispatchEvent(keypressEvent);
    selectElement.dispatchEvent(keydownEvent);
    selectElement.dispatchEvent(onchange);

    document.getElementById('industryCodeOtherDescription').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('industryCodeOtherDescription').dispatchEvent(blurEvent);
    document.getElementById('industryCodeOtherDescription').dispatchEvent(onchange);

    var selectElement1 = document.getElementById('transportMethodSelect');
    selectElement1.value = "1";
    selectElement1.dispatchEvent(onchange);

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes[0].checked = true;
    checkboxes[0].dispatchEvent(click);
    checkboxes[0].dispatchEvent(onchange);

    var heightInputs = document.querySelectorAll('#height input.form-control.valid');
    heightInputs[0].value = dotvalue.order.OverallOrderData.overallheight.feet;
    heightInputs[1].value = dotvalue.order.OverallOrderData.overallheight.inch;
    heightInputs[0].dispatchEvent(onchange);
    heightInputs[1].dispatchEvent(blurEvent);
    heightInputs[1].dispatchEvent(onchange);

    var widthInputs = document.querySelectorAll('#width input.form-control.valid');
    widthInputs[0].value = dotvalue.order.OverallOrderData.overallwidth.feet;
    widthInputs[1].value = dotvalue.order.OverallOrderData.overallwidth.inch;
    widthInputs[0].dispatchEvent(onchange);
    widthInputs[1].dispatchEvent(blurEvent);
    widthInputs[1].dispatchEvent(onchange);

    var lengthInputs = document.querySelectorAll('#length input.form-control.valid');
    lengthInputs[0].value = dotvalue.order.OverallOrderData.overalllength.feet;
    lengthInputs[1].value = dotvalue.order.OverallOrderData.overalllength.inch;
    lengthInputs[0].dispatchEvent(onchange);
    lengthInputs[1].dispatchEvent(blurEvent);
    lengthInputs[1].dispatchEvent(onchange);

    var frontInputs = document.querySelectorAll('#FOH input.form-control.valid');
    frontInputs[0].value = dotvalue.order.OverallOrderData.front_overhang.feet;
    frontInputs[1].value = dotvalue.order.OverallOrderData.front_overhang.inch;
    frontInputs[0].dispatchEvent(onchange);
    frontInputs[1].dispatchEvent(blurEvent);
    frontInputs[1].dispatchEvent(onchange);

    var rearInputs = document.querySelectorAll('#ROH input.form-control.valid');
    rearInputs[0].value = dotvalue.order.OverallOrderData.rear_overhang.feet;
    rearInputs[1].value = dotvalue.order.OverallOrderData.rear_overhang.inch;
    rearInputs[0].dispatchEvent(onchange);
    rearInputs[1].dispatchEvent(blurEvent);
    rearInputs[1].dispatchEvent(onchange);

    document.getElementById('loadGVW').value = dotvalue.order.totalWeight;
    document.getElementById('loadGVW').dispatchEvent(blurEvent);
    document.getElementById('loadGVW').dispatchEvent(onchange);

    var selectElement2 = document.getElementById('evenlyDistributed');
    selectElement2.value = "T";
    selectElement2.dispatchEvent(onchange);
}


  //Axle count
  if (document.getElementById('axleCount')) {

    document.getElementById('axleCount').value = dotvalue.order.axle_weight.length;
    document.getElementById('axleCount').dispatchEvent(keypressEvent);
    document.getElementById('axleCount').dispatchEvent(click);
    document.getElementById('axleCount').dispatchEvent(onchange);

    setTimeout(function () {
    dotvalue.order.axle_spacing.forEach(function (data, index) {
      const { feet, inches } = convertValueSpacingftinch(data.value);

      var feetval = feet;
      var inchesval = inches;

      var axleSpacing = 'spacing' + (index + 1);

      var spacingInputs = document.querySelectorAll(`#${axleSpacing} input.form-control`);
      spacingInputs[0].value = feetval;
      spacingInputs[1].value = inchesval;

      spacingInputs[0].dispatchEvent(onchange);
      spacingInputs[1].dispatchEvent(blurEvent);
      spacingInputs[1].dispatchEvent(onchange);


    });

    dotvalue.order.axle_weight.forEach(function (data, index) {

      var axleId = 'weight' + (index);

       document.getElementById(axleId).value = data.value;
       document.getElementById(axleId).dispatchEvent(blurEvent);
       document.getElementById(axleId).dispatchEvent(onchange);
      
    });

  }, 500);
  }


}