      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

      if (request.action === 'login') {

        const userdetail = request.a;
        const passworddetail = request.b;

        fetchLoginDetails(userdetail,passworddetail)
        .then(response => {
          if (response.success) {
            sendResponse({ success: true, orderDetailsResult: response.orderDetailsResult });
          } else {
            console.error('Error fetching order details:', response.error);
            sendResponse({ error: 'Failed to fetch order details' });
          }
        })
        .catch(error => {
          console.error('Error fetching order details:', error);
          sendResponse({ error: 'Failed to fetch order details' });
        });
          return true; // Required to use sendResponse asynchronously
      }

      if(request.action ==='otp'){

            VerifyOtpDetails(request.a, request.b)
            .then(otpresult => {

              sendResponse({ success: true, otpresult });
            })
            .catch(error => {
              console.error('Error fetching order details:', error);
              sendResponse({ error: 'Failed to fetch order details' });
            });
          return true; // Required to use sendResponse asynchronously

      }

      if(request.action==='company'){

          const dotvalue = request.data;

          if(request.pagename.includes("?")) {

              var [url, tax_id] = request.pagename.split("?");

          }else{

              url = request.pagename;

          }

          var loginusername = "";
          var loginpassword = "";

          for(let i = 0; i < dotvalue.order.state_webstie_detail.length; i++) {

              if(dotvalue.order.state_webstie_detail[i].state_website === url) {
                  loginusername = dotvalue.order.state_webstie_detail[i].username;
                  loginpassword = dotvalue.order.state_webstie_detail[i].password;
              }

          }



         url =  getTheRealURL(url);
          domainname =  getDomainFromUrl(url);
        if(domainname=='pims.services.ncdot.gov')
        {
          url =  getTheRealURLSecond(url);
        }
        if (url.startsWith("https://www.apras.penndot.pa.gov/apras-web/permit/application/create/")) {
          url = "https://www.apras.penndot.pa.gov/apras-web/permit/application/create/";
         }
         if (url.startsWith("https://safehaul.scdot.org/ihaul/appsubmission/permitapponline/")) {
          url = "https://safehaul.scdot.org/ihaul/appsubmission/permitapponline/";
         }
         //alert(url);
          switch(url)
          {

              /***********  pennsylvania  here  *********/
                case "https://www.idservices.penndot.gov/siteminderagent/APRAS/PDLoginBP.fcc":

                loginToWeb('keystone-key','password',loginusername,loginpassword)

             break;
             case "https://www.apras.penndot.gov/apras-web/permit/application/create/":

                 pennsylvaniaState1(dotvalue);
             break;

             case "https://www.apras.penndot.pa.gov/apras-web/permit/application/create/":

                 pennsylvaniaState1(dotvalue);

             break;
             /***********  pennsylvania  end here  *********/

                  /************ Wyoming ***********/
                  case "https://wydotpermits.wyo.gov/":

                  loginToWeb('Username','Password',loginusername,loginpassword) //Username

                  break;
                  case "https://wydotpermits.wyo.gov/Permit/Create":

                    WyomingState1(dotvalue);//https://wydotpermits.wyo.gov/Permit/Create

                  break;

                  /************ Wyoming End ***********/

                 /*********** california here  *********/
                 case "https://calroute.dot.ca.gov/index.php/auth/login":

                  loginToWeb('identity','password',loginusername,loginpassword,'name')
                 break;
                 case "https://calroute.dot.ca.gov/index.php/permit/form":
                  californiaState1(dotvalue);
                 break;

                 /*********** california here  *********/

                /*********** Oregon here  *********/

                case "https://www.oregontruckingonline.com/cf/MCAD/metaEntry/":
                  loginToWeb('j_username','j_password',loginusername,loginpassword,'name')
                 break;
                 case "https://www.oregontruckingonline.com/cf/mcad/pubMetaEntry/ODPermits/weightAnalysis/index.cfm":
                   oregonState1(dotvalue);
                 break;
                 case "https://www.oregontruckingonline.com/cf/mcad/metaEntry/odPermits/weightAnalysis/index.cfm":
                  oregonState2(dotvalue);
                 break;

                /*********** Oregon  end here  *********/

                /*********** Oregon NEW Site here  *********/

                case "https://www.oregonorion.com/Login":
                  loginToWeb('Username','Password',loginusername,loginpassword,'name')
                 break;
                 case "https://www.oregonorion.com/Permit/Create":
                   oregonState3(dotvalue);
                 break;
                 case "https://www.oregontruckingonline.com/cf/mcad/metaEntry/odPermits/weightAnalysis/index.cfm":
                  oregonState4(dotvalue);
                 break;

                /*********** Oregon NEW Site end here  *********/


                /***********  Minnesota  here  *********/
               case "https://mn.gotpermits.com/mnpermits/Account/Login#!":
                loginToWeb('UserName','Password',loginusername,loginpassword,'name')
              break;
              case "https://mn.gotpermits.com/mnpermits/Permits/PermitType#!":
                minnesotaState1(dotvalue);
              break;
              case "https://mn.gotpermits.com/mnpermits/permits/Application#!":
                minnesotaState2(dotvalue);
              break;

               /***********   Minnesota end here  *********/

                /***********  South dakota here  *********/

               case "https://sdaps.sd.gov/sdaps#!":
                loginToWeb('UserName','Password',loginusername,loginpassword)
               break;
               case "https://sdaps.sd.gov/sdaps/Permits/PermitType#!":
                 southDakotaState1(dotvalue);
               break;
               case "https://sdaps.sd.gov/sdaps/permits/Application#!":
                southDakotaState2(dotvalue);
               break;

              /***********  South Dakota  end here  *********/


               /***********  montana here  *********/

               case "https://mdt.epart.celtic-host.com/MTEnterprise/":
                loginToWeb('UserName','Password',loginusername,loginpassword,'name')
              break;
              case "https://mdt.epart.celtic-host.com/MTPermit/Permit/ProcessRequest/PermitSearch":
                 montanaState1(dotvalue);
              break;
              case "https://mdt.epart.celtic-host.com/MTPermit/GeneralPage/ProcessRequest/GeneralPage":
              montanaState2(dotvalue);
              break;
              case "https://mdt.epart.celtic-host.com/MTPermit/LoadDimension/ProcessRequest/LoadDimensionDetail":
              montanaState3(dotvalue);
              break;

              /***********  montana  end here  *********/

                /***********  virginia here  *********/
                case "https://www.ezhaulvirginia.com/":


                loginToWeb('Username','Password',loginusername,loginpassword)
                break;
                case "https://www.ezhaulvirginia.com/Permit/Create":
                  virginiaState1(dotvalue);
                break;

                /***********  virginia end her  *********/

                /***********  Washington here  *********/
                case "https://www.esnoopipro.com/":
                loginToWeb('Username','Password',loginusername,loginpassword)
                break;
                case "https://www.esnoopipro.com/Permit/Create":
                washingtonState1(dotvalue);
                break;

                /***********  Washington  *********/

               /**********  nebraska  ********/
               case "https://dottruckpermits.nebraska.gov/permit/login.asp":
                loginToWeb('UserName','Password',loginusername,loginpassword,'name')
              break;
              case "https://dottruckpermits.nebraska.gov/permit/permits/default.asp":
                nebraskaState1(dotvalue);
              break;
              case "https://dottruckpermits.nebraska.gov/permit/permits/permitapp.asp":
                nebraskaState2(dotvalue);
              break;
              /**********  nebraska end here  ********/

                   /***********  Wisconsin  start here *********/
               case "https://wi.gotpermits.com/wiconnect#!":

               loginToWeb('UserName','Password',loginusername,loginpassword)

              break;

             case "https://wi.gotpermits.com/wiconnect/Permits/PermitType#!":
               wisconsinState1(dotvalue);
              break;
              case "https://wi.gotpermits.com/wiconnect/permits/Application#!":

               wisconsinState2(dotvalue);
              break;
              /***********  Wisconsin  end here *********/

                  /***********  North Carolina  start here *********/
               case "https://pims.services.ncdot.gov/pimslogin":

               loginToWeb('Email','Password',loginusername,loginpassword)
              break;
              case "https://pims.services.ncdot.gov/Permits/Create":

               northCarolinaState1(dotvalue);
              break;
              case "https://pims.services.ncdot.gov/permits/edit":

               northCarolinaState2(dotvalue);
              break;
              case "https://pims.services.ncdot.gov/permits/edit/#Vehicle":

               northCarolinaState3(dotvalue);
              break;
              case "https://pims.services.ncdot.gov/permits/edit/#Load":
               northCarolinaState4(dotvalue);
              break;



              /***********  North Carolina  end here *********/


                /***********  NEW YORK  start here *********/
                case "https://my.ny.gov/LoginV4/login.xhtml":

                loginToWeb('loginform:username','loginform:password',loginusername,loginpassword)

               break;

              case "https://hoocs.dot.ny.gov/OrderPermit01.aspx":

                newYORKState1(dotvalue);
               break;
               case "https://hoocs.dot.ny.gov/OPLoadDescription.aspx":

               newYORKState2(dotvalue);
              break;


               /***********  NEW YORK  end here *********/


                  /***********  nevada  start here *********/
               case "https://odvp.dot.nv.gov/":

               loginToWeb('Username','Password',loginusername,loginpassword)

              break;

             case "https://odvp.dot.nv.gov/Permit/Create":

               nevadaState1(dotvalue);
              break;

              /***********  nevada  end here *********/


                /***********  North Dakota  start here *********/
              case "https://apps.nd.gov/ndhp/epermits/login.htm":

               loginToWeb('label','label2',loginusername,loginpassword)

              break;

              case "https://apps.nd.gov/ndhp/epermits/selectConfig.htm":

               northDakotaState1(dotvalue);
              break;
              case "https://apps.nd.gov/ndhp/epermits/addConfig.htm":

               northDakotaState2(dotvalue);
              break;
              case "https://apps.nd.gov/ndhp/epermits/addPowerUnit.htm":
              
               northDakotaStateInfo(dotvalue);
              break;

              case "https://apps.nd.gov/ndhp/epermits/initPurchaseProcess.htm":

              checkedState(dotvalue);
              break;
              case "https://apps.nd.gov/ndhp/epermits/askAdditionalPermits.htm":
              northDakotaState3(dotvalue);
             break;
             case "https://apps.nd.gov/ndhp/epermits/selectOwnerPSC.htm":
             northDakotaState4(dotvalue);
             break;


              /***********  North Dakota  end here *********/



                 /***********  utah   start here *********/
              //  case "https://app.udot.utah.gov/public/mcs/f":

              //  loginToWeb('P1_USERNAME','P1_PASSWORD',loginusername,loginpassword)

              // break;

             case "https://app.udot.utah.gov/public/mcs/f":
              utahState1(dotvalue);
              break;

              /***********  utah  end here *********/

                /***********  SOUTH Carolina  start here *********/
               case "https://safehaul.scdot.org/ihaul/login/LoginMain!input.action":

                loginToWeb('LoginMain_username','LoginMain_password',loginusername,loginpassword)

               break;

              case "https://safehaul.scdot.org/ihaul/appsubmission/permitapponline/":

                southCarolinaState1(dotvalue);
               break;

               /***********  SOUTH Carolina  end here *********/

               /***********  delaware  start here *********/
               case "https://deldot.gov/osow/application/login":

                loginToWeb('username','password',loginusername,loginpassword,'name')
               break;

              case "https://deldot.gov/osow/application/permit/createPermit":

                delawareState1(dotvalue);
               break;
              case "https://deldot.gov/osow/application/permit/processCreatePermit":
                delawareState2(dotvalue);
              break;

               /***********  delaware  end here *********/


               /***********  connecticut  start here *********/
               case "https://cvoportal.ct.gov/Login/Login":
                loginToWeb('username','password',loginusername,loginpassword)
              break;

              case "https://ct.gotpermits.com/ctconnect/Permits/PermitType#!":

                connecticutState1(dotvalue);
               break;
              case "https://ct.gotpermits.com/ctconnect/permits/Application#!":
                connecticutState2(dotvalue);
              break;

               /***********  connecticut  end here *********/

               /***********  Missouri start here *********/
            case "https://mcs.modot.mo.gov/mce/login.htm":
              loginToWeb('userId','password',loginusername,loginpassword)
            break;
            case "https://mcs.modot.mo.gov/mopermits/Permits/PermitType#!":
              missouriState1(dotvalue);
            break;
            case "https://mcs.modot.mo.gov/mopermits/permits/Application#!":
              missouriState2(dotvalue);
            break;


            /***********  Missouri end here *********/

                /*********** Massachusetts  *********/

            case "https://oasis.massdot.state.ma.us/":
              loginToWeb('UN','PW',loginusername,loginpassword)
            break;
            case "https://oasis.massdot.state.ma.us/OrderPermit01.aspx":
              massachusettsState1(dotvalue);
            break;
            case "https://oasis.massdot.state.ma.us/OPLoadDescription.aspx":
              massachusettsState2(dotvalue);
            break;


            /***********  Massachusetts end  *********/

              /***********  Louisiana start here *********/
              case "https://lageauxpm.dotd.la.gov/safehaul/permitting/client/permitmanager/#login":

                loginToWeb('textfield-1062-inputEl','textfield-1063-inputEl',loginusername,loginpassword)
              break;
              case "https://lageauxpm.dotd.la.gov/safehaul/permitting/client/permitmanager/#tab/permitApplication":
                louisianaState1(dotvalue);
              break;

               /***********  Louisiana end here *********/


            /***********  michigan start here *********/
            case "https://milogintp.michigan.gov/eai/tplogin/authenticate":
              loginToWeb('userid','password',loginusername,loginpassword)
            break;
            //  case "https://milogintp.michigan.gov/mitrip/permits/default.asp":
            //    michiganState1(dotvalue);
            //  break;
            //  case "https://milogintp.michigan.gov/mitrip/permits/permitapp.asp":
            //   michiganState2(dotvalue);
            //  break;

             case "https://mdotmitp.state.mi.us/mitrip/permits/default.asp":
               michiganState1(dotvalue);
             break;
             case "https://mdotmitp.state.mi.us/mitrip/permits/permitapp.asp":
              michiganState2(dotvalue);
             break;

            /***********  michigan end here *********/



            /***********  Florida start here *********/
            case "https://pas.fdot.gov/Account.aspx/LogOn":
              loginToWeb('UserName','Password',loginusername,loginpassword)
            break;
            case "https://pas.fdot.gov/Application.aspx":
              floridaState1(dotvalue);
            break;
            case "https://pas.fdot.gov/Application.aspx#":
              floridaState2(dotvalue);
            break;
            /***********  Florida end here *********/

              /*********** Arkansas  start here *********/

            case "https://ar.gotpermits.com/arpars#!":
              loginToWeb('UserName','Password',loginusername,loginpassword)
            break;
            case "https://ar.gotpermits.com/ARPARS/Permits/PermitType#!":
              arkansasState1(dotvalue);
            break;
            case "https://ar.gotpermits.com/ARPARS/permits/Application#!":
              arkansasState2(dotvalue);
            break;
            /*********** Arkansas  start end here *********/

               /********** Maryland  state start here  ********/
               case "https://marylandone.gotpermits.com/marylandone#!":
                loginToWeb('UserName','Password',loginusername,loginpassword)
               break;
              case "https://marylandone.gotpermits.com/marylandone/Permits/PermitType#!":
                marylandState1(dotvalue);
              break;
              case "https://marylandone.gotpermits.com/marylandone/permits/Application#!":
                marylandState2(dotvalue);
              break;

              /********** Maryland  state end here  ********/

               /*********** colorado  state start here  *********/
               case "https://coopr.codot.gov/":
                loginToWeb('PageContentPlaceHolder1_UN','PageContentPlaceHolder1_PW',loginusername,loginpassword)
               break;
               case "https://coopr.codot.gov/OrderPermit01.aspx":
                coloradoState1(dotvalue);
               break;
               case "https://coopr.codot.gov/OPLoadDescription.aspx":
                coloradoState2(dotvalue);
               break;
              /*********** colorado  state end here  *********/

            /*********** rhode-island  state start here  *********/
            case "https://www.ri.gov/DOT/osow/users/sign_in":
              loginToWeb('user_email','user_password',loginusername,loginpassword)
             break;
             case "https://www.ri.gov/DOT/osow/customers/trip_permits/new":
              rhodeIslandState0(dotvalue);
             break;
             case "https://www.ri.gov/DOT/osow/customers/trip_permits/edit":
              rhodeIslandState1(dotvalue);
             break;
             case "https://www.ri.gov/DOT/osow/customers/trip_permits/axle_load":
              rhodeIslandState2(dotvalue);
             break;
             case "https://www.ri.gov/DOT/osow/customers/trip_permits/additional_info":
              rhodeIslandState3(dotvalue);
             break;
           /***********  rhode-island state end here  *********/

          /***********  New-Jersey *********/
          case "https://nj.gotpermits.com/njpass/Home/Index#!":

           loginToWeb('UserName','Password',loginusername,loginpassword)
          break;
          case "https://nj.gotpermits.com/njpass/Permits/PermitType#!":
          newJerseyState1(dotvalue);
         break;
         case "https://nj.gotpermits.com/njpass/permits/Application#!":
          newJerseyState2(dotvalue);
         break;
         /***********  New-Jersey End  *********/

         /*********** marylandone state start here  *********/

         case "https://marylandone.gotpermits.com/marylandone#!":
          loginToWeb('UserName','Password',loginusername,loginpassword)
        break;
        case "https://marylandone.gotpermits.com/marylandone/Permits/PermitType#!":
          marylandoneState1(dotvalue);
        break;

        /***********  marylandone state end here  *********/

        /***********  West-virginia  *********/
        case "https://wv.gotpermits.com/#!":
        loginToWeb('UserName','Password',loginusername,loginpassword)
        break;
        case "https://wv.gotpermits.com/wvconnect/Permits/PermitType#!":
        westVirginiaState1(dotvalue);
        break;
        case 'https://wv.gotpermits.com/wvconnect/permits/Application#!':
        westVirginiaState2(dotvalue);
        break;
        /***********  west-virginia here  *********/


      /***********  New Hampshire state start here  *********/
      case "https://nhdotpermits.org/Login.aspx":
        loginToWeb('DashPanelsHolder1_UN','DashPanelsHolder1_PW',loginusername,loginpassword)
      break;
      case "https://nhdotpermits.org/SystemUseNotification.aspx":
        hampshireState1(dotvalue);
      break;
      case "https://nhdotpermits.org/OrderPermit01.aspx":
        hampshireState2(dotvalue);
      break;
      case "https://nhdotpermits.org/OPLoadAndVehicleConfiguration.aspx":
        hampshireState3(dotvalue);
      break;
      // case "https://nhdotpermits.org/OPLoadAndVehicleConfiguration.asp":
      //   hampshireState4(dotvalue);
      // break;

      /***********  New Hampshire END  *********/

          /***********  Maine *********/
          case "https://www.movememaine.com/":
            loginToWeb('PageContentPlaceHolder1_UN','PageContentPlaceHolder1_PW',loginusername,loginpassword)
          break;
          case "https://www.movememaine.com/Login.aspx":
            loginToWeb('PageContentPlaceHolder1_UN','PageContentPlaceHolder1_PW',loginusername,loginpassword)
          break;
          case "https://www.movememaine.com/OrderPermit01.aspx":
            maineState1(dotvalue);
          break;
          case "https://www.movememaine.com/OPLoadDescription.aspx":
            maineState2(dotvalue);
          break;


          /***********  maine END *********/
             /***********   Idaho *********/
             case "https://idahodmvsso.b2clogin.com/idahodmvsso.onmicrosoft.com/b2c_1_itdsigninsignup/oauth2/v2.0/authorize":
             loginToWeb('email','password',loginusername,loginpassword)
            break;
            case "https://permits4idaho.com/OrderPermit01.aspx":
              idahoState1(dotvalue);
            break;
            case "https://permits4idaho.com/OPLoadDescription.aspx":
               idahoState2(dotvalue);
            break;
         /***********   Idaho END *********/

         /***********   Lowa  *********/
          case "https://ia.gotpermits.com/#!":
            loginToWeb('UserName','Password',loginusername,loginpassword,'name')
          break;
          case "https://ia.gotpermits.com/IAConnect/Home/Index":

            loginToWeb('UserName','Password',loginusername,loginpassword);
              document.getElementById('UserName').value = loginusername;
              document.getElementById('Password').value  = loginpassword;
          break;

          case "https://ia.gotpermits.com/IAConnect/Permits/PermitType#!":

             lowaStep1(dotvalue);

          break;

          case "https://ia.gotpermits.com/IAConnect/permits/Application#!":
           lowaStep2(dotvalue);
          break;
       /***********   Lowa END  *********/
        //  /***********   Kentucky Old site *********/

        //   case "https://kyowod.kytc.ky.gov/kyowod/login.asp":
        //     loginToWeb('UserName','Password',loginusername,loginpassword,'name')
        //   break;
        //   case "https://kyowod.kytc.ky.gov/kyowod/permits/default.asp":
        //     alert("step1");
        //     kentuskyStep1(dotvalue);
        //   break;

        //   case "https://kyowod.kytc.ky.gov/kyowod/permits/permitapp.asp":
        //    alert("step2");
        //   kentuskyStep2(dotvalue);
        //   break;
        //   /***********   Kentucky Old site END  *********/

          /***********   Kentucky Old site *********/

          case "https://kyowod.kytc.ky.gov/kyowod/login.asp":
            loginToWeb('UserName','Password',loginusername,loginpassword,'name')
          break;
          case "https://www.kyautomatedpermitsystem.com/Permit/Create":
            
            kentuskyStep1(dotvalue);
          break;  

          case "https://kyowod.kytc.ky.gov/kyowod/permits/permitapp.asp":
            
          kentuskyStep2(dotvalue);
          break;
          /***********   Kentucky END  *********/





          /*********** Ohio  *********/
           case "https://ohid.ohio.gov/wps/portal/gov/ohid/login":
            loginToWeb('loginUserID','loginPassword',loginusername,loginpassword)
            break;
            case "https://haulingpermits.transportation.ohio.gov/OrderPermit01.aspx":

              ohioStep1(dotvalue);
           break;
           case "https://haulingpermits.transportation.ohio.gov/OPLoadDescription.aspx":
            ohioStep2(dotvalue);
           break;
        /***********  Ohio END *********/

        /***********   Alabama *********/
          case "https://alpass.dot.state.al.us/permits/login.asp":
            document.querySelector('input[name="UserName"]').value = loginusername;
            document.querySelector('input[name="Password"]').value  = loginpassword;
          break;
          case "https://alpass.dot.state.al.us/permits/permits/default.asp":
            alabamaStep1(dotvalue);
          break;
          case "https://alpass.dot.state.al.us/permits/permits/permitapp.asp":
            
            alabamaStep2(dotvalue);
          break;
         /***********   END Alabama *********/

          /********** Georgia *********/
          case "https://www.gaprospermits.com/Login.aspx":
            loginToWeb('PageContentPlaceHolder1_UN','PageContentPlaceHolder1_PW',loginusername,loginpassword)
          break;
          case "https://www.gaprospermits.com/OrderPermit01.aspx":
           georgiaStep1(dotvalue);
          break;
          case "https://www.gaprospermits.com/OPLoadDescription.aspx":
            georgiaStep2(dotvalue);
         break;
        /********** END Georgia *********/

          /********** Oklahoma ********/

        case "https://permitmanager.okladot.state.ok.us/safehaul/permitting/client/permitmanager/#login":
          loginToWeb('textfield-1063-inputEl','textfield-1064-inputEl',loginusername,loginpassword)

        break;

        case "https://permitmanager.okladot.state.ok.us/safehaul/permitting/client/permitmanager/#tab/permitApplication":
        oklahomaStep1(dotvalue)
        break;
        /******** Oklahoma END  ********/

          /*********** Tennessee *********/

        case "https://tntrips.tdot.tn.gov/TNEnterprise":
          loginToWeb('UserName','Password',loginusername,loginpassword)
        break;
        case "https://tntrips.tdot.tn.gov/TNPermit/Permit/ProcessRequest/PermitSearch":
          tennesseeStep1(dotvalue);
         break;

         case "https://tntrips.tdot.tn.gov/TNPermit/GeneralPage/ProcessRequest/GeneralPage":
         tennesseeStep2(dotvalue);
         break;

         case "https://tntrips.tdot.tn.gov/TNPermit/LoadDimension/ProcessRequest/LoadDimensionDetail":
          tennesseeStep3(dotvalue)
         break;
         /********* Tennessee END  *********/


            /********* Missippi   *********/

              case "https://permits.mdot.ms.gov/Login.aspx":
                loginToWeb('PageContentPlaceHolder1_UN','PageContentPlaceHolder1_PW',loginusername,loginpassword)
              break;

              case "https://permits.mdot.ms.gov/SystemUseNotification.aspx":
                mississippiStep1(dotvalue);
              break;
              case "https://permits.mdot.ms.gov/OrderPermit01.aspx":
                mississippiStep2(dotvalue);
              break;
              case "https://permits.mdot.ms.gov/OPLoadDescription.aspx":
                mississippiStep3(dotvalue);
              break;
             /********* Missippi END  *********/

            /********* Arizona   *********/
             case "https://adotepro.azdot.gov/adot/login.asp":
             loginToWeb('UserName','Password',loginusername,loginpassword,'name')
             break;
             case "https://adotepro.azdot.gov/adot/permits/default.asp":
              arizonaStep1(dotvalue)
             break;
             case "https://adotepro.azdot.gov/adot/permits/permitapp.asp":
             arizonaStep2(dotvalue)
             break;
           /********* Arizona END   *********/

           /********* New Mexico  *********/

           case "https://truckpermits.dot.nm.gov/Login.aspx":
            loginToWeb('PageContentPlaceHolder1_UN','PageContentPlaceHolder1_PW',loginusername,loginpassword);
          break;
          case "https://truckpermits.dot.nm.gov/OrderPermit01.aspx":
                newMaxicoStep1(dotvalue)
                break;

          case "https://truckpermits.dot.nm.gov/OPLoadDescription.aspx":
                newMaxicoStep2(dotvalue)
                break;

            /*********  New Mexico END   *********/
           /********* Texas  *********/
             case "https://txpros.txdmv.gov/Login.aspx":
              loginToWeb('PageContentPlaceHolder1_UN','PageContentPlaceHolder1_PW',loginusername,loginpassword);
             break;

           case "https://txpros.txdmv.gov/SystemUseNotification.aspx":
           texasStep1(dotvalue)
           break;

           case "https://txpros.txdmv.gov/OrderPermit01.aspx":
            texasStep2(dotvalue);
            break;
            case "https://txpros.txdmv.gov/OrderPermit02.aspx":
              texasStep3(dotvalue)
            break;

          /*********  Texas END   *********/

           /********* Kansas  *********/
           case "https://k-trips.ksdot.gov/Login.aspx":

            loginToWeb('PageContentPlaceHolder1_UN','PageContentPlaceHolder1_PW',loginusername,loginpassword);
           break;
           case "https://k-trips.ksdot.gov/OrderPermit01.aspx":

           kansasStep1(dotvalue);
           break;
           case "https://k-trips.ksdot.gov/OPLoadDescription.aspx":
            kansasStep2(dotvalue);
           break;
            /*********  Kansas END   *********/

           /********* Indiana  *********/
              case "https://motorcarrier.dor.in.gov/ossmain/SingleSignOn.jsp":
              loginToWeb('ssousername','password',loginusername,loginpassword);
              break;
              case "https://osw.motorcarrier.dor.in.gov/OrderPermit01.aspx":
              indianaStep1(dotvalue);
              case "https://osw.motorcarrier.dor.in.gov/OPLoadDescription.aspx":
              indianaStep2(dotvalue);
              break;


            /*********  Indiana END   *********/


            /********* illinois  *********/



              case "https://webapps.dot.illinois.gov/ITAP/Account/LogOn":
                loginToWeb('UserName','Password',loginusername,loginpassword);
              break;
              case "https://webapps.dot.illinois.gov/ITAP/Superload/SuperloadCreate":
                IllinoisStep1(dotvalue);
              break;

               /********* illinois END *********/



              case "https://mcs.modot.mo.gov/mce/login.htm":
                  document.getElementById('userId').value = loginusername;
                  document.getElementById('password').value  = loginpassword;
              break;

              case "https://mcs.modot.mo.gov/mopermits/Permits/PermitType#!":
                  document.getElementById("searchDOT1").value = dotvalue.order.Company_Info.dot;
              break;

              case "https://motorcarrier.dor.in.gov/loginHome.html":

              break;









          }

          return true;
      }

    });



    function convertLength(lengthString) {
      // Split the string into feet and inches parts
      var parts = lengthString.match(/(\d+)ft(\d+)in/);

      // Extract the feet and inches values
      var feet = parseInt(parts[1], 10);
      var inches = parseInt(parts[2], 10);

      // Construct the output string
      var output = feet + "' " + inches + '"';

      return output;
    }

    function convertValueSpacingftinch(value) {
      const [feet, inches] = value.split('ft');
      return {
        feet: parseInt(feet, 10),
        inches: parseInt(inches.replace('in', ''), 10)
      };
    }

    function convertValue(value) {
      // Extract the feet part from the value string
      var feetMatch = value.match(/(\d+)ft/);

      if (feetMatch) {
        var feet = parseInt(feetMatch[1]);

        // Check if inches part is present
        var inchesMatch = value.match(/(\d+)in/);

        if (inchesMatch) {
          var inches = parseInt(inchesMatch[1]);

          // Round up to the next foot if inches are greater than or equal to 6
          if (inches >= 6) {
            feet++;
          }
        }

        return feet;
      }

      // Return null if the value is not in the expected format
      return null;
    }
