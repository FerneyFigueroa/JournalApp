import { createStore } from 'vuex'

import auth from '../modules/auth/store'
import jornalModule from '../modules/daybook/store/journal/index'


const store = createStore({
    modules:{
        auth:auth,
       journal: jornalModule
    }
})

export default store