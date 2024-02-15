<template>
   <div>
    <MiNavbar />
    <div v-if="isLoanding"
     class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync">

                </i>
            </h3>
        </div>
    </div>
    <div v-else
    class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
   </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import  {mapActions ,mapState} from 'vuex'

export default {
    components:{
        MiNavbar:defineAsyncComponent(() => import('../components/MiNavbar.vue')),
        EntryList:defineAsyncComponent(() => import('../components/EntryList.vue'))  
    },
    methods:{
        ...mapActions('journal', ['loadEntry'])
    },
    computed:{
      ...mapState('journal',['isLoanding'])
    },
    created(){
        this.loadEntry()
    }
}
</script>

