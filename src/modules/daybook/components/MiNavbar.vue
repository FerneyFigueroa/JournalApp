<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png" alt="Vue Logo"
            height="24"
            class="d-line-block aling-text-top mx-2">

            {{ username }}
        </a>
        <div class="d-flex">
        <button class="btn btn-outline-info mx-2"
        @click="onlogout">
           <i class="fa fa-sign-out-alt">
            salir
           </i> 
        </button>
    </div>
    </nav>
    
</template>
<script>
import userAuth from '@/modules/auth/composables/userAuth';
import { useRouter } from 'vue-router';



export default ({
    setup() {
        const router = useRouter()
      const {username, logout} = userAuth()

      return{
        username,
        onlogout:()=>{
            router.push({name:'login'})
            logout()
        }
      }
    },
})
</script>
