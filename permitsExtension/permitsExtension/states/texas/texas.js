function texasStep1(dotvalue) 
{
  document.getElementById('soncb0').checked = true;
          document.getElementById('soncb1').checked = true;
          document.getElementById('soncb2').checked = true;
  }

  function texasStep2(dotvalue) 
  {
    var onchange = new Event('change');

  if(document.getElementById('PageContentPlaceHolder1_ContactName'))
  {
  document.getElementById('PageContentPlaceHolder1_ContactName').value = "Nash Turcan";//dotvalue.order.clientData.name;  
  }

  if(document.getElementById('PageContentPlaceHolder1_ContactPhone'))
  {
  var phoneNumber = dotvalue.order.clientData.phone;
  var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
  document.getElementById('PageContentPlaceHolder1_ContactPhone').value = "9842938503";//formattedPhoneNumber;
  }

  if(document.getElementById('PageContentPlaceHolder1_ContactEmail'))
  {
  document.getElementById('PageContentPlaceHolder1_ContactEmail').value = "synchronpermits@gmail.com";//dotvalue.order.clientData.email; 
  }

  var deliveryType = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2');
  if(deliveryType)
  {
    var industryTypevalue = "1";
    for (var i = 0; i < deliveryType.options.length; i++) {
        if (deliveryType.options[i].value === industryTypevalue) {
          deliveryType.options[i].selected = true;
            break;
        }
    }
    deliveryType.dispatchEvent(onchange);
  }
  
  var permitType = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
  if(permitType)
  {
    var pypevalue = "1";
    for (var i = 0; i < permitType.options.length; i++) {
        if (permitType.options[i].value === pypevalue) {
          permitType.options[i].selected = true;
            break;
        }
    }
    permitType.dispatchEvent(onchange);  
  }
  
   
  }

  function texasStep3(dotvalue) 
  {
    var event = new Event('click');
    if (document.getElementById('authorityNumber_1')) {

      document.getElementById('authorityNumber_1').value = dotvalue.order.Company_Info.dot;
      document.getElementById('authorityCB_1').checked = true;

      
      var nextbuttonElement = document.getElementById('PageContentPlaceHolder1_ImageButton2');
      nextbuttonElement.dispatchEvent(event);   

      document.getElementById('cbAttestDOT').checked = true;

  }else{

    if(document.getElementById('TruckNumber0_0'))
    {
    document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;
    }
    if(document.getElementById('TruckYear0_0'))
    {
    document.getElementById('TruckYear0_0').value = dotvalue.order.truck_detail.year;
    }
    //document.getElementById('TruckMake0_0').value = dotvalue.order.truck_detail.make;
    if(document.getElementById('TruckMakeDD0_0'))
    {
    document.getElementById('TruckMakeDD0_0').value = dotvalue.order.truck_detail.make.toUpperCase();
    }
    if(document.getElementById('TruckVIN0_0'))
    {
    document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
    }
    if(document.getElementById('TruckLicense0_0'))
    {
    document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;
    }
    if(document.getElementById('TruckState0_0'))
    {
    document.getElementById('TruckState0_0').value =dotvalue.order.truck_detail.license_state;
    }
    if(document.getElementById('LoadDescription0'))
    {
    document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;
    }
    if(document.getElementById('txtIndustryOtherDesc0'))
    {
    document.getElementById('txtIndustryOtherDesc0').value = dotvalue.order.commodityDataValue.description;
    }
    if(document.getElementById('chkLoadIndivisible0'))
    {
    document.getElementById('chkLoadIndivisible0').checked = true;
    }
    
    if(document.getElementById('IndustryDD_0'))
    {
    var industryType = document.getElementById('IndustryDD_0');
    industryType.value = 15;
     var eventPermitType = new Event('change');
     industryType.dispatchEvent(eventPermitType); 
    }
 
    if(document.getElementById('LoadedWidthFeet0'))
    {
    document.getElementById('LoadedWidthFeet0').value = dotvalue.order.OverallOrderData.overallwidth.feet;
    
    document.getElementById('LoadedWidthInches0').value = dotvalue.order.OverallOrderData.overallwidth.inch;
    }

    if(document.getElementById('LoadedHeightFeet0'))
    {
    document.getElementById('LoadedHeightFeet0').value = dotvalue.order.OverallOrderData.overallheight.feet
    document.getElementById('LoadedHeightInches0').value = dotvalue.order.OverallOrderData.overallheight.inch
    }

    if(document.getElementById('LoadedLengthFeet0'))
    {
    document.getElementById('LoadedLengthFeet0').value = dotvalue.order.OverallOrderData.overalllength.feet;
    document.getElementById('LoadedLengthInches0').value = dotvalue.order.OverallOrderData.overalllength.inch;
    }

    if(document.getElementById('LoadedTrailerFeet0'))
    {
    document.getElementById('LoadedTrailerFeet0').value = dotvalue.order.Trailer_Info.lenght;
    document.getElementById('LoadedTrailerInches0').value = 0;
    }
    

    if(document.getElementById('LoadedFrontOHangFeet0'))
    {
    document.getElementById('LoadedFrontOHangFeet0').value = 0;
    document.getElementById('LoadedFrontOHangInches0').value = 0;
    }
    if(document.getElementById('LoadedRearOHangFeet0'))
    {
    document.getElementById('LoadedRearOHangFeet0').value = 0;
    document.getElementById('LoadedRearOHangInches0').value = 0;
    }


    // if(document.getElementById('underClearance0'))
    // {
    // if(dotvalue.order.Trailer_Type==="Removable Goose Neck"){
    //     document.getElementById('underClearance0').value =10;
    // }
    // else{
    //     document.getElementById('underClearance0').value =20;
    // }
    // }

    var SetWeightButton0 = document.getElementById('SetWeightButton0');
    if(SetWeightButton0)
    {
    SetWeightButton0.click();
    }
    
    var inputElementNumberofalex = document.getElementById('PageContentPlaceHolder1_NumOfAxles');
    if(inputElementNumberofalex)
    {
    inputElementNumberofalex.value = dotvalue.order.axle_weight.length;
    var eventalex = new Event('change');
    inputElementNumberofalex.dispatchEvent(eventalex); 
    }
    

    dotvalue.order.axle_spacing.forEach(function (data, index) {
    // const { feet, inches } = convertValueSpacingftinch(data.value);
    var res = convertValue(data.value);
    // var feetval = feet;
    // var inchesval = inches;
    var feetId = 'PageContentPlaceHolder1_AxleSpaceFt' + (index + 2);
    //var inchesId = 'AxleSpaceIn' + (index + 2);
    document.getElementById(feetId).value = res;

    // document.getElementById(inchesId).value = inchesval;
    // document.getElementById(inchesId).dispatchEvent(inputEvent);
    // document.getElementById(inchesId).dispatchEvent(event);
    // document.getElementById(inchesId).dispatchEvent(blurEvent);
    });


    dotvalue.order.axle_weight.forEach(function (data, index) {

    var axleId = 'PageContentPlaceHolder1_AxleWeight' + (index + 1);
    document.getElementById(axleId).value = data.value;

    });
    // if(document.getElementById('PageContentPlaceHolder1_AxleWeight1'))
    // {
    // document.getElementById('PageContentPlaceHolder1_AxleWeight1').value =10;
    // }

    // dotvalue.order.axle_weight.forEach(function(data,index) {

    //     var axleWeightId = 'PageContentPlaceHolder1_AxleWeight' + (index + 1);
        
    //       document.getElementById(axleWeightId).value = data.value;

    //       let name = data.name;
    //       let tireCount, tirename;
      
    //       if (name.includes(":")) {
    //           let [namePart, tireinfo] = name.split(":");
    //           [tireCount, tirename] = tireinfo.split(" ");
    //       } else {
    //           let nameParts = name.split(" ");
    //           tireCount = nameParts[1];
    //           tirename = "Tires";
    //       }
      
    //       var axleTireId = 'PageContentPlaceHolder1_AxleTireCount' + (index + 1);
    //       document.getElementById(axleTireId).value = tireCount.trim();
        

    // });

    
    // dotvalue.order.axle_spacing.forEach(function(data,index) {
    //     var res = convertValue(data.value);
    //     var axleSpacingId = 'PageContentPlaceHolder1_AxleSpaceFt' + (index + 2);                    
    //     document.getElementById(axleSpacingId).value = res;
       
    // });

  } 
  
   
  }
