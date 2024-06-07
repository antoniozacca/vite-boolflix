<template>
    <div id="flag-container">
      <span v-if="countryCode" :class="['flag-icon', `flag-icon-${countryCode}`, 'flag']"></span>
      <div v-else class="flag-fallback">no disp</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FlagDisplay',
    props: {
      languageCode: {
        type: String,
        required: true
      }
    },
    computed: {
      countryCode() {
        const languageToCountryMap = {
          'af': 'za', // Afrikaans - South Africa
          'ar': 'sa', // Arabic - Saudi Arabia
          'az': 'az', // Azerbaijani - Azerbaijan
          'be': 'by', // Belarusian - Belarus
          'bg': 'bg', // Bulgarian - Bulgaria
          'bn': 'bd', // Bengali - Bangladesh
          'bs': 'ba', // Bosnian - Bosnia and Herzegovina
          'ca': 'es', // Catalan - Spain
          'cs': 'cz', // Czech - Czech Republic
          'cy': 'gb', // Welsh - United Kingdom
          'da': 'dk', // Danish - Denmark
          'de': 'de', // German - Germany
          'el': 'gr', // Greek - Greece
          'en': 'us', // English - United States
          'es': 'es', // Spanish - Spain
          'et': 'ee', // Estonian - Estonia
          'eu': 'es', // Basque - Spain
          'fa': 'ir', // Persian - Iran
          'fi': 'fi', // Finnish - Finland
          'fr': 'fr', // French - France
          'ga': 'ie', // Irish - Ireland
          'gl': 'es', // Galician - Spain
          'he': 'il', // Hebrew - Israel
          'hi': 'in', // Hindi - India
          'hr': 'hr', // Croatian - Croatia
          'hu': 'hu', // Hungarian - Hungary
          'hy': 'am', // Armenian - Armenia
          'id': 'id', // Indonesian - Indonesia
          'is': 'is', // Icelandic - Iceland
          'it': 'it', // Italian - Italy
          'ja': 'jp', // Japanese - Japan
          'ka': 'ge', // Georgian - Georgia
          'kk': 'kz', // Kazakh - Kazakhstan
          'km': 'kh', // Khmer - Cambodia
          'ko': 'kr', // Korean - South Korea
          'ku': 'iq', // Kurdish - Iraq
          'ky': 'kg', // Kyrgyz - Kyrgyzstan
          'lt': 'lt', // Lithuanian - Lithuania
          'lv': 'lv', // Latvian - Latvia
          'mk': 'mk', // Macedonian - North Macedonia
          'ml': 'in', // Malayalam - India
          'mn': 'mn', // Mongolian - Mongolia
          'ms': 'my', // Malay - Malaysia
          'nb': 'no', // Norwegian Bokmål - Norway
          'ne': 'np', // Nepali - Nepal
          'nl': 'nl', // Dutch - Netherlands
          'pl': 'pl', // Polish - Poland
          'pt': 'pt', // Portuguese - Portugal
          'ro': 'ro', // Romanian - Romania
          'ru': 'ru', // Russian - Russia
          'si': 'lk', // Sinhala - Sri Lanka
          'sk': 'sk', // Slovak - Slovakia
          'sl': 'si', // Slovenian - Slovenia
          'sq': 'al', // Albanian - Albania
          'sr': 'rs', // Serbian - Serbia
          'sv': 'se', // Swedish - Sweden
          'sw': 'tz', // Swahili - Tanzania
          'ta': 'in', // Tamil - India
          'te': 'in', // Telugu - India
          'th': 'th', // Thai - Thailand
          'tr': 'tr', // Turkish - Turkey
          'uk': 'ua', // Ukrainian - Ukraine
          'ur': 'pk', // Urdu - Pakistan
          'uz': 'uz', // Uzbek - Uzbekistan
          'vi': 'vn', // Vietnamese - Vietnam
          'zh': 'cn', // Chinese - China
          'zu': 'za', // Zulu - South Africa
}
        return languageToCountryMap[this.languageCode] || null;
      }
    }
  }
  </script>
  
  <style scoped>
  .flag {
    font-size: 2em; 
    margin-left: 8px;
  }
  .flag-fallback {
    width: 2em;
    height: 1.5em;
    background-color: gray;
    display: inline-block;
    line-height: 1.5em;
    text-align: center;
    color: white;
    font-size: 0.5em;
    margin-left: 8px;
  }
  </style>