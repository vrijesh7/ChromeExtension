function westVirginiaState1(dotvalue)
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

function westVirginiaState2(dotvalue)
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
  
  const inputEvent = new Event('input', { bubbles: true, cancelable: true });
  const blurEvent = new Event('blur', { bubbles: true });
      
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
          
      var input = document.getElementById("V_70");
      
      if (input) {
         
          input.value = "1";      
          input.dispatchEvent(onchange);
          input.dispatchEvent(inputEvent);
          input.dispatchEvent(keypressEvent);
          input.dispatchEvent(blurEvent);
          
      }
       
       document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;
       document.getElementById('V_72').value = dotvalue.order.Trailer_Info.license_plate;
       document.getElementById('V_71').value = dotvalue.order.Trailer_Info.state;
       document.getElementById('V_52').value = dotvalue.order.truck_detail.license_state;
       
       document.getElementById('V_197').value = dotvalue.order.commodityDataValue.description;
       document.getElementById('V_196').value = dotvalue.order.commodityDataValue.weight;
       document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
       document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
       document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
       document.getElementById('V_14').value = dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inch}"`;
       document.getElementById('V_15').value = 0;
       document.getElementById('V_17').value = dotvalue.order.totalWeight;
    

       var inputFieldaxle = document.getElementById('V_18');
       inputFieldaxle.value = dotvalue.order.axle_weight.length;
       var axlevalue = new Event('blur');
       inputFieldaxle.dispatchEvent(axlevalue);

       document.getElementById('P_83').checked = true;
       document.getElementById('P_83').dispatchEvent(click);
       document.getElementById('P_83').dispatchEvent(onchange);
       
       let totalWeight = 0; 
       dotvalue.order.axle_weight.forEach(function(data,index) {                          
        var inputId = 'V_19_'+(index);
        document.querySelector('#' + inputId ).value=data.value;
        var weight = parseFloat( document.querySelector('#' + inputId ).value) || 0;
        totalWeight += weight;
        });   
        document.querySelector('#total_axle_weight').value = totalWeight;
        
        let totalAxleSpacing = 0;
        dotvalue.order.axle_spacing.forEach(function(data, index) {
          const { feet, inches } = convertValueSpacingftinch(data.value);
          var feetval = feet+"'";
          var inchesval = inches+'"';
          var spaceId = 'V_20_' + (index);
          document.querySelector('#' + spaceId).value = feetval+' '+inchesval;
          var spacingInInches = (feet * 12) + inches;
          totalAxleSpacing += spacingInInches;
      });
      const totalFeet = Math.floor(totalAxleSpacing / 12);
      const totalInches = totalAxleSpacing % 12;

      document.querySelector('#total_axle_spacing').value = totalFeet + "' " + totalInches + '"';



}