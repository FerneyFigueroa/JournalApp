<template>
 
  
  <h1 v-if="authStatus === 'authenticating'">
    {{ authStatus }}
  </h1>

  <router-view v-else/>
</template>

<script>
import userAuth from "./modules/auth/composables/userAuth"



export default ({
  setup() {
     const {authStatus,checkAuthStatus} = userAuth()
      checkAuthStatus()
     return{
      authStatus
     }
  },
})
</script>
