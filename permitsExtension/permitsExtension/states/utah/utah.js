function utahState1(dotvalue) 
{
    //var onchange = new Event('change', { bubbles: true });

    var onchange = new Event('change', {
        bubbles: true,
        cancelable: true
    });
     
    var click = new Event('click');
    var blur = new Event('blur');
    var keypressEvent = new KeyboardEvent('keypress', {
        key: 'a',
        code: 'KeyA',
        charCode: 97,
        keyCode: 97,
        bubbles: true,
        cancelable: true
    });

    
    const keyEventPress = new KeyboardEvent('keypress', { bubbles: true, key: 'Enter', code: 'Enter' });

    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '',
        char: '',
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    });

    const inputEvent = new Event('input', { bubbles: true, cancelable: true });


    if (document.getElementById('P60_USDOT_NUMBER')) {
        document.getElementById('P60_USDOT_NUMBER').value = dotvalue.order.Company_Info.dot;
        document.getElementById('P60_USDOT_NUMBER').dispatchEvent(keypressEvent);

        var SetWeightButton = document.getElementById('P60_VERIFY');
        SetWeightButton.dispatchEvent(click);

    }

    if (document.getElementById('P70_OVERWEIGHT_TYPE_0')) {
        document.getElementById('P70_OVERWEIGHT_TYPE_0').checked = true;
        document.getElementById('P70_OVERWEIGHT_TYPE_0').dispatchEvent(click);
        document.getElementById('P70_OVERWEIGHT_TYPE_0').dispatchEvent(keypressEvent);

        var selectElement3 = document.getElementById('P70_LOAD_TYPE');
        var selectElementvalue3 = "GND";
        for (var i = 0; i < selectElement3.options.length; i++) {
            if (selectElement3.options[i].value === selectElementvalue3) {
                selectElement3.options[i].selected = true;
                break;
            }
        }
        selectElement3.dispatchEvent(onchange);
        selectElement3.dispatchEvent(keypressEvent);

        document.getElementById('P70_VEHICLE_CONFIGURATION_1').checked = true;
        document.getElementById('P70_VEHICLE_CONFIGURATION_1').dispatchEvent(click);
        document.getElementById('P70_VEHICLE_CONFIGURATION_1').dispatchEvent(keypressEvent);

        // document.getElementById('P70_UNIT_NUMBER').value = dotvalue.order.truck_detail.unit_id;
        // document.getElementById('P70_VIN').value = dotvalue.order.truck_detail.vin;
        // document.getElementById('P70_YEAR').value = dotvalue.order.truck_detail.year;
        // document.getElementById('P70_LICENSE').value = dotvalue.order.truck_detail.license_plate;
        // let makeValue = dotvalue.order.truck_detail.make;
        // let formattedMakeValue = makeValue.charAt(0).toUpperCase() + makeValue.slice(1).toLowerCase();
        // document.getElementById('P70_MAKE').value = formattedMakeValue;
        // document.getElementById('P70_MAKE').dispatchEvent(onchange);
        // if(document.getElementById('P70_STATE'))
        // {
        // document.getElementById('P70_STATE').value = dotvalue.order.truck_detail.license_state;
        // document.getElementById('P70_STATE').dispatchEvent(onchange);  
        // }
        // document.getElementById('P70_REG_WEIGHT').value = "80000";
        // document.getElementById('P70_REG_WEIGHT').dispatchEvent(onchange);
    }

    if (document.getElementById('P74_UNIT_FILTER')) 
        {
        document.getElementById('P74_UNIT_FILTER').value = dotvalue.order.truck_detail.unit_id;
        document.getElementById('P74_UNIT_FILTER').dispatchEvent(inputEvent);
        document.getElementById('P74_UNIT_FILTER').dispatchEvent(blur);
        document.getElementById('P74_UNIT_FILTER').dispatchEvent(keypressEvent);
    }

    if (document.getElementById('P80_YES_NO')) {

        var selectElement3 = document.getElementById('P80_YES_NO');
        var selectElementvalue3 = "Y";
        for (var i = 0; i < selectElement3.options.length; i++) {
            if (selectElement3.options[i].value === selectElementvalue3) {
                selectElement3.options[i].selected = true;
                break;
            }
        }

        document.getElementById('P80_DURATION_0').checked = true;

        document.getElementById('P80_MAXIMUM_GROSS_WEIGHT').value = dotvalue.order.totalWeight;
        document.getElementById('P80_MAXIMUM_GROSS_WEIGHT').dispatchEvent(inputEvent);
        document.getElementById('P80_MAXIMUM_GROSS_WEIGHT').dispatchEvent(blur);
        document.getElementById('P80_MAXIMUM_GROSS_WEIGHT').dispatchEvent(keypressEvent);

        document.getElementById('P80_DESCRIPTION_OF_LOAD').value = dotvalue.order.commodityDataValue.description;
        document.getElementById('P80_DESCRIPTION_OF_LOAD').dispatchEvent(inputEvent);
        document.getElementById('P80_DESCRIPTION_OF_LOAD').dispatchEvent(blur);
        document.getElementById('P80_DESCRIPTION_OF_LOAD').dispatchEvent(keypressEvent);
        
        

        if(document.getElementById('P80_WIDTH'))
        {
        document.getElementById('P80_WIDTH').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
        document.getElementById('P80_WIDTH').dispatchEvent(inputEvent);
        document.getElementById('P80_WIDTH').dispatchEvent(blur);
        document.getElementById('P80_WIDTH').dispatchEvent(keypressEvent);
        document.getElementById('P80_WIDTH').focus();
        }

        if(document.getElementById('P80_WIDTH_INCHES'))
        {
        document.getElementById('P80_WIDTH_INCHES').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
        document.getElementById('P80_WIDTH_INCHES').dispatchEvent(inputEvent);
        document.getElementById('P80_WIDTH_INCHES').dispatchEvent(blur);
        document.getElementById('P80_WIDTH_INCHES').dispatchEvent(keypressEvent);
        document.getElementById('P80_WIDTH_INCHES').focus();
        
        }
        

        document.getElementById('P80_HEIGHT').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
        document.getElementById('P80_HEIGHT').dispatchEvent(inputEvent);
        document.getElementById('P80_HEIGHT').dispatchEvent(blur);
        document.getElementById('P80_HEIGHT').dispatchEvent(keypressEvent);
        


        document.getElementById('P80_HEIGHT_INCHES').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
        document.getElementById('P80_HEIGHT_INCHES').dispatchEvent(inputEvent);
        document.getElementById('P80_HEIGHT_INCHES').dispatchEvent(blur);
        document.getElementById('P80_HEIGHT_INCHES').dispatchEvent(keypressEvent);
        


        document.getElementById('P80_LENGTH').value = `${dotvalue.order.OverallOrderData.overalllength.feet}`;
        document.getElementById('P80_LENGTH').dispatchEvent(inputEvent);
        document.getElementById('P80_LENGTH').dispatchEvent(blur);
        document.getElementById('P80_LENGTH').dispatchEvent(keypressEvent);
        
        


        document.getElementById('P80_LENGTH_INCHES').value = `${dotvalue.order.OverallOrderData.overalllength.inch}`;
        document.getElementById('P80_LENGTH_INCHES').dispatchEvent(inputEvent);
        document.getElementById('P80_LENGTH_INCHES').dispatchEvent(blur);
        document.getElementById('P80_LENGTH_INCHES').dispatchEvent(keypressEvent);
        

        document.getElementById('P80_FRONT_OVERHANG').value = `${dotvalue.order.OverallOrderData.front_overhang.feet}`;
        document.getElementById('P80_FRONT_OVERHANG').dispatchEvent(inputEvent);
        document.getElementById('P80_FRONT_OVERHANG').dispatchEvent(blur);
        document.getElementById('P80_FRONT_OVERHANG').dispatchEvent(keypressEvent);
        
        

        document.getElementById('P80_FRONT_OVERHANG_INCHES').value = `${dotvalue.order.OverallOrderData.front_overhang.inch}`;
        document.getElementById('P80_FRONT_OVERHANG_INCHES').dispatchEvent(inputEvent);
        document.getElementById('P80_FRONT_OVERHANG_INCHES').dispatchEvent(blur);
        document.getElementById('P80_FRONT_OVERHANG_INCHES').dispatchEvent(keypressEvent);
        

        document.getElementById('P80_REAR_OVERHANG').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}`;
        document.getElementById('P80_REAR_OVERHANG').dispatchEvent(inputEvent);
        document.getElementById('P80_REAR_OVERHANG').dispatchEvent(blur);
        document.getElementById('P80_REAR_OVERHANG').dispatchEvent(keypressEvent);
        

        document.getElementById('P80_REAR_OVERHANG_INCHES').value = `${dotvalue.order.OverallOrderData.rear_overhang.inch}`;
        document.getElementById('P80_REAR_OVERHANG_INCHES').dispatchEvent(inputEvent);
        document.getElementById('P80_REAR_OVERHANG_INCHES').dispatchEvent(blur);
        document.getElementById('P80_REAR_OVERHANG_INCHES').dispatchEvent(keypressEvent);
        

       }


       if(document.getElementById('P82_OW_AXLES') && dotvalue.order.totalWeight > 80000)
       {
        document.getElementById('P82_OW_AXLES').value = "Y";
        document.getElementById('P82_OW_AXLES').dispatchEvent(onchange);
        document.getElementById('P82_OW_AXLES').dispatchEvent(keypressEvent);
       }

       if(document.getElementById('P82_OW_AXLES') && dotvalue.order.totalWeight > 80000)
        {
            var nextButton = document.getElementById('P82_NEXT');
            if (nextButton) {
                
                nextButton.addEventListener('click', function () {
                    // Dynamically set the field to "Y"
                    var requiredField = document.getElementById('P82_OW_AXLES');
                    if (requiredField) {
                        requiredField.value = "Y";

                        // Dispatch events to trigger validations if any
                        ['input', 'change', 'blur', 'keyup'].forEach(function(evt) {
                            requiredField.dispatchEvent(new Event(evt, { bubbles: true }));
                        });
                    }

                    
                });
            }
        }

    if (document.getElementById('P85_AXLE_COUNT')) {

        let axleWeights = dotvalue.order.axle_weight.map(axle => parseInt(axle.value));
        let totalAxles = dotvalue.order.Trailer_Info.axle;
        let remainingAxles = axleWeights.length - totalAxles;

        let axleSpacingFeet = [];
        let axleSpacingInches = [];
        function convertValueSpacingftinch(value) {
            const feetMatch = value.match(/(\d+)ft/);
            const inchesMatch = value.match(/(\d+)in/);
            const feet = feetMatch ? parseInt(feetMatch[1]) : 0;
            const inches = inchesMatch ? parseInt(inchesMatch[1]) : 0;

            return { feet, inches };
        }

        dotvalue.order.axle_spacing.forEach(function (data, index) {
            const { feet, inches } = convertValueSpacingftinch(data.value);
            axleSpacingFeet.push(feet);
            axleSpacingInches.push(inches);

        });


        if (document.getElementById('P85_AXLE_GROUP_NUMBER_DISPLAY').textContent === '1') {

            if(document.getElementById('P85_AXLE_COUNT'))
            {
            document.getElementById('P85_AXLE_COUNT').value = 1;
            }

            if(document.getElementById('P85_REQUESTED_WEIGHT'))
            {
            document.getElementById('P85_REQUESTED_WEIGHT').value = axleWeights[0];
            }

            if(document.getElementById('P85_AXLE_DISTANCE_FEET'))
            {
            document.getElementById('P85_AXLE_DISTANCE_FEET').value = 0;
            }

            if(document.getElementById('P85_AXLE_DISTANCE_INCHES'))
            {
            document.getElementById('P85_AXLE_DISTANCE_INCHES').value = 0;
            document.getElementById('P85_AXLE_DISTANCE_INCHES').dispatchEvent(onchange);
            }

            
            if (document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET')) 
            {
            const feetValue = axleSpacingFeet[0];

            document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET').value =
            feetValue === undefined || feetValue === "undefined" || feetValue === null || feetValue === "" ? 0 : feetValue;
            }

            if (document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES')) 
            {
                const inchesValue = axleSpacingInches[0];

                document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').value =
                    inchesValue === undefined || inchesValue === "undefined" || inchesValue === null || inchesValue === "" ? 0 : inchesValue;
                document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').dispatchEvent(onchange);
            }
            
            
        }

        if (document.getElementById('P85_AXLE_GROUP_NUMBER_DISPLAY').textContent === '2') {
            document.getElementById('P85_AXLE_COUNT').value = 1;
            document.getElementById('P85_REQUESTED_WEIGHT').value = axleWeights[0];
            var trailerCountSum = 0;
            var trailerWeigthSum = 0
            for (var index = 1; index < remainingAxles; index++) {
                trailerCountSum++;
                trailerWeigthSum = trailerWeigthSum + axleWeights[index]

            }

            if(document.getElementById('P85_AXLE_COUNT'))
            {
            document.getElementById('P85_AXLE_COUNT').value = trailerCountSum;
            }

            if(document.getElementById('P85_REQUESTED_WEIGHT'))
            {
            document.getElementById('P85_REQUESTED_WEIGHT').value = trailerWeigthSum;
            }

            if(document.getElementById('P85_AXLE_DISTANCE_FEET'))
            {
            document.getElementById('P85_AXLE_DISTANCE_FEET').value = axleSpacingFeet[1];
            }

            if(document.getElementById('P85_AXLE_DISTANCE_INCHES'))
            {
            document.getElementById('P85_AXLE_DISTANCE_INCHES').value = axleSpacingInches[1];
            document.getElementById('P85_AXLE_DISTANCE_INCHES').dispatchEvent(onchange);
            }

            // if(document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET'))
            // {
            // document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET').value = axleSpacingFeet[2];
            // }

            // if(document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES'))
            // {
            // document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').value = axleSpacingInches[2];
            // document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').dispatchEvent(onchange);
            // }
            if (document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET')) 
            {
                const feetValue = axleSpacingFeet[2];
                document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET').value =
                    feetValue === undefined || feetValue === null || feetValue === "" || feetValue === "undefined"
                        ? 0
                        : feetValue;
            }

            if (document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES')) 
            {
                const inchesValue = axleSpacingInches[2];
                document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').value =
                    inchesValue === undefined || inchesValue === null || inchesValue === "" || inchesValue === "undefined"
                        ? 0
                        : inchesValue;
                document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').dispatchEvent(onchange);
            }
        }

        if (document.getElementById('P85_AXLE_GROUP_NUMBER_DISPLAY').textContent === '3') {
            var trailerCountSum = 0;
            var trailerWeigthSum = 0
            for (var index = remainingAxles; index < axleWeights.length; index++) {
                trailerCountSum++;
                trailerWeigthSum = trailerWeigthSum + axleWeights[index]

            }

            if(document.getElementById('P85_AXLE_COUNT'))
            {
            document.getElementById('P85_AXLE_COUNT').value = trailerCountSum;
            }

            if(document.getElementById('P85_REQUESTED_WEIGHT'))
            {
            document.getElementById('P85_REQUESTED_WEIGHT').value = trailerWeigthSum;
            }

            if(document.getElementById('P85_AXLE_DISTANCE_FEET'))
            {
            document.getElementById('P85_AXLE_DISTANCE_FEET').value = axleSpacingFeet[3];
            }

            if(document.getElementById('P85_AXLE_DISTANCE_INCHES'))
            {
            document.getElementById('P85_AXLE_DISTANCE_INCHES').value = axleSpacingInches[3];
            document.getElementById('P85_AXLE_DISTANCE_INCHES').dispatchEvent(onchange);
            }
            

            // if(document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET'))
            // {
            // document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET').value = axleSpacingFeet[4];
            // }

            // if(document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES'))
            // {
            // document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').value = axleSpacingInches[4];
            // document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').dispatchEvent(onchange);
            // }
            if (document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET')) {
                const feetValue = axleSpacingFeet[4];
                document.getElementById('P85_DIST_TO_NEXT_GROUP_FEET').value =
                    feetValue === undefined || feetValue === null || feetValue === "" || feetValue === "undefined"
                        ? 0
                        : feetValue;
            }

            if (document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES')) {
                const inchesValue = axleSpacingInches[4];
                document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').value =
                    inchesValue === undefined || inchesValue === null || inchesValue === "" || inchesValue === "undefined"
                        ? 0
                        : inchesValue;
                document.getElementById('P85_DIST_TO_NEXT_GROUP_INCHES').dispatchEvent(onchange);
            }


        }


    }

    

}