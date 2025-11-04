
function arkansasState1(dotvalue)
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
    simulateTyping('#searchDOT1',dotvalue.order.Company_Info.dot, 500)
  
    document.getElementById('searchDOT1').dispatchEvent(keypressEvent);
    document.getElementById('searchDOT1').dispatchEvent(keydownEvent);
    document.getElementById('searchDOT1').dispatchEvent(onchange);
 
     
}

function arkansasState2(dotvalue)
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
  
      // Create a keyup event
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
        
      if(document.getElementById('V_52'))
      {
      document.getElementById('V_52').value=dotvalue.order.truck_detail.license_state;
      }
      if(document.querySelector('.k-input-value-text'))
      {
      document.querySelector('.k-input-value-text').innerText = dotvalue.order.truck_detail.license_state;
      }

       if (document.getElementById('V_53')) {
       document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;
       }

    if (document.getElementById('V_57')) {
        document.getElementById('V_57').value = dotvalue.order.truck_detail.make;
    }

    if (document.getElementById('V_55')) {
        document.getElementById('V_55').value = dotvalue.order.truck_detail.year;
    }

    if (document.getElementById('V_59')) {
        document.getElementById('V_59').value = dotvalue.order.truck_detail.vin;
    }

    if (document.getElementById('V_60')) {
        document.getElementById('V_60').value = 80000;
    }

       if (document.getElementById('V_71')) {
       document.getElementById('V_71').value = dotvalue.order.Trailer_Info.state;
        }

        if (document.querySelector('.k-input-value-text')) {
            document.querySelector('.k-input-value-text').innerText = dotvalue.order.Trailer_Info.state;
        }

        if (document.getElementById('V_72')) {
            document.getElementById('V_72').value = dotvalue.order.Trailer_Info.license_plate;
        }

        if (document.getElementById('V_74')) {
            document.getElementById('V_74').value = dotvalue.order.Trailer_Info.year;
        }

        if (document.getElementById('V_78')) {
            document.getElementById('V_78').value = dotvalue.order.Trailer_Info.vin;
        }

        if (document.getElementById('V_80')) {
            document.getElementById('V_80').value = dotvalue.order.Trailer_Info.lenght;
        }

        if (document.getElementById('V_197')) {
            document.getElementById('V_197').value = dotvalue.order.commodityDataValue.description;
        }

        if (document.getElementById('V_203')) {
            document.getElementById('V_203').value = dotvalue.order.commodityDataValue.serial;
        }

       // Overall Vehicle Dimensions
        if (document.getElementById('V_12')) {
            document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
        }

        if (document.getElementById('V_13')) {
            document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
        }

        if (document.getElementById('V_11')) {
            document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
        }

        if (document.getElementById('V_17')) {
            document.getElementById('V_17').value = dotvalue.order.totalWeight;
        }

        if (document.getElementById('V_14')) {
            document.getElementById('V_14').value = (dotvalue.order.OverallOrderData.front_overhang.feet > 0 || 
                (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inch > 0)) 
                ? "0'" 
                : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inch}"`;
        }

        // Axle Weight
        if (document.getElementById('V_18')) {
            document.getElementById('V_18').value = dotvalue.order.axle_weight.length;
            document.getElementById('V_18').dispatchEvent(keypressEvent);
            document.getElementById('V_18').dispatchEvent(onchange);
        }


        if (document.getElementById('V_295')) {
            document.getElementById('V_295').value = 14000;
            document.getElementById('V_295').dispatchEvent(keypressEvent);
            document.getElementById('V_295').dispatchEvent(onchange);
        }

        if (document.getElementById('V_259')) {
            document.getElementById('V_259').value = 1;
            document.getElementById('V_259').dispatchEvent(keypressEvent);
            document.getElementById('V_259').dispatchEvent(onchange);
        }



    

    let totalWeight = 0; 
    
     dotvalue.order.axle_weight.forEach(function(data,index) {                          
     var inputId = 'V_19_'+(index);
     document.querySelector('#' + inputId ).value=data.value;
     var weight = parseFloat( document.querySelector('#' + inputId ).value) || 0;
     totalWeight += weight;
     });   
    
     if(document.querySelector('#total_axle_weight'))
     {
     document.querySelector('#total_axle_weight').value = totalWeight;
     }
     
     

     dotvalue.order.axle_weight.forEach(function(data,index) {


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
       var numTiresId = 'V_22_' + index;
       var treadSizeId = 'V_23_' + index;
       document.querySelector('#' + numTiresId).value = tireCount;
       document.querySelector('#' + treadSizeId).value = 11;
      });   
      

     let totalAxleSpacing = 0;
     dotvalue.order.axle_spacing.forEach(function(data, index) {
       const { feet, inches } = convertValueSpacingftinch(data.value);
       var feetval = feet+"'";
       var inchesval = inches+'"';
       var spaceId = 'V_20_' + (index);
       document.querySelector('#' + spaceId).value = feetval+' '+inchesval;
       document.querySelector('#' + spaceId).dispatchEvent(keypressEvent);
       document.querySelector('#' + spaceId).dispatchEvent(keydownEvent);
       var spacingInInches = (feet * 12) + inches;
       totalAxleSpacing += spacingInInches;
   });
    const totalFeet = Math.floor(totalAxleSpacing / 12);
    const totalInches = totalAxleSpacing % 12;

   if(document.querySelector('#total_axle_spacing'))
   {
   document.querySelector('#total_axle_spacing').value = totalFeet + "' " + totalInches + '"';
   }


    }

