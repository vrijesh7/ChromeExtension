function nevadaState1(dotvalue) {

  var blurEvent = new Event('blur');
  var onchange = new Event('change', { bubbles: true });
  var changeEvent = new Event('change', { bubbles: true, cancelable: true });
  var input = new Event('input', { bubbles: true }); 
  var click = new Event('click');
  var blur = new Event('blur', { bubbles: true })
  var keypressEvent = new KeyboardEvent('keypress', {
    key: 'a',
    code: 'KeyA',
    charCode: 97,
    keyCode: 97,
    bubbles: true,
    cancelable: true
  });

  var keydownEvent = new KeyboardEvent('keydown', {
    key: 'a',
    code: 'KeyA',
    keyCode: 65,
    bubbles: true,
    cancelable: true
  });

  if (document.querySelector('input.form-control.force-uppercase[placeholder="Enter USDOT"]')) {
    simulateTyping('input.form-control.force-uppercase[placeholder="Enter USDOT"]', dotvalue.order.Company_Info.dot, 500)

    document.querySelector('input.form-control.force-uppercase[placeholder="Enter USDOT"]').dispatchEvent(keypressEvent);
    document.querySelector('input.form-control.force-uppercase[placeholder="Enter USDOT"]').dispatchEvent(keydownEvent);
    document.querySelector('input.form-control.force-uppercase[placeholder="Enter USDOT"]').dispatchEvent(onchange);
  }

  if (document.getElementById('contactName')) {

    var contactNameInput = document.getElementById('contactName');

    if (contactNameInput) {

      if (contactNameInput.hasAttribute('readonly')) {
        contactNameInput.removeAttribute('readonly');
      }

      contactNameInput.value = "Nash Turcan";//dotvalue.order.clientData.name;

      contactNameInput.dispatchEvent(input);
      contactNameInput.dispatchEvent(onchange);
    }
    var phoneNumber = "9842938503";
    var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');

    var phoneInput = document.getElementById('phoneNumberVal');

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

    var selectElement = document.querySelector('select[_bl_355ad052-d774-4207-aab9-5c71936681d1]');
    var selectElementValue = "W";
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === selectElementValue) {
        selectElement.options[i].selected = true;
        break;
      }
    }


    selectElement.dispatchEvent(onchange);


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

    selectElement.dispatchEvent(changeEvent);

    setTimeout(function () {
      var selectElement1 = document.getElementById('permitDefinitionSelect');
      if (selectElement1) {
        var selectElementValue1 = "2843";
        for (var i = 0; i < selectElement1.options.length; i++) {
          if (selectElement1.options[i].value === selectElementValue1) {
            selectElement1.options[i].selected = true;
            break;
          }
        }
        selectElement1.dispatchEvent(changeEvent);
      }
    }, 500);

  }



  if (document.querySelector('select[id="customerVehicleSelect"]') && document.getElementById('vin').value === "") {

    //document.getElementById('vehicleUnitNumber').value === "" && document.getElementById('vin').value === ""
    const UnitNumber = [dotvalue.order.truck_detail.unit_id, dotvalue.order.Trailer_Info.trailer_id]; 
     const truckVIN = dotvalue.order.truck_detail.vin;
     const trailerVIN = dotvalue.order.Trailer_Info.vin;

   
    function fillInputField(inputElement, value, label) {
      if (inputElement) {
          inputElement.value = value;
          inputElement.dispatchEvent(input); 
          inputElement.dispatchEvent(onchange); 
          inputElement.dispatchEvent(blur); 
         
      } else {
          console.warn(`⚠ Input field ${label} not found.`);
      }
  }

    const unitNumberInputs = document.querySelectorAll('input[id="vehicleUnitNumber"]');
    
    if (unitNumberInputs.length > 0) {
        
        fillInputField(unitNumberInputs[0], UnitNumber[0]);
    }

    
    fillInputField(document.querySelector('input[id="vin"]'), truckVIN);

    
    const addButton = document.querySelector('.btn.add-btn');
    if (addButton) {
        addButton.click(); 

        const container = document.querySelector('.tab-pane.fade.show.active');
        const observer = new MutationObserver(function () {
            const dropdowns = document.querySelectorAll('select[id="customerVehicleSelect"]');
            const updatedUnitNumberInputs = document.querySelectorAll('input[id="vehicleUnitNumber"]');

            if (dropdowns.length > 1 && updatedUnitNumberInputs.length > 1) {
                
                fillInputField(updatedUnitNumberInputs[1], UnitNumber[1]);
                fillInputField(document.querySelector('input[id="trailerVIN"]'), trailerVIN);
                observer.disconnect();
            }
        });

        observer.observe(container, { childList: true, subtree: true });
    }
}






  if (document.getElementById('loadIsOverweight')) {
    document.getElementById('loadIsOverweight').checked = true;
    document.getElementById('loadIsOverweight').dispatchEvent(click);
    document.getElementById('loadIsOverweight').dispatchEvent(onchange);

    var selectElement1 = document.getElementById('transportMethodSelect');
    var selectElementValue1 = "HAUL";
    for (var i = 0; i < selectElement1.options.length; i++) {
      if (selectElement1.options[i].value === selectElementValue1) {
        selectElement1.options[i].selected = true;
        break;
      }
    }
    selectElement1.dispatchEvent(onchange);

    document.getElementById('loadDescriptionTextBox').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('loadDescriptionTextBox').dispatchEvent(onchange);

    var heightInputs = document.querySelectorAll('#height input.form-control');
    heightInputs[0].value = dotvalue.order.OverallOrderData.overallheight.feet;
    heightInputs[1].value = dotvalue.order.OverallOrderData.overallheight.inch;

    heightInputs[0].dispatchEvent(onchange);
    heightInputs[1].dispatchEvent(blurEvent);
    heightInputs[1].dispatchEvent(onchange);



    var widthInputs = document.querySelectorAll('#width input.form-control');
    widthInputs[0].value = dotvalue.order.OverallOrderData.overallwidth.feet;
    widthInputs[1].value = dotvalue.order.OverallOrderData.overallwidth.inch;

    widthInputs[0].dispatchEvent(onchange);
    widthInputs[1].dispatchEvent(blurEvent);
    widthInputs[1].dispatchEvent(onchange);


    var lengthInputs = document.querySelectorAll('#length input.form-control');
    lengthInputs[0].value = dotvalue.order.OverallOrderData.overalllength.feet;
    lengthInputs[1].value = dotvalue.order.OverallOrderData.overalllength.inch;

    lengthInputs[0].dispatchEvent(onchange);
    lengthInputs[1].dispatchEvent(blurEvent);
    lengthInputs[1].dispatchEvent(onchange);

    var frontInputs = document.querySelectorAll('#FOH input.form-control');
    frontInputs[0].value = dotvalue.order.OverallOrderData.front_overhang.feet;
    frontInputs[1].value = dotvalue.order.OverallOrderData.front_overhang.inch;

    frontInputs[0].dispatchEvent(onchange);
    frontInputs[1].dispatchEvent(blurEvent);
    frontInputs[1].dispatchEvent(onchange);

    var rearInputs = document.querySelectorAll('#ROH input.form-control');
    rearInputs[0].value = dotvalue.order.OverallOrderData.rear_overhang.feet;
    rearInputs[1].value = dotvalue.order.OverallOrderData.rear_overhang.inch;

    rearInputs[0].dispatchEvent(onchange);
    rearInputs[1].dispatchEvent(blurEvent);
    rearInputs[1].dispatchEvent(onchange);


  }

  //Axle count
  if (document.getElementById('axleCount')) {


    if (document.getElementById('axleCount').value < "6") {
      document.getElementById('axleCount').value = dotvalue.order.axle_weight.length;
      document.getElementById('axleCount').dispatchEvent(blurEvent);
      document.getElementById('axleCount').dispatchEvent(onchange);
    }

    dotvalue.order.axle_spacing.forEach(function (data, index) {
      const { feet, inches } = convertValueSpacingftinch(data.value);

      var feetval = feet;
      var inchesval = inches;

      var axleSpacing = 'spacing' + (index + 1);

      var spacingInputs = document.querySelectorAll(`#${axleSpacing} input.form-control`);
      spacingInputs[0].value = feetval;
      spacingInputs[1].value = inchesval;

      spacingInputs[0].dispatchEvent(onchange);
      //spacingInputs[1].dispatchEvent(blurEvent);
      spacingInputs[1].dispatchEvent(onchange);


    });


    dotvalue.order.axle_weight.forEach(function (data, index) {


      var treadSizeId = 'rimSize' + index;

      var selectElement3 = document.getElementById(treadSizeId);
      var selectElementvalue3 = "103";

      for (var i = 0; i < selectElement3.options.length; i++) {
        if (selectElement3.options[i].value === selectElementvalue3) {
          selectElement3.options[i].selected = true;
          break;
        }
      }
      selectElement3.dispatchEvent(keypressEvent);
      selectElement3.dispatchEvent(onchange);

    });


    dotvalue.order.axle_weight.forEach(function (data, index) {

      var axleId = 'axleGauge' + (index);

      var weightInputs = document.querySelectorAll(`#${axleId} input.form-control`);
      weightInputs[0].value = 8;//data.value;
      weightInputs[1].value = 0;

      weightInputs[0].dispatchEvent(onchange);
      weightInputs[1].dispatchEvent(blurEvent);
      weightInputs[1].dispatchEvent(onchange);
    });

  }



}