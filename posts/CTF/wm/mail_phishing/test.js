var encryptedParts = [
    '4oyM4p2h77iP4p2j4oyM4p2d77iL4p2c4oyI4p2g77iN4p2a77iP4p2b4oyL4p2Y',
    '4p2Z77iM4p2X77iO4p2W77iM4p2V77iK4p2U77iL4p2T77iM4p2S77iN4p2R',
    '4p2Q77iL4p2P77iO4p2O77iM4p2N77iK4p2M77iL4p2L77iM4p2K77iN4p2J',
    '4p2I77iL4p2H77iO4p2G77iM4p2F77iK4p2E77iL4p2D77iM4p2C77iN4p2B',
    '4p2A77iL4pyx77iO4py977iM4py877iK4py777iL4py677iM4py577iN4py4'
  ];

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

var part =  "wmctwf{S4oyIG_Pch4oyLshing_iAtt{aic_k_{Dgeitte{cit_io{ng_iEtv{ais_io{4pyxg4py9i4py8t4py7{4py6i4py5_4py4"

var decoded = part.replace(/4oyM|4p2[a-zA-Z0-9]|77i[a-zA-Z0-9]|4py[a-zA-Z0-9]|4oy[a-zA-Z0-9]/g, function(match) {

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

console.log(decoded)

// wmctf{SVG_Phishing_Attack_Detection_Ev{ais_io{ng}i!t!{!i!_!