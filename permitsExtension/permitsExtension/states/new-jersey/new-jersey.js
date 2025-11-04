function newJerseyState1(dotvalue) {
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

function newJerseyState2(dotvalue) {
  var onchange = new Event('change', { bubbles: true });
  var click = new Event('click');
  var input = new Event('input', { bubbles: true });

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



  document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;

  var dropdownInput1 = document.querySelector('#V_52');
  var dropdownText1 = document.querySelector('[aria-controls="V_52_listbox"] .k-input-value-text'); // Visible text

  if (dropdownInput1 && dropdownText1) {
    var newValue1 = dotvalue.order.truck_detail.license_state;

    dropdownInput1.value = newValue1;
    dropdownText1.textContent = newValue1;

    dropdownText1.dispatchEvent(input);
    dropdownText1.dispatchEvent(onchange);
    dropdownInput1.dispatchEvent(onchange);

  } else {
    console.log("Dropdown input fields not found.");
  }



  document.getElementById('V_72').value = dotvalue.order.Trailer_Info.license_plate;


  var dropdownInput2 = document.querySelector('#V_71');
  var dropdownText2 = document.querySelector('[aria-controls="V_71_listbox"] .k-input-value-text'); // Visible text

  if (dropdownInput2 && dropdownText2) {
    var newValue2 = dotvalue.order.Trailer_Info.state;

    dropdownInput2.value = newValue2;
    dropdownText2.textContent = newValue2;

    dropdownText2.dispatchEvent(input);
    dropdownText2.dispatchEvent(onchange);
    dropdownInput2.dispatchEvent(onchange);

  } else {
    console.log("Dropdown input fields for V_71 not found.");
  }

  document.getElementById('P_40').checked = true;
  document.getElementById('P_40').dispatchEvent(click);
  document.getElementById('P_40').dispatchEvent(onchange);

  var comboBoxInput = document.querySelector('#V_269');
  var comboBoxText = document.querySelector('[name="V_269_input"]');

  if (comboBoxInput && comboBoxText) {
    var newValue = dotvalue.order.commodityDataValue.description;

    comboBoxInput.value = newValue;
    comboBoxText.value = newValue;

    comboBoxText.dispatchEvent(input);
    comboBoxText.dispatchEvent(onchange);
    comboBoxInput.dispatchEvent(onchange);
  } else {
  }

  var dropdownInput3 = document.querySelector('#V_472');
  var dropdownText3 = document.querySelector('[aria-controls="V_472_listbox"] .k-input-value-text'); // Visible text

  if (dropdownInput3 && dropdownText3) {
    var newValue3 = "One";

    dropdownInput3.value = newValue3;
    dropdownText3.textContent = newValue3;


    dropdownText3.dispatchEvent(input);
    dropdownText3.dispatchEvent(onchange);
    dropdownInput3.dispatchEvent(onchange);

  } else {
    console.log("Dropdown input fields for V_472 not found.");
  }

  document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
  document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
  document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
  document.getElementById('V_80').value = dotvalue.order.Trailer_Info.lenght;
  document.getElementById('V_202').value = `${dotvalue.order.commodityDataValue.length.feet}' ${dotvalue.order.commodityDataValue.length.inch}"`;
  document.getElementById('V_15').value = dotvalue.order.OverallOrderData.rear_overhang.feet > 0 || (dotvalue.order.OverallOrderData.rear_overhang.feet === 0 && dotvalue.order.OverallOrderData.rear_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.rear_overhang.feet}'${dotvalue.order.OverallOrderData.rear_overhang.inch}"`;

  var inputFieldaxle = document.getElementById('V_18');
  inputFieldaxle.value = dotvalue.order.axle_weight.length;
  var axlevalue = new Event('blur');
  inputFieldaxle.dispatchEvent(axlevalue);

  var totalWeight1 = document.getElementById('V_17');

  if (totalWeight1) {

    if (totalWeight1.hasAttribute('readonly')) {
      totalWeight1.removeAttribute('readonly');
    }

    totalWeight1.value = dotvalue.order.totalWeight;

    totalWeight1.dispatchEvent(input);
    totalWeight1.dispatchEvent(onchange);
  }

  document.getElementById('P_83').checked = true;
  document.getElementById('P_83').dispatchEvent(click);
  document.getElementById('P_83').dispatchEvent(onchange);

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
    document.querySelector('#' + numTiresId).value = tireCount;
    document.querySelector('#' + treadSizeId).value = 11;
  });

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


  var dropdownInput5 = document.querySelector('#P_394');
  var dropdownText5 = document.querySelector('[aria-controls="P_394_listbox"] .k-input-value-text');

  if (dropdownInput5 && dropdownText5) {
    var newValue5 = "DE Line";

    dropdownInput5.value = newValue5;
    dropdownText5.value = newValue5;

    dropdownText5.dispatchEvent(input);
    dropdownText5.dispatchEvent(onchange);
    dropdownInput5.dispatchEvent(onchange);
  } else {
  }

  //alert(dotvalue.order.pickupFormattedAddress); //pickupFormattedAddress

  document.getElementById('P_25').value = dotvalue.order.deliveryFormatedAddress;


}