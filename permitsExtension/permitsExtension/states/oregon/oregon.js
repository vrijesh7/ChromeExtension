function oregonState1(dotvalue) 
{

    var blurEvent = new Event('blur', { bubbles: true });
    var onchange = new Event('change', { bubbles: true });
    var click = new Event('click', { bubbles: true });
    var input = new Event('input', { bubbles: true });
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

    var keyupEvent = new KeyboardEvent('keyup', {
        key: 'a', 
        code: 'KeyA', 
        keyCode: 65, 
        bubbles: true, 
        cancelable: true 
    });

    var radio = document.querySelector('input[name="isdivisible"][value="1"]');
    if (radio) {
        radio.checked = true;

        radio.dispatchEvent(click);
        radio.dispatchEvent(onchange);
    }

    var axlesInput = document.querySelector('input[name="AXLES"]');
    if (axlesInput) {
        axlesInput.value = dotvalue.order.axle_weight.length; 
        axlesInput.dispatchEvent(input);
        axlesInput.dispatchEvent(onchange);
    }

    var radioSpacing = document.querySelector('input[name="axlespacingfi"][value="1"]');
    if (radioSpacing) {
        radioSpacing.checked = true;

        radioSpacing.dispatchEvent(click);
        radioSpacing.dispatchEvent(onchange);
    }


    dotvalue.order.axle_spacing.forEach((data, index) => {
        const { feet, inches } = convertValueSpacingftinch(data.value);

       

        const spacingFeetInputs = document.querySelector(`input[name="AXS_FEET${index + 1}"]`);
        const spacingInchInputs = document.querySelector(`input[name="AXS_INCHES${index + 1}"]`);

        if (spacingFeetInputs) {
            spacingFeetInputs.value = feet;
            spacingFeetInputs.dispatchEvent(input);
            spacingFeetInputs.dispatchEvent(onchange);
        }
        if (spacingInchInputs) {
            spacingInchInputs.value = inches;
            spacingInchInputs.dispatchEvent(input);
            spacingInchInputs.dispatchEvent(onchange);
        }

        
    });

    dotvalue.order.axle_weight.forEach((data, index) => {

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

         const weightInput = document.querySelector(`input[name="AXG_WEIGHT${index + 1}"]`);
         //const updatedFlag = document.querySelector(`input[name="groupWeightUpdated${index + 1}"]`);
         const weightAxleGroupInput = document.querySelector(`input[name="AXG_AXLE_GROUP${index + 1}"]`);

      if (weightInput) {
          weightInput.value = data.value;
          weightInput.dispatchEvent(input);
          weightInput.dispatchEvent(onchange);
          weightInput.dispatchEvent(blurEvent);
      }

      if (weightAxleGroupInput) {
          weightAxleGroupInput.value = 1;
          weightAxleGroupInput.dispatchEvent(input);
          weightAxleGroupInput.dispatchEvent(onchange);
          weightAxleGroupInput.dispatchEvent(blurEvent);
      }

      // if (updatedFlag) {
      //     updatedFlag.value = "1"; // mark as updated if needed
      // }
      
      });

     

    // if (document.getElementById("TEMP_PERMIT_TYPE")) {
    //     var permitType = document.getElementById("TEMP_PERMIT_TYPE");
    //     var permitValue = "stNonDiv";
    //     for (var i = 0; i < permitType.options.length; i++) {
    //         if (permitType.options[i].value === permitValue) {
    //             permitType.options[i].selected = true;
    //             break;
    //         }
    //     }
    //     permitValue.dispatchEvent(onchange);
    // }

    // if (document.getElementById("faNew")) {
    //     document.getElementById("faNew").checked = true;
    //     document.getElementById("faNew").dispatchEvent(click);
    // }

    // if (document.querySelector('input[name="PERMIT_CONTACT"]')) {


    //     document.querySelector('input[name="PERMIT_CONTACT"]').value = dotvalue.order.clientData.name;


    //     document.querySelector('input[name="TEMP_EMAIL"]').value = "synchronpermits@gmail.com";

    //     // var phone = "9842938503";
    //     // let index = 0;
    //     // function setPhoneValue(inputName, lengths) {
    //     //     for (let i = 0; i < lengths.length; i++) {
    //     //         var input = document.querySelector(`input[name="${inputName}${i + 1}"]`);
    //     //         if (input) {
    //     //             input.value = phone.substring(index, index + lengths[i]);
    //     //             console.log(input.value);
    //     //             index += lengths[i];
    //     //             var keyupEvent = new Event('keyup');
    //     //             input.dispatchEvent(keyupEvent);
    //     //         }
    //     //     }
    //     // }
    //     // setPhoneValue("phone", [3, 3, 4]);

    // }

    // if (document.getElementById('TRLR_LEN')) 
    // {

    //     document.querySelector('input[name="COMMODITY_1"]').value = dotvalue.order.commodityDataValue.description;
    //     document.getElementById('LOAD_LENGTH').value = dotvalue.order.commodityDataValue.length.feet;

    //     document.getElementById('loadWidthFt').value = dotvalue.order.commodityDataValue.width.feet;
    //     document.getElementById('loadWidthFt').dispatchEvent(blurEvent);
    //     document.getElementById('loadWidthIn').value = dotvalue.order.commodityDataValue.width.inch;
    //     document.getElementById('loadWidthIn').dispatchEvent(blurEvent);

    //     document.getElementById('travelHeightFt').value = dotvalue.order.commodityDataValue.height.feet;
    //     document.getElementById('travelHeightIn').value = dotvalue.order.commodityDataValue.height.inch;
    //     document.getElementById('travelHeightIn').dispatchEvent(blurEvent);

    //     //
    //     document.querySelector('input[name="OVERALL_LENGTH"]').value = dotvalue.order.OverallOrderData.overalltrucktrailer.feet;
    //     document.getElementById("frontOverhangLegal").checked = true;
    //     document.getElementById("frontOverhangLegal").dispatchEvent(click);

    //     var permitType = document.getElementById("rearOverhangSelect");
    //     var permitValue = "LEGAL";
    //     for (var i = 0; i < permitType.options.length; i++) {
    //         if (permitType.options[i].value === permitValue) {
    //             permitType.options[i].selected = true;
    //             break;
    //         }
    //     }
    //     permitType.dispatchEvent(onchange);
    //     permitType.dispatchEvent(blurEvent);

    //     document.getElementById('GROSS_WEIGHT_X').value = dotvalue.order.totalWeight;
    //     document.querySelector('input[name="DESCRIPTION_VEH"]').value = "TRUCK TRACTOR SEMITRAILER";
    //     document.getElementById('TRLR_LEN').value = dotvalue.order.Trailer_Info.lenght;
    //     document.getElementById('TRLR_LEN').dispatchEvent(onchange);

    //     document.getElementById("ttF").checked = true;
    //     document.getElementById("ttF").dispatchEvent(click);

    //     document.getElementById('LEGAL_TABLE').value = 3;
    //     document.getElementById('LEGAL_TABLE').dispatchEvent(onchange);
    //     document.getElementById('AXLES').value = dotvalue.order.axle_weight.length;
    //     document.getElementById('AXLES').dispatchEvent(onchange);



    // }

}


