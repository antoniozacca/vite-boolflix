<template>
    <div id="flag-container">
      <span v-if="countryCode" :class="['flag-icon', `flag-icon-${countryCode}`, 'flag']"></span>
      <div v-else class="flag-fallback">N/A</div>
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
          'en': 'us',
          'it': 'it',
          'fr': 'fr'
        };
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