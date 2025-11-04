function tennesseeStep1(dotvalue) {
  document.getElementById("UsdotNo").value = dotvalue.order.Company_Info.dot;
  }

  function tennesseeStep2(dotvalue) {
   
    chrome.storage.local.get('loginUser', function(data) {
      if (data.loginUser) {
          document.getElementById('ContactNameOther').value = data.loginUser;  
      }
  });
  document.getElementById('Email').value = "synchronpermits@gmail.com";
  document.getElementById('BusinessPhoneNo').value = "9842938503";
  
   
  }


  function tennesseeStep3(dotvalue) {

  

    var onchange =  new Event('change', { bubbles: true });
    var click = new Event('click');
    var keypressEvent = new KeyboardEvent('keypress', {
      key: 'a', // Specify the key value (e.g., 'a')
      code: 'KeyA', // Specify the physical key code (e.g., 'KeyA')
      charCode: 97, // ASCII value of the key (optional)
      keyCode: 97, // Legacy property (optional)
      bubbles: true, // Indicates the event bubbles up through the DOM
      cancelable: true // Indicates the event can be canceled
    });
    var keydownEvent = new KeyboardEvent('keydown', {
      key: 'a', // Specify the key value (e.g., 'a')
      code: 'KeyA', // Specify the physical key code (e.g., 'KeyA')
      keyCode: 65, // ASCII value for 'A'
      bubbles: true, // Indicates the event bubbles up through the DOM
      cancelable: true // Indicates the event can be canceled
    });
    
        // Create a keyup event
        var keyupEvent = new KeyboardEvent('keyup', {
          key: 'a', // Specify the key value (e.g., 'a')
          code: 'KeyA', // Specify the physical key code (e.g., 'KeyA')
          keyCode: 65, // ASCII value for 'A'
          bubbles: true, // Indicates the event bubbles up through the DOM
          cancelable: true // Indicates the event can be canceled
        });
        var mouseoutEvent = new MouseEvent('mouseout', {
          bubbles: true,    // Indicates the event bubbles up through the DOM
          cancelable: true, // Indicates the event can be canceled
          clientX: 100,     // X coordinate within the application's viewport
          clientY: 100      // Y coordinate within the application's viewport
        });
        const pnlStep1 = document.getElementById('pnlStep1');
        if (pnlStep1 && window.getComputedStyle(pnlStep1).display !== 'none') {
    simulateTyping('#tableSearch_1', dotvalue.order.truck_detail.vin, 100);
    document.getElementById("SingleTripLoadDetails_TrailerPlateNo").value = dotvalue.order.Trailer_Info.license_plate;
    document.getElementById("SingleTripLoadDetails_State").value = dotvalue.order.Trailer_Info.state;
        }
   
        const pnlStep2 = document.getElementById('pnlStep2');
        if (pnlStep2 && window.getComputedStyle(pnlStep2).display !== 'none') {

    document.getElementById('SingleTripDimensionDetails_OverallWidthFt').value = dotvalue.order.OverallOrderData.overallwidth.feet;
    document.getElementById('SingleTripDimensionDetails_OverallWidthIn').value = dotvalue.order.OverallOrderData.overallwidth.inch;
    
    document.getElementById('SingleTripDimensionDetails_OverallLengthFt').value = dotvalue.order.OverallOrderData.overalllength.feet;
    document.getElementById('SingleTripDimensionDetails_OverallLengthIn').value = dotvalue.order.OverallOrderData.overalllength.inch;  

    document.getElementById('SingleTripDimensionDetails_OverallHeightFt').value = dotvalue.order.OverallOrderData.overallheight.feet;
    document.getElementById('SingleTripDimensionDetails_OverallHeightIn').value = dotvalue.order.OverallOrderData.overallheight.inch;
    
    document.getElementById('SingleTripDimensionDetails_TrailerLengthFt').value = dotvalue.order.Trailer_Info.lenght;
 
    document.getElementById('SingleTripDimensionDetails_TrailerWidthFt').value = 8;
    document.getElementById('SingleTripDimensionDetails_TrailerWidthIn').value = 6;
   
    document.getElementById('SingleTripDimensionDetails_RearOverhangFt').value = dotvalue.order.OverallOrderData.rear_overhang.feet;
    document.getElementById('SingleTripDimensionDetails_RearOverhangIn').value = dotvalue.order.OverallOrderData.rear_overhang.inch;
    
    if(dotvalue.order.totalWeight > 80000){

        var radioButton = document.getElementById("radioSingleTripDimensionDetails.GrossWeight.OLW");
        radioButton.checked = true;
        
    }
    document.getElementById("SingleTripDimensionDetails_TotalGrossVehicleWeight").value=dotvalue.order.totalWeight;
    simulateTyping("SingleTripDimensionDetails_TotalGrossVehicleWeight",dotvalue.order.totalWeight,100)
  


const table = document.getElementById('axleDetailTable0');
const rows = table.getElementsByTagName('tr');
let excelRowCount = 0;
for (let i = 1; i < rows.length; i++) {
  if (rows[i].querySelectorAll('td:not(:empty)').length > 0) {
    excelRowCount++;
  }
}
if(excelRowCount<dotvalue.order.axle_weight.length)
{
  addAxle(dotvalue.order.axle_weight.length);
}
else
{
  dotvalue.order.axle_spacing.forEach(function(data,index) {
    const { feet, inches } = convertValueSpacingftinch(data.value);
    var axlespacingftId= 'AxleList_'+(index+1)+'__InterAxleSpacingFt';
    var axlespacingIncId = 'AxleList_'+(index+1)+'__InterAxleSpacingIn';
    document.getElementById(axlespacingftId).value = feet;
    document.getElementById(axlespacingIncId).value = inches;
    
  });

  dotvalue.order.axle_weight.forEach(function(data,index) {
    var axleWeightId = 'AxleDescriptionVM1_AxleList_'+(index)+'__RequestedLoad' ;
    var axleWeightName = 'AxleDescriptionVM1_AxleList_'+(index)+'__NoOfTiresPerAxle' ;
    if(index==0)
    {
     
      document.getElementById('AxleDescriptionVM1_AxleList_0__EquipmentType').value = 'STR';
    }
    document.getElementById(axleWeightId).value = data.value;
    const tiresPerAxle = getAxleTireCount(data.name);  
    document.getElementById(axleWeightName).value = tiresPerAxle;
    document.getElementById(axleWeightId).dispatchEvent(onchange);
    document.getElementById(axleWeightId).dispatchEvent(keypressEvent);
    document.getElementById(axleWeightId).dispatchEvent(mouseoutEvent);
});


document.getElementById('AxleDescriptionVM1_TotalRequestedLoad').dispatchEvent(onchange);
document.getElementById('AxleDescriptionVM1_TotalRequestedLoad').dispatchEvent(keypressEvent);

}

   
    
    
   
  
  }
   
  }

  function convertValueSpacingftinch(value) {
    const [feet, inches] = value.split('ft');
      return {
        feet: parseInt(feet, 10),
        inches: parseInt(inches.replace('in', ''), 10)
      };
  }

  function addAxle(length) {
    const pnlStep2 = document.getElementById('pnlStep2');
  
    // Check if pnlStep2 is visible
    if (pnlStep2 && window.getComputedStyle(pnlStep2).display !== 'none') {
    
      // Define the values for each form field
      const axleType = 'DRV'; // Example: 'STEERING'
      const numberOfAxles = length; // Example: '2 axles'
      const weight = '5000'; // Example: '5000 lbs'
      const numberOfTiresPerAxle = '4'; // Example: '4 tires per axle'
  
      // Get references to the form elements
      const axleTypeSelect = document.getElementById('AxleDescriptionVM1_AxleType');
      const noOfAxlesInput = document.getElementById('AxleDescriptionVM1_NoOfAxle');
      const weightInput = document.getElementById('AxleDescriptionVM1_Weight');
      const noOfTiresPerAxleInput = document.getElementById('AxleDescriptionVM1_NoOfTiresPerAxle');
      const addButton = document.getElementById('btnAddAxle');
  
      // Set values and click the add button
      axleTypeSelect.value = axleType;
      noOfAxlesInput.value = numberOfAxles;
      weightInput.value = weight;
      noOfTiresPerAxleInput.value = numberOfTiresPerAxle;
      var click = new Event('click');
      addButton.dispatchEvent(click);


      
    }
  }
  function getAxleTireCount(str) {
    const matches = str.match(/(\d+) Tires/);
    if (matches) {
      return parseInt(matches[1]);
    } else {
      const colonMatch = str.match(/:(\d+)/);
      return colonMatch ? parseInt(colonMatch[1]) : null;
    }
  }
// Optionally, you can call simulateAddingAxles() from another part of your code,
// or upon a certain event that ensures the pnlStep2 is visible.