function oregonState2(dotvalue) {

    var blurEvent = new Event('blur');
    var onchange = new Event('change', { bubbles: true });
    var click = new Event('click');
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
        key: 'a', // Specify the key value (e.g., 'a')
        code: 'KeyA', // Specify the physical key code (e.g., 'KeyA')
        keyCode: 65, // ASCII value for 'A'
        bubbles: true, // Indicates the event bubbles up through the DOM
        cancelable: true // Indicates the event can be canceled
    });

    if (document.querySelector('input[name="isdivisible"]')) {

        document.querySelector('input[name="isdivisible"][value="2"]').checked = true;
        document.querySelector('input[name="isdivisible"][value="2"]').dispatchEvent(click);

        document.querySelector('input[name="AXLES"]').value = dotvalue.order.axle_weight.length;

        document.querySelector('input[name="axlespacingfi"][value="1"]').checked = true;
        document.querySelector('input[name="axlespacingfi"][value="1"]').dispatchEvent(click);

    }

    else {

        dotvalue.order.axle_spacing.forEach(function (data, index) {
            const { feet, inches } = convertValueSpacingftinch(data.value);

            var feetval = feet;
            var inchesval = inches;

            var spaceFeetName = `AXS_FEET${index + 1}`;
            var spaceInchesName = `AXS_INCHES${index + 1}`;



            document.querySelector(`input[name="${spaceFeetName}"]`).value = feetval;
            document.querySelector(`input[name="${spaceFeetName}"]`).dispatchEvent(blurEvent);
            document.querySelector(`input[name="${spaceFeetName}"]`).dispatchEvent(keydownEvent);

            document.querySelector(`input[name="${spaceInchesName}"]`).value = inchesval;
            document.querySelector(`input[name="${spaceInchesName}"]`).dispatchEvent(blurEvent);
            document.querySelector(`input[name="${spaceInchesName}"]`).dispatchEvent(keydownEvent);

        });

        dotvalue.order.axle_weight.forEach(function (data, index) {

            var axleId = `AXG_WEIGHT${index + 1}`;
            var axlegroup = `AXG_AXLE_GROUP${index + 1}`;

            document.querySelector(`input[name="${axleId}"]`).value = data.value;
            document.querySelector(`input[name="${axleId}"]`).dispatchEvent(keydownEvent);
            document.querySelector(`input[name="${axleId}"]`).dispatchEvent(onchange);

            document.querySelector(`input[name="${axlegroup}"]`).value = 1;
            document.querySelector(`input[name="${axlegroup}"]`).dispatchEvent(keydownEvent);
            document.querySelector(`input[name="${axlegroup}"]`).dispatchEvent(onchange);

        });
    }

}


