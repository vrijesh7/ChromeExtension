function wisconsinState1(dotvalue) {
  var onchange = new Event('change', { bubbles: true });
  var click = new Event('click');
  var blurEvent = new Event('blur', {
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

  document.getElementById('searchDOT1').value = '';
  document.getElementById('searchHauler2_anywhere').checked = true;
  document.getElementById('searchHauler2_anywhere').dispatchEvent(click);
  simulateTyping('#searchDOT1', dotvalue.order.Company_Info.dot, 500)

  document.getElementById('searchDOT1').dispatchEvent(keypressEvent);
  document.getElementById('searchDOT1').dispatchEvent(keydownEvent);
  document.getElementById('searchDOT1').dispatchEvent(onchange);

}

function wisconsinState2(dotvalue) {

  var onchange = new Event('change', { bubbles: true });
  var click = new Event('click');
  var input = new Event('input', { bubbles: true });
  var blurEvent = new Event('blur', {
    bubbles: true,
    cancelable: true
  });
  var changeEvent = new Event('change');
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


  var dropdown = document.getElementById('V_2');
  if (dropdown) {

    dropdown.value = '1';
    dropdown.dispatchEvent(changeEvent);
    dropdown.dispatchEvent(click);

  }


  if (document.getElementById('V_197')) {
    document.getElementById('V_197').value = dotvalue.order.commodityDataValue.description;
  }

//   const setFieldValue = (fieldId, value) => {
//     const field = document.getElementById(fieldId);
//     if (field) {
//         field.value = value;
//         field.dispatchEvent(input);
//         field.dispatchEvent(onchange);
//     }
// };


// setFieldValue('V_53', dotvalue.order.truck_detail.license_plate);
// //setFieldValue('V_52', dotvalue.order.truck_detail.license_state);
// setFieldValue('V_55', dotvalue.order.truck_detail.year);
// setFieldValue('V_59', dotvalue.order.truck_detail.vin);
// setFieldValue('V_56', dotvalue.order.truck_detail.make);
// setFieldValue('V_61', dotvalue.order.truck_detail.unit_id);


// setFieldValue('V_75', dotvalue.order.Trailer_Info.make);
// setFieldValue('V_83', dotvalue.order.Trailer_Info.axle);
// setFieldValue('V_72', dotvalue.order.Trailer_Info.license_plate);
// //setFieldValue('V_71', dotvalue.order.Trailer_Info.state);
// setFieldValue('V_74', dotvalue.order.Trailer_Info.year);
// setFieldValue('V_78', dotvalue.order.Trailer_Info.vin);
// setFieldValue('V_81', dotvalue.order.Trailer_Info.trailer_id);

setTimeout(() => {

const field_V53 = document.getElementById('V_53');
if (field_V53) {
    field_V53.value = dotvalue.order.truck_detail.license_plate;
    field_V53.dispatchEvent(input);
    field_V53.dispatchEvent(onchange);
}

var dropdownStatetruck = document.getElementById('V_52');
  if (dropdownStatetruck) 
    {
    dropdownStatetruck.value = dotvalue.order.truck_detail.license_state;
    dropdownStatetruck.dispatchEvent(changeEvent);
    dropdownStatetruck.dispatchEvent(click);
    }

    const field_V55 = document.getElementById('V_55');
if (field_V55) {
    field_V55.value = dotvalue.order.truck_detail.year;
    field_V55.dispatchEvent(input);
    field_V55.dispatchEvent(onchange);
}



const field_V59 = document.getElementById('V_59');
if (field_V59) {
    field_V59.value = dotvalue.order.truck_detail.vin;
    field_V59.dispatchEvent(input);
    field_V59.dispatchEvent(onchange);
}

const field_V56 = document.getElementById('V_56');
if (field_V56) {
    field_V56.value = dotvalue.order.truck_detail.make;
    field_V56.dispatchEvent(input);
    field_V56.dispatchEvent(onchange);
}

const field_V61 = document.getElementById('V_61');
if (field_V61) {
    field_V61.value = dotvalue.order.truck_detail.unit_id;
    field_V61.dispatchEvent(input);
    field_V61.dispatchEvent(onchange);
}

if (document.getElementById('V_63')) {
  var totalLength = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;
  document.getElementById('V_63').value = totalLength;
  document.getElementById('V_63').dispatchEvent(input);
  document.getElementById('V_63').dispatchEvent(onchange);
}

//Trailre info

const field_V75 = document.getElementById('V_75');
if (field_V75) {
    field_V75.value = dotvalue.order.Trailer_Info.make;
    field_V75.dispatchEvent(input);
    field_V75.dispatchEvent(onchange);
}

const field_V83 = document.getElementById('V_83');
if (field_V83) {
    field_V83.value = dotvalue.order.Trailer_Info.axle;
    field_V83.dispatchEvent(input);
    field_V83.dispatchEvent(onchange);
}

const field_V72 = document.getElementById('V_72');
if (field_V72) {
    field_V72.value = dotvalue.order.Trailer_Info.license_plate;
    field_V72.dispatchEvent(input);
    field_V72.dispatchEvent(onchange);
}

var dropdownStatetrail = document.getElementById('V_71');
  if (dropdownStatetrail) {

    dropdownStatetrail.value = dotvalue.order.Trailer_Info.state;
    dropdownStatetrail.dispatchEvent(changeEvent);
    dropdownStatetrail.dispatchEvent(click);

  }

  const field_V74 = document.getElementById('V_74');
if (field_V74) {
    field_V74.value = dotvalue.order.Trailer_Info.year;
    field_V74.dispatchEvent(input);
    field_V74.dispatchEvent(onchange);
}

const field_V78 = document.getElementById('V_78');
if (field_V78) 
  {
    field_V78.value = dotvalue.order.Trailer_Info.vin;
    field_V78.dispatchEvent(input);
    field_V78.dispatchEvent(onchange);
   }

const field_V81 = document.getElementById('V_81');
if (field_V81) 
  {
    field_V81.value = dotvalue.order.Trailer_Info.trailer_id;
    field_V81.dispatchEvent(input);
    field_V81.dispatchEvent(onchange);
   }




  if(document.getElementById('V_12'))
  {
  document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
  }
  // document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
  if(document.getElementById('V_11'))
  {
  document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
  }
  if(document.getElementById('V_17'))
  {
  document.getElementById('V_17').value = dotvalue.order.totalWeight;
  document.getElementById('V_17').dispatchEvent(input);//blurEvent
  document.getElementById('V_17').dispatchEvent(onchange);
  document.getElementById('V_17').dispatchEvent(blurEvent);
  
  }
  if(document.getElementById('V_14'))
  {
  document.getElementById('V_14').value = dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inch}"`;
  }
  if(document.getElementById('V_310'))
  {
  document.getElementById('V_310').value = dotvalue.order.Trailer_Info.lenght;
  }
  let totalLengthInInches = (parseInt(dotvalue.order.OverallOrderData.overalllength.feet) * 12) + parseInt(dotvalue.order.OverallOrderData.overalllength.inch);
  let newLengthInInches = totalLengthInInches - dotvalue.order.Trailer_Info.lenght;
  let newFeet = Math.floor(newLengthInInches / 12);
  let newInches = newLengthInInches % 12;
  let newLengthFormatted = `${newFeet}'${newInches}"`;
  if(document.getElementById('V_64'))
  {
  document.getElementById('V_64').value = newLengthFormatted;
  }

  if(document.getElementById('V_13'))
  {
  document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalllength.feet}' ${dotvalue.order.OverallOrderData.overalllength.inch}"`;
  }
  if(document.getElementById('V_18'))
  {
  var inputElementNumberofalex = document.getElementById('V_18');
  inputElementNumberofalex.value = dotvalue.order.axle_weight.length;
  document.getElementById('V_18').dispatchEvent(onchange);
  }
  

  if(document.getElementById('P_83'))
  {
  document.getElementById('P_83').checked = true;
  document.getElementById('P_83').dispatchEvent(onchange);
  document.getElementById('P_83').dispatchEvent(input);
  document.getElementById('P_83').dispatchEvent(click);
  }

  let totalWeight = 0;

  dotvalue.order.axle_weight.forEach(function (data, index) {
    var inputId = 'V_19_' + (index);
    document.querySelector('#' + inputId).value = data.value;
    var weight = parseFloat(document.querySelector('#' + inputId).value) || 0;
    totalWeight += weight;
  });


  document.querySelector('#total_axle_weight').value = totalWeight;



  dotvalue.order.axle_weight.forEach(function (data, index) {


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
    var axleWidthId = 'V_21_' + index;

    document.querySelector('#' + numTiresId).value = tireCount;
    document.querySelector('#' + treadSizeId).value = 11;
    document.querySelector('#' + axleWidthId).value = "8' " + '6"';

  });


  let totalAxleSpacing = 0;
  dotvalue.order.axle_spacing.forEach(function (data, index) {
    const { feet, inches } = convertValueSpacingftinch(data.value);
    var feetval = feet + "'";
    var inchesval = inches + '"';
    var spaceId = 'V_20_' + (index);
    document.querySelector('#' + spaceId).value = feetval + ' ' + inchesval;
    var spacingInInches = (feet * 12) + inches;
    totalAxleSpacing += spacingInInches;
  });
  const totalFeet = Math.floor(totalAxleSpacing / 12);
  const totalInches = totalAxleSpacing % 12;
  document.querySelector('#total_axle_spacing').value = totalFeet + "' " + totalInches + '"';

}, 100);

}