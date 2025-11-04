function michiganState1(dotvalue)
{
    // var keyup = new KeyboardEvent('keyup', {
    //     bubbles: true,
    //     cancelable: true,
    //     key: '', // You can specify the key if needed
    //     char: '', // You can specify the character if needed
    //     shiftKey: false,
    //     ctrlKey: false,
    //     metaKey: false
    //   });
    //   var clickEvent = new MouseEvent('click', {
    //     bubbles: true,
    //     cancelable: true,
    //     view: window
    // });

    // document.querySelector('input.element1[name="USDOT"]').value = dotvalue.order.Company_Info.dot;
    // document.querySelector('input.element1[name="HaulerName"]').value = dotvalue.order.Company_Info.name;

    // document.querySelector('a.superBtn[name="btn_lookup"]').dispatchEvent(clickEvent);
    // document.querySelector('span.superBtn_rt').dispatchEvent(clickEvent);
 
    document.querySelector('[name="USDOT"]').value = dotvalue.order.Company_Info.dot;
    var inputField = document.querySelector('[name="HaulerName"]');
    inputField.value = dotvalue.order.Company_Info.name;
}

function michiganState2(dotvalue)
{
  

    var keyup = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        key: '', 
        char: '', 
        shiftKey: false,
        ctrlKey: false,
        metaKey: false
      });
      var clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    var change = new Event('change', {
        bubbles: true,
        cancelable: true
      });
      var click = new Event('click');
      var axlevalue = new Event('blur');

       
       document.getElementById('ackcheck').checked = true;
       document.getElementById('ackcheck').dispatchEvent(click);

       document.querySelector('select.element1[name="VehType"]').value = 1;
       document.querySelector('select.element1[name="VehType"]').dispatchEvent(change);


      document.querySelector('input.element1[name="TrkLic"]').value = dotvalue.order.truck_detail.license_plate;
      document.querySelector('input.element1[name="TrkLic"]').dispatchEvent(change);
      
      document.querySelector('select.element1[name="TrkState"]').value = dotvalue.order.truck_detail.license_state;
      document.querySelector('select.element1[name="TrkState"]').dispatchEvent(change);
      
    
      document.querySelector('input.element1[name="TrlrLic"]').value = dotvalue.order.Trailer_Info.license_plate;
      document.querySelector('input.element1[name="TrlrLic"]').dispatchEvent(change);
      document.querySelector('select.element1[name="TrlrState"]').value = dotvalue.order.Trailer_Info.state;
      document.querySelector('select.element1[name="TrlrState"]').dispatchEvent(change);

      document.querySelector('input.element1[name="TrlrLen"]').value = dotvalue.order.Trailer_Info.lenght; 
      document.querySelector('input.element1[name="TrlrLen"]').dispatchEvent(change);
      
     if(document.querySelector('input.element1[name="DescMI"]'))
     {
     document.querySelector('input.element1[name="DescMI"]').value = dotvalue.order.commodityDataValue.description;
     document.querySelector('input.element1[name="DescMI"]').dispatchEvent(axlevalue);
     }
     if(document.querySelector('input.element1[name="LoadLen"]'))
     {
    document.querySelector('input.element1[name="LoadLen"]').value = `${dotvalue.order.commodityDataValue.length.feet}' ${dotvalue.order.commodityDataValue.length.inch}"`;
    document.querySelector('input.element1[name="LoadLen"]').dispatchEvent(change);
     }
     if(document.querySelector('input.element1[name="LoadWidth"]'))
     {
    document.querySelector('input.element1[name="LoadWidth"]').value =`${dotvalue.order.commodityDataValue.width.feet}' ${dotvalue.order.commodityDataValue.width.inch}"`;
    document.querySelector('input.element1[name="LoadWidth"]').dispatchEvent(change);
     }
     if(document.querySelector('input.element1[name="LoadHeight"]'))
     {
    document.querySelector('input.element1[name="LoadHeight"]').value = `${dotvalue.order.commodityDataValue.height.feet}' ${dotvalue.order.commodityDataValue.height.inch}"`;
    document.querySelector('input.element1[name="LoadHeight"]').dispatchEvent(change);
     }
     if(document.querySelector('input.element1[name="LoadWt"]'))
     {
     document.querySelector('input.element1[name="LoadWt"]').value = dotvalue.order.commodityDataValue.weight;
     document.querySelector('input.element1[name="LoadWt"]').dispatchEvent(change);
     }

    
               if(document.querySelector('input.element1[name="LoadMake"]'))
               {
               document.querySelector('input.element1[name="LoadMake"]').value = dotvalue.order.commodityDataValue.make;
               }

               if(document.querySelector('input.element1[name="LoadModel"]'))
               {
               document.querySelector('input.element1[name="LoadModel"]').value = dotvalue.order.commodityDataValue.model;
               }
               if(document.querySelector('input.element1[name="LoadSerial"]'))
               {
               document.querySelector('input.element1[name="LoadSerial"]').value = dotvalue.order.commodityDataValue.serial ?? '';
               }
               if(document.querySelector('#LengthLyr input[name="Length"]'))
               {
               document.querySelector('#LengthLyr input[name="Length"]').value = `${dotvalue.order.OverallOrderData.overalltrucktrailer.feet}' ${dotvalue.order.OverallOrderData.overalltrucktrailer.inch}"`;
               document.querySelector('input.element1[name="Length"]').dispatchEvent(change); 
              }
               if(document.querySelector('input.element1[name="Width"]'))
               {
               document.querySelector('input.element1[name="Width"]').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
               document.querySelector('input.element1[name="Width"]').dispatchEvent(change);
               }
               if(document.querySelector('input.element1[name="Height"]'))
               {
               document.querySelector('input.element1[name="Height"]').value = `${dotvalue.order.OverallOrderData.overallheight.feet}' ${dotvalue.order.OverallOrderData.overallheight.inch}"`;
               document.querySelector('input.element1[name="Height"]').dispatchEvent(change);               
                }
                if(document.querySelector('input.element1[name="GrossWt"]'))
                {
               document.querySelector('input.element1[name="GrossWt"]').value = `${dotvalue.order.totalWeight}`;
               document.querySelector('input.element1[name="GrossWt"]').dispatchEvent(change);
                }
                if(document.querySelector('input.element1[name="RearOH"]'))
                {
               document.querySelector('input.element1[name="RearOH"]').value = `${dotvalue.order.OverallOrderData.rear_overhang.feet}' ${dotvalue.order.OverallOrderData.rear_overhang.inch}"`;
               document.querySelector('input.element1[name="RearOH"]').dispatchEvent(change);
                }
                if(document.querySelector('input.element1[name="MaxTrlrWidth"]'))
                {
               document.querySelector('input.element1[name="MaxTrlrWidth"]').value = `${dotvalue.order.OverallOrderData.overallwidth.feet}' ${dotvalue.order.OverallOrderData.overallwidth.inch}"`;
               document.querySelector('input.element1[name="MaxTrlrWidth"]').dispatchEvent(change);
                }
              
               var inputFieldaxle = document.querySelector('input.element1[name="NumAxles"]');
                    inputFieldaxle.value = dotvalue.order.axle_weight.length;
                    inputFieldaxle.dispatchEvent(axlevalue);

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
                                    
                      var axleId = 'Axle'+(index + 1)+'LoadLyr';
                      var numTiresId = 'Axle' + (index + 1) + 'TireLyr';
                      var treadSizeId = 'Axle' + (index + 1) + 'WidthLyr';
                      var axleWidthId = 'Axle' + (index + 1) + 'Width2Lyr';

                      document.querySelector('#' + axleId + ' input[name="Load"]').value = data.value;
                      document.querySelector('#' + axleId + ' input[name="Load"]').dispatchEvent(change);

                      document.querySelector('#' + numTiresId + ' input[name="NumTires' + (index + 1) + '"]').value = tireCount;

                    //   document.querySelector('#' + numTiresId + ' input[name="NumTires' + (index + 1) + '"]').dispatchEvent(change);

                      var treadSizeElement = document.querySelector('#' + treadSizeId + ' input[name="TireSize' + (index + 1) + '"]').value = 11;

                    //   treadSizeElement.dispatchEvent(change);

                      document.querySelector('#' + axleWidthId + ' input[name="AxleWidth' + (index + 1) + '"]').value = "8' "+'6"';
                    //   document.querySelector('#' + axleWidthId + ' input[name="AxleWidth' + (index + 1) + '"]').dispatchEvent(change);
      
                     });   

                    dotvalue.order.axle_spacing.forEach(function(data, index) {
                    const { feet, inches } = convertValueSpacingftinch(data.value);
                    var feetval = feet+"'";
                    var inchesval = inches+'"';
                    var spaceId = 'Axle' + (index + 1) + 'SpaceLyr';
                    document.querySelector('#' + spaceId + ' input[name="Space"]').value = feetval+inchesval;
                    document.querySelector('#' + spaceId + ' input[name="Space"]').dispatchEvent(change);
                });

    document.querySelector('input.element1[name="OrigOrigin"]').value = dotvalue.order.pickupFormattedAddress;
    document.querySelector('input.element1[name="FinalDestination"]').value = dotvalue.order.deliveryFormatedAddress;
     
    
}