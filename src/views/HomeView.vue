<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Bienvenido al Diario</h1>

    <button @click="goToDaybook" class="btn btn-primary">Ir al diario</button>
    <!-- <button @click="goToDaybook" class="btn btn-secondary">Secundary</button>
    <button @click="goToDaybook" class="btn btn-success">Susses</button> -->
    
  </div>
</template>
<script>
export default {
  methods:{
    goToDaybook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>

