function northDakotaState1(dotvalue)
{
   //configType
   var onchange = new Event('change', { bubbles: true });
   var blurEvent = new Event('blur', { bubbles: true });
    
   var configType = document.getElementById('configType').value;
            
   if (configType == "Power Unit") 
    {

    //    if(document.getElementById('srchUnitInput') && document.getElementById('srchUnitInput').value.trim() === '')
    //    {
    //    document.getElementById('srchUnitInput').value = dotvalue.order.truck_detail.unit_id;
    //    }
       if(document.getElementById('srchVinInput') && document.getElementById('srchVinInput').value.trim() === '')
       {
       document.getElementById('srchVinInput').value = dotvalue.order.truck_detail.vin;
       }
   
    } 


    const heading = document.querySelector('.maincontent h3.headingshading');
    
    if (heading && heading.textContent.trim() === 'Power Unit Information' && document.getElementById('inp000')) 
    {
       
       if(document.getElementById('inp000'))
       {
       document.getElementById('inp000').value = dotvalue.order.truck_detail.vin;
       }

       if(document.getElementById('inp010'))
       {
       document.getElementById('inp010').value = dotvalue.order.truck_detail.license_state.toUpperCase();
       }
    }

    //addPowerUnit2FM
    

    if (document.getElementById('configType').value === "Trailer") 
    {
    
    document.getElementById('srchLicenseInput').value = dotvalue.order.Trailer_Info.license_plate;
    document.getElementById('srchLicenseInput').dispatchEvent(onchange);
    
   
    }

    if(document.getElementById('noFuel'))
    {

        document.getElementById('noFuel').checked = true;
        document.getElementById('noFuel').click();
        document.getElementById('tripNo').checked = true;
        document.getElementById('tripNo').click();

    }
  
    
   
   
}

function northDakotaState2(dotvalue)
{
   
    var onchange = new Event('change', { bubbles: true });
    var blurEvent = new Event('blur', { bubbles: true });

    var click = new Event('click');
    var blur = new Event('blur');
    var keypressEvent = new KeyboardEvent('keypress', {
        key: 'a', 
        code: 'KeyA', 
        charCode: 97, 
        keyCode: 97, 
        bubbles: true, 
        cancelable: true 
    });

    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '', 
        char: '', 
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    });


    const heading = document.querySelector('.maincontent h3.headingshading');
    
    if (heading && heading.textContent.trim() === 'Power Unit Information' && document.getElementById('inp000')) 
    {
     

       if(document.getElementById('inp000'))
       {
       document.getElementById('inp000').value = dotvalue.order.truck_detail.vin;
       }

       if(document.getElementById('inp010'))
       {
       document.getElementById('inp010').value = dotvalue.order.truck_detail.license_state.toUpperCase();
       }
    }



    //
    if(heading && heading.textContent.trim() === 'Trailer Information' && document.getElementById('inp000'))
    {
        // License No.
        const licenseInput = document.getElementsByName('trailer.licenseNo');
        if (licenseInput.length > 0) {
            licenseInput[0].value = dotvalue.order.Trailer_Info.license_plate;
            licenseInput[0].dispatchEvent(blurEvent);
            licenseInput[0].dispatchEvent(onchange);
        }

        // Unit No.
        const unitInput = document.getElementsByName('trailer.unitNumber');
        if (unitInput.length > 0) {
            unitInput[0].value = dotvalue.order.Trailer_Info.trailer_id;
            unitInput[0].dispatchEvent(blurEvent);
            unitInput[0].dispatchEvent(onchange);
        }
    }

    if(document.getElementsByName('addTrailerFM') && document.getElementsByName('inp_281'))
    {

   
    const traileAxles =  dotvalue.order.Trailer_Info.axle;

        if(document.getElementById('inp_281'))
       {
       var truckAxle = document.getElementById('inp_281');
       truckAxle.value = dotvalue.order.Trailer_Info.axle;   
       truckAxle.dispatchEvent(onchange);
       }

        let i = 0;
        dotvalue.order.axle_weight.forEach(function (data, index) {
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
     
        
            if (index > traileAxles) {
                
                var inputTrailer = document.getElementById('axleWeight_' + i);
              
                if (inputTrailer) {
                    inputTrailer.value = Number(data.value);  
                    inputTrailer.dispatchEvent(blurEvent); 
                    inputTrailer.dispatchEvent(onchange); 
                    
                }
               
                //tireCountnoOfTires
                var tireCountTrailerValue = document.getElementById('noOfTires_' + i);
                if (tireCountTrailerValue) {
                    tireCountTrailerValue.value = tireCount;  
                    tireCountTrailerValue.dispatchEvent(blurEvent); 
                    tireCountTrailerValue.dispatchEvent(onchange); 
                }

                //tireSize
                var tireSizeTrilerValue = document.getElementById('tireSize_' + i);
                if (tireSizeTrilerValue) {
                    tireSizeTrilerValue.value = 11;  
                    tireSizeTrilerValue.dispatchEvent(blurEvent); 
                    tireSizeTrilerValue.dispatchEvent(onchange); 
                }

                //widthFeet_
                var widthFeetTrailerVAlue = document.getElementById('widthFeet_' + i);
                if (widthFeetTrailerVAlue) {
                    widthFeetTrailerVAlue.value = 8;  
                    widthFeetTrailerVAlue.dispatchEvent(blurEvent); 
                    widthFeetTrailerVAlue.dispatchEvent(onchange); 
                }

                i++;
            } 
        });

        let sIndex = 0;
        dotvalue.order.axle_spacing.forEach((data, index) => {

        const { feet, inches } = convertValueSpacingftinch(data.value);
            if (index > traileAxles) {
                var spacingAfterFeetTriler = document.getElementById('spacingAfterFeet_' + sIndex);

                if (spacingAfterFeetTriler) {
                    spacingAfterFeetTriler.value = feet;  
                    spacingAfterFeetTriler.dispatchEvent(blurEvent); 
                    spacingAfterFeetTriler.dispatchEvent(onchange); 
                } 

                var spacingAfterInchesTriler = document.getElementById('spacingAfterInches_' + sIndex);

                if (spacingAfterInchesTriler) {
                    spacingAfterInchesTriler.value = inches;  
                    spacingAfterInchesTriler.dispatchEvent(blurEvent); 
                    spacingAfterInchesTriler.dispatchEvent(onchange); 
                } 

                sIndex++;
            }
        });

    }
   
}

