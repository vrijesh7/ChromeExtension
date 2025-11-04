function oklahomaStep1(dotvalue) 
{
  console.log(dotvalue);


  var onchange =  new Event('change', { bubbles: true });
  var click = new Event('click');
  var blur = new Event('blur');
  var input = new Event('input', { bubbles: true });
  var keyDown = new KeyboardEvent('keydown', { bubbles: true });

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
   

  const comboCompany = document.querySelector('input[id^="pm-core-ui-combo-company-"][id$="-inputEl"]');
  if (comboCompany) {
    const comboCompanyID = parseInt(comboCompany.id.match(/^pm-core-ui-combo-company-(\d+)-inputEl$/)[1]);
    if (!comboCompany.value.trim()) {
    comboCompany.value = dotvalue.order.Company_Info.name;//dotvalue.order.Company_Info.dot;
    comboCompany.dispatchEvent(keydownEvent);
    comboCompany.dispatchEvent(onchange);
    }
  
    console.log("After DOT  ID :" + 'textfield-' + (comboCompanyID + 7) + '-inputEl');
    if(document.getElementById('textfield-' + (comboCompanyID + 7) + '-inputEl'))
    {

    console.log("After DOT  ID :" + 'textfield-' + (comboCompanyID + 7) + '-inputEl');
    document.getElementById('textfield-' + (comboCompanyID + 7) + '-inputEl').value = dotvalue.order.Company_Info.dot;
    document.getElementById('textfield-' + (comboCompanyID + 7) + '-inputEl').dispatchEvent(onchange);

    }

    console.log("Before description  ID :" + 'textfield-' + (comboCompanyID + 25) + '-inputEl');

    if(document.getElementById('textarea-' + (comboCompanyID + 25) + '-inputEl'))
    {

    console.log("After description  ID :" + 'textfield-' + (comboCompanyID + 25) + '-inputEl');

    document.getElementById('textarea-' + (comboCompanyID + 25) + '-inputEl').value = dotvalue.order.commodityDataValue.description;
    }

    console.log("Before serial  ID :" + 'textfield-' + (comboCompanyID + 26) + '-inputEl');

    if(document.getElementById('textfield-' + (comboCompanyID + 26) + '-inputEl'))
    { 

      console.log("After serial  ID :" + 'textfield-' + (comboCompanyID + 26) + '-inputEl');

    document.getElementById('textfield-' + (comboCompanyID + 26) + '-inputEl').value = dotvalue.order.commodityDataValue.serial;
    }

    console.log("Before total Weight ID :" + 'textfield-' + (comboCompanyID + 13) + '-inputEl');

    const oversizeEl = document.getElementById('textfield-' + (comboCompanyID + 13) + '-inputEl');
    if (oversizeEl && oversizeEl.value === "OVERSIZE") 
      {
      console.log("After total Weight ID :" + 'textfield-' + (comboCompanyID + 13) + '-inputEl');

      oversizeEl.value = 80000;
      oversizeEl.dispatchEvent(inputEvent);
      oversizeEl.dispatchEvent(onchange);
     }

    console.log("before Height ID :" + 'textfield-' + (comboCompanyID + 47) + '-inputEl');

    if(document.getElementById('textfield-' + (comboCompanyID + 47) + '-inputEl'))
    {

       console.log("After Inside if  ID :" + 'textfield-' + (comboCompanyID + 47) + '-inputEl');

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

    if (dotvalue.order && dotvalue.order.axle_weight && dotvalue.order.axle_spacing) {
      const axleWeights = dotvalue.order.axle_weight;
      const axleSpacings = dotvalue.order.axle_spacing;
  
      const maxLength = Math.max(axleWeights.length, axleSpacings.length);
  
      for (let index = 0; index < maxLength; index++) {
          // ========================== AXLE WEIGHT ==========================
          if (axleWeights[index]) {
              let weightCell = document.querySelectorAll(`td[data-columnid="axleWeightLbs"]`)[index];
              if (weightCell) {
                  let inputField = weightCell.querySelector('input');
                  if (!inputField) {
                      weightCell.click(); 
                      inputField = weightCell.querySelector('input');
                  }
                  if (inputField) {
                      inputField.value = axleWeights[index].value;
                      inputField.dispatchEvent(new Event('input', { bubbles: true }));
                      inputField.dispatchEvent(new Event('change', { bubbles: true }));
                      inputField.dispatchEvent(new Event('blur', { bubbles: true }));
                  }
              }
          }
  
          // ========================== AXLE SPACING ==========================
          if (axleSpacings[index]) {
              const { feet, inches } = convertValueSpacingftinch(axleSpacings[index].value);
              let newValue = `${feet}-${inches}`;
  
              let spacingCell = document.querySelector(`td[data-selenium-id="column-core-axle-spacing-${index}"]`);
              if (spacingCell) {
                  let inputField = spacingCell.querySelector('input');
                  if (!inputField) {
                      spacingCell.click(); // Activate field
                      inputField = spacingCell.querySelector('input');
                  }
                  if (inputField) {
                      inputField.value = newValue;
                      inputField.dispatchEvent(new Event('input', { bubbles: true }));
                      inputField.dispatchEvent(new Event('change', { bubbles: true }));
                      inputField.dispatchEvent(new Event('blur', { bubbles: true }));
                  }
              }
          }
  
      }
  } else {
      console.warn("Axle weight or spacing data is missing in dotvalue.order.");
  }

  //    if(document.getElementById('checkbox-' + (comboCompanyID + 72) +'-inputEl'))
  //    {
  //    document.getElementById('checkbox-' + (comboCompanyID + 72) +'-inputEl').checked = true;  
  //    document.getElementById('checkbox-' + (comboCompanyID + 72) +'-inputEl').click();  
  //    document.getElementById('checkbox-' + (comboCompanyID + 72) + '-inputEl').dispatchEvent(click);
  //    document.getElementById('checkbox-' + (comboCompanyID + 72) + '-inputEl').dispatchEvent(onchange);
     
  //    }

  //    if(document.getElementById('checkbox-' + (comboCompanyID + 73) + '-inputEl'))
  //    {
  //    document.getElementById('checkbox-' + (comboCompanyID + 73) + '-inputEl').checked = true;
  //    document.getElementById('checkbox-' + (comboCompanyID + 73) + '-inputEl').click();
  //    document.getElementById('checkbox-' + (comboCompanyID + 73) + '-inputEl').dispatchEvent(click);
  //    document.getElementById('checkbox-' + (comboCompanyID + 73) + '-inputEl').dispatchEvent(onchange);
  //    }
     
  //    if(document.getElementById('checkbox-' + (comboCompanyID+ 92 ) + '-inputEl'))
  //    {
  //    document.getElementById('checkbox-' + (comboCompanyID+ 92 ) + '-inputEl').checked = true;
  //    document.getElementById('checkbox-' + (comboCompanyID+ 92 ) + '-inputEl').click();
  //    document.getElementById('checkbox-' + (comboCompanyID+ 92 ) + '-inputEl').dispatchEvent(click);
  //    document.getElementById('checkbox-' + (comboCompanyID+ 92 ) + '-inputEl').dispatchEvent(onchange);
  //    }
     
     
  //    if (document.getElementById('combo-' + (comboCompanyID + 76) + '-inputEl')?.value.trim() === '') {

  //     if(document.getElementById('combo-' + (comboCompanyID + 76) + '-inputEl'))
  //     {
  //     document.getElementById('combo-' + (comboCompanyID + 76) + '-inputEl').value = dotvalue.order.truck_detail.unit_id;
  //     document.getElementById('combo-' + (comboCompanyID + 76) + '-inputEl').dispatchEvent(input);
  //     document.getElementById('combo-' + (comboCompanyID + 76) + '-inputEl').dispatchEvent(onchange);
  //     }
  // }


  //   if (document.getElementById('textfield-' + (comboCompanyID + 77) + '-inputEl')?.value.trim() === '') 
  //   {

  //     if(document.getElementById('textfield-' + (comboCompanyID + 77) + '-inputEl'))
  //     {
  //     document.getElementById('textfield-' + (comboCompanyID + 77) + '-inputEl').value = dotvalue.order.truck_detail.year;
  //     document.getElementById('textfield-' + (comboCompanyID + 77) + '-inputEl').dispatchEvent(input);
  //     document.getElementById('textfield-' + (comboCompanyID + 77) + '-inputEl').dispatchEvent(onchange);
  //     }

  //    }

  // if (document.getElementById('combo-' + (comboCompanyID + 78) + '-inputEl')?.value.trim() === '') 
  //   {

  //   if(document.getElementById('combo-' + (comboCompanyID + 78) + '-inputEl'))
  //   {
  //   document.getElementById('combo-' + (comboCompanyID + 78) + '-inputEl').value = dotvalue.order.truck_detail.make;
  //   document.getElementById('combo-' + (comboCompanyID + 78) + '-inputEl').dispatchEvent(input);
  //   document.getElementById('combo-' + (comboCompanyID + 78) + '-inputEl').dispatchEvent(onchange);
  //   }

  //   }
  
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






