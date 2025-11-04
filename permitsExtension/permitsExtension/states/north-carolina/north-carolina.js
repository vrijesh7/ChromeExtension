function northCarolinaState1(dotvalue)
{
    var blurEvent = new Event('blur');
    var onchange = new Event('change', { bubbles: true });
    var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', 
    char: '', 
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });
  var keypressEvent = new KeyboardEvent('keypress', {
    key: 'a', 
    code: 'KeyA', 
    charCode: 97, 
    keyCode: 97, 
    bubbles: true, 
    cancelable: true 
  }); 
   

    var selectElement = document.getElementById("Permit_Type_CD");
    var selectedValue = "1";
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectedValue) {
            selectElement.options[i].selected = true;
            break;
        }
    }
    selectElement.dispatchEvent(blurEvent);
    selectElement.dispatchEvent(onchange);

    var inputElementdate = document.getElementById('Date_Permit_Start');
    var currentDate = new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
    inputElementdate.value = currentDate;
    inputElementdate.dispatchEvent(blurEvent);
    inputElementdate.dispatchEvent(onchange);

}

function northCarolinaState2(dotvalue)
{
    var blurEvent = new Event('blur');
    var onchange = new Event('change', { bubbles: true });
    var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', 
    char: '', 
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });
  var keypressEvent = new KeyboardEvent('keypress', {
    key: 'a', 
    code: 'KeyA', 
    charCode: 97, 
    keyCode: 97, 
    bubbles: true, 
    cancelable: true 
  }); 

  if(document.getElementById('PermitVm_Permittee_Name') && document.getElementById('PermitVm_Permittee_Address1') && document.getElementById('PermitVm_Permittee_Address2'))
  {
    
    document.getElementById('PermitVm_Permittee_Name').value = dotvalue.order.Company_Info.name;
    document.getElementById('PermitVm_Permittee_Name').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_Permittee_Address1').value = dotvalue.order.Company_physical_address;
    document.getElementById('PermitVm_Permittee_Address1').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_Permittee_City').value = dotvalue.order.Company_city;
    document.getElementById('PermitVm_Permittee_City').dispatchEvent(blurEvent);

    document.getElementById('PermitVm_Permittee_Address2').value = '';
    document.getElementById('PermitVm_Permittee_Address2').dispatchEvent(blurEvent);

    var stateSelect = document.getElementById('PermitVm_Permittee_State_CD');
    var stateValue = dotvalue.order.truck_detail.license_state.toUpperCase();
    
    for (var i = 0; i < stateSelect.options.length; i++) {
      if (stateSelect.options[i].value === stateValue) 
        {
         stateSelect.options[i].selected = true;
          break;
      }
    } 
    
    stateSelect.dispatchEvent(blurEvent);
    stateSelect.dispatchEvent(onchange);

    document.getElementById('PermitVm_Permittee_Zip_Code').value =  dotvalue.order.Company_zip_code;
    document.getElementById('PermitVm_Permittee_Zip_Code').dispatchEvent(blurEvent);
  }

  if(document.getElementById('PermitVm_Requestor_Name') && document.getElementById('PermitVm_Requestor_Email'))
  {
  document.getElementById('PermitVm_Requestor_Name').value = "Nash Turcan";
  // document.getElementById('PermitVm_Requestor_Phone_Nbr').value = "984-293-8503";
  // document.getElementById('PermitVm_Requestor_Phone_Nbr').dispatchEvent(blurEvent);
  setTimeout(() => {
  const phoneField = document.getElementById('PermitVm_Requestor_Phone_Nbr');
  if (phoneField) {
    phoneField.value = "984-293-8503";
    phoneField.dispatchEvent(new Event('input', { bubbles: true }));
    phoneField.dispatchEvent(new Event('change', { bubbles: true }));
  }
  }, 500);

  document.getElementById('PermitVm_Requestor_Email').value = "synchronpermits@gmail.com";
  document.getElementById('PermitVm_Requestor_Email').dispatchEvent(blurEvent);
  }

  }