function northDakotaStateInfo(dotvalue)
{
       
    
    var onchange = new Event('change', { bubbles: true });
    var blurEvent = new Event('blur', { bubbles: true })

    var click = new Event('click');
    var blur = new Event('blur');
    var keypressEvent = new KeyboardEvent('keypress', {
        key: 'a', 
        code: 'KeyA', 
        charCode: 97, 
        keyCode: 97, 
        bubbles: true, 
        cancelable: true 
    });

    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '', 
        char: '', 
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    });

      

      const heading = document.querySelector('.maincontent h3.headingshading');
        

      const inp020 = document.getElementById('inp020');

      if (heading && heading.textContent.trim() === 'Power Unit Information' && inp020) 
       {
       

       if(document.getElementById('inp020'))
       {
       document.getElementById('inp020').value = dotvalue.order.truck_detail.license_plate;
       }
       if(document.getElementById('inp030'))
       {
       document.getElementById('inp030').value = dotvalue.order.truck_detail.year;
       }
       if(document.getElementById('inp040'))
       {
       document.getElementById('inp040').value = dotvalue.order.truck_detail.unit_id;
       }
       if(document.getElementById('inp050'))
       {
       document.getElementById('inp050').value = 80000;
       }
    //    if(document.getElementById('inp060'))
    //    {
    //    document.getElementById('inp060').value = dotvalue.order.truck_detail.make.toUpperCase();
    //    }
       if (document.getElementById('inp060')) {
        const select = document.getElementById('inp060');
        const makeToSelect = dotvalue.order.truck_detail.make.toUpperCase();

        const option = Array.from(select.options).find(opt => 
            opt.text.trim().toUpperCase() === makeToSelect
        );

        if (option) {
            select.value = option.value; 
            select.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
            console.warn(`Make "${makeToSelect}" not found in dropdown.`);
        }
        }


       if(document.getElementById('smeNo'))
       {
        const radioNo = document.getElementById('smeNo');
        radioNo.checked = true; 
        radioNo.dispatchEvent(new Event('change', { bubbles: true }));
       }
     
      
      
    }

    if(document.getElementById('addPowerUnit2FM') && document.getElementById('inp_281'))
    {
  
    const truckAxles = dotvalue.order.axle_weight.length - dotvalue.order.Trailer_Info.axle;

        if(document.getElementById('inp_281'))
       {
       var truckAxle = document.getElementById('inp_281');
       truckAxle.value = truckAxles;   
       truckAxle.dispatchEvent(onchange);
       }


        dotvalue.order.axle_weight.forEach(function (data, index) {
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

            if (index < truckAxles) {
                var inputEl = document.getElementById('axleWeight_' + index);
                if (inputEl) {
                    inputEl.value = Number(data.value);  
                    inputEl.dispatchEvent(blurEvent); 
                    inputEl.dispatchEvent(onchange); 
                }

                //tireCountnoOfTires
                var tireCountValue = document.getElementById('noOfTires_' + index);
                if (tireCountValue) {
                    tireCountValue.value = tireCount;  
                    tireCountValue.dispatchEvent(blurEvent); 
                    tireCountValue.dispatchEvent(onchange); 
                }

                //tireSize
                var tireSizeValue = document.getElementById('tireSize_' + index);
                if (tireSizeValue) {
                    tireSizeValue.value = 11;  
                    tireSizeValue.dispatchEvent(blurEvent); 
                    tireSizeValue.dispatchEvent(onchange); 
                }

                //widthFeet_
                var widthFeetVAlue = document.getElementById('widthFeet_' + index);
                if (widthFeetVAlue) {
                    widthFeetVAlue.value = 8;  
                    widthFeetVAlue.dispatchEvent(blurEvent); 
                    widthFeetVAlue.dispatchEvent(onchange); 
                }
            } 
        });

        dotvalue.order.axle_spacing.forEach((data, index) => {

        const { feet, inches } = convertValueSpacingftinch(data.value);
            if (index < truckAxles-1) {
                var spacingAfterFeet = document.getElementById('spacingAfterFeet_' + index);

                if (spacingAfterFeet) {
                    spacingAfterFeet.value = feet;  
                    spacingAfterFeet.dispatchEvent(blurEvent); 
                    spacingAfterFeet.dispatchEvent(onchange); 
                } 

                var spacingAfterInches = document.getElementById('spacingAfterInches_' + index);

                if (spacingAfterInches) {
                    spacingAfterInches.value = inches;  
                    spacingAfterInches.dispatchEvent(blurEvent); 
                    spacingAfterInches.dispatchEvent(onchange); 
                } 
            }
        });
    }
    
}


