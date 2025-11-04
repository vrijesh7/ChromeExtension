function connecticutState1(dotvalue) {

  // console.log("DOT Details:", dotvalue);
  // alert("Start");

  var onchange = new Event('change', { bubbles: true });
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
  simulateTyping('#searchDOT1', dotvalue.order.Company_Info.dot, 500)

  document.getElementById('searchDOT1').dispatchEvent(keypressEvent);
  document.getElementById('searchDOT1').dispatchEvent(keydownEvent);
  document.getElementById('searchDOT1').dispatchEvent(onchange);

}


function connecticutState2(dotvalue) {

  var onchange = new Event('change', { bubbles: true });
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

  //truck


  if (document.getElementById('V_2') && document.getElementById('V_2').value !== "1") {
    document.getElementById('V_2').value = "1";
    document.getElementById('V_2').dispatchEvent(onchange);

  }

  document.getElementById('V_55').value = dotvalue.order.truck_detail.year;
  document.getElementById('V_56').value = dotvalue.order.truck_detail.make;

  if(document.getElementById('V_52') && document.getElementById('V_52').value !== dotvalue.order.truck_detail.license_state)
  {

    document.getElementById('V_52').value= dotvalue.order.truck_detail.license_state;
    document.getElementById('V_52').dispatchEvent(onchange);
    
  }

  document.getElementById('V_52').value = dotvalue.order.truck_detail.license_state;
  document.getElementById('V_52').dispatchEvent(onchange);
  document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;
  document.getElementById('V_59').value = dotvalue.order.truck_detail.vin;
  //document.getElementById('V_60').value = 80000;

  //trailer
  document.getElementById('V_74').value = dotvalue.order.Trailer_Info.year;
  document.getElementById('V_75').value = dotvalue.order.Trailer_Info.make;
  document.getElementById('V_71').value = dotvalue.order.Trailer_Info.state;
  document.getElementById('V_71').dispatchEvent(onchange);
  document.getElementById('V_72').value = dotvalue.order.Trailer_Info.license_plate;
  document.getElementById('V_78').value = dotvalue.order.Trailer_Info.vin;
  document.getElementById('V_79').value = 80000;
  document.getElementById('V_80').value = dotvalue.order.Trailer_Info.lenght;


  if (document.getElementById('V_269') && document.getElementById('V_269').value !== "1") {
    document.getElementById('V_269').value = "1";
    document.getElementById('V_269').dispatchEvent(onchange);
  }
  //
  document.getElementById('V_197').value = dotvalue.order.commodityDataValue.description;

  //Overall Vehicle Dimensions
  document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
  document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
  document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
  document.getElementById('V_14').value = dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inch}"`;
  document.getElementById('V_15').value = dotvalue.order.OverallOrderData.rear_overhang.feet > 0 || (dotvalue.order.OverallOrderData.rear_overhang.feet === 0 && dotvalue.order.OverallOrderData.rear_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.rear_overhang.feet}'${dotvalue.order.OverallOrderData.rear_overhang.inch}"`;
  document.getElementById('V_18').value = dotvalue.order.axle_weight.length;
  document.getElementById('V_17').value = dotvalue.order.totalWeight;


  //  Axle Weight
  document.getElementById('V_18').value = dotvalue.order.axle_weight.length;
  document.getElementById('V_18').dispatchEvent(keypressEvent);
  document.getElementById('V_18').dispatchEvent(onchange);

  let totalWeight = 0;

  dotvalue.order.axle_weight.forEach(function (data, index) {
    var inputId = 'V_19_' + (index);
    document.querySelector('#' + inputId).value = data.value;
    var weight = parseFloat(document.querySelector('#' + inputId).value) || 0;
    totalWeight += weight;
  });

  document.querySelector('#total_axle_weight').value = totalWeight;

  let totalAxleSpacing = 0;
  dotvalue.order.axle_spacing.forEach(function (data, index) {
    const { feet, inches } = convertValueSpacingftinch(data.value);
    var feetval = feet + "'";
    var inchesval = inches + '"';
    var spaceId = 'V_20_' + (index);
    document.querySelector('#' + spaceId).value = feetval + ' ' + inchesval;
    document.querySelector('#' + spaceId).dispatchEvent(keypressEvent);
    document.querySelector('#' + spaceId).dispatchEvent(keydownEvent);
    var spacingInInches = (feet * 12) + inches;
    totalAxleSpacing += spacingInInches;
  });
  const totalFeet = Math.floor(totalAxleSpacing / 12);
  const totalInches = totalAxleSpacing % 12;

  document.querySelector('#total_axle_spacing').value = totalFeet + "' " + totalInches + '"';


  document.getElementById('P_394').value = dotvalue.order.pickupFormattedAddress;
  document.getElementById('P_395').value = dotvalue.order.deliveryFormatedAddress;


}