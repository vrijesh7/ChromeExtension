function loginState(dotvalue)
{

    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '', // You can specify the key if needed
        char: '', // You can specify the character if needed
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
      });

    document.getElementById('UserName').value = loginusername;
    document.getElementById('Password').value  = loginpassword;
    document.getElementById('Password').dispatchEvent(keyup);

}

function nebraskaState1(dotvalue)
{
  
    document.getElementById('FEIN').value = dotvalue.order.Company_Info.dot;
    var inputField = document.querySelector('[name="HaulerName"]');
    inputField.value = dotvalue.order.Company_Info.name;

}

function nebraskaState2(dotvalue)
{

    var axlevalue = new Event('blur');

    var event = new Event('change', {
      bubbles: true,
      cancelable: true
    });
 
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
      key: '', // Specify key properties if needed
      char: '', // Specify char properties if needed
      shiftKey: false,
      ctrlKey: false,
      metaKey: false
    });

  

    // Trigger the onkeyup event
    var click = new Event('click');

    var inputElementpermit = document.getElementById('ackcheck');
    inputElementpermit.checked = true;
    inputElementpermit.dispatchEvent(click); 


    // Get the select element
    document.querySelector('input.element1[name="TrkMake"]').value = dotvalue.order.truck_detail.make;
    document.querySelector('input.element1[name="TrkMake"]').dispatchEvent(event);
    


    document.querySelector('input.element1[name="TrkYear"]').value = dotvalue.order.truck_detail.year;
    document.querySelector('input.element1[name="TrkYear"]').dispatchEvent(event);

    document.querySelector('input.element1[name="TrkLic"]').value = dotvalue.order.truck_detail.license_plate;
    document.querySelector('input.element1[name="TrkLic"]').dispatchEvent(event);
    

    var stateElement = document.querySelector('select.element1[name="TrkState"]');
    var selectedValue = dotvalue.order.truck_detail.license_state;
    for (var i = 0; i < stateElement.options.length; i++) {
        if (stateElement.options[i].value === selectedValue) {
          stateElement.options[i].selected = true;
            break;
        }
    }
    stateElement.dispatchEvent(event);

    document.querySelector('input.element1[name="TrkUnit"]').value = dotvalue.order.truck_detail.unit_id;
    document.querySelector('input.element1[name="TrkUnit"]').dispatchEvent(event);
   

    
    document.querySelector('input.element1[name="TrlrMake"]').value = dotvalue.order.Trailer_Info.make;
    document.querySelector('input.element1[name="TrlrMake"]').dispatchEvent(event);


    document.querySelector('input.element1[name="TrlrLic"]').value = dotvalue.order.Trailer_Info.license_plate;
    document.querySelector('input.element1[name="TrlrLic"]').dispatchEvent(event);
   // document.getElementById('idTrlrState').value = dotvalue.order.Trailer_Info.state;
    var trlstateElement = document.querySelector('select.element1[name="TrlrState"]');                  //
    var selectedValue = dotvalue.order.Trailer_Info.state;
    for (var i = 0; i < trlstateElement.options.length; i++) {
        if (trlstateElement.options[i].value === selectedValue) {
          trlstateElement.options[i].selected = true;
            break;
        }
    }
    trlstateElement.dispatchEvent(event);


    document.querySelector('input.element1[name="TrlrUnit"]').value = dotvalue.order.Trailer_Info.trailer_id;
    document.querySelector('input.element1[name="TrlrUnit"]').dispatchEvent(event);

    document.querySelector('input.element1[name="Desc"]').value = dotvalue.order.commodityDataValue.description;

    document.querySelector('input.element1[name="Width"]').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}'${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
    document.querySelector('input.element1[name="Width"]').dispatchEvent(axlevalue);
    document.querySelector('input.element1[name="Width"]').dispatchEvent(event);
     
    document.querySelector('input.element1[name="Height"]').value = `${dotvalue.order.OverallOrderData.overallheight.feet}'${dotvalue.order.OverallOrderData.overallheight.inch}"`;
    document.querySelector('input.element1[name="Height"]').dispatchEvent(axlevalue);
    document.querySelector('input.element1[name="Height"]').dispatchEvent(event);

    document.querySelector('input.element1[name="Length"]').value = `${dotvalue.order.OverallOrderData.overalllength.feet}'${dotvalue.order.OverallOrderData.overalllength.inch}"`;
    document.querySelector('input.element1[name="Length"]').dispatchEvent(axlevalue);
    document.querySelector('input.element1[name="Length"]').dispatchEvent(event);

    document.querySelector('input.element1[name="TrlrLen"]').value = dotvalue.order.Trailer_Info.lenght;
    document.querySelector('input.element1[name="TrlrLen"]').dispatchEvent(axlevalue);
    document.querySelector('input.element1[name="TrlrLen"]').dispatchEvent(event);

    document.querySelector('input.element1[name="GrossWt"]').value = 80000;//dotvalue.order.totalWeight;
    document.querySelector('input.element1[name="GrossWt"]').dispatchEvent(axlevalue);
    document.querySelector('input.element1[name="GrossWt"]').dispatchEvent(event);


    if(document.querySelector('input.element1[name="NumAxles"]'))
    {
    document.querySelector('input.element1[name="NumAxles"]').value = dotvalue.order.axle_weight.length;
    document.querySelector('input.element1[name="NumAxles"]').dispatchEvent(axlevalue);
    
    
    dotvalue.order.axle_weight.forEach(function (data, index)
     {
         var axleId = 'Axle'+(index + 1)+'LoadLyr';
        document.querySelector('#' + axleId + ' input[name="Load"]').value = data.value;
        document.querySelector('#' + axleId + ' input[name="Load"]').dispatchEvent(event);
      });


    
    
    dotvalue.order.axle_spacing.forEach(function(data,index) {
      
      const { feet, inches } = convertValueSpacingftinch(data.value);

      var feetval = feet+"'";
      var inchesval = inches+'"';

      var spaceId = 'Axle' + (index + 1) + 'SpaceLyr';
      document.querySelector('#' + spaceId + ' input[name="Space"]').value = feetval+inchesval;
      document.querySelector('#' + spaceId + ' input[name="Space"]').dispatchEvent(axlevalue);
     document.querySelector('#' + spaceId + ' input[name="Space"]').dispatchEvent(event);                     
      
    });
   }

    document.querySelector('input.element1[name="Origin"]').value = dotvalue.order.pickupFormattedAddress;
    document.querySelector('input.element1[name="Destination"]').value = dotvalue.order.deliveryFormatedAddress;

}