let globalToken = null;
   function fetchLoginDetails(usernameval, passwordval) {
  const email = usernameval;
  const password = passwordval;

  return fetch('https://permits.synchrontms.com/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json' // important for Laravel or JSON APIs
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(async response => {
    // Check if response is OK (200–299)
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP ${response.status}: ${text}`);
    }

    return response.json();
  })
  .then(data => {
    // Save token in Chrome storage
    if (data.token) {
      globalToken = data.token;
      chrome.storage.local.set({ authToken: data.token }, function () {
        console.log('Token saved in Chrome storage.');
      });
    }

    return { success: true, orderDetailsResult: data };
  })
  .catch(error => {
    console.error('Login error:', error);
    return { success: false, error: error.message };
  });
}



    function VerifyOtpDetails(tokenvalue, otpval)
    {

        const token = tokenvalue;
        const otpValue = otpval;

        return fetch(`https://permits.synchrontms.com/api/v1/verifyotpDetail/${otpValue}/${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => response.json());

    }

    function simulateTyping(selector, text, delay) {
      const input = document.querySelector(selector);
      let index = 0;

      function typeCharacter() {
          if (index < text.length) {
              const char = text.charAt(index);
              input.value += char; // Add one character to input value

              // Dispatch events
              const events = ['keydown', 'keypress', 'input', 'keyup'];
              events.forEach(eventType => {
                  const event = new KeyboardEvent(eventType, {
                      bubbles: true,
                      cancelable: true,
                      key: char,
                      code: `Key${char.toUpperCase()}`,
                      shiftKey: false
                  });
                  input.dispatchEvent(event);
              });

              index++;
              setTimeout(typeCharacter, delay); // Wait before typing next character
          }
      }

      typeCharacter();
  }
