function rhodeIslandState0(dotvalue)
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


  simulateTyping('input[type="search"][placeholder="Search Here"]',dotvalue.order.Company_Info.dot,500)
  
  document.querySelector('input[type="search"][placeholder="Search Here"]').dispatchEvent(keypressEvent);
  document.querySelector('input[type="search"][placeholder="Search Here"]').dispatchEvent(keydownEvent);
  document.querySelector('input[type="search"][placeholder="Search Here"]').dispatchEvent(onchange);
}

function rhodeIslandState1(dotvalue)
{
    var event = new Event('change', {
        bubbles: true,
        cancelable: true
      });
      var click = new Event('click');
      var currentVehicleType  = document.getElementById('trip_vehicle_form_vehicle_type').value
    if(currentVehicleType=='Truck')
    {
    document.getElementById('trip_vehicle_form_registration_number').value = dotvalue.order.truck_detail.license_plate;
    document.getElementById('trip_vehicle_form_registration_number').dispatchEvent(click);

    document.getElementById('trip_vehicle_form_registration_state').value = dotvalue.order.truck_detail.license_state;
    document.getElementById('trip_vehicle_form_registration_state').dispatchEvent(event);
    document.getElementById('trip_vehicle_form_make').value = dotvalue.order.truck_detail.make;
    document.getElementById('trip_vehicle_form_make').dispatchEvent(click);

    //var totalLength = dotvalue.order.truck_detail.axle + 1 ;
    var totalLength = dotvalue.order.truck_detail.axle;

    document.getElementById('trip_vehicle_form_axle_count').value = totalLength;
    document.getElementById('trip_vehicle_form_axle_count').dispatchEvent(click);

  }
else{
  var SetWeightButton20 = document.getElementById('add');
  SetWeightButton20.dispatchEvent(event);

  document.getElementById('trip_vehicle_form_registration_number').value = dotvalue.order.Trailer_Info.license_plate;
  document.getElementById('trip_vehicle_form_registration_state').value = dotvalue.order.Trailer_Info.state
  document.getElementById('trip_vehicle_form_registration_state').dispatchEvent(event);
  document.getElementById('trip_vehicle_form_axle_count').value = dotvalue.order.Trailer_Info.axle;
  document.getElementById('trip_vehicle_form_length_feet').value = dotvalue.order.Trailer_Info.lenght;
  document.getElementById('trip_vehicle_form_length_inches').value = 0;
  document.getElementById('trip_vehicle_form_make').value = dotvalue.order.Trailer_Info.make;
  document.getElementById('trip_vehicle_form_steerable_axle_true').checked =true;
  document.getElementById('trip_vehicle_form_steerable_axle_true').dispatchEvent(event);

  
  document.getElementById('size_form_gross_weight').value= dotvalue.order.totalWeight;
  document.getElementById('size_form_width_feet').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
 
  document.getElementById('size_form_width_inches').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
  document.getElementById('size_form_height_feet').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
  document.getElementById('size_form_height_inches').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
  document.getElementById('size_form_length_feet').value = `${dotvalue.order.OverallOrderData.overalllength.feet}`;
  document.getElementById('size_form_length_inches').value = `${dotvalue.order.OverallOrderData.overalllength.inch}`;
 }
     
     
    

}

function rhodeIslandState2(dotvalue)
{

    var event = new Event('change', {
      bubbles: true,
      cancelable: true
    });

    document.getElementById('trip_axle_load_form_front_overhang_feet').value = `${dotvalue.order.OverallOrderData.front_overhang.feet}`;
    document.getElementById('trip_axle_load_form_front_overhang_inches').value = `${dotvalue.order.OverallOrderData.front_overhang.inch}`;
    document.getElementById('trip_axle_load_form_rear_overhang_feet').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}`;
    document.getElementById('trip_axle_load_form_rear_overhang_inches').value = `${dotvalue.order.OverallOrderData.rear_overhang.inch}`;
    

  //  dotvalue.order.axle_weight.forEach(function(data,index) {                                
  //   var axleId = `trip_axle_load_form_axles_attributes_${index}_load_quantity`;
  //   document.getElementById(axleId).value = data.value;
    
  //  });

    try {
      dotvalue.order.axle_weight.forEach(function (data, index) {
          var axleId = `trip_axle_load_form_axles_attributes_${index}_load_quantity`;
          var axleElement = document.getElementById(axleId);
          if (axleElement) {
              axleElement.value = data.value;
          } else {
              console.warn(`Element not found: ${axleId}`);
          }
      });
    } catch (error) {
        console.error("Error in axle weight loop:", error);
    }

  dotvalue.order.axle_spacing.forEach(function(data, index) {
    
    const { feet, inches } = convertValueSpacingftinch(data.value);
    var feetval = feet;
    var inchesval = inches;
    var feetId = `trip_axle_load_form_axles_attributes_${index}_distance_to_next_feet`;
    var inchesId = `trip_axle_load_form_axles_attributes_${index}_distance_to_next_inches`;
    document.getElementById(feetId).value = feetval;
    document.getElementById(feetId).dispatchEvent(event);
    document.getElementById(inchesId).value = inchesval;
    document.getElementById(inchesId).dispatchEvent(event);

    });

}

function rhodeIslandState3(dotvalue)
{
    var event = new Event('change', {
        bubbles: true,
        cancelable: true
      });
    
      dotvalue.order.routeData.forEach(function(data) {  
        document.getElementById('trip_permit_trip_info_form_trip_date').value = data.start_date;
      });
    //document.getElementById('trip_permit_trip_info_form_trip_date').value = dotvalue.order.data.start_date;
    document.getElementById('trip_permit_trip_info_form_haz_mat_false').checked =true;
    document.getElementById('trip_permit_trip_info_form_haz_mat_false').dispatchEvent(event);
    document.getElementById('trip_permit_trip_info_form_load_description').value = dotvalue.order.commodityDataValue.description; 
    document.getElementById('trip_permit_trip_info_form_route_description').value = "A";
    document.getElementById('trip_permit_trip_info_form_origin_address_attributes_state').value = "";
    document.getElementById('trip_permit_trip_info_form_origin_address_attributes_state').dispatchEvent(event);
    document.getElementById('trip_permit_trip_info_form_destination_address_attributes_state').value = "";
    document.getElementById('trip_permit_trip_info_form_destination_address_attributes_state').dispatchEvent(event);


    document.getElementById('declaration_form_agree').checked =true;
    document.getElementById('declaration_form_agree').dispatchEvent(event);


}