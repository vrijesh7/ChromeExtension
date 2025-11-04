function louisianaState1(dotvalue) 
{
  var blurEvent = new Event('blur', { bubbles: true });
  var onchange = new Event('change', { bubbles: true });
  var input = new Event('input', { bubbles: true });
  var blur = new Event('blur');
  var click = new Event('click');
  var keyDown = new KeyboardEvent('keydown', { bubbles: true })
  var keyUp = new KeyboardEvent('keyup', { bubbles: true })
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


  var inputEvent = new InputEvent('input', {
    bubbles: true,
    cancelable: true
  });

  const comboCompany = document.querySelector('input[id^="pm-core-ui-combo-company-"][id$="-inputEl"]');
  if (comboCompany) {
    const comboCompanyID = parseInt(comboCompany.id.match(/^pm-core-ui-combo-company-(\d+)-inputEl$/)[1]);
    if (!comboCompany.value.trim()) {
      comboCompany.value = dotvalue.order.Company_Info.dot;
      comboCompany.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true }));
      comboCompany.dispatchEvent(new Event('change', { bubbles: true }));
    }

    
    if (document.getElementById('numberfield-' + (comboCompanyID + 20) + '-inputEl')) {
      document.getElementById('numberfield-' + (comboCompanyID + 20) + '-inputEl').value = "3";
      document.getElementById('numberfield-' + (comboCompanyID + 20) + '-inputEl').dispatchEvent(input);
      document.getElementById('numberfield-' + (comboCompanyID + 20) + '-inputEl').dispatchEvent(keyDown);
      document.getElementById('numberfield-' + (comboCompanyID + 20) + '-inputEl').dispatchEvent(keyUp);
      document.getElementById('numberfield-' + (comboCompanyID + 20) + '-inputEl').dispatchEvent(onchange);
      document.getElementById('numberfield-' + (comboCompanyID + 20) + '-inputEl').dispatchEvent(blurEvent);
    }
    if (document.getElementById('numberfield-' + (comboCompanyID + 21) + '-inputEl')) {
      document.getElementById('numberfield-' + (comboCompanyID + 21) + '-inputEl').value = "1";
      document.getElementById('numberfield-' + (comboCompanyID + 21) + '-inputEl').dispatchEvent(input);
      document.getElementById('numberfield-' + (comboCompanyID + 21) + '-inputEl').dispatchEvent(keyDown);
      document.getElementById('numberfield-' + (comboCompanyID + 21) + '-inputEl').dispatchEvent(keyUp);
      document.getElementById('numberfield-' + (comboCompanyID + 21) + '-inputEl').dispatchEvent(onchange);
      document.getElementById('numberfield-' + (comboCompanyID + 21) + '-inputEl').dispatchEvent(blurEvent);
    }

    let commodityTextArea = document.getElementById('textarea-' + (comboCompanyID + 25) + '-inputEl');

    if (commodityTextArea) {
      commodityTextArea.value = dotvalue.order.commodityDataValue.description;

      commodityTextArea.dispatchEvent(input);
      commodityTextArea.dispatchEvent(keyDown);
      commodityTextArea.dispatchEvent(keyUp);
      commodityTextArea.dispatchEvent(onchange);
      commodityTextArea.dispatchEvent(blurEvent);
    } else {
      console.warn("Commodity textarea field not found.");
    }

    document.getElementById('textfield-' + (comboCompanyID + 26) + '-inputEl').value = dotvalue.order.commodityDataValue.serial;
    document.getElementById('textfield-' + (comboCompanyID + 26) + '-inputEl').dispatchEvent(input);
    document.getElementById('textfield-' + (comboCompanyID + 26) + '-inputEl').dispatchEvent(keyDown);
    document.getElementById('textfield-' + (comboCompanyID + 26) + '-inputEl').dispatchEvent(keyUp);
    document.getElementById('textfield-' + (comboCompanyID + 26) + '-inputEl').dispatchEvent(onchange);
    document.getElementById('textfield-' + (comboCompanyID + 26) + '-inputEl').dispatchEvent(blurEvent);


   

    const oversizeEl = document.getElementById('textfield-' + (comboCompanyID + 13) + '-inputEl');
    if (oversizeEl && oversizeEl.value === "OVERSIZE") 
      {
      oversizeEl.value = 80000;
      oversizeEl.dispatchEvent(inputEvent);
      oversizeEl.dispatchEvent(onchange);
     }


    if(document.getElementById('textfield-' + (comboCompanyID + 47) + '-inputEl'))
    {

    document.getElementById('textfield-' + (comboCompanyID + 47) + '-inputEl').value = `${dotvalue.order.OverallOrderData.overallheight.feet}-${dotvalue.order.OverallOrderData.overallheight.inch}`;
    document.getElementById('textfield-' + (comboCompanyID + 47) + '-inputEl').dispatchEvent(onchange);
    }

   
    if(document.getElementById('textfield-' + (comboCompanyID + 48) + '-inputEl'))
    {//${orderData.order.OverallOrderData.overallheight.feet}ft${orderData.order.OverallOrderData.overallheight.inch}
    document.getElementById('textfield-' + (comboCompanyID + 48) + '-inputEl').value = `${dotvalue.order.OverallOrderData.overallheight.feet}-${dotvalue.order.OverallOrderData.overallheight.inch}`;
    document.getElementById('textfield-' + (comboCompanyID + 48) + '-inputEl').dispatchEvent(onchange);
    }

    if(document.getElementById('textfield-' + (comboCompanyID + 49) + '-inputEl'))
    {
     
     document.getElementById('textfield-' + (comboCompanyID + 49) + '-inputEl').value=  `${dotvalue.order.OverallOrderData.overallwidth.feet}-${dotvalue.order.OverallOrderData.overallwidth.inch}`
    //document.getElementById('textfield-' + (comboCompanyID + 49) + '-inputEl').value= dotvalue.order.Trailer_Info.lenght;
    document.getElementById('textfield-' + (comboCompanyID + 49) + '-inputEl').dispatchEvent(onchange);
    }


    if(document.getElementById('textfield-' + (comboCompanyID + 50) + '-inputEl'))
    {
 
    document.getElementById('textfield-' + (comboCompanyID + 50) + '-inputEl').value = `${dotvalue.order.Trailer_Info.lenght}`;
    //document.getElementById('textfield-' + (comboCompanyID + 50) + '-inputEl').value = `${dotvalue.order.OverallOrderData.overalllength.feet}`;
    document.getElementById('textfield-' + (comboCompanyID + 50) + '-inputEl').dispatchEvent(onchange);
    }

    if(document.getElementById('textfield-' + (comboCompanyID + 51) + '-inputEl'))
    {

    document.getElementById('textfield-' + (comboCompanyID + 51) + '-inputEl').value = `${dotvalue.order.OverallOrderData.overalllength.feet}-${dotvalue.order.OverallOrderData.overalllength.inch}`;
    //document.getElementById('textfield-' + (comboCompanyID + 51) + '-inputEl').value = `${dotvalue.order.OverallOrderData.front_overhang.feet}-${dotvalue.order.OverallOrderData.front_overhang.inch}`;
    document.getElementById('textfield-' + (comboCompanyID + 51) + '-inputEl').dispatchEvent(onchange);
    }

    if(document.getElementById('textfield-' + (comboCompanyID + 52) + '-inputEl'))
    {
     
    document.getElementById('textfield-' + (comboCompanyID + 52) + '-inputEl').value = `${dotvalue.order.OverallOrderData.front_overhang.feet}-${dotvalue.order.OverallOrderData.front_overhang.inch}`;    
    //document.getElementById('textfield-' + (comboCompanyID + 52) + '-inputEl').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}-${dotvalue.order.OverallOrderData.rear_overhang.inch}`;
    }

    if(document.getElementById('textfield-' + (comboCompanyID + 53) + '-inputEl'))
    {
      
    document.getElementById('textfield-' + (comboCompanyID + 53) + '-inputEl').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}-${dotvalue.order.OverallOrderData.rear_overhang.inch}`;    
    //document.getElementById('textfield-' + (comboCompanyID + 52) + '-inputEl').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}-${dotvalue.order.OverallOrderData.rear_overhang.inch}`;
    }

    
    if(document.getElementById('numberfield-' + (comboCompanyID + 58) + '-inputEl'))
    {
    document.getElementById('numberfield-' + (comboCompanyID + 58) + '-inputEl').value = dotvalue.order.totalWeight;
    document.getElementById('numberfield-' + (comboCompanyID + 58) + '-inputEl').dispatchEvent(keyDown);
    document.getElementById('numberfield-' + (comboCompanyID + 58) + '-inputEl').dispatchEvent(input);
    document.getElementById('numberfield-' + (comboCompanyID + 58) + '-inputEl').dispatchEvent(onchange);
    document.getElementById('numberfield-' + (comboCompanyID + 58) + '-inputEl').dispatchEvent(blur);
    document.getElementById('numberfield-' + (comboCompanyID + 58) + '-inputEl').dispatchEvent(click);
    }

    if(document.getElementById('numberfield-' + (comboCompanyID + 59) + '-inputEl'))
    {
    document.getElementById('numberfield-' + (comboCompanyID + 59) + '-inputEl').value = dotvalue.order.axle_weight.length;
    document.getElementById('numberfield-' + (comboCompanyID + 59) + '-inputEl').dispatchEvent(keyDown);
    document.getElementById('numberfield-' + (comboCompanyID + 59) + '-inputEl').dispatchEvent(input);
    document.getElementById('numberfield-' + (comboCompanyID + 59) + '-inputEl').dispatchEvent(onchange);
    document.getElementById('numberfield-' + (comboCompanyID + 59) + '-inputEl').dispatchEvent(blur);
    document.getElementById('numberfield-' + (comboCompanyID + 59) + '-inputEl').dispatchEvent(click);
    }

  //   if (dotvalue.order && dotvalue.order.axle_weight && dotvalue.order.axle_spacing) {
  //     const axleWeights = dotvalue.order.axle_weight;
  //     const axleSpacings = dotvalue.order.axle_spacing;
  
  //     const maxLength = Math.max(axleWeights.length, axleSpacings.length);
  
  //     for (let index = 0; index < maxLength; index++) {
  //         // ========================== AXLE WEIGHT ==========================
  //         if (axleWeights[index]) {
  //             let weightCell = document.querySelectorAll(`td[data-columnid="axleWeightLbs"]`)[index];
  //             if (weightCell) {
  //                 let inputField = weightCell.querySelector('input');
  //                 if (!inputField) {
  //                     weightCell.click(); 
  //                     inputField = weightCell.querySelector('input');
  //                 }
  //                 if (inputField) {
  //                     inputField.value = axleWeights[index].value;
  //                     inputField.dispatchEvent(new Event('input', { bubbles: true }));
  //                     inputField.dispatchEvent(new Event('change', { bubbles: true }));
  //                     inputField.dispatchEvent(new Event('blur', { bubbles: true }));
  //                 }
  //             }

              
  //         }
  
  //         //Tired Size
  //          let tireCell = document.querySelector(`td[data-selenium-id="column-core-tire-size-${index}"]`);

  //         if (tireCell) {
  //           // Try to find or activate the inline input
  //           let inputField = tireCell.querySelector('input');
  //           if (!inputField) {
  //             tireCell.click(); // trigger ExtJS to open the inline editor
  //             inputField = tireCell.querySelector('input');
  //           }

  //         // Once the input exists, fill and dispatch events
  //         if (inputField) {
  //           inputField.value = 11;
  //           inputField.dispatchEvent(new Event('input', { bubbles: true }));
  //           inputField.dispatchEvent(new Event('change', { bubbles: true }));
  //           inputField.dispatchEvent(new Event('blur', { bubbles: true }));
  //           console.log(`Filled Tire Size at index ${index} with value ${sizeValue}`);
  //         } 
  //        }



  //          // Locate the specific tire size cell by index
  //   let tireCell = document.querySelector(`td[data-selenium-id="column-core-tire-size-${index}"]`);

  //   if (tireCell) {
  //     // Try to find or activate the inline input
  //     let inputField = tireCell.querySelector('input');
  //     if (!inputField) {
  //       tireCell.click(); // trigger ExtJS to open the inline editor
  //       inputField = tireCell.querySelector('input');
  //     }
  //         // ========================== AXLE SPACING ==========================
  //         if (axleSpacings[index]) {
  //             const { feet, inches } = convertValueSpacingftinch(axleSpacings[index].value);
  //             let newValue = `${feet}-${inches}`;
  
  //             let spacingCell = document.querySelector(`td[data-selenium-id="column-core-axle-spacing-${index}"]`);
  //             if (spacingCell) {
  //                 let inputField = spacingCell.querySelector('input');
  //                 if (!inputField) {
  //                     spacingCell.click(); // Activate field
  //                     inputField = spacingCell.querySelector('input');
  //                 }
  //                 if (inputField) {
  //                     inputField.value = newValue;
  //                     inputField.dispatchEvent(new Event('input', { bubbles: true }));
  //                     inputField.dispatchEvent(new Event('change', { bubbles: true }));
  //                     inputField.dispatchEvent(new Event('blur', { bubbles: true }));
  //                 }
  //             }
  //         }
  
  //     }
  // } else {
  //     console.warn("Axle weight or spacing data is missing in dotvalue.order.");
  // }


      if (dotvalue.order && dotvalue.order.axle_weight && dotvalue.order.axle_spacing) {
          const axleWeights = dotvalue.order.axle_weight;
          const axleSpacings = dotvalue.order.axle_spacing;

          const maxLength = Math.max(axleWeights.length, axleSpacings.length);

          for (let index = 0; index < maxLength; index++) {

            // ========================== AXLE WEIGHT ==========================
            if (axleWeights[index]) {
              const weightCell = document.querySelectorAll(`td[data-columnid="axleWeightLbs"]`)[index];
              if (weightCell) {
                let inputField = weightCell.querySelector('input');
                if (!inputField) {
                  weightCell.click(); // activate inline edit
                  inputField = weightCell.querySelector('input');
                }
                if (inputField) {
                  inputField.value = axleWeights[index].value;
                  ['input', 'change', 'blur'].forEach(evt =>
                    inputField.dispatchEvent(new Event(evt, { bubbles: true }))
                  );
                }
              }
            }

            

            // ========================== AXLE SPACING ==========================
            if (axleSpacings[index]) {
              const { feet, inches } = convertValueSpacingftinch(axleSpacings[index].value);
              const newValue = `${feet}-${inches}`;
              const spacingCell = document.querySelector(`td[data-selenium-id="column-core-axle-spacing-${index}"]`);
              if (spacingCell) {
                let spacingInput = spacingCell.querySelector('input');
                if (!spacingInput) {
                  spacingCell.click(); // activate inline edit
                  spacingInput = spacingCell.querySelector('input');
                }
                if (spacingInput) {
                  spacingInput.value = newValue;
                  ['input', 'change', 'blur'].forEach(evt =>
                    spacingInput.dispatchEvent(new Event(evt, { bubbles: true }))
                  );
                }
              }
            }

          } // end for loop



          // ========================== TIRE SIZE ==========================
        //  const tireCells = document.querySelectorAll('td[data-columnid="tireSize"]');

        //   tireCells.forEach((tireCell, i) => {
        //     // Click to open inline editor
        //     tireCell.click();

        //     setTimeout(() => {
        //       const input = tireCell.querySelector('input');
        //       if (input) {
        //         input.value = 11;

        //         // Fire input-related events so ExtJS recognizes the change
        //         ['input', 'change', 'blur'].forEach(evt =>
        //           input.dispatchEvent(new Event(evt, { bubbles: true }))
        //         );

        //         console.log(`Filled tire size for row ${i} with value 11`);

        //         // ✅ Now trigger a simulated mouse click on the dropdown
        //         setTimeout(() => {
        //           const rect = tireCell.getBoundingClientRect();

        //           // create and dispatch mouse events
        //           ['mousedown', 'mouseup', 'click'].forEach(type => {
        //             tireCell.dispatchEvent(
        //               new MouseEvent(type, {
        //                 bubbles: true,
        //                 cancelable: true,
        //                 view: window,
        //                 clientX: rect.left + 5,
        //                 clientY: rect.top + 5
        //               })
        //             );
        //           });

        //           console.log(`Clicked on dropdown for tire size row ${i}`);
        //         }, 150); // delay slightly to ensure input fill completes

        //       } else {
        //         console.warn(`No input found for tire size row ${i}`);
        //       }
        //     }, 300); // delay to wait for ExtJS editor
        //   });

 

        } else {
          console.warn("Axle weight or spacing data is missing in dotvalue.order.");
        }



       



 
    const checkbox = document.getElementById('checkbox-' + (comboCompanyID + 75) + '-inputEl');

    if (checkbox) 
    {
      checkbox.checked = true;
      const clickEvent = new Event('click', { bubbles: true });
      const changeEvent = new Event('change', { bubbles: true });
      checkbox.dispatchEvent(clickEvent);
      checkbox.dispatchEvent(changeEvent);
    }

    const checkbox2 = document.getElementById('checkbox-' + (comboCompanyID + 76) + '-inputEl');

    if (checkbox2) {
      checkbox2.checked = true;
      const clickEvent = new Event('click', { bubbles: true });
      const changeEvent = new Event('change', { bubbles: true });
      checkbox2.dispatchEvent(clickEvent);
      checkbox2.dispatchEvent(changeEvent);
    }

  if (document.getElementById('checkbox-' + (comboCompanyID + 92) + '-inputEl')) {
    
      document.getElementById('checkbox-' + (comboCompanyID + 92) + '-inputEl').checked = true;
      document.getElementById('checkbox-' + (comboCompanyID + 92) + '-inputEl').click();
      document.getElementById('checkbox-' + (comboCompanyID + 92) + '-inputEl').dispatchEvent(click);
      document.getElementById('checkbox-' + (comboCompanyID + 92) + '-inputEl').dispatchEvent(onchange);
  }

  console.log("combo for dot" + (comboCompanyID + 79) + " is empty");

  if (document.getElementById('combo-' + (comboCompanyID + 79) + '-inputEl')?.value.trim() === '') {
      console.log("combo " + (comboCompanyID + 79) + " is empty");

      if (document.getElementById('combo-' + (comboCompanyID + 79) + '-inputEl')) {
          document.getElementById('combo-' + (comboCompanyID + 79) + '-inputEl').value = dotvalue.order.truck_detail.unit_id;
          document.getElementById('combo-' + (comboCompanyID + 79) + '-inputEl').dispatchEvent(input);
          document.getElementById('combo-' + (comboCompanyID + 79) + '-inputEl').dispatchEvent(onchange);
          
      }
  }

  if (document.getElementById('textfield-' + (comboCompanyID + 80) + '-inputEl')?.value.trim() === '') {

      if (document.getElementById('textfield-' + (comboCompanyID + 80) + '-inputEl')) {
          document.getElementById('textfield-' + (comboCompanyID + 80) + '-inputEl').value = dotvalue.order.truck_detail.year;
          document.getElementById('textfield-' + (comboCompanyID + 80) + '-inputEl').dispatchEvent(input);
          document.getElementById('textfield-' + (comboCompanyID + 80) + '-inputEl').dispatchEvent(onchange);
          
      }
  }

  if (document.getElementById('combo-' + (comboCompanyID + 81) + '-inputEl')?.value.trim() === '') 
    {
      
      if (document.getElementById('combo-' + (comboCompanyID + 81) + '-inputEl')) {     
          document.getElementById('combo-' + (comboCompanyID + 81) + '-inputEl').value = dotvalue.order.truck_detail.make;
          document.getElementById('combo-' + (comboCompanyID + 81) + '-inputEl').dispatchEvent(input);
          document.getElementById('combo-' + (comboCompanyID + 81) + '-inputEl').dispatchEvent(onchange);
          
      }
    }



    if (document.getElementById('textfield-' + (comboCompanyID + 82) + '-inputEl')?.value.trim() === '') {

      if(document.getElementById('textfield-' + (comboCompanyID + 82) + '-inputEl'))
      {
      document.getElementById('textfield-' + (comboCompanyID + 82) + '-inputEl').value = dotvalue.order.truck_detail.license_plate;
      document.getElementById('textfield-' + (comboCompanyID + 82) + '-inputEl').dispatchEvent(input);
      document.getElementById('textfield-' + (comboCompanyID + 82) + '-inputEl').dispatchEvent(onchange);
      }

    }

    // if (document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 83) + '-inputEl')?.value.trim() === '') 
    //   {
    //   if(document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 83) + '-inputEl'))
    //   {
    //   document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 83) + '-inputEl').value = dotvalue.order.truck_detail.license_state;
    //   document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 83) + '-inputEl').dispatchEvent(input);
    //   document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 83) + '-inputEl').dispatchEvent(onchange);
    //   }
    // }

 
    if (document.getElementById('textfield-' + (comboCompanyID + 84) + '-inputEl')?.value.trim() === '')  
      {
        if(document.getElementById('textfield-' + (comboCompanyID + 84) + '-inputEl'))
        {
      document.getElementById('textfield-' + (comboCompanyID + 84) + '-inputEl').value = dotvalue.order.truck_detail.vin;
      document.getElementById('textfield-' + (comboCompanyID + 84) + '-inputEl').dispatchEvent(input);
      document.getElementById('textfield-' + (comboCompanyID + 84) + '-inputEl').dispatchEvent(onchange);
        }  
    }


    if (document.getElementById('textfield-' + (comboCompanyID + 85) + '-inputEl')?.value.trim() === '') 
      {
        if(document.getElementById('textfield-' + (comboCompanyID + 85) + '-inputEl'))
        {
      document.getElementById('textfield-' + (comboCompanyID + 85) + '-inputEl').value = dotvalue.order.truck_detail.unit_id;
      document.getElementById('textfield-' + (comboCompanyID + 85) + '-inputEl').dispatchEvent(input);
      document.getElementById('textfield-' + (comboCompanyID + 85) + '-inputEl').dispatchEvent(onchange);
        }  
      }

      if (document.getElementById('combo-' + (comboCompanyID + 88) + '-inputEl')?.value.trim() === '') {

      if (document.getElementById('combo-' + (comboCompanyID + 88) + '-inputEl')) {
          document.getElementById('combo-' + (comboCompanyID + 88) + '-inputEl').value = dotvalue.order.Trailer_Info.trailer_id;//dotvalue.order.truck_detail.unit_id;
          document.getElementById('combo-' + (comboCompanyID + 88) + '-inputEl').dispatchEvent(input);
          document.getElementById('combo-' + (comboCompanyID + 88) + '-inputEl').dispatchEvent(onchange);
          
      }
  }

      if (document.getElementById('textfield-' + (comboCompanyID + 89) + '-inputEl')?.value.trim() === '') 
        {
          if(document.getElementById('textfield-' + (comboCompanyID + 89) + '-inputEl'))
          {
        document.getElementById('textfield-' + (comboCompanyID + 89) + '-inputEl').value = dotvalue.order.Trailer_Info.year;
        document.getElementById('textfield-' + (comboCompanyID + 89) + '-inputEl').dispatchEvent(input);
        document.getElementById('textfield-' + (comboCompanyID + 89) + '-inputEl').dispatchEvent(onchange);
        document.getElementById('textfield-' + (comboCompanyID + 89) + '-inputEl').dispatchEvent(blur);
          } 
      }

      if (document.getElementById('combo-' + (comboCompanyID + 90) + '-inputEl')?.value.trim() === '') 
        {
          if(document.getElementById('combo-' + (comboCompanyID + 90) + '-inputEl'))
          {
        document.getElementById('combo-' + (comboCompanyID + 90) + '-inputEl').value = dotvalue.order.Trailer_Info.make;
        document.getElementById('combo-' + (comboCompanyID + 90) + '-inputEl').dispatchEvent(input);
        document.getElementById('combo-' + (comboCompanyID + 90) + '-inputEl').dispatchEvent(onchange);
        document.getElementById('combo-' + (comboCompanyID + 90) + '-inputEl').dispatchEvent(blur);
          }  
      }

      if (document.getElementById('textfield-' + (comboCompanyID + 91) + '-inputEl')?.value.trim() === '') {
        if(document.getElementById('textfield-' + (comboCompanyID + 91) + '-inputEl'))
        {
        document.getElementById('textfield-' + (comboCompanyID + 91) + '-inputEl').value = dotvalue.order.Trailer_Info.license_plate;
        document.getElementById('textfield-' + (comboCompanyID + 91) + '-inputEl').dispatchEvent(input);
        document.getElementById('textfield-' + (comboCompanyID + 91) + '-inputEl').dispatchEvent(onchange);
        document.getElementById('textfield-' + (comboCompanyID + 91) + '-inputEl').dispatchEvent(blur);
        }
      }


      // if (document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 92) + '-inputEl')?.value.trim() === '') {
      //   if(document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 92) + '-inputEl'))
      //   {
      //   document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 92) + '-inputEl').value = dotvalue.order.Trailer_Info.state;
      //   document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 92) + '-inputEl').dispatchEvent(input);
      //   document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 92) + '-inputEl').dispatchEvent(onchange);
      //   document.getElementById('pm-core-ui-combo-state-' + (comboCompanyID + 92) + '-inputEl').dispatchEvent(blur);
      //   }
      // }


      if (document.getElementById('textfield-' + (comboCompanyID + 93) + '-inputEl')?.value.trim() === '') {
        if(document.getElementById('textfield-' + (comboCompanyID + 93) + '-inputEl'))
        {
        document.getElementById('textfield-' + (comboCompanyID + 93) + '-inputEl').value = dotvalue.order.Trailer_Info.vin;
        document.getElementById('textfield-' + (comboCompanyID + 93) + '-inputEl').dispatchEvent(input);
        document.getElementById('textfield-' + (comboCompanyID + 93) + '-inputEl').dispatchEvent(onchange);
        document.getElementById('textfield-' + (comboCompanyID + 93) + '-inputEl').dispatchEvent(blur);
        }
      }


      if (document.getElementById('textfield-' + (comboCompanyID + 99) + '-inputEl')?.value.trim() === '') {
        if(document.getElementById('textfield-' + (comboCompanyID + 99) + '-inputEl'))
        {
        document.getElementById('textfield-' + (comboCompanyID + 99) + '-inputEl').value = dotvalue.order.Trailer_Info.trailer_id;
        document.getElementById('textfield-' + (comboCompanyID + 99) + '-inputEl').dispatchEvent(input);
        document.getElementById('textfield-' + (comboCompanyID + 99) + '-inputEl').dispatchEvent(onchange);
        document.getElementById('textfield-' + (comboCompanyID + 99) + '-inputEl').dispatchEvent(blur);
        }
      }


  

    


   }

}