function northCarolinaState3(dotvalue)
{
    var click = new Event('click');
    var blurEvent = new Event('blur');
    var onchange = new Event('change', { bubbles: true });
    var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', 
    char: '', 
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });
  var keypressEvent = new KeyboardEvent('keypress', {
    key: 'a', 
    code: 'KeyA', 
    charCode: 97, 
    keyCode: 97, 
    bubbles: true, 
    cancelable: true 
  }); 
    
    
    document.getElementById('PermitVm_Power_Unit_License').value = dotvalue.order.truck_detail.license_plate;
    document.getElementById('PermitVm_Power_Unit_License').dispatchEvent(blurEvent);


    var stateElement = document.getElementById("PermitVm_Power_Unit_State_CD");         
    var stateValue = dotvalue.order.truck_detail.license_state;
    for (var i = 0; i < stateElement.options.length; i++) {
       if (stateElement.options[i].value === stateValue) {
           stateElement.options[i].selected = true;
           break;
       }
   }
   stateElement.dispatchEvent(blurEvent);
   stateElement.dispatchEvent(onchange);

    const last5Digits = dotvalue.order.truck_detail.vin.slice(-5);
    document.getElementById('PermitVm_Power_Unit_VIN').value = dotvalue.order.truck_detail.vin.slice(-5);
    document.getElementById('PermitVm_Power_Unit_VIN').dispatchEvent(blurEvent);

    var truckElement = document.getElementById("PermitVm_Power_Unit_Type_CD");
    var truckValue = "6";
    for (var i = 0; i < truckElement.options.length; i++) {
        if (truckElement.options[i].value === truckValue) {
            truckElement.options[i].selected = true;
            break;
        }
    }
    truckElement.dispatchEvent(blurEvent);
    truckElement.dispatchEvent(onchange);
    
    document.getElementById('PermitVm_Power_Unit_Reg_Weight').value = "80000";
    document.getElementById('PermitVm_Power_Unit_Reg_Weight').dispatchEvent(blurEvent);
}

