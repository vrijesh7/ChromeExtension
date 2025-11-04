function washingtonState1(dotvalue) 
{

  var click = new Event('click');
  
  var event = new Event('change', {
    bubbles: true,
    cancelable: true
  });

  var axlevalue = new Event('blur');
  var input = new Event('input', { bubbles: true, cancelable: true });

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

  var keydownEvent = new KeyboardEvent('keydown', {
    key: 'a', 
    code: 'KeyA', 
    keyCode: 65, 
    bubbles: true, 
    cancelable: true 
  });


  if (document.getElementById('contactName')) {

    document.getElementById('contactName').value = dotvalue.order.clientData.name;  
    document.getElementById('contactName').dispatchEvent(event);
    let phoneNumber = dotvalue.order.clientData.phone;
    let formattedPhoneNumber = phoneNumber.replace('+1', '').replace(/\s+/g, '');
    document.getElementById('contactPhone').value = formattedPhoneNumber;
    document.getElementById('contactPhone').dispatchEvent(input);
    document.getElementById('contactPhone').dispatchEvent(axlevalue);
    document.getElementById('contactPhone').dispatchEvent(event);
    document.getElementById('contactEmail').value = dotvalue.order.clientData.email;
    document.getElementById('contactEmail').dispatchEvent(event);
    document.getElementById('deliveryAddress1').value = dotvalue.order.clientData.email;
    document.getElementById('deliveryAddress1').dispatchEvent(event);

    var selectElement = document.querySelector('.form-control.form-select.modified.valid');
    var selectElementValue = "E";
    for(let i = 0; i < selectElement.options.length; i++) { 
        if(selectElement.options[i].value === selectElementValue) {
            
            selectElement.options[i].selected = true;
            break;
        }
    };
     selectElement.dispatchEvent(event);
    
     var selectElement21 = document.querySelector('select.form-control.form-select.modified.valid');
     selectElement21.value = 'E';
     selectElement21.dispatchEvent(event);

    document.getElementById('deliveryAddress1').value = dotvalue.order.clientData.email;
    document.getElementById('deliveryAddress1').dispatchEvent(event);

  }


  if (document.getElementById('permitType')) {

    var selectElement = document.getElementById('permitType');
    var selectElementvalue = "92";
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === selectElementvalue) {
        selectElement.options[i].selected = true;
        break;
      }
    }
    selectElement.dispatchEvent(event);

    var selectElement1 = document.getElementById('permitDefinitionSelect');
    var selectElementvalue1 = "2842";
    for (var i = 0; i < selectElement1.options.length; i++) {
      if (selectElement1.options[i].value === selectElementvalue1) {
        selectElement1.options[i].selected = true;
        break;
      }
    }
    selectElement1.dispatchEvent(event);

  }

  if (document.getElementById('vehicleUnitNumber')) {

    var button = document.getElementById('findFromInventoryBtn');
    button.click();

    document.getElementById('unitNumberFilter').value = '';
    simulateTyping('#unitNumberFilter', dotvalue.order.truck_detail.unit_id, 500);

    document.querySelector('td[data-th="vehicleSelect"] .form-check-input').checked = true;
    document.querySelector('td[data-th="vehicleSelect"] .form-check-input').dispatchEvent(click);

    document.getElementById('vehicleUnitNumber').value = dotvalue.order.truck_detail.unit_id;

    var selectElement1 = document.getElementById('year');
    var selectElementvalue1 = dotvalue.order.truck_detail.year;
    for (var i = 0; i < selectElement1.options.length; i++) {
      if (selectElement1.options[i].value === selectElementvalue1) {
        selectElement1.options[i].selected = true;
        break;
      }
    }
    selectElement1.dispatchEvent(event);

    var selectElement = document.getElementById('makeCode');
    var selectElementvalue =  dotvalue.order.truck_detail.make;
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === selectElementvalue) {
        selectElement.options[i].selected = true;
        break;
      }
    }
    selectElement.dispatchEvent(event);

    document.getElementById('vin').value = dotvalue.order.truck_detail.vin;
    document.getElementById('licenseNumber').value = dotvalue.order.truck_detail.license_plate;

    var selectElement = document.getElementById('licenseState');
    var selectElementvalue = dotvalue.order.truck_detail.license_state;
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === selectElementvalue) {
        selectElement.options[i].selected = true;
        break;
      }
    }
    selectElement.dispatchEvent(event);

    var selectElementW = document.getElementById('waRegisteredGVW');
    var selectElementvalueW = "80000";
    for (var i = 0; i < selectElementW.options.length; i++) {
      if (selectElementW.options[i].value === selectElementvalueW) {
        selectElementW.options[i].selected = true;
        break;
      }
    }
    selectElementW.dispatchEvent(event);

    document.getElementById("model").value = dotvalue.order.totalWeight;

    var selectElement3 = document.getElementById('conveyance');
    var selectElementvalue3 = "TL";
    for (var i = 0; i < selectElement3.options.length; i++) {
      if (selectElement3.options[i].value === selectElementvalue3) {
        selectElement3.options[i].selected = true;
        break;
      }
    }
    selectElement3.dispatchEvent(event);

  }


  if (document.getElementById('industryCodeSelect')) 
    {

    var selectElement3 = document.getElementById('industryCodeSelect');
    var selectElementvalue3 = "3266";
    for (var i = 0; i < selectElement3.options.length; i++) {
      if (selectElement3.options[i].value === selectElementvalue3) {
        selectElement3.options[i].selected = true;
        break;
      }
    }
    // selectElement3.dispatchEvent(keypressEvent);
    selectElement3.dispatchEvent(event);
    selectElement3.dispatchEvent(click);

    document.getElementById('industryCodeOtherDescription').value = "INDUSTRIAL EQUIPMENT";
    document.getElementById('industryCodeOtherDescription').dispatchEvent(event);
    document.getElementById('loadDescription').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('loadDescription').dispatchEvent(event);

    document.querySelector('#width [data-inputtype="inputFeet"]').value = dotvalue.order.OverallOrderData.overallwidth.feet;
    document.querySelector('#width [data-inputtype="inputFeet"]').dispatchEvent(event);//${}
    document.querySelector('#width [data-inputtype="inputInches"]').value = dotvalue.order.OverallOrderData.overallwidth.inch;
    document.querySelector('#width [data-inputtype="inputInches"]').dispatchEvent(axlevalue);
    document.querySelector('#width [data-inputtype="inputInches"]').dispatchEvent(event);
    document.querySelector('#width [data-inputtype="inputMeters"]').value = 3.66;

    document.querySelector('#height [data-inputtype="inputFeet"]').value = dotvalue.order.OverallOrderData.overallheight.feet;
    document.querySelector('#height [data-inputtype="inputFeet"]').dispatchEvent(event);
    document.querySelector('#height [data-inputtype="inputInches"]').value = dotvalue.order.OverallOrderData.overallheight.inch;
    document.querySelector('#height [data-inputtype="inputInches"]').dispatchEvent(axlevalue);
    document.querySelector('#height [data-inputtype="inputInches"]').dispatchEvent(event);
    document.querySelector('#width [data-inputtype="inputMeters"]').value = 4.42;

    document.querySelector('#length [data-inputtype="inputFeet"]').value = dotvalue.order.OverallOrderData.overalllength.feet;
    document.querySelector('#length [data-inputtype="inputFeet"]').dispatchEvent(event);
    document.querySelector('#length [data-inputtype="inputMeters"]').value = 23.47;

    document.querySelector('#loadLength [data-inputtype="inputFeet"]').value = dotvalue.order.Trailer_Info.lenght;
    document.querySelector('#loadLength [data-inputtype="inputFeet"]').dispatchEvent(event);
    document.querySelector('#loadLength [data-inputtype="inputMeters"]').value = 19.81;

    document.querySelector('#FOH [data-inputtype="inputFeet"]').value = dotvalue.order.OverallOrderData.front_overhang.feet;
    document.querySelector('#FOH [data-inputtype="inputInches"]').value = dotvalue.order.OverallOrderData.front_overhang.inch;

    document.querySelector('#ROH [data-inputtype="inputFeet"]').value = dotvalue.order.OverallOrderData.rear_overhang.feet;
    document.querySelector('#ROH [data-inputtype="inputInches"]').value = dotvalue.order.OverallOrderData.rear_overhang.inch;

  }

  if (document.getElementById('axleCount')) {

    document.getElementById('axleCount').value = dotvalue.order.axle_weight.length;
    document.getElementById('axleCount').dispatchEvent(event);

    dotvalue.order.axle_spacing.forEach(function (data, index) {
      const { feet, inches } = convertValueSpacingftinch(data.value);

      var feetval = feet;
      var inchesval = inches;

      var axleSpacing = 'spacing' + (index + 1);

      document.querySelector('#' + axleSpacing + ' input[data-inputtype="inputFeetAxleSpacing"]').value = feetval;
      document.querySelector('#' + axleSpacing + ' input[data-inputtype="inputFeetAxleSpacing"]').dispatchEvent(event);
      document.querySelector('#' + axleSpacing + ' input[data-inputtype="inputInchesAxleSpacing"]').value = inchesval;
      document.querySelector('#' + axleSpacing + ' input[data-inputtype="inputInchesAxleSpacing"]').dispatchEvent(event);


    });


    dotvalue.order.axle_weight.forEach(function (data, index) {
      let name = data.name;
      let tireCount, tirename;

      if (name.includes(":")) {
        let [namePart, tireinfo] = name.split(":");
        [tireCount, tirename] = tireinfo.split(" ");
      } else {
        let nameParts = name.split(" ");
        tireCount = nameParts[1];
        tirename = "Tires";
      }
      var numTiresId = 'tireCount' + index;
      var treadSizeId = 'rimSize' + index;

      document.getElementById(numTiresId).value = tireCount;

      document.getElementById(numTiresId).dispatchEvent(event);

      var selectElement3 = document.getElementById(treadSizeId);
      var selectElementvalue3 = "36";

      for (var i = 0; i < selectElement3.options.length; i++) {
        if (selectElement3.options[i].value === selectElementvalue3) {
          selectElement3.options[i].selected = true;
          break;
        }
      }
      selectElement3.dispatchEvent(event);

    });


    dotvalue.order.axle_weight.forEach(function (data, index) {
      var axleId = 'weight' + (index);
      document.querySelector('#' + axleId + ' input[data-inputtype="weightPounds"]').value = data.value;
      document.querySelector('#' + axleId + ' input[data-inputtype="weightPounds"]').dispatchEvent(event);
    });

  }


}