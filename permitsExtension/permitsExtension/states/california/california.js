function californiaState1(dotvalue) 
{
    var blurEvent = new Event('blur');
    var onchange = new Event('change', { bubbles: true });
    var click = new Event('click');
    var mouseEvent = new Event('mousedown', { bubbles: true });
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


    
    if (document.getElementById("s2id_organization")) {
        document.querySelector('.select2-arrow b').dispatchEvent(mouseEvent);
        setTimeout(() => {
            
            simulateTyping("#s2id_autogen1_search", dotvalue.order.Company_Info.dot, 300);
        }, 500);
    }
    
  
    var selectElement = document.getElementById('hauldrivetow');
    var selectElementValue = "HAUL";
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectElementValue) {
            selectElement.options[i].selected = true;
            break;
        }
    }

    selectElement.dispatchEvent(onchange);

    document.getElementById('loaddescription').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('load_dimensions').value = `${dotvalue.order.commodityDataValue.length.feet}'${dotvalue.order.commodityDataValue.length.inch}"L - 
${dotvalue.order.commodityDataValue.width.feet}'${dotvalue.order.commodityDataValue.width.inch}"W - ${dotvalue.order.commodityDataValue.height.feet}'${dotvalue.order.commodityDataValue.height.inch}"H`;

    const axleWeightLength = dotvalue.order.axle_weight.length;
    const trailerAxle = dotvalue.order.Trailer_Info.axle;
    const result = axleWeightLength - trailerAxle;
    document.getElementById('haulerdescription').value = `${result} Axle Truck Tractor - ${dotvalue.order.Trailer_Info.axle} Axle ${dotvalue.order.Trailer_Type}`;


    document.getElementById('vehiclewidthfeet').value = 8;
    document.getElementById('vehiclewidthfeet').dispatchEvent(blurEvent);
    document.getElementById('vehiclewidthinch').value = 6;
    document.getElementById('kingpinlengthfeet').value = dotvalue.order.Trailer_Info.king_pin;
    document.getElementById('kingpinlengthinch').value = dotvalue.order.Trailer_Info.kin_pin_in;
    document.getElementById('trailerlengthfeet').value = dotvalue.order.Trailer_Info.lenght;
    document.getElementById('trailerlengthinch').value = 0;
    document.getElementById('combinedlengthfeet').value = dotvalue.order.OverallOrderData.overalltrucktrailer.feet;
    document.getElementById('combinedlengthinch').value = dotvalue.order.OverallOrderData.overalltrucktrailer.inch;


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

        var numTiresId = 'nooftiresaxle' + (index + 1);
        var axleWidthIdfeet = 'widthtirefeetaxle' + (index + 1);
        var axleWidthIdInches = 'widthtireinchaxle' + (index + 1);

        document.querySelector('#' + numTiresId).value = tireCount;
        document.querySelector('#' + axleWidthIdfeet).value = 8;
        document.querySelector('#' + axleWidthIdInches).value = 0;

    });

    var i = 12;
    dotvalue.order.axle_spacing.forEach(function (data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);
        var feetval = feet;
        var inchesval = inches;
        var spaceIdfeet = `distancefeetaxle${i}`;
        var spaceIdInch = `distanceinchaxle${i}`;
        document.querySelector('#' + spaceIdfeet).value = feetval;
        document.querySelector('#' + spaceIdInch).value = inchesval;
        i = i + 11;


    });

    document.getElementById('maxallowableweight').value = dotvalue.order.totalWeight;
    document.getElementById('maxallowableweight').dispatchEvent(blurEvent);

    document.getElementById('maxlengthfeet').value = dotvalue.order.OverallOrderData.overalltrucktrailer.feet;
    document.getElementById('maxlengthinch').value = dotvalue.order.OverallOrderData.overalltrucktrailer.inch;

    document.getElementById('maxwidthfeet').value = dotvalue.order.OverallOrderData.overallwidth.feet;
    document.getElementById('maxwidthinch').value = dotvalue.order.OverallOrderData.overallwidth.inch;
    document.getElementById('maxheightfeet').value = dotvalue.order.OverallOrderData.overallheight.feet;
    document.getElementById('maxheightinch').value = dotvalue.order.OverallOrderData.overallheight.inch;



    document.getElementById('maxoverhangfeet').value = 0;
    document.getElementById('maxoverhangfeet').dispatchEvent(blurEvent);
    document.getElementById('maxoverhanginch').value = 0;
    document.getElementById('maxoverhanginch').dispatchEvent(blurEvent);
    document.querySelector('input[name="noofpilotcars"][value="0"]').checked = true;


    // document.getElementById('origin').value = dotvalue.order.pickupFormattedAddress;
    // document.getElementById('destination').value = dotvalue.order.deliveryFormatedAddress;  //dotvalue.order.deliveryFormatedAddress;
    // alert(`${dotvalue.order.deliveryFormatedAddress}`);

    var selectElement1 = document.getElementById('payment_method');
    var selectElementValue1 = "cc";
    for (var i = 0; i < selectElement1.options.length; i++) {
        if (selectElement1.options[i].value === selectElementValue1) {
            selectElement1.options[i].selected = true;
            break;
        }
    }

    selectElement1.dispatchEvent(onchange);

    let w0 = 0, w1 = 0, w2 = 0, w3 = 0;
    for (let index = 0; index < dotvalue.order.axle_weight.length - 1; index++) {
        let data = dotvalue.order.axle_weight[index];
        let name = data.name;
        let tireCount, tirename;


        if (name.includes(":")) {
            let [namePart, tireinfo] = name.split(":");
            [tireCount, tirename] = tireinfo.trim().split(" ");
          

        } else {
            let nameParts = name.split(" ");
            console.log(name.split(" "));
            tireCount = nameParts[1];
            tirename = "Tires";
        }


        tireCount = String(tireCount);


        let nextData = dotvalue.order.axle_weight[index + 1];
        let nextName = nextData.name;
        let nextTireCount;

        if (nextName.includes(":")) {
            let [nextNamePart, nextTireinfo] = nextName.split(":");
            [nextTireCount] = nextTireinfo.trim().split(" ");
        } else {
            let nextNameParts = nextName.trim().split(" ");
            nextTireCount = nextNameParts[1];
        }


        nextTireCount = String(nextTireCount);


        if (tireCount === nextTireCount) {
            if (tireCount === '2') {
                w1 += parseInt((dotvalue.order.axle_weight[index]).value) + parseInt((dotvalue.order.axle_weight[index + 1]).value);

                index++;
            }
            else if (tireCount === '4') {
                if (index < (parseInt(dotvalue.order.axle_weight.length) - parseInt(dotvalue.order.Trailer_Info.axle))) {
                    w2 += parseInt((dotvalue.order.axle_weight[index]).value) + parseInt((dotvalue.order.axle_weight[index + 1]).value);

                } else {
                    w3 += parseInt((dotvalue.order.axle_weight[index]).value) + parseInt((dotvalue.order.axle_weight[index + 1]).value);

                }
                index++;
            }
        }
        else {
            w0 += parseInt((dotvalue.order.axle_weight[index]).value);
           

        }
       

    }


    let w0Str = w0 > 0 ? w0.toString() : '';
    let w1Str = w1 > 0 ? w1.toString() : '';
    let w2Str = w2 > 0 ? w2.toString() : '';
    let w3Str = w3 > 0 ? w3.toString() : '';

    let combinedValues = `${w0Str} ${w1Str} ${w2Str} ${w3Str}`.trim();


    document.getElementById('maxallowableweight').value = combinedValues;



}