function oregonState3(dotvalue) 
{

    const blurEvent = new Event('blur', { bubbles: true });
    var onchange = new Event('change', { bubbles: true });
    var changeEvent = new Event('change', { bubbles: true, cancelable: true });
    var input = new Event('input', { bubbles: true });
    var click = new Event('click');
    var blur = new Event('blur', { bubbles: true });
    var event = new Event('change');
    const inputEvent = new Event('input', { bubbles: true, cancelable: true });

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
      
      simulateTyping('input.form-control[placeholder="Enter USDOT"]', dotvalue.order.Company_Info.dot, 200)
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
  
      var phoneInput = document.getElementById('contactPhone');
  
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


      var selectElement = document.querySelector('select[name="_contactInformationModel.PrimaryDeliveryMethod"]');
      var selectElementValue = "E";
      for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectElementValue) {
          selectElement.options[i].selected = true;
          break;
        }
      }
  
  
      selectElement.dispatchEvent(onchange);

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
  
      var companyReferenceValue = "TRC Logistics LLC";
      var companyReference = document.getElementById('companyReference');
  
      if (companyReference) {
  
        if (companyReference.hasAttribute('readonly')) {
          companyReference.removeAttribute('readonly');
        }
  
        companyReference.value = companyReferenceValue;
  
        companyReference.dispatchEvent(input);
        companyReference.dispatchEvent(onchange);
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
        var selectElement1 = document.getElementById('permitSubType');
        if (selectElement1) {
          var selectElementValue1 = "1098";
          for (var i = 0; i < selectElement1.options.length; i++) {
            if (selectElement1.options[i].value === selectElementValue1) {
              selectElement1.options[i].selected = true;
              break;
            }
          }
          selectElement1.dispatchEvent(changeEvent);
        }
      }, 500);

      setTimeout(function () {
        var selectElement2 = document.getElementById('permitDefinitionSelect');
        if (selectElement2) {
          var selectElementValue2 = "3017";
          for (var i = 0; i < selectElement2.options.length; i++) {
            if (selectElement2.options[i].value === selectElementValue2) {
              selectElement2.options[i].selected = true;
              break;
            }
          }
          selectElement2.dispatchEvent(changeEvent);
        }
      }, 700);


      
  
    }
  
  
   if (document.querySelector('select[id="customerVehicleSelect"]') && document.getElementById('vin').value === "") {

  
    if(document.getElementById('vehicleUnitNumber'))
    {
    document.getElementById('vehicleUnitNumber').value = dotvalue.order.truck_detail.unit_id;
    document.getElementById('vehicleUnitNumber').dispatchEvent(inputEvent);
    document.getElementById('vehicleUnitNumber').dispatchEvent(keypressEvent);
    document.getElementById('vehicleUnitNumber').dispatchEvent(event);
    document.getElementById('vehicleUnitNumber').dispatchEvent(blurEvent);
    }

    if(document.getElementById('year'))
    {
    document.getElementById('year').value = dotvalue.order.truck_detail.year;
    document.getElementById('year').dispatchEvent(inputEvent);
    document.getElementById('year').dispatchEvent(keypressEvent);
    document.getElementById('year').dispatchEvent(event);
    document.getElementById('year').dispatchEvent(blurEvent);
    }

    if (document.getElementById('makeCode')) {
        const selectMake = document.getElementById('makeCode');
        const targetMakeText = dotvalue.order.truck_detail.make.trim().toUpperCase();

        for (let option of selectMake.options) {
            if (option.text.trim().toUpperCase() === targetMakeText) {
                option.selected = true;
                break;
            }
        }

        selectMake.dispatchEvent(new Event('input', { bubbles: true }));
        selectMake.dispatchEvent(new Event('change', { bubbles: true }));
        selectMake.dispatchEvent(new Event('blur', { bubbles: true }));
    }


    if(document.getElementById('vin'))
    {
    document.getElementById('vin').value = dotvalue.order.truck_detail.vin;
    document.getElementById('vin').dispatchEvent(inputEvent);
    document.getElementById('vin').dispatchEvent(keypressEvent);
    document.getElementById('vin').dispatchEvent(event);
    document.getElementById('vin').dispatchEvent(blurEvent);
    }

    if(document.getElementById('licenseNumber'))
    {
    document.getElementById('licenseNumber').value = dotvalue.order.truck_detail.license_plate;
    document.getElementById('licenseNumber').dispatchEvent(inputEvent);
    document.getElementById('licenseNumber').dispatchEvent(keypressEvent);
    document.getElementById('licenseNumber').dispatchEvent(event);
    document.getElementById('licenseNumber').dispatchEvent(blurEvent);
    }

    if(document.getElementById('licenseState'))
    {
    document.getElementById('licenseState').value = dotvalue.order.truck_detail.license_state;
    document.getElementById('licenseState').dispatchEvent(inputEvent);
    document.getElementById('licenseState').dispatchEvent(keypressEvent);
    document.getElementById('licenseState').dispatchEvent(event);
    document.getElementById('licenseState').dispatchEvent(blurEvent);
    }

    if(document.getElementById('conveyance'))
    {
    document.getElementById('conveyance').value = "TT";
    document.getElementById('conveyance').dispatchEvent(inputEvent);
    document.getElementById('conveyance').dispatchEvent(keypressEvent);
    document.getElementById('conveyance').dispatchEvent(event);
    document.getElementById('conveyance').dispatchEvent(blurEvent);
    }
  
 
}
 
  
    if (document.getElementById('industryCodeSelect')) {
      var selectElement1 = document.getElementById('industryCodeSelect');
      var selectElementValue1 = "3206";
      for (var i = 0; i < selectElement1.options.length; i++) {
        if (selectElement1.options[i].value === selectElementValue1) {
          selectElement1.options[i].selected = true;
          break;
        }
      }
      selectElement1.dispatchEvent(onchange);


      const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

      if(allCheckboxes)
      {
        allCheckboxes.forEach(cb => {
            const labelText = cb.parentElement.textContent.trim();
            if (labelText.includes('I attest that the load is non-divisible')) {
                cb.checked = true;
                cb.dispatchEvent(new Event('click', { bubbles: true }));
                cb.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
      }

      const grossWeight = dotvalue.order.totalWeight; 
      const thresholdWeight = 98000; 

      const weightTableSelect = document.querySelector('select[name="Permit.PermitDimension.WeightTableId"]');

      if (weightTableSelect) {
          let targetValue;

          if (grossWeight > thresholdWeight) {
              targetValue = "4"; 
          } else {
              targetValue = "3"; 
          }

          weightTableSelect.value = targetValue;

          weightTableSelect.dispatchEvent(new Event('input', { bubbles: true }));
          weightTableSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }


  
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

       var loadInputs = document.querySelectorAll('#loadLength input.form-control');
      loadInputs[0].value = dotvalue.order.OverallOrderData.overalllength.feet;
      loadInputs[1].value = dotvalue.order.OverallOrderData.overalllength.inch;
  
      loadInputs[0].dispatchEvent(onchange);
      loadInputs[1].dispatchEvent(blurEvent);
      loadInputs[1].dispatchEvent(onchange);


       var loadInputs = document.querySelectorAll('#loadLength input.form-control');
      loadInputs[0].value = dotvalue.order.OverallOrderData.overalllength.feet;
      loadInputs[1].value = dotvalue.order.OverallOrderData.overalllength.inch;
  
      loadInputs[0].dispatchEvent(onchange);
      loadInputs[1].dispatchEvent(blurEvent);
      loadInputs[1].dispatchEvent(onchange);
    //   var suInputs = document.querySelectorAll('#length input.form-control');
       
    //   //var overallFeet = dotvalue.order.Trailer_Info.lenght || 0;
    //   var overallInch = 0;
    //   var overhangFeet = dotvalue.order.OverallOrderData.rear_overhang.feet || 0;
    //   var overhangInch = dotvalue.order.OverallOrderData.rear_overhang.inch || 0;

      
    //   overallFeet = parseInt(overallFeet, 10);
    //   overallInch = parseInt(overallInch, 10);
    //   overhangFeet = parseInt(overhangFeet, 10);
    //   overhangInch = parseInt(overhangInch, 10);

      
    //   var totalInches = overallInch + overhangInch;
    //   var extraFeet = Math.floor(totalInches / 12);
    //   var suFeet = overallFeet + overhangFeet + extraFeet;
    //   var suInch = totalInches % 12; 

    //   suInputs[0].value = suFeet;
    //   suInputs[1].value = suInch;

    //   suInputs[0].dispatchEvent(input);
    //   suInputs[0].dispatchEvent(onchange);
    //   suInputs[0].dispatchEvent(blurEvent);

    //   suInputs[1].dispatchEvent(input);
    //   suInputs[1].dispatchEvent(onchange);
    //   suInputs[1].dispatchEvent(blurEvent);

  
    //   var lengthInputs = document.querySelectorAll('#overallLength input.form-control');
  
    //   lengthInputs[0].value = dotvalue.order.OverallOrderData.overalllength.feet; 
    //   lengthInputs[1].value = dotvalue.order.OverallOrderData.overalllength.inch; 
    
    //   lengthInputs[0].dispatchEvent(input);
    //   lengthInputs[0].dispatchEvent(onchange);
    //   lengthInputs[0].dispatchEvent(blurEvent);
    
    //   lengthInputs[1].dispatchEvent(input);
    //   lengthInputs[1].dispatchEvent(onchange);
    //   lengthInputs[1].dispatchEvent(blurEvent);
    
    // Trailer Length values
    const trailerLength = {
        feet: dotvalue.order.Trailer_Info.lenght || 0,
        inches: 0
    };

    // Overall Length values
    const overallLength = {
        feet: dotvalue.order.OverallOrderData.overalltrucktrailer.feet || 0,
        inches: dotvalue.order.OverallOrderData.overalltrucktrailer.inch || 0
    };

    // Function to fill inputs based on label text
    function fillLength(labelText, lengthObj) {
        const wrappers = document.querySelectorAll('.form-control-wrapper');

        wrappers.forEach(wrapper => {
            const label = wrapper.querySelector('label');
            if (label && label.textContent.includes(labelText)) {
                const inputs = wrapper.querySelectorAll('input[type="number"]');
                if (inputs.length >= 2) {
                    inputs[0].value = lengthObj.feet;   // feet
                    inputs[1].value = lengthObj.inches; // inches

                    // Trigger events so page scripts detect the changes
                    inputs[0].dispatchEvent(new Event('input', { bubbles: true }));
                    inputs[0].dispatchEvent(new Event('change', { bubbles: true }));
                    inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
                    inputs[1].dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        });
    }

    // Fill Trailer Length
    fillLength("Trailer Length", trailerLength);

    // Fill Overall Length
    fillLength("Overall Length", overallLength);

  
      var rearInputs = document.querySelectorAll('#FOH input.form-control');
  
      rearInputs[0].value = dotvalue.order.OverallOrderData.front_overhang.feet; 
      rearInputs[1].value = dotvalue.order.OverallOrderData.front_overhang.inch; 

      rearInputs[0].dispatchEvent(input);
      rearInputs[0].dispatchEvent(onchange);
      rearInputs[0].dispatchEvent(blurEvent);

      rearInputs[1].dispatchEvent(input);
      rearInputs[1].dispatchEvent(onchange);
      rearInputs[1].dispatchEvent(blurEvent);
  
  
    }

    const rearOverhangSelect = document.querySelector('select[name="Permit.PermitDimension.RearOverhangOptionId"]');

    if (rearOverhangSelect) {
        rearOverhangSelect.value = "5"; 

        rearOverhangSelect.dispatchEvent(input);
        rearOverhangSelect.dispatchEvent(onchange);
    }

  
    // var card = document.querySelector('.card.border-none[b-wuwlbbri88]');

    // if (card) {
  
    //   var axleOption = document.getElementById('axleMode');

    //   if (axleOption && !axleOption.checked) {
          
    //       axleOption.checked = true;  
    //       axleOption.dispatchEvent(onchange);
    //   }
      
  
    //   if (document.getElementById('axleCount') && document.getElementById('axleCount').value < 6) {
    //     document.getElementById('axleCount').value = dotvalue.order.axle_weight.length;
    //     document.getElementById('axleCount').dispatchEvent(input);
    //     document.getElementById('axleCount').dispatchEvent(blurEvent);
    //     document.getElementById('axleCount').dispatchEvent(onchange);
    //   }
  
    //   dotvalue.order.axle_spacing.forEach(function (data, index) {
    //     const { feet, inches } = convertValueSpacingftinch(data.value);
  
    //     var feetval = feet;
    //     var inchesval = inches;
  
    //     var axleSpacing = 'spacing' + (index + 1);
  
    //     var spacingInputs = document.querySelectorAll(`#${axleSpacing} input.form-control`);
    //     spacingInputs[0].value = feetval;
    //     spacingInputs[1].value = inchesval;
  
    //     spacingInputs[0].dispatchEvent(onchange);
    //     spacingInputs[1].dispatchEvent(blurEvent);
  
  
    //   });
  
  
    //   dotvalue.order.axle_weight.forEach(function (data, index) {
  
  
    //     var treadSizeId = 'rimSize' + index;
  
    //     var selectElement3 = document.getElementById(treadSizeId);
    //     var selectElementvalue3 = "103";
  
    //     for (var i = 0; i < selectElement3.options.length; i++) {
    //       if (selectElement3.options[i].value === selectElementvalue3) {
    //         selectElement3.options[i].selected = true;
    //         break;
    //       }
    //     }
    //     selectElement3.dispatchEvent(keypressEvent);
    //     selectElement3.dispatchEvent(onchange);
  
    //   });
  
  
    //   dotvalue.order.axle_weight.forEach(function (data, index) {

    //     var axleId = 'weight' + index; 
    //     var weightInput = document.getElementById(axleId);
    //       var weightValue = parseInt(data.value, 10);  
    //         weightInput.value = weightValue; 
    //         weightInput.dispatchEvent(input); 
    //         weightInput.dispatchEvent(keypressEvent); 
    //         weightInput.dispatchEvent(keydownEvent); 
    //         weightInput.dispatchEvent(onchange); 
    //         weightInput.dispatchEvent(blurEvent);
          
       
    //   });
  
    // }
  
  
  
}