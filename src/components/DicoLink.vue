<template>
  <div id="dicolink">
    <h1>DicoLink</h1>
    <form id="app" @submit="checkForm" action="" method="post">
      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="error in errors" :key="error.id">{{ error }}</li>
          </ul>
      </p>
      <p>
        <label for="mot">Mot</label>
        <input id="mot" v-model="mot" type="text" name="mot">
      </p>
      <p>
        <input type="submit" value="Submit">
      </p>

      <p>{{mot}}</p>

      <div v-for="word in info" :key="word.id">
        {{ word.nature }}:
      </div>

    </form>  
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'dicolink',
  data () {
    return {
      info: null,
      errors: [],
      mot: null
    }
  },
  methods:{
    checkForm: function (e) {
      if (this.mot) {
        return true;
      }

      this.errors = [];

      if (!this.mot) {
        this.errors.push('Mot required.');
      }

      e.preventDefault();
    }
  },
  mounted () {
    axios
      .get('https://api.dicolink.com/v1/mot/{mot}/definitions?limite=200&api_key=F49u6WGSR1N4WV_w4Tb9vva_ENf2gc1I')
      .then(response => {
        this.info = response.data
      })
    
  }
}

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
