function alabamaStep1(dotvalue) 
{

    document.getElementById('USDOT').value = dotvalue.order.Company_Info.dot;
    document.querySelector('input[name="HaulerName"]').value = dotvalue.order.Company_Info.name;
  
    const lookupLink = document.querySelector('a.superBtn.supercenterBtn');

if (lookupLink) {
  // Create a new MouseEvent to simulate the click
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });

  // Dispatch the event to the element
  lookupLink.dispatchEvent(event);
  console.log("Lookup link clicked");
} else {
  console.error("Lookup link not found");
}

  }

  function alabamaStep2(dotvalue) 
  {
    

    var onchange =  new Event('change', { bubbles: true });

    document.getElementById("ackcheck").checked = true;
    var event = new Event('click');
    document.getElementById("ackcheck").dispatchEvent(event);

    document.querySelector('input[type="text"][name="TrkLic"]').value = dotvalue.order.truck_detail.license_plate;
    document.querySelector('select.element1[name="TrkState"]').value = dotvalue.order.truck_detail.license_state;
    const selectElement = document.querySelector('select.element1[name="TrkState"]');
    if (selectElement) {
      const event = new Event('change', { bubbles: true });
      selectElement.dispatchEvent(event);
    }

    document.querySelector('input[type="text"][name="TrlrLic"]').value = dotvalue.order.Trailer_Info.license_plate;
    document.querySelector('select.element1[name="TrlrState"]').value = dotvalue.order.Trailer_Info.state;

    const selectElement2 = document.querySelector('select.element1[name="TrlrState"]');
    if (selectElement2) {
      const event = new Event('change', { bubbles: true });
      selectElement2.dispatchEvent(event);
    }

    
    const selectElement3 = document.querySelector('select.element1[name="TrkState"]');
    if (selectElement) {
      const event = new Event('change', { bubbles: true });
      selectElement3.dispatchEvent(event);
    }

    

   // .value = dotvalue.order.commodityDataValue.description;
    
    const truckSelect3 = document.querySelector('select.element1[name="Loads"]');
    const otherMake = document.querySelector('input.element1[name="Desc2"]');
    const targetMake = dotvalue.order.commodityDataValue.description;
    let found = false;
 
    if (!found) {  
        
        for (let i = 0; i < truckSelect3.options.length; i++) {
            if (truckSelect3.options[i].value === "Other") {
               truckSelect3.options[i].selected = true;
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



    document.querySelector('input[type="text"][name="LoadMake"]').value = dotvalue.order.commodityDataValue.make;
    document.querySelector('input[type="text"][name="LoadModel"]').value = dotvalue.order.commodityDataValue.model;

    document.getElementById('idWidth').value = dotvalue.order.OverallOrderData.overallwidth.feet +" "+ dotvalue.order.OverallOrderData.overallwidth.inch;
      var changeEvent = new Event('change', { bubbles: true });
      document.getElementById('idWidth').dispatchEvent(changeEvent);
      var blurEvent = new Event('blur', { bubbles: true });
      document.getElementById('idWidth').dispatchEvent(blurEvent);

      var ClickEvent = new Event('click', { bubbles: true });


    document.querySelector('input[type="text"][name="Height"]').value = dotvalue.order.OverallOrderData.overallheight.feet +" "+dotvalue.order.OverallOrderData.overallheight.inch;
    document.querySelector('input[type="text"][name="Height"]').dispatchEvent(changeEvent);
    document.querySelector('input[type="text"][name="Height"]').dispatchEvent(blurEvent);

    document.querySelector('input[type="text"][name="Length"]').value =  dotvalue.order.OverallOrderData.overalllength.feet+" "+dotvalue.order.OverallOrderData.overalllength.inch;
    document.querySelector('input[type="text"][name="Length"]').dispatchEvent(changeEvent);
    document.querySelector('input[type="text"][name="Length"]').dispatchEvent(blurEvent);

    document.querySelector('input[type="text"][name="TrlrLen"]').value =  dotvalue.order.Trailer_Info.lenght;
    document.querySelector('input[type="text"][name="TrlrLen"]').dispatchEvent(changeEvent);
    document.querySelector('input[type="text"][name="TrlrLen"]').dispatchEvent(blurEvent);

 

    // document.querySelector('input[type="text"][name="GrossWt"]').value = dotvalue.order.totalWeight;
    // document.querySelector('input[type="text"][name="GrossWt"]').dispatchEvent(changeEvent);
    // document.querySelector('input[type="text"][name="GrossWt"]').dispatchEvent(blurEvent);


    document.querySelector('input[type="text"][name="FrontOH"]').value = dotvalue.order.OverallOrderData.front_overhang.feet+" "+dotvalue.order.OverallOrderData.front_overhang.inch;
    document.querySelector('input[type="text"][name="FrontOH"]').dispatchEvent(changeEvent);
    document.querySelector('input[type="text"][name="FrontOH"]').dispatchEvent(blurEvent);


    document.querySelector('input[type="text"][name="RearOH"]').value = dotvalue.order.OverallOrderData.rear_overhang.feet+" "+ dotvalue.order.OverallOrderData.rear_overhang.inch;
    document.querySelector('input[type="text"][name="RearOH"]').dispatchEvent(changeEvent);
    document.querySelector('input[type="text"][name="RearOH"]').dispatchEvent(blurEvent);

  
//     document.getElementById("OverweightFlag").checked = true;
//     document.getElementById('OverweightFlag').dispatchEvent(ClickEvent);

       
       
    var OverweightFlag = document.getElementById("OverweightFlag");
    if (OverweightFlag) {
      OverweightFlag.click();
    }

  
    document.querySelector('input[type="text"][name="NumAxles"]').value = dotvalue.order.axle_weight.length;
    document.querySelector('input[type="text"][name="NumAxles"]').dispatchEvent(blurEvent);
    
    // Iterate over the axle_weight array and set the input values
  dotvalue.order.axle_weight.forEach(function(data, index) {
    const axleNumber = index + 1; // Axle numbers are 1-based (1, 2, 3, ...)
    const axleDivId = 'Axle' + axleNumber + 'LoadLyr';

    // Select the input element within the corresponding div
    const axleDiv = document.getElementById(axleDivId);
    if (axleDiv) {
      const inputElement = axleDiv.querySelector('input[name="Load"]');
      if (inputElement) {
        // Set the value of the input element
        inputElement.value = data.value;

        // Trigger the change event to call the onchange handler
        const event = new Event('change', { bubbles: true });
        inputElement.dispatchEvent(event);
      } else {
        console.error(`Input element not found in ${axleDivId}`);
      }
    } else {
      console.error(`Div with ID ${axleDivId} not found`);
    }
  });



  dotvalue.order.axle_spacing.forEach(function(data, index) {
    const axleNumber = index + 1; // Axle numbers are 1-based (1, 2, 3, ...)
    const axleDivId = 'Axle' + axleNumber + 'SpaceLyr';
    // Convert the spacing value to feet and inches
    const { feet, inches } = convertValueSpacingftinch(data.value);

    // Format the value to display as feet and inches
    const formattedValue = `${feet}' ${inches}"`;

    // Select the input element within the corresponding div
    const axleDiv = document.getElementById(axleDivId);
    if (axleDiv) {
      const inputElement = axleDiv.querySelector('input[name="Space"]');
      if (inputElement) {
        // Set the value of the input element
        inputElement.value = formattedValue;

        // Trigger the change event to call the onchange handler
        const event = new Event('change', { bubbles: true });
        inputElement.dispatchEvent(event);
      } else {
        console.error(`Input element not found in ${axleDivId}`);
      }
    } else {
      console.error(`Div with ID ${axleDivId} not found`);
    }
  });


document.querySelector('input[type="text"][name="OrigOrigin"]').value = dotvalue.order.pickupFormattedAddress;
document.querySelector('input[type="text"][name="FinalDestination"]').value = dotvalue.order.deliveryFormatedAddress;

  
   
  }

  function convertValueSpacingftinch(value) {
    const [feet, inches] = value.split('ft');
      return {
        feet: parseInt(feet, 10),
        inches: parseInt(inches.replace('in', ''), 10)
      };
  }