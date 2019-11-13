<template>
  <div>
    <p>Id : {{userId}}</p>
    <p>Nom : {{userNom}}</p>
    <p>Prénom : {{userPrenom}}</p>
    <p>Photo : <img :src="require( `../assets/${this.userPhoto}`)"/></p>
  </div>
</template>

<script>


export default {
  data: function() {
    return {
        //id is name of the dynamic segment we created in router
      userId: this.$route.params.id,
      userNom: this.$route.params.nom,
      userPrenom: this.$route.params.prenom,
      userPhoto: this.$route.params.photo
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
