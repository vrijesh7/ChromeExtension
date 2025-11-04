function minnesotaState1(dotvalue) {
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

function minnesotaState2(dotvalue) {

    var onchange = new Event('change', { bubbles: true });
    var click = new Event('click');
    var input = new Event('input', { bubbles: true });
    var focusEvent = new Event('focus', { bubbles: true });

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



    if (document.getElementById("V_51") || document.getElementById("V_70")) {
        var hiddenInput = document.getElementById("V_51");
        hiddenInput.value = "2";
        var visibleText = document.querySelector(".k-input-inner .k-input-value-text");
        if (visibleText) {
            visibleText.textContent = "Truck-Tractor";
        }

        hiddenInput.dispatchEvent(onchange);


        

        const v75Field = document.getElementById('V_57');
        if (v75Field) {
            v75Field.value = dotvalue.order.truck_detail.make;
            v75Field.dispatchEvent(input);
        } else {
            console.log("V_197 field not found.");
        }


        var state = document.getElementById("V_52");
        state.value = dotvalue.order.truck_detail.license_state;
        var stateText = document.querySelector(".k-input-inner .k-input-value-text");
        if (stateText) {

            stateText.textContent = dotvalue.order.truck_detail.license_state;
            // stateText.dispatchEvent(input);
            // stateText.dispatchEvent(onchange);
            
        }
        state.dispatchEvent(onchange);
        

        document.getElementById('V_53').value = dotvalue.order.truck_detail.license_plate;
        document.getElementById('V_454').value = dotvalue.order.EmptyWeightAttributes;
        var totalLength = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;
        document.getElementById('V_63').value = totalLength;
        document.getElementById('V_59').value = dotvalue.order.truck_detail.vin.slice(-6);


        var trlHiddenInput = document.getElementById("V_70");
        trlHiddenInput.value = "10";
        var trlVisibleText = document.querySelector(".k-input-inner .k-input-value-text");
        if (trlVisibleText) {
            trlVisibleText.textContent = "Semi-Trailer";
        }
        trlHiddenInput.dispatchEvent(onchange);

        // var trlMake = document.getElementById("V_75");
        // trlMake.value = dotvalue.order.Trailer_Info.make;
        // var trlMakeText = document.querySelector(".k-input-inner .k-input-value-text");
        // if (trlMakeText) {
        //     trlMakeText.textContent = dotvalue.order.Trailer_Info.make;
        // }

        // trlMake.dispatchEvent(onchange); 

        const v76Field = document.getElementById('V_76');
        if (v76Field) {
            v76Field.value = dotvalue.order.Trailer_Info.make;
            v76Field.dispatchEvent(input);
        } else {
            console.log("V_197 field not found.");
        }

        var trlState = document.getElementById("V_71");
        trlState.value = dotvalue.order.Trailer_Info.state;
        var trlStateText = document.querySelector(".k-input-inner .k-input-value-text");
        if (trlStateText) {

            trlStateText.textContent = dotvalue.order.Trailer_Info.state;
 
        }

        trlState.dispatchEvent(onchange);

        document.getElementById('V_72').value = dotvalue.order.Trailer_Info.license_plate;
        document.getElementById('V_455').value = dotvalue.order.Trailer_Info.empty_weight;
        document.getElementById('V_83').value = dotvalue.order.Trailer_Info.axle;


    }
    

    const v197Field = document.getElementById('V_197');

    if (v197Field) {
        
        v197Field.value = dotvalue.order.commodityDataValue.description;
        v197Field.dispatchEvent(input);
    } else {
        console.log("V_197 field not found.");
    }

    //document.getElementById('V_198').value = dotvalue.order.commodityDataValue.make;
    const v198Field = document.getElementById('V_198');
    if (v198Field) {
        v198Field.value = dotvalue.order.commodityDataValue.make;
        v198Field.dispatchEvent(input);
        
    } else {
        console.log("V_198 field not found.");
    }


    let weight = dotvalue.order.commodityDataValue.weight;
    let weightNumber = Number(weight);
    let newValue = weightNumber + 5000;


    //document.getElementById('V_196').value = newValue;
    const v196Field = document.getElementById('V_196');
    if (v196Field) {
        v196Field.value = newValue;
        v196Field.dispatchEvent(input);
    } else {
        
    }

    const v199Field = document.getElementById('V_199');
    if (v199Field) {
        v199Field.value = dotvalue.order.commodityDataValue.model;
        v199Field.dispatchEvent(input);
    } else {
        
    }

    //document.getElementById('V_199').value = dotvalue.order.commodityDataValue.model;


    document.getElementById('V_13').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
    document.getElementById('V_12').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
    document.getElementById('V_11').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
    document.getElementById('V_17').value = dotvalue.order.totalWeight;
    


    document.getElementById('V_14').value = 0; //dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inches > 0) ? "0'" : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inches}"`;
    document.getElementById('V_15').value = 0;//dotvalue.order.OverallOrderData.rear_overhang.feet > 0 || (dotvalue.order.OverallOrderData.rear_overhang.feet === 0 && dotvalue.order.OverallOrderData.rear_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.rear_overhang.feet}'${dotvalue.order.OverallOrderData.rear_overhang.inch}"`;

    if (document.getElementById('V_18') && document.getElementById('V_18').value != dotvalue.order.axle_weight.length) {
        document.getElementById('V_18').value = dotvalue.order.axle_weight.length;
        document.getElementById('V_18').dispatchEvent(click);
        document.getElementById('V_18').dispatchEvent(onchange);
        document.getElementById('V_18').dispatchEvent(new Event('focus', { bubbles: true, cancelable: true }));
        document.getElementById('V_18').dispatchEvent(new Event('blur', { bubbles: true, cancelable: true }));



        var contactNameInput = document.getElementById('V_18');

        if (contactNameInput) {
    
          if (contactNameInput.hasAttribute('readonly')) {
            contactNameInput.removeAttribute('readonly');
          }
    
          contactNameInput.value = dotvalue.order.axle_weight.length;
    
          contactNameInput.dispatchEvent(input);
          contactNameInput.dispatchEvent(onchange);
        }

        document.getElementById('P_83').checked = true;
        document.getElementById('P_83').dispatchEvent(click);
        document.getElementById('P_83').dispatchEvent(onchange);
        document.getElementById('P_83').dispatchEvent(new Event('blur', { bubbles: true, cancelable: true }));
        document.getElementById('P_83').dispatchEvent(new Event('focus', { bubbles: true, cancelable: true }));
   
    }




    let totalWeight = 0;

    dotvalue.order.axle_weight.forEach(function (data, index) {
        var inputId = 'V_19_' + (index);
        if (document.getElementById(inputId)) {
            document.querySelector('#' + inputId).value = data.value;
            var weight = parseFloat(document.querySelector('#' + inputId).value) || 0;
            totalWeight += weight;
            document.querySelector('#' + inputId).dispatchEvent(onchange);
            document.querySelector('#' + inputId).dispatchEvent(new Event('focus', { bubbles: true, cancelable: true }));
            document.querySelector('#' + inputId).dispatchEvent(new Event('blur', { bubbles: true, cancelable: true }));
        }


    });
    if (document.querySelector('#total_axle_weight')) {
        document.querySelector('#total_axle_weight').value = totalWeight;
    }

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

        var numTiresId = 'V_22_' + (index);
        var treadSizeId = 'V_23_' + (index);
        var axleWidthId = 'V_21_' + (index);

        document.querySelector('#' + numTiresId).value = tireCount;
        document.querySelector('#' + numTiresId).dispatchEvent(onchange);

        document.querySelector('#' + treadSizeId).value = 11;
        document.querySelector('#' + treadSizeId).dispatchEvent(onchange);

        document.querySelector('#' + axleWidthId).value = "8' " + '6"';
        document.querySelector('#' + axleWidthId).dispatchEvent(onchange);
    });

    let totalAxleSpacing = 0;
    dotvalue.order.axle_spacing.forEach(function (data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);
        var feetval = feet + "'";
        var inchesval = inches + '"';
        var spaceId = 'V_20_' + (index);
        if (document.getElementById(spaceId)) {
            document.querySelector('#' + spaceId).value = feetval + ' ' + inchesval;
            document.querySelector('#' + spaceId).dispatchEvent(keypressEvent);
            document.querySelector('#' + spaceId).dispatchEvent(keydownEvent);
            var spacingInInches = (feet * 12) + inches;
            totalAxleSpacing += spacingInInches;
        }
    });
    const totalFeet = Math.floor(totalAxleSpacing / 12);
    const totalInches = totalAxleSpacing % 12;
    if (document.querySelector('#total_axle_spacing')) {
        document.querySelector('#total_axle_spacing').value = totalFeet + "' " + totalInches + '"';
    }

}