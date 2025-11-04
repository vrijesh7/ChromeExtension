function kentuskyStep1(dotvalue)
{
    
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


  if (document.querySelector('input.form-control[placeholder="Enter USDOT"]')) {
   
    simulateTyping('input.form-control[placeholder="Enter USDOT"]', dotvalue.order.Company_Info.dot, 500)
    
  
    document.querySelector('input.form-control[placeholder="Enter USDOT"]').dispatchEvent(keypressEvent);
    document.querySelector('input.form-control[placeholder="Enter USDOT"]').dispatchEvent(keydownEvent);
    document.querySelector('input.form-control[placeholder="Enter USDOT"]').dispatchEvent(onchange);
    
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
        var selectElementValue1 = "2369";
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

  if (document.querySelector('select[id="customerVehicleSelect"]') && document.getElementById('licenseState').value === "") {

    
     
  // Unit Number
  const unitNumberInput = document.querySelector('input[id="vehicleUnitNumber"]');
  unitNumberInput.value = dotvalue.order.truck_detail.unit_id;
  unitNumberInput.dispatchEvent(input);
  unitNumberInput.dispatchEvent(onchange);
  unitNumberInput.dispatchEvent(blur);

  // Year
  const yearInput = document.getElementById('year');year
  yearInput.value = dotvalue.order.truck_detail.year;
  yearInput.dispatchEvent(input);
  yearInput.dispatchEvent(onchange);
  yearInput.dispatchEvent(blur);

  // Truck Make
  const truckMakeInput = document.getElementById('makeDescription');
  truckMakeInput.value = dotvalue.order.truck_detail.make.toUpperCase();
  truckMakeInput.dispatchEvent(input);
  truckMakeInput.dispatchEvent(onchange);
  truckMakeInput.dispatchEvent(blur);

  
  const truckVinInput = document.getElementById('vin');
  truckVinInput.value = dotvalue.order.truck_detail.vin;
  truckVinInput.dispatchEvent(input);
  truckVinInput.dispatchEvent(onchange);
  truckVinInput.dispatchEvent(blur);

  // License Number
  const truckLicenseInput = document.getElementById('licenseNumber');
  truckLicenseInput.value = dotvalue.order.truck_detail.license_plate;
  truckLicenseInput.dispatchEvent(input);
  truckLicenseInput.dispatchEvent(onchange);
  truckLicenseInput.dispatchEvent(blur);

  // License State
  const truckLicenseStateInput = document.getElementById('licenseState');
  truckLicenseStateInput.value = dotvalue.order.truck_detail.license_state;
  truckLicenseStateInput.dispatchEvent(input);
  truckLicenseStateInput.dispatchEvent(onchange);
  truckLicenseStateInput.dispatchEvent(blur);

  // License Weight
  const truckLicenseWeightInput = document.getElementById('licenseWeight'); 
  truckLicenseWeightInput.value = 80000;
  truckLicenseWeightInput.dispatchEvent(input);
  truckLicenseWeightInput.dispatchEvent(onchange);
  truckLicenseWeightInput.dispatchEvent(blur);

  // Unit Type
  const unitTypeInput = document.getElementById('conveyance');
  unitTypeInput.value = "TT";
  unitTypeInput.dispatchEvent(input);
  unitTypeInput.dispatchEvent(onchange);
  unitTypeInput.dispatchEvent(blur);

   
    
  }

  
  if (document.getElementById('loadDescription')) {
   

    var loadDescriptionSelect = document.getElementById('loadDescription');
    loadDescriptionSelect.value = "Other";
    loadDescriptionSelect.dispatchEvent(onchange);


    if(document.getElementById('industryCodeOtherDescription'))
    {
    document.getElementById('industryCodeOtherDescription').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('industryCodeOtherDescription').dispatchEvent(onchange);
    }

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

    
    
    // dotvalue.order.axle_weight.forEach(function (data, index) {

    //   var axleId = 'axleGauge' + (index);

    //   var weightInputs = document.querySelectorAll(`#${axleId} input.form-control`);
    //   weightInputs[0].value = 8;//data.value;
    //   weightInputs[1].value = 0;

    //   weightInputs[0].dispatchEvent(onchange);
    //   weightInputs[1].dispatchEvent(blurEvent);
    //   weightInputs[1].dispatchEvent(onchange);
    // });
    dotvalue.order.axle_weight.forEach(function (data, index) {

      var axleId = 'weight' + (index);

      var weightInputs = document.getElementById(axleId);
      weightInputs.value = data.value;
      

      weightInputs.dispatchEvent(onchange);
      weightInputs.dispatchEvent(blurEvent);
      weightInputs.dispatchEvent(onchange);


      var treadSizeId = 'rimSize' + index;//rimSize0

      var selectElement3 = document.getElementById(treadSizeId);
      var selectElementvalue3 = "67";

      for (var i = 0; i < selectElement3.options.length; i++) {
        if (selectElement3.options[i].value === selectElementvalue3) {
          selectElement3.options[i].selected = true;
          break;
        }
      }
      selectElement3.dispatchEvent(keypressEvent);
      selectElement3.dispatchEvent(onchange);

     

    });


    // dotvalue.order.axle_weight.forEach(function (data, index) {


    //   var treadSizeId = 'rimSize' + index;//rimSize0

    //   var selectElement3 = document.getElementById(treadSizeId);
    //   var selectElementvalue3 = "67";

    //   for (var i = 0; i < selectElement3.options.length; i++) {
    //     if (selectElement3.options[i].value === selectElementvalue3) {
    //       selectElement3.options[i].selected = true;
    //       break;
    //     }
    //   }
    //   selectElement3.dispatchEvent(keypressEvent);
    //   selectElement3.dispatchEvent(onchange);

    // });

  }


}