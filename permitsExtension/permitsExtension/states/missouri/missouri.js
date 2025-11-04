function missouriState1(dotvalue)
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
 

function missouriState2(dotvalue)
{   
   
    //  var blurEvent = new Event('blur');
     const blurEvent = new Event('blur', { bubbles: true });
     var onchange =  new Event('change', { bubbles: true });
     var input = new Event('input', { bubbles: true });
     var click = new Event('click');

     var event = new Event('change', {
        bubbles: true,
        cancelable: true
      });

    const inputEvent = new Event('input', { bubbles: true, cancelable: true });

    //  var keypressEvent = new KeyboardEvent('keypress', {
    //   key: 'a', 
    //   code: 'KeyA', 
    //   charCode: 97, 
    //   keyCode: 97, 
    //   bubbles: true, 
    //   cancelable: true 
    // });

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
    
    // if(document.getElementById('V_464_1') &&    document.getElementById('V_464_1').value!='89')
    // {
    //   var hiddenInput = document.getElementById('V_464_1');
    //   hiddenInput.value = "OTHER -";
    //   hiddenInput.value = "89";

    //   hiddenInput.dispatchEvent(blurEvent);
    //   hiddenInput.dispatchEvent(onchange);
    //   return;
    // }
  

    setTimeout(() => {
    var dropdown1 = document.getElementById('V_28');
    if (dropdown1) {
  
      dropdown1.value = '0';
      dropdown1.dispatchEvent(onchange);
      dropdown1.dispatchEvent(click);
  
    }


    var dropdown = document.getElementById('V_2');
    if (dropdown) {
  
      dropdown.value = '1';
      dropdown.dispatchEvent(onchange);
      dropdown.dispatchEvent(click);
  
    }

     if(document.getElementById('V_463_1'))
       {
       document.getElementById('V_463_1').value = dotvalue.order.commodityDataValue.description;
       document.getElementById('V_463_1').dispatchEvent(inputEvent);
       document.getElementById('V_463_1').dispatchEvent(keypressEvent);
       document.getElementById('V_463_1').dispatchEvent(event);
       document.getElementById('V_463_1').dispatchEvent(blurEvent);
       }

       if(document.getElementById('V_465_1'))
       {
        document.getElementById('V_465_1').value = dotvalue.order.commodityDataValue.piece_count;
        document.getElementById('V_465_1').dispatchEvent(inputEvent);
       document.getElementById('V_465_1').dispatchEvent(keypressEvent);
       document.getElementById('V_465_1').dispatchEvent(event);
       document.getElementById('V_465_1').dispatchEvent(blurEvent);
       }

       if(document.getElementById('V_466_1'))
       {
      document.getElementById('V_466_1').value = dotvalue.order.commodityDataValue.serial.replace(/-/g, '');
      document.getElementById('V_466_1').dispatchEvent(inputEvent);
      document.getElementById('V_466_1').dispatchEvent(keypressEvent);
      document.getElementById('V_466_1').dispatchEvent(event);
      document.getElementById('V_466_1').dispatchEvent(blurEvent);
       }

       if(document.getElementById('V_467_1'))
       {
      document.getElementById('V_467_1').value = `${dotvalue.order.commodityDataValue.width.feet}' ${dotvalue.order.commodityDataValue.width.inch}"`;
      document.getElementById('V_467_1').dispatchEvent(inputEvent);
      document.getElementById('V_467_1').dispatchEvent(keypressEvent);
      document.getElementById('V_467_1').dispatchEvent(event);
      document.getElementById('V_467_1').dispatchEvent(blurEvent);
       }

       if(document.getElementById('V_468_1'))
        {
    document.getElementById('V_468_1').value = `${dotvalue.order.commodityDataValue.length.feet}' ${dotvalue.order.commodityDataValue.length.inch}"`;
    document.getElementById('V_468_1').dispatchEvent(inputEvent);
      document.getElementById('V_468_1').dispatchEvent(keypressEvent);
      document.getElementById('V_468_1').dispatchEvent(event);
      document.getElementById('V_468_1').dispatchEvent(blurEvent);
        }

        if(document.getElementById('V_469_1'))
          {
        document.getElementById('V_469_1').value = `${dotvalue.order.commodityDataValue.height.feet}' ${dotvalue.order.commodityDataValue.height.inch}"`;
        document.getElementById('V_469_1').dispatchEvent(inputEvent);
        document.getElementById('V_469_1').dispatchEvent(keypressEvent);
        document.getElementById('V_469_1').dispatchEvent(event);
        document.getElementById('V_469_1').dispatchEvent(blurEvent);        
         }

          if(document.getElementById('V_470_1'))
            {
        document.getElementById('V_470_1').value = dotvalue.order.commodityDataValue.model;
        document.getElementById('V_470_1').dispatchEvent(inputEvent);
        document.getElementById('V_470_1').dispatchEvent(keypressEvent);
        document.getElementById('V_470_1').dispatchEvent(event);
        document.getElementById('V_470_1').dispatchEvent(blurEvent); 
            }

    if(document.getElementById('V_478'))
    {
      document.getElementById('V_478').value = "1";
      document.getElementById('V_478').value = "1";
      document.getElementById('V_478').dispatchEvent(blurEvent);
      document.getElementById('V_478').dispatchEvent(onchange);
    }


     if(document.getElementById('V_488'))
     {
       document.getElementById('V_488').value = "Yes";
       document.getElementById('V_488').value = "1";
       document.getElementById('V_488').setAttribute('previous-value', "Yes");
       document.getElementById('V_488').dispatchEvent(onchange);
     }
//     // Truck
//     if( document.getElementById('V_56').va){
     if(document.getElementById('V_53'))
     {
      document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;
      document.getElementById('V_53').dispatchEvent(inputEvent);
      document.getElementById('V_53').dispatchEvent(keypressEvent);
      document.getElementById('V_53').dispatchEvent(event);
      document.getElementById('V_53').dispatchEvent(blurEvent); 
     }

    if(document.getElementById('V_52').value !== dotvalue.order.truck_detail.license_state)
    {
      document.getElementById('V_52').value= dotvalue.order.truck_detail.license_state;
      document.getElementById('V_52').value= dotvalue.order.truck_detail.license_state;
      document.getElementById('V_52').setAttribute('previous-value', dotvalue.order.truck_detail.license_state);
      document.getElementById('V_52').dispatchEvent(onchange);
      
    }

    if(document.getElementById('V_55'))
    {
     document.getElementById('V_55').value = dotvalue.order.truck_detail.year;
     document.getElementById('V_55').dispatchEvent(inputEvent);
    document.getElementById('V_55').dispatchEvent(keypressEvent);
    document.getElementById('V_55').dispatchEvent(event);
    document.getElementById('V_55').dispatchEvent(blurEvent); 
    }
    if(document.getElementById('V_59'))
    {
    document.getElementById('V_59').value = dotvalue.order.truck_detail.vin;
    document.getElementById('V_59').dispatchEvent(inputEvent);
    document.getElementById('V_59').dispatchEvent(keypressEvent);
    document.getElementById('V_59').dispatchEvent(event);
    document.getElementById('V_59').dispatchEvent(blurEvent); 
    }

    // if(document.getElementById('V_51').value !== 'TRUCK-TRACTOR')  //2
    // {
    //   document.getElementById('V_51').value = "TRUCK-TRACTOR";
    //   document.getElementById('V_51').value = "2";
    //   document.getElementById('V_51').setAttribute('previous-value', "TRUCK-TRACTOR");
    //   document.getElementById('V_51').dispatchEvent(onchange);
    // }
  
    
        // document.getElementById('V_56').value = dotvalue.order.truck_detail.make;
        // document.getElementById('V_56').innerText = dotvalue.order.truck_detail.make;


//   }
//  // Trailer
//     if( document.getElementById('V_75')){

//       document.getElementById('V_75').value = dotvalue.order.Trailer_Info.make;

setTimeout(() => {
        
         if(document.getElementById('V_72'))
         {
         document.getElementById('V_72').value = dotvalue.order.Trailer_Info.license_plate.replace(/-/g, '');
         document.getElementById('V_72').dispatchEvent(inputEvent);
          document.getElementById('V_72').dispatchEvent(keypressEvent);
          document.getElementById('V_72').dispatchEvent(event);
          document.getElementById('V_72').dispatchEvent(blurEvent);  
        }      


      if(document.getElementById('V_71').value !== dotvalue.order.Trailer_Info.state)
      {
       document.getElementById('V_71').value = dotvalue.order.Trailer_Info.state;
       document.getElementById('V_71').value = dotvalue.order.Trailer_Info.state;
       document.getElementById('V_71').setAttribute('previous-value', dotvalue.order.Trailer_Info.state);
       //document.getElementById('V_71').dispatchEvent(onchange);
       document.getElementById('V_71').dispatchEvent(inputEvent);
      document.getElementById('V_71').dispatchEvent(keypressEvent);
      document.getElementById('V_71').dispatchEvent(event);
      document.getElementById('V_71').dispatchEvent(blurEvent);  
      }
  
    
       if(document.getElementById('V_74'))
       {
       document.getElementById('V_74').value = dotvalue.order.Trailer_Info.year;
        document.getElementById('V_74').dispatchEvent(inputEvent);
      document.getElementById('V_74').dispatchEvent(keypressEvent);
      document.getElementById('V_74').dispatchEvent(event);
      document.getElementById('V_74').dispatchEvent(blurEvent);  
       }

       if(document.getElementById('V_78'))
       {
       document.getElementById('V_78').value = dotvalue.order.Trailer_Info.vin;
       document.getElementById('V_78').dispatchEvent(inputEvent);
      document.getElementById('V_78').dispatchEvent(keypressEvent);
      document.getElementById('V_78').dispatchEvent(event);
      document.getElementById('V_78').dispatchEvent(blurEvent);  
       }

      // if(document.getElementById('V_70') &&    document.getElementById('V_70').value!='DOUBLE DROP TRLR')
      // {
      //   document.getElementById('V_70').value = "DOUBLE DROP TRLR";
      //   document.getElementById('V_70').value = "6";
      //   document.getElementById('V_70').setAttribute('previous-value', "DOUBLE DROP TRLR");
      //   document.getElementById('V_70').dispatchEvent(onchange);
      // }
  
//     }

   
   
    
setTimeout(() => {
    //Overall Vehicle Dimensions
    if(document.getElementById('V_12'))
    {
    document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
    document.getElementById('V_12').dispatchEvent(inputEvent);
    document.getElementById('V_12').dispatchEvent(keypressEvent);
    document.getElementById('V_12').dispatchEvent(event);
    document.getElementById('V_12').dispatchEvent(blurEvent);  
    
    }
    if(document.getElementById('V_13'))
    {
    document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
    document.getElementById('V_13').dispatchEvent(inputEvent);
    document.getElementById('V_13').dispatchEvent(keypressEvent);
    document.getElementById('V_13').dispatchEvent(event);
    document.getElementById('V_13').dispatchEvent(blurEvent);  
    }
    if(document.getElementById('V_11'))
    {
    document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
    document.getElementById('V_11').dispatchEvent(inputEvent);
    document.getElementById('V_11').dispatchEvent(keypressEvent);
    document.getElementById('V_11').dispatchEvent(event);
    document.getElementById('V_11').dispatchEvent(blurEvent);    
    }
    if(document.getElementById('V_310'))
    {
    document.getElementById('V_310').value = dotvalue.order.Trailer_Info.lenght;
    document.getElementById('V_310').dispatchEvent(inputEvent);
    document.getElementById('V_310').dispatchEvent(keypressEvent);
    document.getElementById('V_310').dispatchEvent(event);
    document.getElementById('V_310').dispatchEvent(blurEvent);  
    }
    // if(document.getElementById('V_17'))
    //  {
    // document.getElementById('V_17').value = dotvalue.order.totalWeight;
    // document.getElementById('V_17').dispatchEvent(input);
    // document.getElementById('V_17').dispatchEvent(onchange);
    //  }

    var contactNameInput = document.getElementById('V_17');

    if (contactNameInput) {

      if (contactNameInput.hasAttribute('readonly')) {
        contactNameInput.removeAttribute('readonly');
      }

      contactNameInput.value = dotvalue.order.totalWeight;

      contactNameInput.dispatchEvent(input);
      contactNameInput.dispatchEvent(onchange);
    }

    if(document.getElementById('V_14'))
    {
      document.getElementById('V_14').value = dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inch}"`;
      document.getElementById('V_14').dispatchEvent(input);
      document.getElementById('V_14').dispatchEvent(onchange);
    }
    if(document.getElementById('V_15'))
    {
      document.getElementById('V_15').value = dotvalue.order.OverallOrderData.rear_overhang.feet > 0 || (dotvalue.order.OverallOrderData.rear_overhang.feet === 0 && dotvalue.order.OverallOrderData.rear_overhang.inch> 0) ? "0'" : `${dotvalue.order.OverallOrderData.rear_overhang.feet}'${dotvalue.order.OverallOrderData.rear_overhang.inch}"`;
      document.getElementById('V_15').dispatchEvent(input);
      document.getElementById('V_15').dispatchEvent(onchange);
    }
  }, 50);
  }, 100);
  
//     //  Axle Weight


    if(document.getElementById('V_18'))
    { 
      document.getElementById('V_18').value = dotvalue.order.axle_weight.length;
      document.getElementById('V_18').dispatchEvent(keypressEvent); 
      document.getElementById('V_18').dispatchEvent(input);
      document.getElementById('V_18').dispatchEvent(onchange);
    }


     if(document.getElementById('V_8'))
     {
       document.getElementById('V_8').value = "No";
       document.getElementById('V_8').value = "0";
       document.getElementById('V_8').setAttribute('previous-value', "No");
       document.getElementById('V_8').dispatchEvent(onchange);
      
      }
    }, 200);


  

       let totalWeight = 0; 
        
      dotvalue.order.axle_weight.forEach(function(data,index) {                          
      var inputId = 'V_19_'+(index);
      if(document.getElementById(inputId))
        {
      document.querySelector('#' + inputId).value=data.value;
      var weight = parseFloat( document.querySelector('#' + inputId ).value) || 0;
      totalWeight += weight;
        }
      
      });  
      if(document.querySelector('#total_axle_weight'))
      {
        document.querySelector('#total_axle_weight').value = totalWeight;
      }
   
  
   let totalAxleSpacing = 0;
   dotvalue.order.axle_spacing.forEach(function(data, index) {
     const { feet, inches } = convertValueSpacingftinch(data.value);
     var feetval = feet+"'";
     var inchesval = inches+'"';
     var spaceId = 'V_20_' + (index);
     if(document.getElementById(spaceId))
     {
     document.querySelector('#' + spaceId).value = feetval+' '+inchesval;
     document.querySelector('#' + spaceId).dispatchEvent(keypressEvent);
     document.querySelector('#' + spaceId).dispatchEvent(keydownEvent);
     var spacingInInches = (feet * 12) + inches;
     totalAxleSpacing += spacingInInches;
     }
 });
  const totalFeet = Math.floor(totalAxleSpacing / 12);
  const totalInches = totalAxleSpacing % 12;
  if(document.querySelector('#total_axle_spacing'))
  {
 document.querySelector('#total_axle_spacing').value = totalFeet + "' " + totalInches + '"';
  }

}