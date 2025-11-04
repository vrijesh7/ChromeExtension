function delawareState1(dotvalue) 
{
    var event = new Event('change', { bubbles: true });


   

    document.querySelector('input[name="permitCustCode"]').value = "02LIZ";
    document.querySelector('select[name="permitLoadCode"]').value = "2";
    document.querySelector('select[name="permitLoadCode"]').dispatchEvent(event);
    var totalLength = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;
    document.querySelector('input[name="permitVehiclePUAxles"]').value = totalLength;
    document.querySelector('input[name="permitVehicleTAxles"]').value = dotvalue.order.Trailer_Info.axle;

}

function delawareState2(dotvalue) 
{

    document.querySelector('input[name="permitLoadDescription"]').value = dotvalue.order.commodityDataValue.description;
    document.querySelector('input[name="permitLoadPieces"]').value = dotvalue.order.commodityDataValue.piece_count;
    document.querySelector('input[name="permitLoadLengthFt"]').value = dotvalue.order.OverallOrderData.overalltrucktrailer.feet;
    document.querySelector('input[name="permitLoadLengthIn"]').value = dotvalue.order.OverallOrderData.overalltrucktrailer.inch;
    document.querySelector('input[name="permitLoadWidthFt"]').value = dotvalue.order.OverallOrderData.overallwidth.feet;
    document.querySelector('input[name="permitLoadWidthIn"]').value = dotvalue.order.OverallOrderData.overallwidth.inch; 
    document.querySelector('input[name="permitLoadHeightFt"]').value = dotvalue.order.OverallOrderData.overallheight.feet;
    document.querySelector('input[name="permitLoadHeightIn"]').value = dotvalue.order.OverallOrderData.overallheight.inch;
    document.querySelector('input[name="permitVehicleGrossWeight"]').value = dotvalue.order.totalWeight;

    
    document.querySelector('input[name="permitLoadOverhangFrontFt"]').value = dotvalue.order.OverallOrderData.front_overhang.feet;
    document.querySelector('input[name="permitLoadOverhangFrontIn"]').value = dotvalue.order.OverallOrderData.front_overhang.inch;
    document.querySelector('input[name="permitLoadOverhangRearFt"]').value = dotvalue.order.OverallOrderData.rear_overhang.feet;
    document.querySelector('input[name="permitLoadOverhangRearIn"]').value = dotvalue.order.OverallOrderData.rear_overhang.inch;

    document.querySelector('input[name="permitVehiclePULicense"]').value = dotvalue.order.truck_detail.license_plate;
    document.querySelector('select[name="permitVehiclePUState"]').value = dotvalue.order.truck_detail.license_state;
         
    document.querySelector('input[name="permitVehicleTLicense"]').value = dotvalue.order.Trailer_Info.license_plate;
    document.querySelector('select[name="permitVehicleTState"]').value = dotvalue.order.Trailer_Info.state;

    dotvalue.order.axle_weight.forEach(function(data,index) {                          
      
        document.querySelector(`input[name="vehicleAxleField[${index}].weight"]`).value = data.value; 

    });  
    
    dotvalue.order.axle_spacing.forEach(function(data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);
        var feetval = feet+"'";
        var inchesval = inches+'"';
        document.querySelector(`input[name="vehicleAxleField[${index}].spacingFt"]`).value = feetval; 
        document.querySelector(`input[name="vehicleAxleField[${index}].spacingIn"]`).value = inchesval; 
    });

    document.querySelector('input[name="permitLowBoyFlag"]').checked = true;
}
