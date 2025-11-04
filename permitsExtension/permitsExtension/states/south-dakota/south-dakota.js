function   southDakotaState1(dotvalue)
{

    var onchange =  new Event('change', { bubbles: true });
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
   simulateTyping('#searchDOT1',dotvalue.order.Company_Info.dot,500)
  
  document.getElementById('searchDOT1').dispatchEvent(keypressEvent);
  document.getElementById('searchDOT1').dispatchEvent(keydownEvent);
  document.getElementById('searchDOT1').dispatchEvent(onchange);

}

function southDakotaState2(dotvalue)
{

    var onchange =  new Event('change', { bubbles: true });
    var click = new Event('click');
    var axlevalue = new Event('blur');
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
  
      // Create a keyup event
      var keyupEvent = new KeyboardEvent('keyup', {
        key: 'a', // Specify the key value (e.g., 'a')
        code: 'KeyA', // Specify the physical key code (e.g., 'KeyA')
        keyCode: 65, // ASCII value for 'A'
        bubbles: true, // Indicates the event bubbles up through the DOM
        cancelable: true // Indicates the event can be canceled
      });
      var mouseoutEvent = new MouseEvent('mouseout', {
        bubbles: true,    // Indicates the event bubbles up through the DOM
        cancelable: true, // Indicates the event can be canceled
        clientX: 100,     // X coordinate within the application's viewport
        clientY: 100      // Y coordinate within the application's viewport
      });
    
        
       document.getElementById('V_52').value = dotvalue.order.truck_detail.license_state;
       document.getElementById('V_52').dispatchEvent(onchange);
       document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;
       document.getElementById('V_55').value = dotvalue.order.truck_detail.year;
       document.getElementById('V_57').value = dotvalue.order.truck_detail.make;
       document.getElementById('V_59').value = dotvalue.order.truck_detail.vin;
       document.getElementById('V_61').value = dotvalue.order.truck_detail.unit_id;


       document.getElementById('V_71').value = dotvalue.order.Trailer_Info.state;
       document.getElementById('V_71').dispatchEvent(onchange);
       document.getElementById('V_72').value = dotvalue.order.Trailer_Info.license_plate;
       document.getElementById('V_74').value = dotvalue.order.Trailer_Info.year;
      
       document.getElementById('V_78').value = dotvalue.order.Trailer_Info.vin;
       document.getElementById('V_76').value = dotvalue.order.Trailer_Info.make;
       
       document.getElementById('V_71').value = dotvalue.order.Trailer_Info.state;
       document.getElementById('V_80').value = dotvalue.order.Trailer_Info.lenght;
       document.getElementById('V_81').value = dotvalue.order.Trailer_Info.trailer_id;

       document.getElementById('V_197').value = dotvalue.order.commodityDataValue.description;
       document.getElementById('V_198').value = dotvalue.order.commodityDataValue.make;
       document.getElementById('V_199').value = dotvalue.order.commodityDataValue.model;

       //Overall Vehicle Dimensions
       document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalllength.feet}' ${dotvalue.order.OverallOrderData.overalllength.inch}"`;
       document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
       document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
       document.getElementById('V_17').value = dotvalue.order.totalWeight;

       document.getElementById('V_14').value = dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inches > 0) ? "0'" : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inches}"`;

       document.getElementById('V_15').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}' ${dotvalue.order.OverallOrderData.rear_overhang.inch}"`;
       
       
    




    //  Axle Weight
       var inputFieldaxle = document.getElementById('V_18');
       inputFieldaxle.value = dotvalue.order.axle_weight.length;
       inputFieldaxle.dispatchEvent(keypressEvent);
       inputFieldaxle.dispatchEvent(onchange);

       let totalWeight = 0; 
       dotvalue.order.axle_weight.forEach(function(data,index) {                               
        var inputId = 'V_19_'+(index);
        document.querySelector('#' + inputId ).value=data.value;
        var weight = parseFloat( document.querySelector('#' + inputId ).value) || 0;
        totalWeight += weight;
        });  
         
        document.querySelector('#total_axle_weight').value = totalWeight;

        
        // dotvalue.order.axle_weight.forEach(function(data,index) {


        //     let name = data.name;
        //     let tireCount, tirename;
        
        //     if (name.includes(":")) {
        //         let [namePart, tireinfo] = name.split(":");
        //         [tireCount, tirename] = tireinfo.split(" ");
        //     } else {
        //         let nameParts = name.split(" ");
        //         tireCount = nameParts[1];
        //         tirename = "Tires";
        //     }
                          
        //     var numTiresId = 'V_22_' + (index);
        //     var treadSizeId = 'V_23_' + (index);
        //     var axleWidthId = 'V_21_' + (index);

        //     document.querySelector('#' + numTiresId).value = tireCount;

        //   //   document.querySelector('#' + numTiresId + ' input[name="NumTires' + (index + 1) + '"]').dispatchEvent(change);

        //    document.querySelector('#' + treadSizeId).value = 11;

        //   //   treadSizeElement.dispatchEvent(change);

        //     document.querySelector('#' + axleWidthId).value = "8' "+'6"';
        //   //   document.querySelector('#' + axleWidthId + ' input[name="AxleWidth' + (index + 1) + '"]').dispatchEvent(change);

        //    });   


        dotvalue.order.axle_weight.forEach(function(data, index) {
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
                                  
            var numTiresId = 'V_22_' + (index);
            var treadSizeId = 'V_23_' + (index);
            var axleWidthId = 'V_21_' + (index);
        
            document.querySelector('#' + numTiresId).value = tireCount;
            document.querySelector('#' + numTiresId).dispatchEvent(onchange); 
        
            document.querySelector('#' + treadSizeId).value = 11;
            document.querySelector('#' + treadSizeId).dispatchEvent(onchange);
        
            document.querySelector('#' + axleWidthId).value = "8' "+'6"';
            document.querySelector('#' + axleWidthId).dispatchEvent(onchange);
        });
        


           let totalAxleSpacing = 0;
          dotvalue.order.axle_spacing.forEach(function(data, index) {
          const { feet, inches } = convertValueSpacingftinch(data.value);
          var feetval = feet+"' ";
          var inchesval = inches+'"';
          var spaceId = 'V_20_' + (index);
          document.querySelector('#' + spaceId).value = feetval+inchesval;
          document.querySelector('#' + spaceId).dispatchEvent(onchange);
          var spacingInInches = (feet * 12) + inches;
          totalAxleSpacing += spacingInInches;
      });

      const totalFeet = Math.floor(totalAxleSpacing / 12);
       const totalInches = totalAxleSpacing % 12;

      document.querySelector('#total_axle_spacing').value = totalFeet + "' " + totalInches + '"';


}