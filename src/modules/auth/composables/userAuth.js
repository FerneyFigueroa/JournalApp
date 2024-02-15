import { computed } from "vue"
import { useStore } from "vuex"

const userAuth = ()=>{
   const store= useStore()

   const createUser = async(user) =>{

     const respuesta = await  store.dispatch('auth/createUser',user)

      return respuesta
   }

   const loginUser = async(user) =>{

      const respuesta = await  store.dispatch('auth/singnUser',user)
 
       return respuesta
    }

    const checkAuthStatus = async ()=>{
      const resp = await store.dispatch('auth/checkAuthentication')

      return resp
    }

    const logout = () =>{
      store.commit('auth/logout')
      store.commit('journal/clearEntry')
    }


   return{
    createUser,
    loginUser,
    checkAuthStatus,
    logout,

    authStatus : computed(()=> store.getters['auth/currenState']),
    username: computed(()=> store.getters['auth/username'])

   }
    
   
}

export default userAuth