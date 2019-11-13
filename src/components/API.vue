<template>
  <div>

    <div id="api">
      <h1>Bitcoin Price Index</h1>
      <div v-for="currency in info" :key="currency.id">
        {{ currency.description }}:
        <span>
          <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
        </span>
      </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'API',
  data () {
    return {
      info: null
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi
      })
    
  }
}

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
