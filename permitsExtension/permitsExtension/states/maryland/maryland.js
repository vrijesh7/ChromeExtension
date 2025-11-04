function marylandState1(dotvalue)
{
    
    var onchange =  new Event('change', { bubbles: true });
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
    
    
    document.getElementById('searchDOT1').value = '';
    document.getElementById('searchHauler2_anywhere').checked = true;
    document.getElementById('searchHauler2_anywhere').dispatchEvent(click);
   simulateTyping('#searchDOT1',dotvalue.order.Company_Info.dot,500)
  
    document.getElementById('searchDOT1').dispatchEvent(keypressEvent);
    document.getElementById('searchDOT1').dispatchEvent(keydownEvent);
    document.getElementById('searchDOT1').dispatchEvent(onchange);

}

function marylandState2(dotvalue)
{      

  
    
    var onchange =  new Event('change', { bubbles: true });
    var click = new Event('click');

    var blurEvent = new FocusEvent('blur', {
      bubbles: true,
      cancelable: true
    });

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
    
      var mouseoutEvent = new MouseEvent('mouseout', {
        bubbles: true,
        cancelable: true,
        clientX: 100,
        clientY: 100
      });

       
        document.getElementById('V_56').value = dotvalue.order.truck_detail.make;

        var totalLength = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;
        document.getElementById('V_63').value = totalLength;
       
         
       document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;

        var dropdown = document.getElementById('V_52');
        var dynamicValue = dotvalue.order.truck_detail.license_state;

        if (dropdown) {
        
          dropdown.value = dynamicValue;

          var displayElement = dropdown.closest("span.k-picker").querySelector(".k-input-value-text");

          if (displayElement) {
            displayElement.textContent = dynamicValue;
          }

          var changeEvent = new Event('change', { bubbles: true });
          dropdown.dispatchEvent(changeEvent);
        }


       if(document.getElementById('V_51').value === "")
        {
         document.getElementById('V_51').value = "3";
         document.getElementById('V_51').dispatchEvent(onchange);
         document.getElementById('V_51').value = "Truck-Tractor";
         document.getElementById('V_51').dispatchEvent(onchange);
        }


        var dropdown = document.getElementById('V_51');
        var dynamicValue = "Truck-Tractor";
        
        if (dropdown) {
          dropdown.value = dynamicValue;
        
          var displayElement = dropdown.closest("span.k-picker").querySelector(".k-input-value-text");
        
          if (displayElement) {
            displayElement.textContent = dynamicValue;
          }
        
          var changeEvent = new Event('change', { bubbles: true });
          dropdown.dispatchEvent(changeEvent);
        }

        var dropdown = document.getElementById('V_70');
        var dynamicValue = "Semi Trailer";
        
        if (dropdown) {
         
          dropdown.value = dynamicValue;
        
          var displayElement = dropdown.closest("span.k-picker").querySelector(".k-input-value-text");
        
          if (displayElement) {
            displayElement.textContent = dynamicValue;
          }
        
          var changeEvent = new Event('change', { bubbles: true });
          dropdown.dispatchEvent(changeEvent);
        }

       document.getElementById('V_62').value = dotvalue.order.EmptyWeightAttributes;
       

       document.getElementById('V_75').value = dotvalue.order.Trailer_Info.make;
       document.getElementById('V_83').value = dotvalue.order.Trailer_Info.axle;
       document.getElementById('V_72').value = dotvalue.order.Trailer_Info.license_plate;

       var dropdown = document.getElementById('V_71');
       var dynamicValue1 = dotvalue.order.Trailer_Info.state;
       
       if (dropdown) {
         
         dropdown.value = dynamicValue1;
       
         var displayElement = dropdown.closest("span.k-picker").querySelector(".k-input-value-text");
       
         if (displayElement) {
           displayElement.textContent = dynamicValue1;
         }
         var changeEvent = new Event('change', { bubbles: true });
         dropdown.dispatchEvent(changeEvent);
       }


       document.getElementById('V_82').value = dotvalue.order.Trailer_Info.empty_weight;

      //  document.getElementById('V_197').value = dotvalue.order.commodityDataValue.description;
      const v197Field = document.getElementById('V_197');

      if (v197Field) {
        v197Field.value = dotvalue.order.commodityDataValue.description;
        v197Field.dispatchEvent(new Event('input', { bubbles: true }));   
      } else {
        console.log("V_197 field not found.");
      }


      console.log("Total Weight:", dotvalue.order.totalWeight);
      console.log("EmptyWeightAttributes:", dotvalue.order.EmptyWeightAttributes);
      console.log("Trailer empty weight:", dotvalue.order.Trailer_Info.empty_weight);

      var weight = Number(dotvalue.order.totalWeight) - (Number(dotvalue.order.EmptyWeightAttributes) + Number(dotvalue.order.Trailer_Info.empty_weight));
  
       //dotvalue.order.totalWeight
       document.getElementById('V_196').value = weight;
       //document.getElementById('V_196').value = dotvalue.order.commodityDataValue.weight;
       document.getElementById('V_199').value = dotvalue.order.commodityDataValue.make;
       document.getElementById('V_203').value = dotvalue.order.commodityDataValue.serial;

       document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
       document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
       document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
       

       var element1 = document.getElementById('V_17');

       if (element1.value !== dotvalue.order.totalWeight) {
         if (element1.hasAttribute('readonly')) {
           element1.removeAttribute('readonly');
         }
         element1.value = dotvalue.order.totalWeight;
       
         if (element1.kendoTextBox) {
           element1.kendoTextBox.value(dotvalue.order.totalWeight);
         }
       
         setTimeout(function () {
           document.getElementById('V_60').value = 80000;
       
           var element18 = document.getElementById('V_18');
           element18.value = dotvalue.order.axle_weight.length;
           element18.dispatchEvent(new Event('change'));
       
           let totalWeight = 0;
           dotvalue.order.axle_weight.forEach(function (data, index) {
             var inputId = 'V_19_' + index;
             var inputElement = document.querySelector('#' + inputId);
             if (inputElement) {
               inputElement.value = data.value;
               totalWeight += parseFloat(data.value) || 0;
               inputElement.dispatchEvent(new Event('change'));
             }
           });
       
           document.querySelector('#total_axle_weight').value = totalWeight;
       
           dotvalue.order.axle_weight.forEach(function (data, index) {
             let name = data.name;
             let tireCount, tireName;
             if (name.includes(":")) {
               let [namePart, tireInfo] = name.split(":");
               [tireCount, tireName] = tireInfo.split(" ");
             } else {
               let nameParts = name.split(" ");
               tireCount = nameParts[1];
               tireName = "Tires";
             }
       
             var numTiresId = 'V_22_' + index;
             var treadSizeId = 'V_23_' + index;
       
             document.querySelector('#' + numTiresId).value = tireCount;
             document.querySelector('#' + numTiresId).dispatchEvent(new Event('change'));
             document.querySelector('#' + treadSizeId).value = 11;
             document.querySelector('#' + treadSizeId).dispatchEvent(new Event('change'));
           });
       
           let totalAxleSpacing = 0;
           dotvalue.order.axle_spacing.forEach(function (data, index) {
             const { feet, inches } = convertValueSpacingftinch(data.value);
             var feetVal = feet + "'";
             var inchesVal = inches + '"';
             var spaceId = 'V_20_' + index;
             var spaceElement = document.querySelector('#' + spaceId);
       
             if (spaceElement) {
               spaceElement.value = feetVal + ' ' + inchesVal;
               spaceElement.dispatchEvent(new Event('change'));
             }
       
             totalAxleSpacing += (feet * 12) + inches;
           });
       
           const totalFeet = Math.floor(totalAxleSpacing / 12);
           const totalInches = totalAxleSpacing % 12;
       
           document.querySelector('#total_axle_spacing').value = totalFeet + "' " + totalInches + '"';
         }, 0);
       }
       
      
}