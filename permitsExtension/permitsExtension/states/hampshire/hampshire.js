function hampshireState1(dotvalue)
{
    document.getElementById('soncb0').checked = true;

}

function hampshireState2(dotvalue)
{
  var onchange = new Event('change');

  
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

      document.getElementById('SearchTerm').dispatchEvent(keyup);
   
      chrome.storage.local.get('loginUser', function(data) {
        if (data.loginUser) {
         
          document.getElementById('ContactName').value = "Nash Turcan";//data.loginUser;  
        }
      });

      document.getElementById('ContactPhone').value = "9842938503";
      document.getElementById('ContactEmail').value = "synchronpermits@gmail.com";//tbDeliveryText2

      var deliveryType = document.getElementById('DeliveryDropDown2');
      var industryTypevalue = "1";
      for (var i = 0; i < deliveryType.options.length; i++) {
          if (deliveryType.options[i].value === industryTypevalue) {
            deliveryType.options[i].selected = true;
              break;
          }
      }
      deliveryType.dispatchEvent(onchange);

    var tbDeliveryText2 =   document.getElementById('tbDeliveryText2');
    if(tbDeliveryText2)
    {
      tbDeliveryText2.value = "synchronpermits@gmail.com";
      tbDeliveryText2.dispatchEvent(onchange);
    }

    // --- Permit Rule Logic ---
    var heightFeet = parseInt(dotvalue.order.OverallOrderData.overallheight.feet) || 0;
    var heightInches = parseInt(dotvalue.order.OverallOrderData.overallheight.inch) || 0;
    var totalHeightInches = (heightFeet * 12) + heightInches;

    var lengthFeet = parseInt(dotvalue.order.OverallOrderData.overalltrucktrailer.feet) || 0;
    var lengthInches = parseInt(dotvalue.order.OverallOrderData.overalltrucktrailer.inch) || 0;
    var totalLengthFeet = lengthFeet + (lengthInches / 12);

    var widthFeet = parseInt(dotvalue.order.OverallOrderData.overallwidth.feet) || 0;
    var widthInches = parseInt(dotvalue.order.OverallOrderData.overallwidth.inch) || 0;
    var totalWidthFeet = widthFeet + (widthInches / 12);

    // Check the conditions
    var requiresPermit =
    totalHeightInches > (13 * 12 + 6) || // Over 13'6"
    totalLengthFeet > 110 ||              // Over 110'
    totalWidthFeet > 15;                  // Over 15'

    // Set the dropdown accordingly
    var PermitTypeDD = document.getElementById('PermitTypeDD');
    if (PermitTypeDD) {
    if (requiresPermit) {
        PermitTypeDD.value = "2110"; // Oversize
        console.log("Permit Type set to 2110 (Oversize)");
    } else {
        PermitTypeDD.value = "2100"; // Standard
        console.log("Permit Type set to 2100 (Standard)");
    }
    PermitTypeDD.dispatchEvent(onchange);
    }
    
}
function hampshireState3(dotvalue)
{
    var keypressEvent = new KeyboardEvent('keypress', {
        bubbles: true,
        cancelable: true,
        key: '', 
        char: '', 
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
      });

      var event = new Event('change', {
        bubbles: true,
        cancelable: true
      });

    const inputEvent = new Event('input', { bubbles: true, cancelable: true });
    const blurEvent = new Event('blur', { bubbles: true });

    //document.getElementById('FromDatePicker').value = "05/20/2024";
    var selectElement = document.getElementById('selVehicleConfigType');
    if(selectElement)
    {
    selectElement.value = "CB";
    selectElement.dispatchEvent(event);
    }

   if(document.getElementById('txtLoadWidthFeet_0'))
   {
   document.getElementById('txtLoadWidthFeet_0').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
   
   console.log("Width (Feet):", document.getElementById('txtLoadWidthFeet_0').value);
   
   document.getElementById('txtLoadWidthFeet_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadWidthFeet_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadWidthFeet_0').dispatchEvent(event);
   document.getElementById('txtLoadWidthFeet_0').dispatchEvent(blurEvent);
   }
   
   if(document.getElementById('txtLoadWidthInches_0'))
   {
   document.getElementById('txtLoadWidthInches_0').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
   
   console.log("Width (Inches):", document.getElementById('txtLoadWidthInches_0').value);

   document.getElementById('txtLoadWidthInches_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadWidthInches_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadWidthInches_0').dispatchEvent(event);
   document.getElementById('txtLoadWidthInches_0').dispatchEvent(blurEvent);
   }
  
   if(document.getElementById('txtLoadHeightFeet_0'))
   {
   document.getElementById('txtLoadHeightFeet_0').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
   console.log("Height (Feet):", document.getElementById('txtLoadHeightFeet_0').value);

   document.getElementById('txtLoadHeightFeet_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadHeightFeet_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadHeightFeet_0').dispatchEvent(event);
   document.getElementById('txtLoadHeightFeet_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtLoadHeightInches_0'))
   {
   document.getElementById('txtLoadHeightInches_0').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
   console.log("Height (Inches):", document.getElementById('txtLoadHeightInches_0').value);

   document.getElementById('txtLoadHeightInches_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadHeightInches_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadHeightInches_0').dispatchEvent(event);
   document.getElementById('txtLoadHeightInches_0').dispatchEvent(blurEvent);
   }


   if(document.getElementById('txtLoadFrontOverhangFeet_0'))
   {
   document.getElementById('txtLoadFrontOverhangFeet_0').value = `${dotvalue.order.OverallOrderData.front_overhang.feet}`;
   document.getElementById('txtLoadFrontOverhangFeet_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadFrontOverhangFeet_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadFrontOverhangFeet_0').dispatchEvent(event);
   document.getElementById('txtLoadFrontOverhangFeet_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtLoadFrontOverhangInches_0'))
   {
   document.getElementById('txtLoadFrontOverhangInches_0').value = `${dotvalue.order.OverallOrderData.front_overhang.inch}`;
   document.getElementById('txtLoadFrontOverhangInches_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadFrontOverhangInches_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadFrontOverhangInches_0').dispatchEvent(event);
   document.getElementById('txtLoadFrontOverhangInches_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtLoadRearOverhangFeet_0'))
   {
   document.getElementById('txtLoadRearOverhangFeet_0').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}`;
   document.getElementById('txtLoadRearOverhangFeet_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadRearOverhangFeet_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadRearOverhangFeet_0').dispatchEvent(event);
   document.getElementById('txtLoadRearOverhangFeet_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtLoadRearOverhangInches_0'))
   {
   document.getElementById('txtLoadRearOverhangInches_0').value = `${dotvalue.order.OverallOrderData.rear_overhang.inch}`;
   document.getElementById('txtLoadRearOverhangInches_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadRearOverhangInches_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadRearOverhangInches_0').dispatchEvent(event);
   document.getElementById('txtLoadRearOverhangInches_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtLoadLengthFeet_0'))
   {
   document.getElementById('txtLoadLengthFeet_0').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}`;
   console.log("Lenght (Inches):", document.getElementById('txtLoadLengthFeet_0').value);

   document.getElementById('txtLoadLengthFeet_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadLengthFeet_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadLengthFeet_0').dispatchEvent(event);
   document.getElementById('txtLoadLengthFeet_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtLoadLengthInches_0'))
   {
   document.getElementById('txtLoadLengthInches_0').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}`;
   console.log("Lenght (Inches):", document.getElementById('txtLoadLengthInches_0').value);

   document.getElementById('txtLoadLengthInches_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadLengthInches_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadLengthInches_0').dispatchEvent(event);
   document.getElementById('txtLoadLengthInches_0').dispatchEvent(blurEvent);
   }
   
   if(document.getElementById('txtTrailerLengthFeet_0'))
   {
   document.getElementById('txtTrailerLengthFeet_0').value= dotvalue.order.Trailer_Info.lenght;
   document.getElementById('txtTrailerLengthFeet_0').dispatchEvent(inputEvent);
   document.getElementById('txtTrailerLengthFeet_0').dispatchEvent(keypressEvent);
   document.getElementById('txtTrailerLengthFeet_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtTotalGrossWeight_0'))
   {
   document.getElementById('txtTotalGrossWeight_0').value= dotvalue.order.totalWeight;
   document.getElementById('txtTotalGrossWeight_0').dispatchEvent(inputEvent);
   document.getElementById('txtTotalGrossWeight_0').dispatchEvent(keypressEvent);
   document.getElementById('txtTotalGrossWeight_0').dispatchEvent(event);
   document.getElementById('txtTotalGrossWeight_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtHUAxleCount_0'))
   {
   var totalLength = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;
    document.getElementById('txtHUAxleCount_0').value = totalLength;
    document.getElementById('txtHUAxleCount_0').dispatchEvent(inputEvent);
    document.getElementById('txtHUAxleCount_0').dispatchEvent(keypressEvent);
    document.getElementById('txtHUAxleCount_0').dispatchEvent(event);
    document.getElementById('txtHUAxleCount_0').dispatchEvent(blurEvent);
   }

    if(document.getElementById('txtTTAxleCount_0'))
    {
    document.getElementById('txtTTAxleCount_0').value = dotvalue.order.Trailer_Info.axle;
    document.getElementById('txtTTAxleCount_0').dispatchEvent(inputEvent);
    document.getElementById('txtTTAxleCount_0').dispatchEvent(keypressEvent);
    document.getElementById('txtTTAxleCount_0').dispatchEvent(event);
    document.getElementById('txtTTAxleCount_0').dispatchEvent(blurEvent);
    }

   if(document.getElementById('selLoadCategory_0'))
   {
   document.getElementById('selLoadCategory_0').value = 18;
   document.getElementById('selLoadCategory_0').dispatchEvent(inputEvent);
   document.getElementById('selLoadCategory_0').dispatchEvent(event);
   document.getElementById('selLoadCategory_0').dispatchEvent(blurEvent);
   
   }

   if(document.getElementById('selLoadDescription_0'))
   {
   document.getElementById('selLoadDescription_0').value = "OTHER";
   document.getElementById('selLoadDescription_0').dispatchEvent(inputEvent);
   document.getElementById('selLoadDescription_0').dispatchEvent(event);
   document.getElementById('selLoadDescription_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('loadSerialNumber_0'))
   {
   document.getElementById('loadSerialNumber_0').value= dotvalue.order.commodityDataValue.serial;
   document.getElementById('loadSerialNumber_0').dispatchEvent(inputEvent);
   document.getElementById('loadSerialNumber_0').dispatchEvent(event);
   document.getElementById('loadSerialNumber_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('txtOtherDescription_0'))
   {
   document.getElementById('txtOtherDescription_0').value= dotvalue.order.commodityDataValue.description;
   document.getElementById('txtOtherDescription_0').dispatchEvent(inputEvent);
   document.getElementById('txtOtherDescription_0').dispatchEvent(event);
   document.getElementById('txtOtherDescription_0').dispatchEvent(blurEvent);
   }

   var selectElement1 = document.getElementById('selLoadHaulingType_0');
   if(selectElement1)
   {
   selectElement1.value = "HU";
   selectElement1.dispatchEvent(inputEvent);
   selectElement1.dispatchEvent(event);
   selectElement1.dispatchEvent(blurEvent);
   }
   


   let totalFeet = 0;
   let totalInches = 0;

  dotvalue.order.axle_spacing.forEach((data) => {
    const { feet, inches } = convertValueSpacingftinch(data.value);
    totalFeet += feet;
    totalInches += inches;
  });

  totalFeet += Math.floor(totalInches / 12);
  totalInches %= 12;


   if(document.getElementById('txtLoadDBEAFeet_0'))
   {
   document.getElementById('txtLoadDBEAFeet_0').value = totalFeet; 
   document.getElementById('txtLoadDBEAFeet_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadDBEAFeet_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadDBEAFeet_0').dispatchEvent(event);
   document.getElementById('txtLoadDBEAFeet_0').dispatchEvent(blurEvent);

   document.getElementById('txtLoadDBEAInches_0').value = totalInches ?? 0; 
   document.getElementById('txtLoadDBEAInches_0').dispatchEvent(inputEvent);
   document.getElementById('txtLoadDBEAInches_0').dispatchEvent(keypressEvent);
   document.getElementById('txtLoadDBEAInches_0').dispatchEvent(event);
   document.getElementById('txtLoadDBEAInches_0').dispatchEvent(blurEvent);
   }

   if(document.getElementById('chkNonDivisible_0'))
   {
   document.getElementById('chkNonDivisible_0').checked= true;
   document.getElementById('chkNonDivisible_0').dispatchEvent(inputEvent);
   document.getElementById('chkNonDivisible_0').dispatchEvent(event);
   document.getElementById('chkNonDivisible_0').dispatchEvent(blurEvent);
   }





   //////******* */


   let truckWeight = 0;
  let trailerWeight = 0;

  const truckAxles = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;

  dotvalue.order.axle_weight.forEach(function (data, index) {
      if (index < truckAxles) {
          truckWeight += Number(data.value); 
      } else {
          trailerWeight += Number(data.value);
      }
  });

console.log("Truck Weight:", truckWeight);
console.log("Trailer Weight:", trailerWeight);
   if(document.getElementById('selVehicleType_0') && document.getElementById('txtAxles_0'))
   {


   document.getElementById('selVehicleType_0').value = "TA";
   document.getElementById('selVehicleType_0').dispatchEvent(inputEvent);
   document.getElementById('selVehicleType_0').dispatchEvent(event);
   document.getElementById('selVehicleType_0').dispatchEvent(blurEvent);

   document.getElementById('selVehicleState_0').value = dotvalue.order.truck_detail.license_state;
   document.getElementById('selVehicleState_0').dispatchEvent(inputEvent);
   document.getElementById('selVehicleState_0').dispatchEvent(event);
   document.getElementById('selVehicleState_0').dispatchEvent(blurEvent);


   document.getElementById('txtPlateNumber_0').value = dotvalue.order.truck_detail.license_plate;
   document.getElementById('txtPlateNumber_0').dispatchEvent(inputEvent);
   document.getElementById('txtPlateNumber_0').dispatchEvent(event);
   document.getElementById('txtPlateNumber_0').dispatchEvent(blurEvent);

   document.getElementById('txtRegisteredWeight_0').value = 80000;
   document.getElementById('txtRegisteredWeight_0').dispatchEvent(inputEvent);
   document.getElementById('txtRegisteredWeight_0').dispatchEvent(event);
   document.getElementById('txtRegisteredWeight_0').dispatchEvent(blurEvent);

   document.getElementById('txtVINNumber_0').value=dotvalue.order.truck_detail.vin;
   document.getElementById('txtVINNumber_0').dispatchEvent(inputEvent);
   document.getElementById('txtVINNumber_0').dispatchEvent(event);
   document.getElementById('txtVINNumber_0').dispatchEvent(blurEvent); 


   if(document.getElementById('selHaulingType_0'))
   {
   document.getElementById('selHaulingType_0').value = "HU"; 
   document.getElementById('selHaulingType_0').dispatchEvent(keypressEvent);
   document.getElementById('selHaulingType_0').dispatchEvent(inputEvent);
   document.getElementById('selHaulingType_0').dispatchEvent(event);
   document.getElementById('selHaulingType_0').dispatchEvent(blurEvent); 
   }
   document.getElementById('txtAxles_0').value = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;
   document.getElementById('txtAxles_0').dispatchEvent(keypressEvent);
   document.getElementById('txtAxles_0').dispatchEvent(inputEvent);
   document.getElementById('txtAxles_0').dispatchEvent(event);
   document.getElementById('txtAxles_0').dispatchEvent(blurEvent); 

   document.getElementById('txtVehicleMake_0').value=  dotvalue.order.truck_detail.make;//dotvalue.order.Trailer_Info.make;
   document.getElementById('txtVehicleMake_0').dispatchEvent(keypressEvent);
   document.getElementById('txtVehicleMake_0').dispatchEvent(inputEvent);
   document.getElementById('txtVehicleMake_0').dispatchEvent(event);
   document.getElementById('txtVehicleMake_0').dispatchEvent(blurEvent); 

   document.getElementById('txtGVWR_0').value= truckWeight; //dotvalue.order.EmptyWeightAttributes;
   document.getElementById('txtGVWR_0').dispatchEvent(keypressEvent);
   document.getElementById('txtGVWR_0').dispatchEvent(inputEvent);
   document.getElementById('txtGVWR_0').dispatchEvent(event);
   document.getElementById('txtGVWR_0').dispatchEvent(blurEvent); 

   }
   
   

  if(document.getElementById('selTrailerState_0_0') && document.getElementById('txtTrailerMake_0_0'))
  {

  document.getElementById('selTrailerType_0_0').value = "ST";
  document.getElementById('selTrailerType_0_0').dispatchEvent(keypressEvent);
  document.getElementById('selTrailerType_0_0').dispatchEvent(inputEvent);
  document.getElementById('selTrailerType_0_0').dispatchEvent(event);
  document.getElementById('selTrailerType_0_0').dispatchEvent(blurEvent);

  document.getElementById('selTrailerState_0_0').value = dotvalue.order.Trailer_Info.state;
  document.getElementById('selTrailerState_0_0').dispatchEvent(keypressEvent);
  document.getElementById('selTrailerState_0_0').dispatchEvent(inputEvent);
  document.getElementById('selTrailerState_0_0').dispatchEvent(event);
  document.getElementById('selTrailerState_0_0').dispatchEvent(blurEvent); 

  document.getElementById('txtTrailerRegisteredWeight_0_0').value= dotvalue.order.Trailer_Info.empty_weight;
  document.getElementById('txtTrailerRegisteredWeight_0_0').dispatchEvent(keypressEvent);
  document.getElementById('txtTrailerRegisteredWeight_0_0').dispatchEvent(inputEvent);
  document.getElementById('txtTrailerRegisteredWeight_0_0').dispatchEvent(event);
  document.getElementById('txtTrailerRegisteredWeight_0_0').dispatchEvent(blurEvent); 


  document.getElementById('txtTrailerPlateNumber_0_0').value = dotvalue.order.Trailer_Info.license_plate;
  document.getElementById('txtTrailerPlateNumber_0_0').dispatchEvent(keypressEvent);
  document.getElementById('txtTrailerPlateNumber_0_0').dispatchEvent(inputEvent);
  document.getElementById('txtTrailerPlateNumber_0_0').dispatchEvent(event);
  document.getElementById('txtTrailerPlateNumber_0_0').dispatchEvent(blurEvent); 


  document.getElementById('txtTrailerVINNumber_0_0').value = dotvalue.order.Trailer_Info.vin;
  document.getElementById('txtTrailerVINNumber_0_0').dispatchEvent(keypressEvent);
  document.getElementById('txtTrailerVINNumber_0_0').dispatchEvent(inputEvent);
  document.getElementById('txtTrailerVINNumber_0_0').dispatchEvent(event);
  document.getElementById('txtTrailerVINNumber_0_0').dispatchEvent(blurEvent);

  document.getElementById('txtTrailerAxles_0_0').value = dotvalue.order.Trailer_Info.axle;
  document.getElementById('txtTrailerAxles_0_0').dispatchEvent(keypressEvent);
  document.getElementById('txtTrailerAxles_0_0').dispatchEvent(inputEvent);
  document.getElementById('txtTrailerAxles_0_0').dispatchEvent(event);
  document.getElementById('txtTrailerAxles_0_0').dispatchEvent(blurEvent);

  document.getElementById('txtTrailerGVWR_0_0').value = trailerWeight; 
  document.getElementById('txtTrailerGVWR_0_0').dispatchEvent(keypressEvent);
  document.getElementById('txtTrailerGVWR_0_0').dispatchEvent(inputEvent);
  document.getElementById('txtTrailerGVWR_0_0').dispatchEvent(event);
  document.getElementById('txtTrailerGVWR_0_0').dispatchEvent(blurEvent);

  
  document.getElementById('txtTrailerMake_0_0').value = dotvalue.order.Trailer_Info.make;
  document.getElementById('txtTrailerMake_0_0').dispatchEvent(keypressEvent);
  document.getElementById('txtTrailerMake_0_0').dispatchEvent(inputEvent);
  document.getElementById('txtTrailerMake_0_0').dispatchEvent(event);
  document.getElementById('txtTrailerMake_0_0').dispatchEvent(blurEvent);

  document.getElementById('txtTrailerLengthFeet_0_0').value = dotvalue.order.Trailer_Info.lenght;
  document.getElementById('txtTrailerLengthFeet_0_0').dispatchEvent(keypressEvent);
  document.getElementById('txtTrailerLengthFeet_0_0').dispatchEvent(inputEvent);
  document.getElementById('txtTrailerLengthFeet_0_0').dispatchEvent(event);
  document.getElementById('txtTrailerLengthFeet_0_0').dispatchEvent(blurEvent);

  const checkbox = document.getElementById('chkSlowTravelY_1');
  if(checkbox)
  {
   checkbox.click();
  }

  }


      
      const inputEvent1 = new Event('input', { bubbles: true });
      const changeEvent = new Event('change', { bubbles: true });

      const haulingRows = Array.from(document.querySelectorAll('tbody tr'))
          .filter(row => row.querySelector('input.form-control[type="number"]'))
          .slice(0, dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle);

      console.log("Hauling Rows Found:", haulingRows.length);
      haulingRows.forEach((row, i) => {
          console.log(`Hauling Row ${i}:`, row);
      });

      const trailingUnitTable = Array.from(document.querySelectorAll('tbody tr td[colspan="6"]'))
          .find(td => td.textContent.includes("Trailing Unit 1"))
          ?.closest('table');


      let trailingRows = [];
      if (trailingUnitTable) {
          trailingRows = Array.from(trailingUnitTable.querySelectorAll('tbody tr'))
              .filter(row => row.querySelector('input.form-control[type="number"]'))
              .slice(0); // keep all rows
      }
      console.log("Trailing Rows Found:", trailingRows.length);
      trailingRows.forEach((row, i) => {
          console.log(`Trailing Row ${i}:`, row);
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

        console.log(`Axle index ${index} - Tire Count: ${tireCount}, Tire Name: ${tirename}`);
          
          if (index < haulingRows.length) {
              
              const row = haulingRows[index];
              const weightInput = row.querySelector('input.form-control[type="number"]');
              if (weightInput) {
                  weightInput.value = data.value;
                  weightInput.dispatchEvent(inputEvent1);
                  weightInput.dispatchEvent(changeEvent);
                  
              }

              const inputs = row.querySelectorAll('input.form-control[type="number"]');
              if (inputs.length > 0) {
                  const lastInput = inputs[inputs.length - 1];
                  lastInput.value = tireCount;
                  lastInput.dispatchEvent(inputEvent1);
                  lastInput.dispatchEvent(changeEvent);

                  const endOfSecond = inputs[inputs.length - 2];
                  endOfSecond.value = data.value;
                  endOfSecond.dispatchEvent(inputEvent1);
                  endOfSecond.dispatchEvent(changeEvent);

                  const endOfThird = inputs[inputs.length - 3];
                  endOfThird.value = data.value;
                  endOfThird.dispatchEvent(inputEvent1);
                  endOfThird.dispatchEvent(changeEvent);

                  console.log(`Hauling Row ${index} tire count set to: ${tireCount}`);
              }

          } else {
              
              const trailerIndex = index - haulingRows.length;
              const row = trailingRows[trailerIndex];
              if (!row) {
                  
                  return;
              }

              const weightInput = row.querySelector('input.form-control[type="number"]');
              if (weightInput) {
                  weightInput.value = data.value;
                  weightInput.dispatchEvent(inputEvent1);
                  weightInput.dispatchEvent(changeEvent);
                  
              }

              // Fill tire count (last input)
              const inputs = row.querySelectorAll('input.form-control[type="number"]');
              if (inputs.length > 0) {
                  const lastInput = inputs[inputs.length - 1];

                  const endOfSecond = inputs[inputs.length - 2];

                  const endOfThird = inputs[inputs.length - 3];

                  lastInput.value = tireCount;
                  endOfSecond.value = data.value;
                  endOfThird.value = data.value;
                  lastInput.dispatchEvent(inputEvent1);
                  lastInput.dispatchEvent(changeEvent);

                  endOfSecond.dispatchEvent(inputEvent1);
                  endOfSecond.dispatchEvent(changeEvent);

                  endOfThird.dispatchEvent(inputEvent1);
                  endOfThird.dispatchEvent(changeEvent);

                  console.log(`Trailing Row ${trailerIndex} tire count set to: ${tireCount}`);
              }
          }
      });




    // --- Fill Axle Spacing (hauling + trailing) ---
    if (dotvalue.order.axle_spacing) {
    dotvalue.order.axle_spacing.forEach((data, index) => {
        const { feet, inches } = convertValueSpacingftinch(data.value);

        let row;
        if (index < haulingRows.length - 1) {
            
            row = haulingRows[index + 1]; 
        } else {
            
            const trailerIndex = index - (haulingRows.length - 1);
            row = trailingRows[trailerIndex]; 
        }

        if (!row) {
            console.warn(`No row found for spacing index ${index}`);
            return;
        }

        const spacingInputs = Array.from(row.querySelectorAll('input.form-control[type="number"]')).slice(1, 3);

        if (spacingInputs[0]) {
            spacingInputs[0].value = feet;
            spacingInputs[0].dispatchEvent(inputEvent1);
            spacingInputs[0].dispatchEvent(changeEvent);
        }
        if (spacingInputs[1]) {
            spacingInputs[1].value = inches;
            spacingInputs[1].dispatchEvent(inputEvent1);
            spacingInputs[1].dispatchEvent(changeEvent);
        }

        
    });
   }






    // dotvalue.order.axle_weight.forEach((data, index) => {
    
    // const axleRows = document.querySelectorAll('tbody tr');

    // const row = axleRows[index]; 
    // if (!row) return; // safety check

    
    // const weightInput = row.querySelector('input.form-control[type="number"]');

    // if (weightInput) {
    //     weightInput.value = data.value; 

        
    //     weightInput.dispatchEvent(new Event('input', { bubbles: true }));
    //     weightInput.dispatchEvent(new Event('change', { bubbles: true }));
    // }
    // });
    // totalFeet += Math.floor(totalInches / 12);
    // totalInches %= 12;



  
}