function checkedState(dotvalue)
{
    
    document.getElementById('stCheckBox_9').checked = true;         
    document.getElementById('iagree').checked = true;
    
       
}

function northDakotaState3(dotvalue)
{
   
    var onchange = new Event('change', { bubbles: true });

    var click = new Event('click');
    var blur = new Event('blur');
    var keypressEvent = new KeyboardEvent('keypress', {
        key: 'a', 
        code: 'KeyA', 
        charCode: 97, 
        keyCode: 97, 
        bubbles: true, 
        cancelable: true 
    });

    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '', 
        char: '', 
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    });


    document.getElementById('usdotNo').value = dotvalue.order.Company_Info.dot;
    document.querySelector('input[name="searchCompanies"]').dispatchEvent(click);
    document.querySelector('input[name="searchCompanies"]').dispatchEvent(keypressEvent);
    
}

function northDakotaState4(dotvalue)
{
   console.log(dotvalue);

    var onchange = new Event('change', { bubbles: true });

    var click = new Event('click');
    var blur = new Event('blur');

    var keypressEvent = new KeyboardEvent('keypress', {
        key: 'a', 
        code: 'KeyA', 
        charCode: 97, 
        keyCode: 97, 
        bubbles: true, 
        cancelable: true 
    });

    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '', 
        char: '', 
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
    });
      
    if(document.getElementById('altPurchaserPhoneNo'))
    {
        if(document.getElementById('altPurchaserName'))
        {
        document.getElementById('altPurchaserName').value = "TRC Logistics LLC";
        }
        var phoneNumber = dotvalue.order.clientData.phone;
        var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
        document.getElementById('altPurchaserPhoneNo').value = "9842938503";
        document.getElementById('altPurchaserEmailAddress').value = "synchronpermits@gmail.com";
       
    }
    
    // if(document.getElementById('driverPhoneNo'))
    // {     
        

    //     var phoneNumber = dotvalue.order.clientData.phone;
    //     var formattedPhoneNumber = phoneNumber.replace(/\+1\s*/, '').replace(/\D/g, '');
    //     document.getElementById('driverPhoneNo').value = formattedPhoneNumber;
    //     document.getElementById('driverEmailAddress').value = dotvalue.order.clientData.email;

    //     if (document.getElementById('driverName')) {
    //     const select = document.getElementById('driverName');
    //     const makeToSelect = dotvalue.order.clientData.name;

    //     const option = Array.from(select.options).find(opt => 
    //         opt.text.trim().toUpperCase() === makeToSelect
    //     );

    //     if (option) {
    //         select.value = option.value; 
    //         select.dispatchEvent(new Event('change', { bubbles: true }));
    //     } else {
    //         console.warn(`Make "${makeToSelect}" not found in dropdown.`);
    //     }
    //     }
        
       
    // }

    if(document.getElementById('loadDescription'))
    {
    document.getElementById('loadDescription').value = dotvalue.order.commodityDataValue.description;
    document.getElementById('nonDivisibleYes').checked = true;
    document.getElementById('nonDivisibleYes').click();
    document.getElementById('piggyBackNo').checked = true;
    document.getElementById('piggyBackNo').click();
    }

    if(document.getElementById('lengthFeet') && document.getElementById('overhangFrontFeet') && document.getElementById('heightInchesLoad'))
    {
    document.getElementById('lengthFeet').value = `${dotvalue.order.OverallOrderData.overalllength.feet}`;
    document.getElementById('lengthInches').value = `${dotvalue.order.OverallOrderData.overalllength.inch}`;
    document.getElementById('widthFeet').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}`;
    document.getElementById('widthInches').value = `${dotvalue.order.OverallOrderData.overallwidth.inch}`;
    document.getElementById('heightFeet').value = `${dotvalue.order.OverallOrderData.overallheight.feet}`;
    document.getElementById('heightInches').value = `${dotvalue.order.OverallOrderData.overallheight.inch}`;
    
    document.getElementById('lengthFeetTrailer').value = dotvalue.order.Trailer_Info.lenght;
    document.getElementById('lengthInchesTrailer').value = 0;
    document.getElementById('widthFeetTrailer').value = 8;
    document.getElementById('widthInchesTrailer').value = 6;

    document.getElementById('overhangFrontFeet').value = `${dotvalue.order.OverallOrderData.front_overhang.feet}`;
    document.getElementById('overhangFrontInches').value = `${dotvalue.order.OverallOrderData.front_overhang.inch}`;
    document.getElementById('overhangRearFeet').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}`;
    document.getElementById('overhangRearInches').value = `${dotvalue.order.OverallOrderData.rear_overhang.inch}`;

    document.getElementById('lengthFeetLoad').value = dotvalue.order.commodityDataValue.length.feet;
    document.getElementById('lengthInchesLoad').value  = dotvalue.order.commodityDataValue.length.inch;
    document.getElementById('widthFeetLoad').value = dotvalue.order.commodityDataValue.width.feet;
    document.getElementById('widthInchesLoad').value = dotvalue.order.commodityDataValue.width.inch;
    document.getElementById('heightFeetLoad').value = dotvalue.order.commodityDataValue.height.feet;
    document.getElementById('heightInchesLoad').value = dotvalue.order.commodityDataValue.height.inch;
    }

    if(document.getElementById('noOfAxles'))
    {
    document.getElementById('noOfAxles').value = dotvalue.order.axle_weight.length;
    document.getElementById('noOfAxles').dispatchEvent(keypressEvent);
    document.getElementById('noOfAxles').dispatchEvent(onchange);
     
    
    dotvalue.order.axle_weight.forEach(function (data, index)
     {
        
        var axleId = 'axleWeight_' + index;
        document.getElementById(axleId).value = data.value;
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
                      
        
        var numTiresId = 'noOfTires_' + index;
        var treadSizeId = 'tireSize_' + index;
        var axleWidthIdfeet = 'axleWidthFeet_' + index;
        var axleWidthIdInches = 'axleWidthInches_' + index;

       

        document.getElementById(numTiresId).value = tireCount;

      //   document.querySelector('numTiresId').dispatchEvent(change);

        document.getElementById(treadSizeId).value = 11;

      //   treadSizeElement.dispatchEvent(change);

        document.getElementById(axleWidthIdfeet).value = 8;
        document.getElementById(axleWidthIdInches).value = 6;
      

       });   

      dotvalue.order.axle_spacing.forEach(function(data, index) 
      {
      const { feet, inches } = convertValueSpacingftinch(data.value);
      var feetval = feet;
      var inchesval = inches;
      var spaceIdFeet = 'spacingAfterFeet_' + index;
      var spaceIdInches = 'spacingAfterInches_' + index;
      document.getElementById(spaceIdFeet).value = feetval;
      document.getElementById(spaceIdInches).value = inchesval;
      
    });
    
    }
}