function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    let browserName;
    let browserVersion;
  
    // Detect Chrome
    if (/Chrome/.test(userAgent) && !/Edge/.test(userAgent)) {
      browserName = 'Chrome';
      browserVersion = userAgent.match(/Chrome\/(\d+)\./)[1];
    }
    // Detect Firefox
    else if (/Firefox/.test(userAgent)) {
      browserName = 'Firefox';
      browserVersion = userAgent.match(/Firefox\/(\d+)\./)[1];
    }
    // Detect Safari
    else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent) && !/Edge/.test(userAgent)) {
      browserName = 'Safari';
      browserVersion = userAgent.match(/Version\/(\d+)\./)[1];
    }
    // Detect Edge
    else if (/Edge/.test(userAgent)) {
      browserName = 'Edge';
      browserVersion = userAgent.match(/Edge\/(\d+)\./)[1];
    }
    // Detect Internet Explorer
    else if (/Trident/.test(userAgent)) {
      browserName = 'Internet Explorer';
      browserVersion = userAgent.match(/rv:(\d+)\./)[1];
    }
    // Other browsers
    else {
      browserName = 'Unknown';
      browserVersion = 'Unknown';
    }
  
    return {
      name: browserName,
      version: browserVersion
    };
  }
  
  const browserInfo = getBrowserInfo();
  console.log(browserInfo.name);    // Output: Browser name (e.g., "Chrome", "Firefox")
  console.log(browserInfo.version); // Output: Browser version (e.g., "92", "89")
  