function northCarolinaState4(dotvalue)
{

    var click = new Event('click');
    var blurEvent = new Event('blur');
    var onchange = new Event('change', { bubbles: true });
    var keyup = new KeyboardEvent('keyup', {
    bubbles: true,
    cancelable: true,
    key: '', 
    char: '', 
    shiftKey: false,
    ctrlKey: false,
    metaKey: false
  });
  var keypressEvent = new KeyboardEvent('keypress', {
    key: 'a', 
    code: 'KeyA', 
    charCode: 97, 
    keyCode: 97, 
    bubbles: true, 
    cancelable: true 
  }); 

    var descElement = document.getElementById("PermitVm_Load_Desc_CD");
    var descValue = "33";
    for (var i = 0; i < descElement.options.length; i++) {
        if (descElement.options[i].value === descValue) {
            descElement.options[i].selected = true;
            break;
        }
    }
    descElement.dispatchEvent(blurEvent);
    descElement.dispatchEvent(onchange);
  
    document.getElementById('PermitVm_Load_Desc_Txt').value = dotvalue.order.commodityDataValue.description;
    var conElement = document.getElementById("PermitVm_Conveyance_CD");
    var conValue = "2";
    for (var i = 0; i < conElement.options.length; i++) {
        if (conElement.options[i].value === conValue) {
            conElement.options[i].selected = true;
            break;
        }
    }
    conElement.dispatchEvent(blurEvent);
    conElement.dispatchEvent(onchange);

    document.getElementById('PermitVm_LoadWidthFeet').value = dotvalue.order.OverallOrderData.overallwidth.feet;
    document.getElementById('PermitVm_LoadWidthFeet').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_LoadWidthFeet').dispatchEvent(onchange);
    document.getElementById('PermitVm_LoadWidthInches').value = dotvalue.order.OverallOrderData.overallwidth.inch;
    document.getElementById('PermitVm_LoadWidthInches').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_LoadWidthInches').dispatchEvent(onchange);
    document.getElementById('PermitVm_LoadLengthFeet').value = dotvalue.order.OverallOrderData.overalllength.feet;
    document.getElementById('PermitVm_LoadLengthFeet').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_LoadLengthFeet').dispatchEvent(onchange);
    document.getElementById('PermitVm_LoadLengthInches').value = dotvalue.order.OverallOrderData.overalllength.inch;
    document.getElementById('PermitVm_LoadLengthInches').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_LoadLengthInches').dispatchEvent(onchange);

    document.getElementById('PermitVm_LoadHeightFeet').value = dotvalue.order.OverallOrderData.overallheight.feet;
    document.getElementById('PermitVm_LoadHeightFeet').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_LoadHeightFeet').dispatchEvent(onchange);
    document.getElementById('PermitVm_LoadHeightInches').value = dotvalue.order.OverallOrderData.overallheight.inch;
    document.getElementById('PermitVm_LoadHeightInches').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_LoadHeightInches').dispatchEvent(onchange);

    document.getElementById('PermitVm_TrailerLengthFeet').value = dotvalue.order.Trailer_Info.lenght;
    document.getElementById('PermitVm_TrailerLengthFeet').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_TrailerLengthFeet').dispatchEvent(onchange);
    document.getElementById('PermitVm_TrailerLengthInches').value = 0;
    document.getElementById('PermitVm_TrailerLengthInches').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_TrailerLengthInches').dispatchEvent(onchange);
    document.getElementById('PermitVm_OverhangFrontFeet').value = dotvalue.order.OverallOrderData.front_overhang.feet;
    document.getElementById('PermitVm_OverhangFrontFeet').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_OverhangFrontFeet').dispatchEvent(onchange);
    document.getElementById('PermitVm_OverhangFrontInches').value = dotvalue.order.OverallOrderData.front_overhang.inch;
    document.getElementById('PermitVm_OverhangFrontInches').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_OverhangFrontInches').dispatchEvent(onchange);
    document.getElementById('PermitVm_OverhangBackFeet').value = dotvalue.order.OverallOrderData.rear_overhang.feet;
    document.getElementById('PermitVm_OverhangBackFeet').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_OverhangBackFeet').dispatchEvent(onchange);
    document.getElementById('PermitVm_OverhangBackInches').value = dotvalue.order.OverallOrderData.rear_overhang.inch;
    document.getElementById('PermitVm_OverhangBackInches').dispatchEvent(blurEvent);
    document.getElementById('PermitVm_OverhangBackInches').dispatchEvent(onchange);


   let totalAxleSpacing1 = 0;
   dotvalue.order.axle_spacing.forEach(function(data, index) {
     const { feet, inches } = convertValueSpacingftinch(data.value);

     var spacingInInches = (feet * 12) + inches;
     totalAxleSpacing1 += spacingInInches;
     
    });
  let totalFeet1 = Math.floor(totalAxleSpacing1 / 12);
  let totalInches1 = totalAxleSpacing1 % 12;

   if(document.getElementById('PermitVm_ExtremeAxleFeet'))
   {
   document.getElementById('PermitVm_ExtremeAxleFeet').value = totalFeet1;
   document.getElementById('PermitVm_ExtremeAxleFeet').dispatchEvent(blurEvent);
   document.getElementById('PermitVm_ExtremeAxleFeet').dispatchEvent(onchange);
   } 

   if(document.getElementById('PermitVm_ExtremeAxleInches'))
   {
   document.getElementById('PermitVm_ExtremeAxleInches').value = totalInches1;
   document.getElementById('PermitVm_ExtremeAxleInches').dispatchEvent(blurEvent);
   document.getElementById('PermitVm_ExtremeAxleInches').dispatchEvent(onchange);
   }
   

    document.getElementById('PermitVm_Gross_Vehicle_Weight').value = `${dotvalue.order.totalWeight}`;
    document.getElementById('PermitVm_Gross_Vehicle_Weight').dispatchEvent(blurEvent);

    var inputFieldaxle = document.getElementById('PermitVm_Axle_Count'); 
     inputFieldaxle.value = dotvalue.order.axle_weight.length;
    inputFieldaxle.dispatchEvent(blurEvent);
    inputFieldaxle.dispatchEvent(onchange);


   var button = document.getElementById('axleSpacingModalLaunch');
    button.click();
      
    let totalAxleSpacing = 0;
    dotvalue.order.axle_spacing.forEach(function (data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);
        var axleWeightFeetId = 'axleSpacingInput-Feet-' + (index);
        var axleWeightInchId = 'axleSpacingInput-Inches-' + (index);


        document.getElementById(axleWeightFeetId).value = feet;
        document.getElementById(axleWeightFeetId).dispatchEvent(blurEvent);
        document.getElementById(axleWeightFeetId).dispatchEvent(onchange);

        document.getElementById(axleWeightInchId).value = inches;
        document.getElementById(axleWeightInchId).dispatchEvent(blurEvent);
        document.getElementById(axleWeightInchId).dispatchEvent(onchange);

        var spacingInInches = (feet * 12) + inches;
          totalAxleSpacing += spacingInInches;

    });
    const totalFeet = Math.floor(totalAxleSpacing / 12);
      const totalInches = totalAxleSpacing % 12;

      document.getElementById('sumFeet').value = totalFeet;
      document.getElementById('sumFeet').dispatchEvent(blurEvent);
      document.getElementById('sumFeet').dispatchEvent(onchange);
      document.getElementById('sumInches').value = totalInches;
      document.getElementById('sumInches').dispatchEvent(blurEvent);
      document.getElementById('sumInches').dispatchEvent(onchange);


}