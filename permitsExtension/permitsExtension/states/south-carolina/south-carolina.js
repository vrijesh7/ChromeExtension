function southCarolinaState1(dotvalue) 
{
    var onchange = new Event('change', { bubbles: true });
    var click = new Event('click');
    const input = new InputEvent('input', {
        bubbles: true,
        cancelable: true,
        data: '123',
        inputType: 'insertText'
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

    

   if(document.getElementById('textfield-1046-inputEl'))
   {
    document.getElementById('textfield-1046-inputEl').value = '';
    
    simulateTyping('#textfield-1046-inputEl', dotvalue.order.Company_Info.dot, 500)

    document.getElementById('textfield-1046-inputEl').dispatchEvent(keypressEvent);
    document.getElementById('textfield-1046-inputEl').dispatchEvent(keydownEvent);
    document.getElementById('textfield-1046-inputEl').dispatchEvent(onchange);
    //document.getElementById('gridview-1055-record-32484').dispatchEvent(click);  
    }
    
   // if (document.getElementById('carrierCombo-inputEl').value !== "") {
        
   



    // document.getElementById('textareafield-1071-inputEl').value = dotvalue.order.commodityDataValue.description;
    // document.getElementById('textfield-1072-inputEl').value = dotvalue.order.commodityDataValue.serial;
    // document.getElementById('textfield-1073-inputEl').value = dotvalue.order.commodityDataValue.make;
    // document.getElementById('textfield-1074-inputEl').value = dotvalue.order.commodityDataValue.model;
    
    
    if (document.getElementById('textareafield-1071-inputEl')) {
    document.getElementById('textareafield-1071-inputEl').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('textareafield-1071-inputEl').dispatchEvent(input);
    document.getElementById('textareafield-1071-inputEl').dispatchEvent(onchange);
    }

    if (document.getElementById('textfield-1072-inputEl')) {
    document.getElementById('textfield-1072-inputEl').value = dotvalue.order.commodityDataValue.serial;
    document.getElementById('textfield-1072-inputEl').dispatchEvent(input);
    document.getElementById('textfield-1072-inputEl').dispatchEvent(onchange);
    }

    if (document.getElementById('textfield-1073-inputEl')) {
    document.getElementById('textfield-1073-inputEl').value = dotvalue.order.commodityDataValue.make;
    document.getElementById('textfield-1073-inputEl').dispatchEvent(input);
    document.getElementById('textfield-1073-inputEl').dispatchEvent(onchange);
    }

    if (document.getElementById('textfield-1074-inputEl')) {
    document.getElementById('textfield-1074-inputEl').value = dotvalue.order.commodityDataValue.model;
    document.getElementById('textfield-1074-inputEl').dispatchEvent(input);
    document.getElementById('textfield-1074-inputEl').dispatchEvent(onchange);
    }


    if(document.getElementById('dimensionfield-1109-inputEl'))
    {
    document.getElementById('dimensionfield-1109-inputEl').value = `${dotvalue.order.OverallOrderData.overallheight.feet}-${dotvalue.order.OverallOrderData.overallheight.inch}`;
    }

    if(document.getElementById('dimensionfield-1112-inputEl'))
    {
    document.getElementById('dimensionfield-1112-inputEl').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}-${dotvalue.order.OverallOrderData.overallwidth.inch}`;
    }

    if(document.getElementById('dimensionfield-1110-inputEl'))
    {
    document.getElementById('dimensionfield-1110-inputEl').value = `${dotvalue.order.commodityDataValue.length.feet}-${dotvalue.order.commodityDataValue.length.inch}`;
    }

    if(document.getElementById('dimensionfield-1114-inputEl'))
    {
    document.getElementById('dimensionfield-1114-inputEl').value = dotvalue.order.Trailer_Info.lenght;
    }

    if(document.getElementById('dimensionfield-1117-inputEl'))
    {
    document.getElementById('dimensionfield-1117-inputEl').value = dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inch > 0) ? "0" : `${dotvalue.order.OverallOrderData.front_overhang.feet}-${dotvalue.order.OverallOrderData.front_overhang.inch}`;
    }

    if(document.getElementById('dimensionfield-1118-inputEl'))
    {
    document.getElementById('dimensionfield-1118-inputEl').value = dotvalue.order.OverallOrderData.rear_overhang.feet > 0 || (dotvalue.order.OverallOrderData.rear_overhang.feet === 0 && dotvalue.order.OverallOrderData.rear_overhang.inch > 0) ? "0" : `${dotvalue.order.OverallOrderData.rear_overhang.feet}-${dotvalue.order.OverallOrderData.rear_overhang.inch}-`;
    }

    if(document.getElementById('dimensionfield-1115-inputEl'))
    {
    document.getElementById('dimensionfield-1115-inputEl').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}-${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}`;
    }

    if(document.getElementById('textfield-1125-inputEl'))
    {
    document.getElementById('textfield-1125-inputEl').value = dotvalue.order.totalWeight;
    }

    if(document.getElementById('numberfield-1127-inputEl'))
    {
    document.getElementById('numberfield-1127-inputEl').value = dotvalue.order.axle_weight.length;
    document.getElementById('numberfield-1127-inputEl').dispatchEvent(keypressEvent);
    document.getElementById('numberfield-1127-inputEl').dispatchEvent(onchange);
    setTimeout(() => {
        

    const comboCompany = document.querySelector('input[id^="textfield-"][id$="-inputEl"][name^="textfield-"][name$="-inputEl"]');
    if (comboCompany) 
    {
    
    const comboCompanyID = parseInt(comboCompany.id.match(/^textfield-(\d+)-inputEl$/)[1]);

    
    dotvalue.order.axle_weight.forEach(function (data, index) {
        
        const dynamicID = (comboCompanyID) + (index * 4);
        var weight = data.value / 1000;
        document.getElementById('textfield-' + dynamicID + '-inputEl').value = weight;//input
        document.getElementById('textfield-' + dynamicID + '-inputEl').dispatchEvent(keypressEvent);
        document.getElementById('textfield-' + dynamicID + '-inputEl').dispatchEvent(input);
        document.getElementById('textfield-' + dynamicID + '-inputEl').dispatchEvent(onchange);
     });
   
    dotvalue.order.axle_spacing.forEach(function (data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);
        var feetval = feet + "-";
        var inchesval = inches + '';
        const dynamicID = (comboCompanyID + 5) + (index * 4);
        document.getElementById('axlespacefield-' + dynamicID + '-inputEl').value = feetval + inchesval;
        document.getElementById('axlespacefield-' + dynamicID + '-inputEl').dispatchEvent(keypressEvent);
        document.getElementById('axlespacefield-' + dynamicID + '-inputEl').dispatchEvent(input);
        document.getElementById('axlespacefield-' + dynamicID + '-inputEl').dispatchEvent(onchange);

   });
   

   //setTimeout(() => {

    // document.getElementById('textfield-1139-inputEl').value = dotvalue.order.truck_detail.license_plate;
    // document.getElementById('textfield-1139-inputEl').dispatchEvent(input);
    // document.getElementById('textfield-1139-inputEl').dispatchEvent(onchange);
    // document.getElementById('truckTagStateCombo-1142-inputEl').value = dotvalue.order.truck_detail.license_state;
    // document.getElementById('truckTagStateCombo-1142-inputEl').dispatchEvent(input);
    // document.getElementById('truckTagStateCombo-1142-inputEl').dispatchEvent(onchange);
    // document.getElementById('yearfield-1138-inputEl').value = dotvalue.order.truck_detail.year;
    // document.getElementById('yearfield-1138-inputEl').dispatchEvent(input);
    // document.getElementById('yearfield-1138-inputEl').dispatchEvent(onchange);
    // document.getElementById('textfield-1143-inputEl').value = dotvalue.order.truck_detail.vin;
    // document.getElementById('textfield-1143-inputEl').dispatchEvent(input);
    // document.getElementById('textfield-1143-inputEl').dispatchEvent(onchange);
    // document.getElementById('truckMakeCombo-1141-inputEl').value = dotvalue.order.truck_detail.make;
    // document.getElementById('truckMakeCombo-1141-inputEl').dispatchEvent(input);
    // document.getElementById('truckMakeCombo-1141-inputEl').dispatchEvent(onchange);
    // document.getElementById('textfield-1145-inputEl').value = dotvalue.order.truck_detail.unit_id;
    // document.getElementById('textfield-1145-inputEl').dispatchEvent(input);
    // document.getElementById('textfield-1145-inputEl').dispatchEvent(onchange);

    if (document.getElementById('yearfield-1138-inputEl')) {
    document.getElementById('yearfield-1138-inputEl').value = dotvalue.order.truck_detail.year;
    document.getElementById('yearfield-1138-inputEl').dispatchEvent(input);
    document.getElementById('yearfield-1138-inputEl').dispatchEvent(onchange);
    }

    if (document.getElementById('textfield-1139-inputEl')) {
    document.getElementById('textfield-1139-inputEl').value = dotvalue.order.truck_detail.license_plate;
    document.getElementById('textfield-1139-inputEl').dispatchEvent(input);
    document.getElementById('textfield-1139-inputEl').dispatchEvent(onchange);
    }

    if (document.getElementById('truckTagStateCombo-1142-inputEl')) {
    document.getElementById('truckTagStateCombo-1142-inputEl').value = dotvalue.order.truck_detail.license_state;
    document.getElementById('truckTagStateCombo-1142-inputEl').dispatchEvent(input);
    document.getElementById('truckTagStateCombo-1142-inputEl').dispatchEvent(onchange);
    }

    if (document.getElementById('textfield-1143-inputEl')) {
    document.getElementById('textfield-1143-inputEl').value = dotvalue.order.truck_detail.vin;
    document.getElementById('textfield-1143-inputEl').dispatchEvent(input);
    document.getElementById('textfield-1143-inputEl').dispatchEvent(onchange);
    }

    if (document.getElementById('truckMakeCombo-1141-inputEl')) {
    document.getElementById('truckMakeCombo-1141-inputEl').value = dotvalue.order.truck_detail.make;
    document.getElementById('truckMakeCombo-1141-inputEl').dispatchEvent(input);
    document.getElementById('truckMakeCombo-1141-inputEl').dispatchEvent(onchange);
    }

    if (document.getElementById('textfield-1145-inputEl')) {
    document.getElementById('textfield-1145-inputEl').value = dotvalue.order.truck_detail.unit_id;
    document.getElementById('textfield-1145-inputEl').dispatchEvent(input);
    document.getElementById('textfield-1145-inputEl').dispatchEvent(onchange);
    }

   // }, 500);


   // setTimeout(() => {

    if(document.getElementById('textfield-1152-inputEl'))
    {
    document.getElementById('textfield-1152-inputEl').value = dotvalue.order.Trailer_Info.license_plate;
    document.getElementById('textfield-1152-inputEl').dispatchEvent(input);
    document.getElementById('textfield-1152-inputEl').dispatchEvent(onchange);
    }

    if(document.getElementById('trailerTagStateCombo-1158-inputEl'))
    {
    document.getElementById('trailerTagStateCombo-1158-inputEl').value = dotvalue.order.Trailer_Info.state;
    document.getElementById('trailerTagStateCombo-1158-inputEl').dispatchEvent(input);
    document.getElementById('trailerTagStateCombo-1158-inputEl').dispatchEvent(onchange);
    }

    if(document.getElementById('yearfield-1151-inputEl'))
    {
    document.getElementById('yearfield-1151-inputEl').value = dotvalue.order.Trailer_Info.year;
    document.getElementById('yearfield-1151-inputEl').dispatchEvent(input);
    document.getElementById('yearfield-1151-inputEl').dispatchEvent(onchange);
    }

    if(document.getElementById('textfield-1155-inputEl'))
    {
    document.getElementById('textfield-1155-inputEl').value = dotvalue.order.Trailer_Info.trailer_id;
    document.getElementById('textfield-1155-inputEl').dispatchEvent(input);
    document.getElementById('textfield-1155-inputEl').dispatchEvent(onchange);
    }

    if(document.getElementById('trailerMakeCombo-1157-inputEl'))
    {
    document.getElementById('trailerMakeCombo-1157-inputEl').value = dotvalue.order.Trailer_Info.make;
    document.getElementById('trailerMakeCombo-1157-inputEl').dispatchEvent(input);
    document.getElementById('trailerMakeCombo-1157-inputEl').dispatchEvent(onchange);
    }
   // }, 500);

    }
}, 500);
   }

  //  }

}