function IllinoisStep1(dotvalue) {
  var onchange = new Event('change');
  var keydownEvent = new KeyboardEvent('keydown', {
    key: 'a', 
    code: 'KeyA', 
    keyCode: 65, // ASCII value for 'A'
    bubbles: true, // Indicates the event bubbles up through the DOM
    cancelable: true 
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

  var input = new Event('input', {
    bubbles: true,
    cancelable: true,
  });

  var click = new Event('click', {
    bubbles: true,
    cancelable: true
  });

  //document.getElementById('Permittee').value = dotvalue.order.Company_Info.name;
  //  document.getElementById('PermitteeContactName').value = dotvalue.order.clientData.name;  
  //  document.getElementById('PermitteeContactPhoneNumber').value =  orderData.order.clientData.phone ; 
  //"984-293-8503";

  var Overallwidth = dotvalue.order.OverallOrderData.overallwidth.feet + "'" + dotvalue.order.OverallOrderData.overallwidth.inch;
  var Overallheight = dotvalue.order.OverallOrderData.overallheight.feet + "'" + dotvalue.order.OverallOrderData.overallheight.inch;
  var KingPinLength = dotvalue.order.Trailer_Info.king_pin.split("'");
  var grossWeight = dotvalue.order.totalWeight;

  if (grossWeight <= 80000) {
    var radioButtons = document.getElementsByName("WeightDimBoth");
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].value === "D") {
        radioButtons[i].checked = true;
        radioButtons[i].dispatchEvent(click);
        break;
      }
    }

  }

  if (grossWeight > 80000 && Overallwidth <= "8'6" && Overallheight <= "13'6") {
    var radioButtons = document.getElementsByName("WeightDimBoth");
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].value === "DH") {
        radioButtons[i].checked = true;
        radioButtons[i].dispatchEvent(click);
        break;
      }
    }

  }


  // if (grossWeight > 80000 && Overallwidth <= "8'6") {
  //   var radioButtons = document.getElementsByName("WeightDimBoth");
  //   for (var i = 0; i < radioButtons.length; i++) {
  //     if (radioButtons[i].value === "W") {
  //       radioButtons[i].checked = true;
  //       radioButtons[i].dispatchEvent(click);
  //       break;
  //     }
  //   }

  // }

  // if (grossWeight > 80000 && Overallheight > "8'6") {
  //   var radioButtons = document.getElementsByName("WeightDimBoth");
  //   for (var i = 0; i < radioButtons.length; i++) {
  //     if (radioButtons[i].value === "B") {
  //       radioButtons[i].checked = true;
  //       radioButtons[i].dispatchEvent(onchange);
  //       radioButtons[i].dispatchEvent(click);
  //       break;
  //     }

  //   }

  // }

  function feetInchesToInches(value) {
  if (!value) return 0;
  var parts = value.split("'");
  var feet = parseInt(parts[0], 10) || 0;
  var inches = parts[1] ? parseInt(parts[1], 10) : 0;
  return feet * 12 + inches;
  }

  // Example inputs
  var widthInches = feetInchesToInches(Overallwidth);   // e.g., "12'0"
  var heightInches = feetInchesToInches(Overallheight); // e.g., "13'6"
  var widthLimit = feetInchesToInches("8'6");           // 8'6 in inches
  var heightLimit = feetInchesToInches("13'6");         // 13'6 in inches

  if (grossWeight > 80000) {
    var radioButtons = document.getElementsByName("WeightDimBoth");

    if (widthInches > widthLimit || heightInches > heightLimit) {
      // Overweight + Overdimension
      for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].value === "B") {
          radioButtons[i].checked = true;
          radioButtons[i].dispatchEvent(onchange);
          radioButtons[i].dispatchEvent(click);
          break;
        }
      }
    } else {
      // Overweight only
      for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].value === "W") {
          radioButtons[i].checked = true;
          radioButtons[i].dispatchEvent(click);
          break;
        }
      }
    }
  }


  document.getElementById("Permittee").value = dotvalue.order.Company_Info.name;
  document.getElementById("PermitteeContactName").value = dotvalue.order.clientData.name;
  document.getElementById('PermitteeContactPhoneNumber').value = dotvalue.order.clientData.phone.replace('+1', '').replace(/[^\d]/g, '')
    .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    console.log(dotvalue.order.clientData.phone.replace('+1', '').replace(/[^\d]/g, ''));
    console.log(dotvalue.order.clientData.phone.replace('+1', '').replace(/[^\d]/g, ''));
    console.log(dotvalue.order.clientData.phone.replace('+1', '').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));

  //document.getElementById("PermitteeContactPhoneNumber").value = "984-293-8503";
  document.getElementById("USDOT").value = dotvalue.order.Company_Info.dot;
  var radioButton = document.getElementById("TripType");
  radioButton.checked = 's';
  radioButton.dispatchEvent(click);
  var methodMove = document.getElementById("ddl_MethodMove");
  var methodMoveValue = "L";
  for (let i = 0; i < methodMove.options.length; i++) {
    if (methodMove.options[i].value === methodMoveValue) {
      methodMove.options[i].selected = true;
      methodMove.options[i].dispatchEvent(onchange);
      break;
    }

  }

  if (grossWeight >= 36000) {
    var radioButtons = document.getElementsByName("ImplementOfHusbandry");
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].value === "False") {
        radioButtons[i].checked = true;
        radioButtons[i].dispatchEvent(click);
        break;
      }
    }
  } else {

    var radioButtons = document.getElementsByName("ImplementOfHusbandry");
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].value === "False") {
        radioButtons[i].checked = true;
        radioButtons[i].dispatchEvent(click);
        break;
      }
    }

  }

  var radioButtons = document.getElementsByName("StructuralT");
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].value === "False") {
      radioButtons[i].checked = true;
      radioButtons[i].dispatchEvent(click);
      break;
    }
  }



  document.getElementById("KingpinToLastAxleFeet").value = KingPinLength[0];
  document.getElementById("KingpinToLastAxleFeet").dispatchEvent(onchange);

  if (typeof KingPinLength[1] !== 'undefined') {
    // If it's defined, set the value in the HTML element
    document.getElementById("KingpinToLastAxleInches").value = KingPinLength[1];
  } else {
    // If it's undefined, set the value to 0
    document.getElementById("KingpinToLastAxleInches").value = 0;
  }

  var radioButton = document.getElementById("StructuralF");
  radioButton.checked = 'False';
  radioButton.dispatchEvent(click);

  document.getElementById("LoadDescription").value = dotvalue.order.commodityDataValue.description;
  document.getElementById("LoadDescription").dispatchEvent(onchange);

  var dscType = document.getElementById("ddl_LoadCategory");
  var dscTypeValue = "01";
  for (let i = 0; i < dscType.options.length; i++) {
    if (dscType.options[i].value === dscTypeValue) {
      dscType.options[i].selected = true;
      break;
    }

  }
  document.getElementById("ddl_LoadCategory").dispatchEvent(onchange);

  if (dotvalue.order.commodityDataValue.model && dotvalue.order.commodityDataValue.model.trim() !== "") {
    // document.getElementById("LoadModel").value = dotvalue.order.commodityDataValue.model;
    // document.getElementById("LoadModel").dispatchEvent(onchange);
  }
  if (dotvalue.order.commodityDataValue.make && dotvalue.order.commodityDataValue.make.trim() !== "") {
    // document.getElementById("LoadMake").value = dotvalue.order.commodityDataValue.make;
    // document.getElementById("LoadMake").dispatchEvent(onchange);
  }
 // document.getElementById("LoadSerial").value = dotvalue.order.commodityDataValue.serial;

  document.getElementById("License").value = dotvalue.order.truck_detail.license_plate;
  document.getElementById("ddl_LicenseState").value = dotvalue.order.truck_detail.license_state;
  document.getElementById("VehicleIdentificationNumber").value = dotvalue.order.truck_detail.vin;

  var vehicleYear = document.getElementById("VehicleModelYear");
  var vehicleYearValue = dotvalue.order.truck_detail.year;
  for (let i = 0; i < vehicleYear.options.length; i++) {
    if (vehicleYear.options[i].value === vehicleYearValue) {
      vehicleYear.options[i].selected = true;
      break;
    }

  }
  vehicleYear.dispatchEvent(onchange);



  document.getElementById("TotalTractorAxles").value = (dotvalue.order.axle_weight.length) - (dotvalue.order.Trailer_Info.axle);
  document.getElementById("TotalTractorAxles").dispatchEvent(input);

  document.getElementById("totAxles").value = dotvalue.order.axle_weight.length;//AxleWeight1
  simulateTyping('#totAxles', dotvalue.order.axle_weight.length, 1000);
  document.getElementById("totAxles").dispatchEvent(input);

    var totAxlesEl = document.getElementById("totAxles");
    if (totAxlesEl && totAxlesEl.value !== "") {
        var axleWeightEl = document.getElementById("AxleWeight1");
        var axleSpacingEl = document.getElementById("AxleSpacingFeet1");
        
        if (axleWeightEl) axleWeightEl.dispatchEvent(click);
        if (axleSpacingEl) axleSpacingEl.dispatchEvent(click);
    }

  document.getElementById("GrossWeight").value = dotvalue.order.totalWeight;
  document.getElementById("GrossWeight").dispatchEvent(input);

  document.getElementById("TrailerLengthFeet").value = dotvalue.order.Trailer_Info.lenght;
  document.getElementById("TrailerLengthFeet").dispatchEvent(input);
  document.getElementById("TrailerLengthInches").value = 0;
  document.getElementById("TrailerLengthInches").dispatchEvent(input);

  var kingpinValue = parseInt(dotvalue.order.Trailer_Info.king_pin);
  if (kingpinValue === 0) {
    document.getElementById("KingpinToLastAxleFeet").value = 43;
  }
  else {
    document.getElementById("KingpinToLastAxleFeet").value = kingpinValue;
  }
  document.getElementById("KingpinToLastAxleFeet").dispatchEvent(input);
  document.getElementById("KingpinToLastAxleInches").value = 0;
  document.getElementById("KingpinToLastAxleInches").dispatchEvent(input);


  dotvalue.order.axle_weight.forEach(function (data, index) {

    var axleWeightId = 'AxleWeight' + (index + 1);

    document.getElementById(axleWeightId).value = data.value;
    document.getElementById(axleWeightId).dispatchEvent(input);

  });


  dotvalue.order.axle_spacing.forEach(function (data, index) {

    const { feet, inches } = convertValueSpacingftinch(data.value);

    var axlespacingFeet = 'AxleSpacingFeet' + (index + 1);
    var axlespacingInc = 'AxleSpacingInches' + (index + 1);

    document.getElementById(axlespacingFeet).value = feet;
    document.getElementById(axlespacingFeet).dispatchEvent(input);
    document.getElementById(axlespacingInc).value = inches;
    document.getElementById(axlespacingInc).dispatchEvent(input);

  });


  document.getElementById("WidthFeet").value = dotvalue.order.OverallOrderData.overallwidth.feet;
  document.getElementById("WidthFeet").dispatchEvent(input);
  document.getElementById("WidthFeet").dispatchEvent(keydownEvent);
  document.getElementById("WidthInches").value = dotvalue.order.OverallOrderData.overallwidth.inch;
  document.getElementById("WidthInches").dispatchEvent(input);
  document.getElementById("WidthInches").dispatchEvent(keydownEvent);

  document.getElementById("LengthFeet").value = dotvalue.order.OverallOrderData.overalllength.feet;
  document.getElementById("LengthFeet").dispatchEvent(input);
  document.getElementById("LengthFeet").dispatchEvent(keydownEvent);

  document.getElementById("HeightFeet").value = dotvalue.order.OverallOrderData.overallheight.feet;
  document.getElementById("HeightFeet").dispatchEvent(input);
  document.getElementById("HeightFeet").dispatchEvent(keydownEvent);
  document.getElementById("HeightInches").value = dotvalue.order.OverallOrderData.overallheight.inch;
  document.getElementById("HeightInches").dispatchEvent(input);
  document.getElementById("HeightInches").dispatchEvent(keydownEvent);
  document.getElementById("Effective").value = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }).replace(/\//g, '/');



}