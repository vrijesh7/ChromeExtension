function pennsylvaniaState1(dotvalue) {

  var blurEvent = new Event('blur');
  var onchange = new Event('change', { bubbles: true });
  var input = new Event('input', { bubbles: true });
  var click = new Event('click');

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

  var inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true
  });

  if (document.getElementById('txt_usdotnumber').value !== dotvalue.order.Company_Info.dot) {
    document.querySelector('input[id="radio_lookUpAccountBy_usDot"][value="usDot"]').checked = true;
    document.querySelector('input[id="radio_lookUpAccountBy_usDot"][value="usDot"]').dispatchEvent(click);
    document.querySelector('input[id="radio_lookUpAccountBy_usDot"][value="usDot"]').dispatchEvent(onchange);

    function simulateTyping(element, text, delay) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          element.value += text[index];
          element.dispatchEvent(inputEvent);
          index++;
        } else {
          clearInterval(interval);
          element.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, delay);
    }

    const usDotInput = document.getElementById('comboBox_usDot');
    if (usDotInput) {
      const newValue = dotvalue.order.Company_Info?.dot || "";
      if (usDotInput.value !== newValue) {
        usDotInput.focus();
        usDotInput.click();
        usDotInput.dispatchEvent(new Event('click', { bubbles: true }));
        usDotInput.value = "";
        simulateTyping(usDotInput, newValue, 50);
        setTimeout(() => {
          usDotInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter' }));
          usDotInput.dispatchEvent(blurEvent);
        }, newValue.length * 50 + 50);
      }
    }


  }



  if (document.getElementById('txt_grossWeight') && document.getElementById('sel_permitType')) {

//loadDescriptionSelect.disabled = false;

    if (document.getElementById('sel_loadDescription').value !== dotvalue.order.commodityDataValue.description) {
        document.getElementById('sel_loadDescription').disabled = false;
        document.getElementById('sel_loadDescription').focus();
        document.getElementById('sel_loadDescription').value = dotvalue.order.commodityDataValue.description;
        document.getElementById('sel_loadDescription').dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter' }));
        document.getElementById('sel_loadDescription').dispatchEvent(input);
        document.getElementById('sel_loadDescription').dispatchEvent(blurEvent);
    }

    // if (document.getElementById('sel_loadDescription').value !== dotvalue.order.commodityDataValue.description) {
    //   document.getElementById('sel_loadDescription').focus();
    //   document.getElementById('sel_loadDescription').value = dotvalue.order.commodityDataValue.description;
    //   document.getElementById('sel_loadDescription').dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, key: 'Enter' }));
    //   document.getElementById('sel_loadDescription').dispatchEvent(input);
    //   document.getElementById('sel_loadDescription').dispatchEvent(blurEvent);
    // }

    // Function to safely set value and dispatch events
    function setValueAndDispatchEvents(id, value) {
      let element = document.getElementById(id);
      if (element && element.value === "") {
        element.value = value;

        // Dispatch events properly
        element.dispatchEvent(new Event('input', { bubbles: true }));
        element.dispatchEvent(new Event('change', { bubbles: true }));
        element.dispatchEvent(new Event('blur', { bubbles: true }));
      }
    }

    let totalAxleWeight = 0;

    dotvalue.order.axle_weight.forEach(function (data) {
      if (data && data.value) {
        const weightValue = parseFloat(data.value) || 0;
        totalAxleWeight += weightValue; // Ye direct sum karega
      }
    });

    setValueAndDispatchEvents('txt_grossWeight', totalAxleWeight);
    setValueAndDispatchEvents('txt_legalWeight', 80000);
    setValueAndDispatchEvents('txt_loadQuantity', dotvalue.order.commodityDataValue.piece_count);
    setValueAndDispatchEvents('txt_loadId', dotvalue.order.commodityDataValue.bol);
    setValueAndDispatchEvents('txt_lengthFeet', dotvalue.order.OverallOrderData.overalltrucktrailer.feet);
    setValueAndDispatchEvents('txt_lengthInches', dotvalue.order.OverallOrderData.overalltrucktrailer.inch);
    setValueAndDispatchEvents('txt_widthFeet', dotvalue.order.OverallOrderData.overallwidth.feet);
    setValueAndDispatchEvents('txt_widthInches', dotvalue.order.OverallOrderData.overallwidth.inch);
    setValueAndDispatchEvents('txt_heightFeet', dotvalue.order.OverallOrderData.overallheight.feet);
    setValueAndDispatchEvents('txt_heightInches', dotvalue.order.OverallOrderData.overallheight.inch);


  }


  // function fillInputField(inputId, value, label) {
  //   const inputElement = document.getElementById(inputId);
  //   if (inputElement) {
  //       inputElement.value = value;
  //       const inputEvent = new Event('input', { bubbles: true });
  //       inputElement.dispatchEvent(inputEvent);
  //       inputElement.dispatchEvent(new Event('change', { bubbles: true }));
  //       inputElement.dispatchEvent(new Event('blur', { bubbles: true }));
  //   } else {
  //     console.warn(`⚠ Input field ${label} (ID: ${inputId}) not found.`);
  //   }
  // }

  // function fillTruckFields(baseId) {
  //   const vehicleType = "P-TRUCK TRACTOR";
  //   const vehicleVIN = dotvalue.order.truck_detail.vin;
  //   const vehicleState = dotvalue.order.truck_detail.license_state;
  //   const vehicleAxleCount = dotvalue.order.truck_detail.axle;

  //   fillInputField(`input-${baseId}`, vehicleType);
  //   fillInputField(`input-${baseId + 5}`, vehicleVIN);
  //   fillInputField(`input-${baseId + 8}`, vehicleState);
  //   fillInputField(`input-${baseId + 13}`, vehicleAxleCount);
  // }

  //   const comboCompany = document.querySelector('input[id^="input-"]');
  //   if (comboCompany) {
  //     const comboCompanyID = parseInt(comboCompany.id.match(/^input-(\d+)$/)[1]);
  //     fillTruckFields(comboCompanyID);

  //   } 







  // Axle info
 // function fillAxleData() {
    dotvalue.order.axle_weight.forEach(function (data, index) {
      const axleId = index + '_app_TotalAxleWeight';
      const weightElement = document.getElementById(axleId);
      if (weightElement && data && data.value) {
        weightElement.value = data.value;
        weightElement.dispatchEvent(inputEvent);
        weightElement.dispatchEvent(blurEvent);
      }


    });

    dotvalue.order.axle_spacing.forEach(function (data, index) {
      const { feet, inches } = convertValueSpacingftinch(data.value);
      const feetval = feet || "0";
      const inchesval = inches || "0";
      const axleIdFeet = (index + 1) + '_app_axleDistanceFt';
      const axleIdInch = (index + 1) + '_app_axleDistanceIn';

      const feetElement = document.getElementById(axleIdFeet);
      if (feetElement) {
        feetElement.value = feetval;
        feetElement.dispatchEvent(inputEvent);
        feetElement.dispatchEvent(blurEvent);
      }

      const inchElement = document.getElementById(axleIdInch);
      if (inchElement) {
        inchElement.value = inchesval;
        inchElement.dispatchEvent(inputEvent);
        inchElement.dispatchEvent(blurEvent);
      }

    });
 // }

  function convertValueSpacingftinch(value) {
    if (!value || typeof value !== 'string') return { feet: "0", inches: "0" };
    const match = value.match(/(\d+)ft(\d+)in/);
    return match ? { feet: match[1], inches: match[2] } : { feet: "0", inches: "0" };
  }

  // Run directly
  // if(parseInt(dotvalue.order.truck_detail.axle)+parseInt(dotvalue.order.Trailer_Info.axle) <= (dotvalue.order.axle_weight.length+dotvalue.order.axle_spacing.length))
  // {
  //fillAxleData();
  //}


}