function WyomingState1(dotvalue) 
{
  
    var blurEvent = new Event('blur');
    var onchange = new Event('change', { bubbles: true });
    var changeEvent = new Event('change', { bubbles: true, cancelable: true });
    var input = new Event('input', { bubbles: true });
    var click = new Event('click');
    var blur = new Event('blur', { bubbles: true });
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
    
    if (document.querySelector('input.form-control[placeholder="Enter USDOT"]')) {
      
      simulateTyping('input.form-control[placeholder="Enter USDOT"]', dotvalue.order.Company_Info.dot, 200)
      document.querySelector('input.form-control[placeholder="Enter USDOT"]').dispatchEvent(keypressEvent);
      document.querySelector('input.form-control[placeholder="Enter USDOT"]').dispatchEvent(keydownEvent);
      document.querySelector('input.form-control[placeholder="Enter USDOT"]').dispatchEvent(onchange);
      
    }
    
  
    if (document.getElementById('contactName')) {
  
      var contactNameInput = document.getElementById('contactName');
  
      if (contactNameInput) {
  
        if (contactNameInput.hasAttribute('readonly')) {
          contactNameInput.removeAttribute('readonly');
        }
  
        contactNameInput.value = "Nash Turcan";//dotvalue.order.clientData.name;
  
        contactNameInput.dispatchEvent(input);
        contactNameInput.dispatchEvent(onchange);
      }
      var phoneNumber = "9842938503";
      var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
  
      var phoneInput = document.getElementById('contactPhone');
  
      if (phoneInput) {
  
        if (phoneInput.hasAttribute('readonly')) {
          phoneInput.removeAttribute('readonly');
        }
  
        phoneInput.value = formattedPhoneNumber;
  
        phoneInput.dispatchEvent(input);
        phoneInput.dispatchEvent(onchange);
      }
  
      var contactEmailValue = "synchronpermits@gmail.com";
      var contactEmailInput = document.getElementById('contactEmail');
  
      if (contactEmailInput) {
  
        if (contactEmailInput.hasAttribute('readonly')) {
          contactEmailInput.removeAttribute('readonly');
        }
  
        contactEmailInput.value = contactEmailValue;
  
        contactEmailInput.dispatchEvent(input);
        contactEmailInput.dispatchEvent(onchange);
      }


      var selectElement = document.querySelector('select[name="_contactInformationModel.PrimaryDeliveryMethod"]');
      var selectElementValue = "E";
      for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectElementValue) {
          selectElement.options[i].selected = true;
          break;
        }
      }
  
  
      selectElement.dispatchEvent(onchange);

      var deliveryEmail = "synchronpermits@gmail.com";
      var deliveryAddress1 = document.getElementById('deliveryAddress1');
  
      if (deliveryAddress1) {
  
        if (deliveryAddress1.hasAttribute('readonly')) {
          deliveryAddress1.removeAttribute('readonly');
        }
  
        deliveryAddress1.value = deliveryEmail;
  
        deliveryAddress1.dispatchEvent(input);
        deliveryAddress1.dispatchEvent(onchange);
      }
  
      var companyReferenceValue = "TRC Logistics LLC";
      var companyReference = document.getElementById('companyReference');
  
      if (companyReference) {
  
        if (companyReference.hasAttribute('readonly')) {
          companyReference.removeAttribute('readonly');
        }
  
        companyReference.value = companyReferenceValue;
  
        companyReference.dispatchEvent(input);
        companyReference.dispatchEvent(onchange);
      }
  
  
    }
  
  
    if (document.getElementById('permitType')) {
  
      var selectElement = document.getElementById('permitType');
      var selectElementValue = "64";
  
      for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].value === selectElementValue) {
          selectElement.options[i].selected = true;
          break;
        }
      }
  
      selectElement.dispatchEvent(changeEvent);
  
      setTimeout(function () {
        var selectElement1 = document.getElementById('permitDefinitionSelect');
        if (selectElement1) {
          var selectElementValue1 = "2694";
          for (var i = 0; i < selectElement1.options.length; i++) {
            if (selectElement1.options[i].value === selectElementValue1) {
              selectElement1.options[i].selected = true;
              break;
            }
          }
          selectElement1.dispatchEvent(changeEvent);
        }
      }, 500);
  
    }
  
  
   if (document.querySelector('select[id="customerVehicleSelect"]') && document.getElementById('vin').value === "") {

    const UnitNumber = [dotvalue.order.truck_detail.unit_id, dotvalue.order.Trailer_Info.trailer_id]; 
    
     const truckVIN = dotvalue.order.truck_detail.vin;
     const trailerVIN = dotvalue.order.Trailer_Info.vin;

     const truckPlate = dotvalue.order.truck_detail.license_plate;
    
     var vehicleState = [dotvalue.order.truck_detail.license_state, dotvalue.order.Trailer_Info.state]; 

     
     var trilerState = dotvalue.order.Trailer_Info.state;

     const trailerPlate = dotvalue.order.Trailer_Info.license_plate;
     const trailerLength = dotvalue.order.Trailer_Info.lenght;

     var vehicleType = ["TA", "ST"]; 
     
    
   
    function fillInputField(inputElement, value, label) {
      if (inputElement) {
          inputElement.value = value;
          inputElement.dispatchEvent(input); 
          inputElement.dispatchEvent(onchange); 
          inputElement.dispatchEvent(blur); 
         
      } else {
          console.warn(`⚠ Input field ${label} not found.`);
      }
  }

    var unitNumberInputs = document.querySelectorAll('input[id="vehicleUnitNumber"]');
    var vehicleInputs = document.querySelectorAll('input[id="licenseState"]');
    var vehicletypeInputs = document.querySelectorAll('input[id="conveyance"]');
    
    if (unitNumberInputs.length > 0) {
        
        fillInputField(unitNumberInputs[0], UnitNumber[0]);
    }

    
    fillInputField(document.querySelector('input[id="vin"]'), truckVIN);
    fillInputField(document.querySelector('input[id="licenseNumber"]'), truckPlate);
    fillInputField(vehicleInputs[0], vehicleState[0]);
    fillInputField(vehicletypeInputs[0], vehicleType[0]);

    
    const addButton = document.querySelector('.btn.add-btn');
    if (addButton) {
        addButton.click(); 

        const container = document.querySelector('.tab-pane.fade.show.active');
        const observer = new MutationObserver(function () {
            const dropdowns = document.querySelectorAll('select[id="customerVehicleSelect"]');
            const updatedUnitNumberInputs = document.querySelectorAll('input[id="vehicleUnitNumber"]');
            const updatedUnitVehicleInputs = document.querySelectorAll('input[id="licenseState"]');
            const updatevehicletypeInputs = document.querySelectorAll('input[id="conveyance"]');
            
            // Find the card with title "Trailer 1"
              const trailer1Card = [...document.querySelectorAll('.card')]
                .find(card => card.querySelector('.card-title')?.textContent.trim() === 'Trailer 1');

              if (trailer1Card) {
                const licenseInput = trailer1Card.querySelector('#licenseState');
                licenseInput.value = trilerState;
                licenseInput.dispatchEvent(onchange);

                const vehicleType = trailer1Card.querySelector('#conveyance');
                vehicleType.value = "ST";
                vehicleType.dispatchEvent(onchange);
              }

            if (dropdowns.length > 1 && updatedUnitNumberInputs.length > 1) {
              
                fillInputField(updatedUnitNumberInputs[1], UnitNumber[1]);
                fillInputField(document.querySelector('input[id="trailerLicenseNum"]'), trailerPlate);
                fillInputField(document.querySelector('.tab-pane.fade.show.active input[type="number"].form-control'), trailerLength);

                observer.disconnect();

            }
        });

        observer.observe(container, { childList: true, subtree: true });
    }
}
 
  
    if (document.getElementById('industryCodeSelect')) {
      var selectElement1 = document.getElementById('industryCodeSelect');
      var selectElementValue1 = "3192";
      for (var i = 0; i < selectElement1.options.length; i++) {
        if (selectElement1.options[i].value === selectElementValue1) {
          selectElement1.options[i].selected = true;
          break;
        }
      }
      selectElement1.dispatchEvent(onchange);
  
      document.getElementById('loadDescription').value = dotvalue.order.commodityDataValue.description;
      document.getElementById('loadDescription').dispatchEvent(onchange);
  
      var heightInputs = document.querySelectorAll('#height input.form-control');
      heightInputs[0].value = dotvalue.order.OverallOrderData.overallheight.feet;
      heightInputs[1].value = dotvalue.order.OverallOrderData.overallheight.inch;
  
      heightInputs[0].dispatchEvent(onchange);
      heightInputs[1].dispatchEvent(blurEvent);
      heightInputs[1].dispatchEvent(onchange);
  
  
  
      var widthInputs = document.querySelectorAll('#width input.form-control');
      widthInputs[0].value = dotvalue.order.OverallOrderData.overallwidth.feet;
      widthInputs[1].value = dotvalue.order.OverallOrderData.overallwidth.inch;
  
      widthInputs[0].dispatchEvent(onchange);
      widthInputs[1].dispatchEvent(blurEvent);
      widthInputs[1].dispatchEvent(onchange);

      var suInputs = document.querySelectorAll('#suLength input.form-control');
       
      var overallFeet = dotvalue.order.Trailer_Info.lenght || 0;
      var overallInch = 0;
      var overhangFeet = dotvalue.order.OverallOrderData.rear_overhang.feet || 0;
      var overhangInch = dotvalue.order.OverallOrderData.rear_overhang.inch || 0;

      
      overallFeet = parseInt(overallFeet, 10);
      overallInch = parseInt(overallInch, 10);
      overhangFeet = parseInt(overhangFeet, 10);
      overhangInch = parseInt(overhangInch, 10);

      
      var totalInches = overallInch + overhangInch;
      var extraFeet = Math.floor(totalInches / 12);
      var suFeet = overallFeet + overhangFeet + extraFeet;
      var suInch = totalInches % 12; 

      suInputs[0].value = suFeet;
      suInputs[1].value = suInch;

      suInputs[0].dispatchEvent(input);
      suInputs[0].dispatchEvent(onchange);
      suInputs[0].dispatchEvent(blurEvent);

      suInputs[1].dispatchEvent(input);
      suInputs[1].dispatchEvent(onchange);
      suInputs[1].dispatchEvent(blurEvent);

  
      var lengthInputs = document.querySelectorAll('#overallLength input.form-control');
  
      lengthInputs[0].value = dotvalue.order.OverallOrderData.overalllength.feet; 
      lengthInputs[1].value = dotvalue.order.OverallOrderData.overalllength.inch; 
    
      lengthInputs[0].dispatchEvent(input);
      lengthInputs[0].dispatchEvent(onchange);
      lengthInputs[0].dispatchEvent(blurEvent);
    
      lengthInputs[1].dispatchEvent(input);
      lengthInputs[1].dispatchEvent(onchange);
      lengthInputs[1].dispatchEvent(blurEvent);
  
      var rearInputs = document.querySelectorAll('#ROH input.form-control');
  
      rearInputs[0].value = dotvalue.order.OverallOrderData.rear_overhang.feet; 
      rearInputs[1].value = dotvalue.order.OverallOrderData.rear_overhang.inch; 

      rearInputs[0].dispatchEvent(input);
      rearInputs[0].dispatchEvent(onchange);
      rearInputs[0].dispatchEvent(blurEvent);

      rearInputs[1].dispatchEvent(input);
      rearInputs[1].dispatchEvent(onchange);
      rearInputs[1].dispatchEvent(blurEvent);


      var checkbox = document.querySelector('.col-lg-12.mb-2 input[type="checkbox"]');

      var totalWeight  = dotvalue.order.totalWeight;
      
      if(totalWeight <= 80000)
      {
        if (checkbox && !checkbox.checked) {
            checkbox.click();
        }
      }
  
  
    }
  
    var card = document.querySelector('.card.border-none[b-wuwlbbri88]');

    if (card) {
  
      var axleOption = document.getElementById('axleMode');

      if (axleOption && !axleOption.checked) {
          
          axleOption.checked = true;  
          axleOption.dispatchEvent(onchange);
      }
      
  
      if (document.getElementById('axleCount').value < 6) {
        document.getElementById('axleCount').value = dotvalue.order.axle_weight.length;
        document.getElementById('axleCount').dispatchEvent(input);
        document.getElementById('axleCount').dispatchEvent(blurEvent);
        document.getElementById('axleCount').dispatchEvent(onchange);
      }
  
      dotvalue.order.axle_spacing.forEach(function (data, index) {
        const { feet, inches } = convertValueSpacingftinch(data.value);
  
        var feetval = feet;
        var inchesval = inches;
  
        var axleSpacing = 'spacing' + (index + 1);
  
        var spacingInputs = document.querySelectorAll(`#${axleSpacing} input.form-control`);
        spacingInputs[0].value = feetval;
        spacingInputs[1].value = inchesval;
  
        spacingInputs[0].dispatchEvent(onchange);
        spacingInputs[1].dispatchEvent(blurEvent);
  
  
      });
  
  
      dotvalue.order.axle_weight.forEach(function (data, index) {
  
  
        var treadSizeId = 'rimSize' + index;
  
        var selectElement3 = document.getElementById(treadSizeId);
        var selectElementvalue3 = "103";
  
        for (var i = 0; i < selectElement3.options.length; i++) {
          if (selectElement3.options[i].value === selectElementvalue3) {
            selectElement3.options[i].selected = true;
            break;
          }
        }
        selectElement3.dispatchEvent(keypressEvent);
        selectElement3.dispatchEvent(onchange);
  
      });
  
  
      dotvalue.order.axle_weight.forEach(function (data, index) {

        var axleId = 'weight' + index; 
        var weightInput = document.getElementById(axleId);
          var weightValue = parseInt(data.value, 10);  
            weightInput.value = weightValue; 
            weightInput.dispatchEvent(input); 
            weightInput.dispatchEvent(keypressEvent); 
            weightInput.dispatchEvent(keydownEvent); 
            weightInput.dispatchEvent(onchange); 
            weightInput.dispatchEvent(blurEvent);
          
       
      });
  
    }
  
  
  
  }