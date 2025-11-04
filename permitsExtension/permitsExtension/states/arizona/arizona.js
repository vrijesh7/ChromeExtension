function arizonaStep1(dotvalue) {
  document.getElementById('USDOT').value = dotvalue.order.Company_Info.dot;
            var inputField = document.querySelector('[name="HaulerName"]');
            inputField.value = dotvalue.order.Company_Info.name;
  }

  function arizonaStep2(dotvalue) 
  {
    var inputElementpermit = document.getElementById('ackcheck');
    inputElementpermit.checked = true;

    var axlevalue = new Event('blur');
    var onchange =  new Event('change', { bubbles: true });
 
  var keyup = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      key: '', // You can specify the key if needed
      char: '', // You can specify the character if needed
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    });

    var keypressEvent = new KeyboardEvent('keypress', {
      bubbles: true,
      cancelable: true,
      key: '', 
      char: '', 
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    });

  

    var eventPermitType = new Event('click');
    inputElementpermit.dispatchEvent(eventPermitType); 
    
    var selectElement1 = document.getElementById("idIDType");
    var selectedValue1 = "1";
    for (var i = 0; i < selectElement1.options.length; i++) {
        if (selectElement1.options[i].value === selectedValue1) {
          selectElement1.options[i].selected = true;
            break;
        }
    }
    selectElement1.dispatchEvent(onchange);

    var trktypeElement2 = document.getElementById("idTrkType");
    var selectedValue2 = "3";
    for (var i = 0; i < trktypeElement2.options.length; i++) {
        if (trktypeElement2.options[i].value === selectedValue2) {
          trktypeElement2.options[i].selected = true;
            break;
        }
    }
    trktypeElement2.dispatchEvent(onchange);

   
    const truckSelect3 = document.getElementById('idTrkMakeModel');
    const otherMake = document.getElementById('idTrkModel');
    const targetMake = dotvalue.order.truck_detail.make;
    let found = false;

    for (let i = 0; i < truckSelect3.options.length; i++) {
        if (!(truckSelect3.options[i].text !== targetMake)) { 
            found = true;  
            truckSelect3.selectedIndex = i;
            truckSelect3.dispatchEvent(onchange); 
            break;
        }
    }
    
  
   
    if (!found) {  
        
        for (let i = 0; i < truckSelect3.options.length; i++) {
            if (truckSelect3.options[i].text === "OTHER") {
                truckSelect3.selectedIndex = i;
                truckSelect3.dispatchEvent(onchange);
                break;
            }
        }
    
        setTimeout(() => {
            if (otherMake) {
                otherMake.value = targetMake;
                otherMake.dispatchEvent(new Event('input'));
                
            }
        }, 500); 
    }
    


    document.getElementById('idTrkYear').value = dotvalue.order.truck_detail.year;
    document.getElementById('idTrkYear').dispatchEvent(onchange);

    document.getElementById('idTrkLic').value = dotvalue.order.truck_detail.license_plate;
    document.getElementById('idTrkLic').dispatchEvent(onchange);
   // document.getElementById('idTrkState').value = dotvalue.order.truck_detail.license_state;
    
    var stateElement4 = document.getElementById("idTrkState");
    var selectedValue4 = dotvalue.order.truck_detail.license_state;
    for (var i = 0; i < stateElement4.options.length; i++) {
        if (stateElement4.options[i].value === selectedValue4) {
          stateElement4.options[i].selected = true;
            break;
        }
    }
    stateElement4.dispatchEvent(onchange);

    document.getElementById('idTrkSerial').value = dotvalue.order.truck_detail.vin;
    document.getElementById('idTrkSerial').dispatchEvent(onchange);
    document.getElementById('idTrkUnit').value = dotvalue.order.truck_detail.unit_id;
    document.getElementById('idTrkUnit').dispatchEvent(onchange);
    document.getElementById('idApportioned').checked = true;
    document.getElementById('idIFTALicense').value = dotvalue.order.Company_Info.ifta_number;
    document.getElementById('idIFTALicense').dispatchEvent(onchange);

    
    var trltypeElement5 = document.getElementById("idTrlrType");
    var selectedValue5 = "1";
    for (var i = 0; i < trltypeElement5.options.length; i++) {
        if (trltypeElement5.options[i].value === selectedValue5) {
          trltypeElement5.options[i].selected = true;
            break;
        }
    }
    trltypeElement5.dispatchEvent(onchange);


    document.getElementById('idTrlrLic').value = dotvalue.order.Trailer_Info.license_plate;
    document.getElementById('idTrlrLic').dispatchEvent(onchange);
    //document.getElementById('idTrlrState').value = dotvalue.order.Trailer_Info.state;
    var trlstateElement6 = document.getElementById("idTrlrState");
    var selectedValue6 = dotvalue.order.Trailer_Info.state;
    for (var i = 0; i < trlstateElement6.options.length; i++) {
        if (trlstateElement6.options[i].value === selectedValue6) {
          trlstateElement6.options[i].selected = true;
            break;
        }
    }
    trlstateElement6.dispatchEvent(onchange);


    document.getElementById('idTrlrUnit').value = dotvalue.order.Trailer_Info.trailer_id;
    document.getElementById('idTrlrUnit').dispatchEvent(onchange);
    document.getElementById('idLoadDescr').value = dotvalue.order.commodityDataValue.description;    //idLDDescNum
    var descType7 = document.getElementById('idLDDescNum');
    var descTypeValue7 = "18779";
    for(let i = 0; i<descType7.options.length; i++)
    {
      if(descType7.options[i].value === descTypeValue7)
      {
        descType7.options[i].selected = true;
        break;
      }
    }
    descType7.dispatchEvent(onchange);
   
    const length = (() => {
      const feet = dotvalue.order.OverallOrderData.overalllength.feet || 0;
      const inches = dotvalue.order.OverallOrderData.overalllength.inch || 0;
      return `${feet}ft${inches}in`;
    })();
   
    var conlenth = convertLength(length);
    document.getElementById('idLength').value = conlenth;
    document.getElementById('idLength').dispatchEvent(onchange);

    const width = (() => {
      const feet = dotvalue.order.OverallOrderData.overallwidth.feet;
      const inches = dotvalue.order.OverallOrderData.overallwidth.inch || 0;
      return `${feet}ft${inches}in`;
    })();
    var conwidth = convertLength(width);
    document.getElementById('idWidth').value = conwidth;
    document.getElementById('idWidth').dispatchEvent(onchange);

    const height = (() => {
      const feet = dotvalue.order.OverallOrderData.overallheight.feet;
      const inches = dotvalue.order.OverallOrderData.overallheight.inch || 0;
      return `${feet}ft${inches}in`;
    })();

    var conheight = convertLength(height);
    document.getElementById('idHeight').value = conheight;
    document.getElementById('idHeight').dispatchEvent(onchange);
    
    document.getElementById('idFrntOverhang').value = dotvalue.order.OverallOrderData.front_overhang.feet > 0 || (dotvalue.order.OverallOrderData.front_overhang.feet === 0 && dotvalue.order.OverallOrderData.front_overhang.inch > 0) ? "0'" : `${dotvalue.order.OverallOrderData.front_overhang.feet}'${dotvalue.order.OverallOrderData.front_overhang.inch}"`;;
    document.getElementById('idFrntOverhang').dispatchEvent(onchange);
    document.getElementById('idRearOverhang').value = 0;
    document.getElementById('idRearOverhang').dispatchEvent(onchange);

    document.getElementById("idGrossWt").value = dotvalue.order.totalWeight;
    document.getElementById("idGrossWt").dispatchEvent(onchange);

    var inputFieldaxle = document.getElementById('idNumAxles');
    inputFieldaxle.value = dotvalue.order.axle_weight.length;
    inputFieldaxle.dispatchEvent(axlevalue);

    dotvalue.order.axle_weight.forEach(function(data,index) {
  
      var axleId = 'idLoads' + (index + 1);
      document.getElementById(axleId).value = data.value;
      document.getElementById(axleId).dispatchEvent(onchange);
      document.getElementById(axleId).dispatchEvent(axlevalue);
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
  
      var axleweightid = 'idLoads' + (index + 1);
     
      
      var tirewidthid = 'idTireSize'+ (index + 1);
      var axlewidthid = 'idAxleWidth'+ (index + 1); 
      var tiereId = 'idNumTires' + (index + 1);


      if (document.getElementById(tirewidthid) !== null) {
        document.getElementById(axleweightid).value = data.value;
      }
      
      if (document.getElementById(tiereId) !== null) {
        document.getElementById(tiereId).value = tireCount;
        document.getElementById(tiereId).dispatchEvent(onchange);
        document.getElementById(tiereId).dispatchEvent(axlevalue);
      }
      
      if (document.getElementById(tirewidthid) !== null) {
        document.getElementById(tirewidthid).value = 11;
        document.getElementById(tirewidthid).dispatchEvent(onchange);
        document.getElementById(tirewidthid).dispatchEvent(axlevalue);
      }
      
      if (document.getElementById(axlewidthid) !== null) {
        document.getElementById(axlewidthid).value = "8'" + '0"';
        document.getElementById(axlewidthid).dispatchEvent(onchange);
      }

    });

    
    dotvalue.order.axle_spacing.forEach(function(data,index) {
      
      const { feet, inches } = convertValueSpacingftinch(data.value);

      var feetval = feet+"'";
      var inchesval = inches+'"';

      var axlespacingId= 'idSpacing'+(index+1);
      
      document.getElementById(axlespacingId).value =feetval+inchesval ;
      document.getElementById(axlespacingId).dispatchEvent(onchange);                      
      
    });
    document.querySelector('input[type="text"][name="OriginAZ"]').value = dotvalue.order.pickupFormattedAddress;
    document.querySelector('input[type="text"][name="DestinationAZ"]').value = dotvalue.order.deliveryFormatedAddress;
  }


 