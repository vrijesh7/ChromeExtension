function ohioStep1(dotvalue) 
{ 
  var onchange = new Event('change', { bubbles: true });
  var clickEvent = new Event('click', { bubbles: true, cancelable: true });
  var keyupEvent = new KeyboardEvent("keyup", {
    bubbles: true,
    cancelable: true,
    key: "a", 
    code: "KeyA",
    keyCode: 65, 
});

  document.getElementById('SearchTerm').value = '';
  simulateTyping('#SearchTerm', dotvalue.order.Company_Info.dot, 500)
  document.getElementById('SearchTerm').dispatchEvent(keyupEvent);
  
  // chrome.storage.local.get('loginUser', function(data) {
  //   if (data.loginUser) {
     
  //     document.getElementById('PageContentPlaceHolder1_ContactName').value = data.loginUser;  
  //   }
  // });//dotvalue.order.clientData.name

  document.getElementById('PageContentPlaceHolder1_ContactName').value = dotvalue.order.clientData.name;
  document.getElementById('PageContentPlaceHolder1_ContactPhone').value = "9842938503";
  document.getElementById('PageContentPlaceHolder1_ContactEmail').value = "synchronpermits@gmail.com";

  const emailValue = "0";
  const emailSelect = document.getElementById('PageContentPlaceHolder1_DeliveryDropDown');
  for (let i = 0; i < emailSelect.options.length; i++) {
    if (emailSelect.options[i].value === emailValue) {
      emailSelect.selectedIndex = i;
      emailSelect.dispatchEvent(onchange);
      break;
    }
  }

  if(document.getElementById('PageContentPlaceHolder1_tbDeliveryText1'))
  {
  document.getElementById('PageContentPlaceHolder1_tbDeliveryText1').value = "synchronpermits@gmail.com";
  }

  document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2').value = "1";
  document.getElementById('PageContentPlaceHolder1_DeliveryDropDown2').dispatchEvent(onchange);
  document.getElementById('PageContentPlaceHolder1_txtUserText').value = "TRC Logistics LLC";


  if(document.getElementById('PageContentPlaceHolder1_PermitTypeDD'))
  {
    var permitSelectElement = document.getElementById('PageContentPlaceHolder1_PermitTypeDD');
    permitSelectElement.value  =  "21";
    permitSelectElement.dispatchEvent(onchange);  
    permitSelectElement.dispatchEvent(clickEvent);

    setTimeout(function () {
      var newField = document.getElementById("selPermitSubTypes");
      if (newField) {
          newField.value = "24"; 
          newField.dispatchEvent(onchange);
      }
  }, 500);
  }

  // if(document.getElementById('selPermitSubTypes'))
  // {
  //   var selPermitSubTypes = document.getElementById('selPermitSubTypes');
  //   selPermitSubTypes.value  = "24";
  //   selPermitSubTypes.dispatchEvent(onchange); 
  // }
 

  // var observer = new MutationObserver(function(mutations) {
  //   mutations.forEach(function(mutation) {
  //     mutation.addedNodes.forEach(function(node) {
  //       if (node.nodeType === 1 && node.id === 'selPermitSubTypes') {
  //         setSelectValueAndTriggerChange('selPermitSubTypes', '24');
  //         observer.disconnect(); 
  //       }
  //     });
  //   });
  // });
  
  // observer.observe(document.body, { childList: true, subtree: true });
  

  }

  function ohioStep2(dotvalue) 
  {

    var onchange = new Event('change', { bubbles: true });
    var click = new Event('click');
    var clickEvent = new Event('click', { bubbles: true, cancelable: true });
    var keypressEvent = new KeyboardEvent('keypress', {  
      key: 'a',  
      code: 'KeyA',  
      charCode: 97,  
      keyCode: 97,  
      bubbles: true,  
      cancelable: true  
    });

    var keypressEvent1 = new KeyboardEvent('keypress', {
      bubbles: true,
      cancelable: true,
      key: '', 
      char: '', 
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    });
    
  
   
    document.getElementById('TruckNumber0_0').value=dotvalue.order.truck_detail.unit_id;

  

    const desiredTruckUnitId = dotvalue.order.truck_detail.unit_id;
            const truckSelect = document.getElementById('TruckSelect0_0');
            for (let i = 0; i < truckSelect.options.length; i++) {
              if (truckSelect.options[i].text === desiredTruckUnitId) {
                truckSelect.selectedIndex = i;
                truckSelect.dispatchEvent(onchange);
                break;
              }
            }
             
            
    document.getElementById('TruckYear0_0').value=dotvalue.order.truck_detail.year;
    document.getElementById('TruckVIN0_0').value=dotvalue.order.truck_detail.vin;
    document.getElementById('TruckVIN0_0').dispatchEvent(onchange); 
    document.getElementById('TruckState0_0').value=dotvalue.order.truck_detail.license_state;
    document.getElementById('TruckLicense0_0').value=dotvalue.order.truck_detail.license_plate;
    document.getElementById('TruckLicense0_0').dispatchEvent(onchange);
    document.getElementById('TruckTypeSlct0_0').value= 'L'; 
    document.getElementById('TruckTypeSlct0_0').dispatchEvent(onchange);
    
    var totalLength = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;
    document.getElementById('NumOfAxlesOnPowerUnit0_0').value = totalLength; 
    document.getElementById('EmptyWeightOnPowerUnit0_0').value= dotvalue.order.EmptyWeightAttributes; 


    document.getElementById('TrlrNumber0_0_0').value=dotvalue.order.Trailer_Info.trailer_id;
    document.getElementById('TrlrNumber0_0_0').dispatchEvent(keypressEvent);
    document.getElementById('TrlrNumber0_0_0').dispatchEvent(onchange);


    const desiredTrlrUnitId = dotvalue.order.Trailer_Info.trailer_id;
            const TrlrSelect = document.getElementById('TrlrSelect0_0_0');
            for (let i = 0; i < truckSelect.options.length; i++) {
              if (TrlrSelect.options[i].text === desiredTrlrUnitId) {
                TrlrSelect.selectedIndex = i;
                TrlrSelect.dispatchEvent(onchange);
                break;
              }
            }
        
    document.getElementById('TrlrYear0_0_0').value=dotvalue.order.Trailer_Info.year;
    document.getElementById('TrlrMake0_0_0').value=dotvalue.order.Trailer_Info.make; 
    document.getElementById('TrlrState0_0_0').value=dotvalue.order.Trailer_Info.state;
    document.getElementById('TrlrLicense0_0_0').value= dotvalue.order.Trailer_Info.license_plate;
    document.getElementById('TrlrLicense0_0_0').dispatchEvent(onchange);
    document.getElementById('TrlrLengthFT0_0_0').value= dotvalue.order.Trailer_Info.lenght; 
    document.getElementById('TrlrLengthFT0_0_0').dispatchEvent(keypressEvent);
    document.getElementById('TrlrLengthFT0_0_0').dispatchEvent(onchange);
    document.getElementById('TrlrLengthIN0_0_0').value= ''; 
   
    document.getElementById('TrlrNumOfAxlesOnPowerUnit0_0_0').value = dotvalue.order.Trailer_Info.axle; 
    document.getElementById('TrlrEmptyWeightOnPowerUnit0_0_0').value= dotvalue.order.Trailer_Info.empty_weight; 
    document.getElementById('LoadDescription0').value= dotvalue.order.commodityDataValue.description; 
    document.getElementById('SerialNumber0').value= dotvalue.order.commodityDataValue.serial; 

    document.getElementById('LoadLoadedWidthFeet0').value= dotvalue.order.commodityDataValue.width.feet;
    document.getElementById('LoadLoadedWidthFeet0').dispatchEvent(keypressEvent);
    document.getElementById('LoadLoadedWidthInches0').value= dotvalue.order.commodityDataValue.width.inch; 
    document.getElementById('LoadLoadedWidthInches0').dispatchEvent(onchange);
    document.getElementById('LoadLoadedWidthInches0').dispatchEvent(keypressEvent);

    document.getElementById('LoadLoadedHeightFeet0').value= dotvalue.order.commodityDataValue.height.feet;
    document.getElementById('LoadLoadedHeightFeet0').dispatchEvent(keypressEvent);

   

    document.getElementById('LoadLoadedHeightInches0').value= dotvalue.order.commodityDataValue.height.inch; 
    document.getElementById('LoadLoadedHeightInches0').dispatchEvent(onchange);
    document.getElementById('LoadLoadedHeightInches0').dispatchEvent(keypressEvent);

    document.getElementById('LoadLoadedLengthFeet0').value= dotvalue.order.commodityDataValue.length.feet;
    document.getElementById('LoadLoadedLengthFeet0').dispatchEvent(keypressEvent);
    document.getElementById('LoadLoadedLengthInches0').value= dotvalue.order.commodityDataValue.length.inch; 
    document.getElementById('LoadLoadedLengthInches0').dispatchEvent(onchange);
    document.getElementById('LoadLoadedLengthInches0').dispatchEvent(keypressEvent);

    document.getElementById('LoadLoadedWeight0').value= dotvalue.order.commodityDataValue.weight;
    document.getElementById('LoadLoadedWeight0').dispatchEvent(keypressEvent);

    document.getElementById('LoadedWidthFeet0').value= dotvalue.order.OverallOrderData.overallwidth.feet;
    document.getElementById('LoadedWidthInches0').value= dotvalue.order.OverallOrderData.overallwidth.inch;

    //keypressEvent
    document.getElementById('LoadedHeightFeet0').value= dotvalue.order.OverallOrderData.overallheight.feet;
    document.getElementById('LoadedHeightFeet0').dispatchEvent(keypressEvent);
    document.getElementById('LoadedHeightInches0').value= dotvalue.order.OverallOrderData.overallheight.inch;
    document.getElementById('LoadedHeightInches0').dispatchEvent(onchange);
    document.getElementById('LoadedHeightInches0').dispatchEvent(keypressEvent);
    document.getElementById('LoadedLengthFeet0').value= dotvalue.order.OverallOrderData.overalllength.feet;
    document.getElementById('LoadedLengthFeet0').dispatchEvent(keypressEvent);
    document.getElementById('LoadedLengthInches0').value= dotvalue.order.OverallOrderData.overalllength.inch;
    document.getElementById('LoadedLengthInches0').dispatchEvent(onchange);
    document.getElementById('LoadedLengthInches0').dispatchEvent(keypressEvent);


    document.getElementById('LoadedFrontOHangFeet0').value= dotvalue.order.OverallOrderData.front_overhang.feet;
    document.getElementById('LoadedFrontOHangFeet0').dispatchEvent(keypressEvent);
    document.getElementById('LoadedFrontOHangInches0').value= dotvalue.order.OverallOrderData.front_overhang.inch;
    document.getElementById('LoadedFrontOHangInches0').dispatchEvent(onchange);
    document.getElementById('LoadedFrontOHangInches0').dispatchEvent(keypressEvent);


    document.getElementById('LoadedRearOHangFeet0').value= dotvalue.order.OverallOrderData.rear_overhang.feet;
    document.getElementById('LoadedRearOHangFeet0').dispatchEvent(keypressEvent);
    document.getElementById('LoadedRearOHangInches0').value= dotvalue.order.OverallOrderData.rear_overhang.inch;
    document.getElementById('LoadedRearOHangInches0').dispatchEvent(onchange);
    document.getElementById('LoadedRearOHangInches0').dispatchEvent(keypressEvent);

    document.getElementById('GVW_0').value= dotvalue.order.totalWeight;
    document.getElementById('GVW_0').dispatchEvent(onchange);
    document.getElementById('GVW_0').dispatchEvent(keypressEvent);


    var SetWeightButton20 = document.getElementById('SetWeightButton20');
   
    SetWeightButton20.dispatchEvent(click);  

    
    document.getElementById('NumOfAxles').value = dotvalue.order.axle_weight.length;
    document.getElementById('NumOfAxles').dispatchEvent(onchange);
    document.getElementById('NumOfAxles').dispatchEvent(keypressEvent1);
        
        document.getElementById('cbTireCount').checked = true;
        document.getElementById('cbTireCount').dispatchEvent(clickEvent); //cbTireWidth

        document.getElementById('cbTireWidth').checked = false;
        document.getElementById('cbTireWidth').dispatchEvent(clickEvent);


        dotvalue.order.axle_weight.forEach(function(data,index) {

          var axleWeightId = 'AxleWeight' + (index + 1);
        
          document.getElementById(axleWeightId).value = data.value;
          document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
          document.getElementById(axleWeightId).dispatchEvent(onchange);

      });


      dotvalue.order.axle_spacing.forEach(function(data,index) {
          
        const { feet, inches } = convertValueSpacingftinch(data.value);

        var axlespacingFeet= 'AxleSpaceFt'+(index+2);
        var axlespacingInc= 'AxleSpaceIn'+(index+2);
        
        document.getElementById(axlespacingFeet).value = feet;    
        document.getElementById(axlespacingFeet).dispatchEvent(onchange); 
        document.getElementById(axlespacingFeet).dispatchEvent(keypressEvent);
        document.getElementById(axlespacingInc).value = inches;    
        document.getElementById(axlespacingInc).dispatchEvent(onchange); 
        document.getElementById(axlespacingInc).dispatchEvent(keypressEvent); 
        
        
      });
    

      dotvalue.order.axle_weight.forEach(function(data,index) {

        

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
      
          var axleTireId = 'AxleTireCount' + (index + 1);
          document.getElementById(axleTireId).value = tireCount.trim();
        

    });
    
    document.getElementById('GVW_0').value= dotvalue.order.totalWeight;
  }

  function convertValueSpacingftinch(value) {
    const [feet, inches] = value.split('ft');
      return {
        feet: parseInt(feet, 10),
        inches: parseInt(inches.replace('in', ''), 10)
      };
  }