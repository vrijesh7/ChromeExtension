function loginToWeb(usernameFieldID, passwordFieldID, username, password, type = 'ID') {

  
  // Validate parameters
  if (!usernameFieldID || !passwordFieldID || !username || !password) {
    console.error("Invalid parameters provided to loginToWeb function");
    return;
  }

  if (type === 'name') {
    document.querySelector(`input[name="${usernameFieldID}"]`).value = username;
    document.querySelector(`input[name="${passwordFieldID}"]`).value = password;
  } else {
    const usernameField = document.getElementById(usernameFieldID);
    const passwordField = document.getElementById(passwordFieldID);


    usernameField.value = username;
    passwordField.value = password;

  }
}


function getTheRealURL(url)
{
  //alert("getTheRealURL");
  url = removeDigitsFromURL(url);
 // alert(url);
 // return url;

  const baseUrl = "https://wv.gotpermits.com/wvconnect/permits/Application/";
  const suffix = "#!";
  if (url.startsWith(baseUrl) && url.endsWith(suffix)) {
      const parts = url.slice(baseUrl.length, -suffix.length).split('/'); 
      if (parts.length === 3 && parts.every(part => /^\d+$/.test(part))) {
       url ='https://wv.gotpermits.com/wvconnect/permits/Application/';
      }
  }

    // New JERSEY

    const nbaseUrl = "https://nj.gotpermits.com/njpass/permits/Application/";
    const nsuffix = "#!";
    if (url.startsWith(nbaseUrl) && url.endsWith(nsuffix)) {
        const parts = url.slice(nbaseUrl.length, -nsuffix.length).split('/'); 
        if (parts.length === 3 && parts.every(part => /^\d+$/.test(part))) {
         url ='https://nj.gotpermits.com/njpass/permits/Application/';
        }
    }

    //pennsylvania
    const pennsyUrl = "https://www.apras.penndot.gov/apras-web/permit/application/create/";
    if (url.startsWith(pennsyUrl)) {
        const parts = url.slice(pennsyUrl.length).split('/');
        if (parts.length === 1 && /^[a-zA-Z0-9]+$/.test(parts[0])) {
            url = pennsyUrl;
        }
    }
    
    return url;
}

function getDomainFromUrl(url) {
  const a = document.createElement('a');
  a.href = url;
  return a.hostname;
}

function getTheRealURLSecond(url) {
  // Function to remove digits from URL
  function removeDigitsFromURLSecond(url) {
      return url.replace(/\d+/g, '');
  }

 

  // Remove digits from the URL if no specific pattern matches
  return removeDigitsFromURLSecond(url);
}



function removeDigitsFromURL(url) {
   url = url.replace(/\/\d+\//, '/');
   url = url.replace(/\/\d+\//, '/');
   url = url.replace(/\/\d+\//, '/');
   const baseUrl = url.replace(/\/\d+(?=\/|$|#!)/g, '');
   const cleanedUrl = baseUrl.replace(/([^:]\/)\/+/g, "$1");
  return cleanedUrl;
}


