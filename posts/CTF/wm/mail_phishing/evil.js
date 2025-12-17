<!-- Hidden malicious script with multiple layers of obfuscation -->
  <script><![CDATA[
    // Anti-debugging and detection evasion
    var jXKuzdDMGk = false;
    var detectionBypass = true;
    var globalSeed = 0x5A4D;
    var entropy = [];
    
    // Advanced fingerprinting and detection evasion
    (function antiDetection() {
      // Check for WebDriver, PhantomJS, Burp Suite
      // if (navigator.webdriver || window.callPhantom || window._phantom || 
      //     navigator.userAgent.includes("Burp") || navigator.userAgent.includes("HeadlessChrome") ||
      //     navigator.userAgent.includes("Selenium") || window.chrome && chrome.runtime && chrome.runtime.onConnect) {
      //   window.location = "about:blank";
      //   return;
      // }
      
      // Advanced environment fingerprinting
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillText('Browser fingerprint test', 2, 2);
      var fingerprint = canvas.toDataURL();
      
      // Generate entropy from browser characteristics
      entropy = [
        navigator.hardwareConcurrency || 4,
        screen.colorDepth,
        screen.pixelDepth,
        new Date().getTimezoneOffset(),
        fingerprint.length,
        navigator.language.length,
        window.devicePixelRatio * 1000 | 0
      ];
      
      // Check for debugging environment indicators
      // if (window.outerHeight - window.innerHeight > 200 || 
      //     window.outerWidth - window.innerWidth > 200 ||
      //     fingerprint.length < 100) {
      //   detectionBypass = false;
      // }
      
      // Generate seed from entropy
      globalSeed = entropy.reduce(function(acc, val) {
        return ((acc << 5) - acc + val) & 0xFFFFFFFF;
      }, 0x5A4D);
    })();
    
    // Block developer tools shortcuts
    document.addEventListener("keydown", function (event) {
      var blockedKeys = [
        { keyCode: 123 }, // F12
        { ctrl: true, keyCode: 85 }, // Ctrl + U
        { ctrl: true, shift: true, keyCode: 73 }, // Ctrl + Shift + I
        { ctrl: true, shift: true, keyCode: 67 }, // Ctrl + Shift + C
        { ctrl: true, shift: true, keyCode: 74 }, // Ctrl + Shift + J
        { ctrl: true, shift: true, keyCode: 75 }, // Ctrl + Shift + K
        { meta: true, alt: true, keyCode: 73 }, // Cmd + Alt + I (Mac)
        { meta: true, keyCode: 85 } // Cmd + U (Mac)
      ];
      
      var isBlocked = blockedKeys.some(function(key) {
        return (!key.ctrl || event.ctrlKey) &&
               (!key.shift || event.shiftKey) &&
               (!key.meta || event.metaKey) &&
               (!key.alt || event.altKey) &&
               event.keyCode === key.keyCode;
      });
      
      if (isBlocked) {
        event.preventDefault();
        return false;
      }
    });
    
    // Block right-click context menu
    document.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      return false;
    });
    
    // Advanced anti-debugging using performance timing with variable thresholds
    (function timingCheck() {
      var baseThreshold = 50;
      var dynamicThreshold = baseThreshold + (globalSeed % 100);
      var checkCount = 0;
      
      setInterval(function() {
        var start = performance.now();
        debugger;
        var end = performance.now();
        checkCount++;
        
        // Variable threshold based on environment
        var currentThreshold = dynamicThreshold + (checkCount * 10);
        
        if (end - start > currentThreshold && detectionBypass) {
          jXKuzdDMGk = true;
          // Redirect with multiple decoy destinations
          var decoyUrls = ['https://www.google.com', 'https://www.microsoft.com', 'about:blank'];
          // window.location.replace(decoyUrls[globalSeed % decoyUrls.length]);
        }
      }, 150 + (globalSeed % 100));
    })();
    
    function customPRNG(seed) {
      var m = 0x80000000; // 2**31
      var a = 1103515245;
      var c = 12345;
      
      seed = (a * seed + c) % m;
      return seed / (m - 1);
    }
    
    function advancedXOR(data, keyBase) {
      var result = '';
      var expandedKey = '';
      

      for (var i = 0; i < data.length; i++) {
        var keyChar = keyBase.charCodeAt(i % keyBase.length);
        var entropyVal = entropy[i % entropy.length];
        var rotatedKey = ((keyChar ^ entropyVal) + globalSeed) % 256;
        expandedKey += String.fromCharCode(rotatedKey);
      }
      
      for (var j = 0; j < data.length; j++) {
        result += String.fromCharCode(data.charCodeAt(j) ^ expandedKey.charCodeAt(j));
      }
      
      return result;
    }
    
    // Main payload - heavily obfuscated with multiple transformation layers
    setTimeout(function() {
      if (!jXKuzdDMGk && detectionBypass) {
        var decoyArray1 = [119,109,99,116,102,123,102,97,107,101,95,102,108,97,103,125]; // wmctf{fake_flag}
        var decoyArray2 = [104,116,116,112,115,58,47,47,101,120,97,109,112,108,101,46,99,111,109];
        
        var polymorphicData = [
          'V01DVEZbZmFrZV9mbGFnXQ==',
          'bm90X3RoZV9yZWFsX2ZsYWc=',
          'ZGVjb3lfZGF0YQ==',
          '4oyM4p2h77iP4p2j4oyM4p2d77iL4p2c4oyI4p2g77iN4p2a77iP4p2b4oyL4p2Y',
          '4p2Z77iM4p2X77iO4p2W77iM4p2V77iK4p2U77iL4p2T77iM4p2S77iN4p2R',
          '4p2Q77iL4p2P77iO4p2O77iM4p2N77iK4p2M77iL4p2L77iM4p2K77iN4p2J',
          '4p2I77iL4p2H77iO4p2G77iM4p2F77iK4p2E77iL4p2D77iM4p2C77iN4p2B',
          '4p2A77iL4pyx77iO4py977iM4py877iK4py777iL4py677iM4py577iN4py4'
        ];
        
        // Layer 3: Environmental validation with complex checks
        var envValidation = function() {
          var checks = [
            typeof window !== 'undefined',
            typeof document !== 'undefined',
            navigator.userAgent.length > 10,
            screen.width > 0 && screen.height > 0,
            Date.now() > 1700000000000, // After 2023
            Math.abs(new Date().getTimezoneOffset()) < 1440, // Valid timezone
            entropy.length === 7,
            globalSeed !== 0x5A4D // Should be modified by fingerprinting
          ];
          
          var validCount = checks.filter(Boolean).length;
          return validCount >= 6; // Require most checks to pass
        };
        
        // Layer 4: Steganographic data hidden in mathematical sequences
        var fibSequence = [1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584];
        var primeSequence = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61];
        
        // Hidden data in sequence differences (steganography)
        var hiddenIndices = [];
        for (var i = 1; i < fibSequence.length; i++) {
          var diff = fibSequence[i] - fibSequence[i-1];
          if (diff > 0 && diff < polymorphicData.length) {
            hiddenIndices.push(diff % polymorphicData.length);
          }
        }
        

        var generateDynamicKey = function() {
          var timeComponent = (Date.now() % 86400000).toString(36); // Daily changing component
          var envComponent = (globalSeed ^ 0xDEADBEEF).toString(36);
          var browserComponent = (navigator.userAgent.length * screen.colorDepth).toString(36);
          

          var staticKey = 'WMCTF_2025_SVG_ANALYSIS';
          return staticKey;
        };

        var decryptionPipeline = function() {
          if (!envValidation()) {
            console.log('Environment validation failed');
            return null;
          }
          
          try {
            var dynamicKey = generateDynamicKey();
            var realDataIndices = [3, 4, 5, 6, 7]; // Skip decoy data
            var encryptedParts = [];
            
            for (var i = 0; i < realDataIndices.length; i++) {
              var idx = realDataIndices[i];
              if (idx < polymorphicData.length) {
                encryptedParts.push(polymorphicData[idx]);
              }
            }
            
            console.log('Found encrypted parts:', encryptedParts.length);
            
            var stage1Results = [];
            for (var j = 0; j < encryptedParts.length; j++) {
              var part = encryptedParts[j];
              
              // Convert Unicode escape sequences to characters
              var decoded = part.replace(/4oyM|4p2[a-zA-Z0-9]|77i[a-zA-Z0-9]/g, function(match) {

                var charMap = {
                  '4p2V': 'A', '4p2P': 'D', '4p2F': 'E', '4p2g': 'G', '4p2a': 'P',
                  '4p2c': 'S', '4oyI': 'V', '4p2T': 'a', '77iP': 'c', '4p2S': 'c',
                  '4p2L': 'c', '4p2D': 'a', '4p2O': 'e', '4p2M': 'e', '4p2d': 'f',
                  '77iO': 'g', '4p2b': 'h', '4p2Z': 'h', '4oyL': 'i', '77iM': 'i',
                  '4p2J': 'i', '4p2B': 'i', '4p2R': 'k', '4p2h': 'm', '4p2X': 'n',
                  '4p2H': 'n', '4pyx': 'n', '4p2I': 'o', '4p2A': 'o', '4p2C': 's',
                  '4p2Y': 's', '4p2j': 't', '77iK': 't', '4p2U': 't', '4p2K': 't',
                  '4p2N': 't', '4p2E': 'v', '4oyM': 'w', '77iL': '{', '4py9': '}',
                  '77iN': '_', '4p2W': '_', '4p2Q': '_', '4p2G': '_', '4py8': '!',
                  '4py7': '!', '4py6': '!', '4py5': '!', '4py4': '!'
                };
                return charMap[match] || '';
              });
              
              stage1Results.push(decoded);
            }
            

            var combined = stage1Results.join('');
            console.log('Stage 1 result:', combined);
            
            var finalResult = '';
            for (var k = 0; k < combined.length; k++) {
              var char = combined.charCodeAt(k);
              var keyChar = dynamicKey.charCodeAt(k % dynamicKey.length);

              var transformed = char ^ (keyChar % 32); // Reduced XOR for readability
              finalResult += String.fromCharCode(transformed);
            }
            
            return finalResult;
            
          } catch (error) {
            console.log('Decryption failed:', error.message);
            return null;
          }
        };
        
       
        var mathematicalObfuscation = function() {
       
          var phi = 1.618033988749895; // Golden ratio
          var pi = 3.141592653589793;   // Pi
          var e = 2.718281828459045;    // Euler's number
          
        
          var mathKey = Math.floor(phi * 1000) + Math.floor(pi * 1000) + Math.floor(e * 1000);
          
         
          window.mathSegments = [
            btoa(String.fromCharCode(mathKey % 256) + segments[0]),
            btoa(String.fromCharCode((mathKey * 2) % 256) + segments[1]),
            btoa(String.fromCharCode((mathKey * 3) % 256) + segments[2]),
            btoa(String.fromCharCode((mathKey * 4) % 256) + segments[3]),
            btoa(String.fromCharCode((mathKey * 5) % 256) + segments[4])
          ];
          
          return mathKey;
        };
        
       
        var mathKey = mathematicalObfuscation();
        
       
        if (detectionBypass && !jXKuzdDMGk && verification()) {
          constructPayload();
          
   
          window.extractFlag = function() {
            try {
              if (window.hiddenData) {
                var encoded = atob(window.hiddenData);
                var key = 'WMCTF2025';
                var decoded = '';
                for (var i = 0; i < encoded.length; i++) {
                  decoded += String.fromCharCode(
                    encoded.charCodeAt(i) ^ key.charCodeAt(i % key.length)
                  );
                }
                console.log('Extracted flag:', decoded);
                return decoded;
              }
            } catch (e) {
              console.log('Flag extraction failed');
            }
          };
        }
      }
    }, 1000);
    
    // Decoy functions to confuse analysis
    function generateFakeTraffic() {
      var fakeUrls = [
        'https://api.example.com/data',
        'https://cdn.jsdelivr.net/npm/package',
        'https://fonts.googleapis.com/css'
      ];
      // These would normally make requests but are disabled for CTF
    }
    
    function createFakeElements() {
      // Create invisible elements with misleading data
      var hiddenDiv = document.createElement('div');
      hiddenDiv.style.display = 'none';
      hiddenDiv.innerHTML = atob('RmFrZSBmbGFnOiBXTUNURntub3RfdGhlX3JlYWxfZmxhZ30=');
      document.body.appendChild(hiddenDiv);
    }
    
    // Initialize decoy functions
    generateFakeTraffic();
    createFakeElements();
    
    // Add click handler for the invoice
    document.addEventListener('click', function() {
      if (detectionBypass && !jXKuzdDMGk) {
        // This would normally redirect to phishing site
        // window.location.href = 'https://fake-payment-portal.com';
        console.log('Invoice clicked - in real attack, this would redirect to phishing site');
      }
    });
  ]]></script>