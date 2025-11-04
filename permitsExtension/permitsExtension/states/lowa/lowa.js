
function lowaStep1(dotvalue) {
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

  document.getElementById('searchDOT1').value = '';
  document.getElementById('searchHauler2_anywhere').checked = true;
  document.getElementById('searchHauler2_anywhere').dispatchEvent(click);
  simulateTyping('#searchDOT1', dotvalue.order.Company_Info.dot, 500)

  document.getElementById('searchDOT1').dispatchEvent(keypressEvent);
  document.getElementById('searchDOT1').dispatchEvent(keydownEvent);
  document.getElementById('searchDOT1').dispatchEvent(onchange);
}

function lowaStep2(dotvalue) 
{

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

var mousedownEvent = new MouseEvent('mousedown', {
  bubbles: true,
  cancelable: true,
  clientX: 150,
  clientY: 150,
  button: 0 // 0 = Left mouse button, 1 = Middle, 2 = Right
});

   if(document.getElementById('V_56'))
   {
    if (document.getElementById('V_56').value === "") 
      {
        
        document.getElementById('V_56').value = dotvalue.order.truck_detail.make;
        document.getElementById('V_56').value = "7";
        document.getElementById('V_56').dispatchEvent(onchange);
      }
    }

      
     if(document.getElementById('V_75'))
     {
      if (document.getElementById('V_75').value === "") 
        {
        
       
        document.getElementById('V_75').value = dotvalue.order.Trailer_Info.make;
        document.getElementById('V_75').value = "18";
        document.getElementById('V_75').dispatchEvent(onchange);
        }
      }

        if(document.getElementById('V_55'))
        {
  document.getElementById('V_55').value = dotvalue.order.truck_detail.year;
        }

        if(document.getElementById('V_53'))
        {
  document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;
        }

        if(document.getElementById('V_52'))
        {
  var inputElement10 = document.getElementById('V_52');
  inputElement10.value = dotvalue.order.truck_detail.license_state;
  inputElement10.dispatchEvent(onchange);
  inputElement10.dispatchEvent(click);
        }

 
    if(document.getElementById('V_59'))
    {
  document.getElementById('V_59').value = dotvalue.order.truck_detail.vin;
    }
    if(document.getElementById('V_61'))
    {
  document.getElementById('V_61').value = dotvalue.order.truck_detail.unit_id;
    }
    if(document.getElementById('V_72'))
    {
  document.getElementById('V_72').value = dotvalue.order.Company_Info.ifta_number;
    }
    if(document.getElementById('V_71'))
    {
  var inputElement11 = document.getElementById('V_71');
  inputElement11.value = dotvalue.order.Trailer_Info.state;
  inputElement11.dispatchEvent(onchange);
  inputElement11.dispatchEvent(click);
    }

  
  //   if(document.getElementById('V_269'))
  //   {
  // if (document.getElementById('V_269').value === "") 
  //   {
  //   document.getElementById('V_269').value = "Other";
  //   document.getElementById('V_269').value = "7";
  //   document.getElementById('V_269').dispatchEvent(onchange);
  //   }
  // }

    
   if(document.getElementById('V_310'))
   {
  document.getElementById('V_310').value = dotvalue.order.Trailer_Info.lenght;
  document.getElementById('V_310').dispatchEvent(onchange);
   }
   if(document.getElementById('V_197'))
   {
  document.getElementById('V_197').value = dotvalue.order.commodityDataValue.description;
  document.getElementById('V_197').dispatchEvent(onchange);
   }
   if(document.getElementById('V_202'))
   {
  document.getElementById('V_202').value = `${dotvalue.order.commodityDataValue.length.feet}' ${dotvalue.order.commodityDataValue.length.inch}"`;
  document.getElementById('V_202').dispatchEvent(input);
  document.getElementById('V_202').dispatchEvent(onchange);
   }
   if(document.getElementById('V_203'))
   {
  document.getElementById('V_203').value = dotvalue.order.commodityDataValue.serial;
  document.getElementById('V_203').dispatchEvent(onchange);
   }
   if(document.getElementById('V_199'))
   {
  document.getElementById('V_199').value = dotvalue.order.commodityDataValue.model;
  document.getElementById('V_199').dispatchEvent(onchange);
   }

  
  if(document.getElementById('V_13'))
  {
  document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
  }

  if(document.getElementById('V_12'))
  {
  document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
  }

  if(document.getElementById('V_11'))
  {
  document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
  }

  if(document.getElementById('V_14'))
  {
  document.getElementById('V_14').value = dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inch}"`;
  }
  //  document.getElementById('V_15').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}' ${dotvalue.order.OverallOrderData.rear_overhang.inch}"`;
  if(document.getElementById('V_15'))
  {
  document.getElementById('V_15').value = 0;
  }

  var totalWeight = document.getElementById('V_17');
  if(totalWeight)
  {
    if (totalWeight.hasAttribute('readonly')) {
      totalWeight.removeAttribute('readonly');
    }
  document.getElementById('V_17').value = dotvalue.order.totalWeight;

   }
  


  // document.getElementById('P_24').value = dotvalue.order.pickupFormattedAddress;
  // document.getElementById('P_24').dispatchEvent(onchange);
  // document.getElementById('P_25').value = `${dotvalue.order.deliveryFormatedAddress}`;
  // document.getElementById('P_25').dispatchEvent(onchange);



  //  Axle Weight
  if(document.getElementById('V_18'))
  {
  var inputFieldaxle = document.getElementById('V_18');
  inputFieldaxle.value = dotvalue.order.axle_weight.length;
  var axlevalue = new Event('blur');
  inputFieldaxle.dispatchEvent(input);
  inputFieldaxle.dispatchEvent(axlevalue);
  }

  if(document.getElementById('V_259'))
  {
  var inputFieldaxle = document.getElementById('V_259');
  inputFieldaxle.value = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;
  var axlevalue = new Event('blur');
  inputFieldaxle.dispatchEvent(axlevalue);
  }

  if(document.getElementById('P_83'))
    {
    document.getElementById('P_83').checked = true;
    document.getElementById('P_83').dispatchEvent(onchange);
    document.getElementById('P_83').dispatchEvent(input);
    document.getElementById('P_83').dispatchEvent(click);
    }

  dotvalue.order.axle_weight.forEach(function (data, index) {
    var inputId = 'V_19_' + (index);
    document.querySelector('#' + inputId).value = data.value;
    document.querySelector('#' + inputId).dispatchEvent(onchange);
    document.querySelector('#' + inputId).dispatchEvent(keypressEvent);
    
  });

  dotvalue.order.axle_spacing.forEach(function (data, index) {
    const { feet, inches } = convertValueSpacingftinch(data.value);
    var feetval = feet + "'";
    var inchesval = inches + '"';
    var spaceId = 'V_20_' + (index);
    document.querySelector('#' + spaceId).value = feetval + ' ' + inchesval;
    document.querySelector('#' + spaceId).dispatchEvent(axlevalue);
    document.querySelector('#' + spaceId).dispatchEvent(onchange);
    // document.querySelector('#' + spaceId).dispatchEvent(keypressEvent);
  });


}


