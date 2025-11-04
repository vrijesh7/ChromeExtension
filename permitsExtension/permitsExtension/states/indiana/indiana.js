function indianaStep1(dotvalue) {

  var permitSelectElement = document.getElementById('SearchTerm');
  permitSelectElement.value = dotvalue.order.Company_Info.dot;
  var event = new Event('keyup');
  permitSelectElement.dispatchEvent(event);

  chrome.storage.local.get('loginUser', function(data) {
           if (data.loginUser) {
             document.getElementById('ContentPlaceHolderPageContent_ContentPlaceHolderPageContentOp_ContactName').value = data.loginUser;  
           }
         });

         document.getElementById('ContentPlaceHolderPageContent_ContentPlaceHolderPageContentOp_ContactPhone').value = "9842938503";
         document.getElementById('ContentPlaceHolderPageContent_ContentPlaceHolderPageContentOp_ContactEmail').value = "synchronpermits@gmail.com";
         document.getElementById('ContentPlaceHolderPageContent_ContentPlaceHolderPageContentOp_DeliveryDropDown2').value = "1"; 
         
         
         
         var inputElementg = document.getElementById('ContentPlaceHolderPageContent_ContentPlaceHolderPageContentOp_PermitTypeDD');
         inputElementg.value = 6
         // Trigger the onkeyup event
         var event = new Event('change');
         inputElementg.dispatchEvent(event);   

         document.getElementById('ContentPlaceHolderPageContent_ContentPlaceHolderPageContentOp_tbDeliveryText1').value = "synchronpermits@gmail.com";
         
       
         
  }

  function indianaStep2(dotvalue) {
   
                 document.getElementById('TruckNumber0_0').value = dotvalue.order.truck_detail.unit_id;
                  document.getElementById('TruckYear0_0').value = dotvalue.order.truck_detail.year;
                  document.getElementById('TruckMake0_0').value = dotvalue.order.truck_detail.make;
                  document.getElementById('TruckVIN0_0').value = dotvalue.order.truck_detail.vin;
                  document.getElementById('TruckLicense0_0').value = dotvalue.order.truck_detail.license_plate;
                  document.getElementById('ContentPlaceHolderPageContent_ContentPlaceHolderPageContentOp_TruckState0_0').value =dotvalue.order.truck_detail.license_state;
                  document.getElementById('TruckTypeSlct0_0').value = "TT";

                  // document.getElementById("IndustryDD_0").value = 15;
                  document.getElementById('LoadDescription0').value = dotvalue.order.commodityDataValue.description;

                  document.getElementById('SerialNumber0').value = dotvalue.order.commodityDataValue.bol;
                  document.getElementById('chkLoadIndivisible0').checked = true;
                  
                  
                  var TruckCountrySlct0_0 = document.getElementById('TruckCountrySlct0_0');
                  TruckCountrySlct0_0.value = 'US';
                   var eventPermitType = new Event('change');
                   TruckCountrySlct0_0.dispatchEvent(eventPermitType); 

                  document.getElementById('LoadedWidthFeet0').value = dotvalue.order.OverallOrderData.overallwidth.feet;
                  document.getElementById('LoadedWidthInches0').value = dotvalue.order.OverallOrderData.overallwidth.inch;
                  
                  document.getElementById('LoadedHeightFeet0').value = dotvalue.order.OverallOrderData.overallheight.feet
                  document.getElementById('LoadedHeightInches0').value = dotvalue.order.OverallOrderData.overallheight.inch

                  document.getElementById('LoadedLengthFeet0').value = dotvalue.order.OverallOrderData.overalllength.feet;
                  document.getElementById('LoadedLengthInches0').value = dotvalue.order.OverallOrderData.overalllength.inch;

                   document.getElementById('LoadedTrailerFeet0').value = dotvalue.order.Trailer_Info.lenght;
                  // document.getElementById('LoadedFrontOHangInches0').value = 0;


                  // document.getElementById('LoadedRearOHangFeet0').value = orderData.order.OverallOrderData.rear_overhang.feet;
                  // document.getElementById('LoadedRearOHangInches0').value = orderData.order.OverallOrderData.rear_overhang.inch;
                  
    var SetWeightButton20 = document.getElementById('SetWeightButton0');
   

    var event = new Event('click');
    SetWeightButton20.dispatchEvent(event); 
                  
                  var inputElementNumberofalex = document.getElementById('NumOfAxles');
                  inputElementNumberofalex.value = dotvalue.order.axle_weight.length;
                  var eventalex = new Event('change');
                  inputElementNumberofalex.dispatchEvent(eventalex); 
                  

                  //document.getElementById('PageContentPlaceHolder1_AxleWeight1').value =10;

                  dotvalue.order.axle_weight.forEach(function(data,index) {

                      var axleWeightId = 'AxleWeight' + (index + 1);
                      
                        document.getElementById(axleWeightId).value = data.value;

                        // let name = data.name;
                        // let tireCount, tirename;
                    
                        // if (name.includes(":")) {
                        //     let [namePart, tireinfo] = name.split(":");
                        //     [tireCount, tirename] = tireinfo.split(" ");
                        // } else {
                        //     let nameParts = name.split(" ");
                        //     tireCount = nameParts[1];
                        //     tirename = "Tires";
                        // }
                    
                        // var axleTireId = 'PageContentPlaceHolder1_AxleTireCount' + (index + 1);
                        // document.getElementById(axleTireId).value = tireCount.trim();
                      
    
                  });

                  
                  dotvalue.order.axle_spacing.forEach(function(data,index) {
                    
                      const { feet, inches } = convertValueSpacingftinch(data.value);

                      var spacingval = feet+"-"+inches;
                      var AxleSpaceFt = 'AxleSpaceFt' + (index +2);
                      var AxleSpaceinch = 'ContentPlaceHolderPageContent_ContentPlaceHolderPageContentOp_AxleSpaceIn' + (index + 2);
                      
                      document.getElementById(AxleSpaceFt).value = feet;
                      document.getElementById(AxleSpaceinch).value = inches;
                
                  }); 
   
  }

  function indianaStep3(dotvalue) {
   
    
   
  }

 

 