<template>
  <div>
    <p>liste</p>
    <div v-for="person in persons" :key="person.id">
      <router-link :to="{name: 'user', params: {id:person.id, nom:person.nom, prenom:person.prenom, photo:person.photo}}">{{person.id}}</router-link> - {{ person.nom }} {{person.prenom}}
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Liste',
  data () {
    return {
      persons: null
    }
  },
  mounted () {
    axios
      .get('persons.json')
      .then(response => {
        this.persons = response.data
      })
    
  }
}

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
