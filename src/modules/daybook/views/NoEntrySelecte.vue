<template>
  <div class="d-flex justify-content-center">
    <h2 class="aling-self-center">No hay nada selecionado</h2>
  </div>
  <FabButton 
    @on:click="nuevaEntrada"
    />
</template>
<script>
import {defineAsyncComponent } from 'vue'
export default {
    name:'NoEntrySelecte',
   components:{
        FabButton:defineAsyncComponent(()=> import('../components/FabButton.vue'))
    },
    methods:{
      nuevaEntrada(){
        this.$router.push({name:'entry', params:{id:'new'}})
      }
    }
}
</script>


<style lang="scss" scoped>
div{
    height: 100%;
}
</style>