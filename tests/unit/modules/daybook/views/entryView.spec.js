import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"

import journal from '@/modules/daybook/store/journal'

import {journalState} from '../../../mock-date/test-journal-state'

import EntryView from '@/modules/daybook/views/EntryView.vue'

const createVuexStore  =  (inicialState)=> 
createStore({
    modules:{
        journal:{
            ...journal,
            state:{...inicialState}
        }
    }
})

describe('pruebas en el entry vieww',()=>{
    const store = createVuexStore(journalState)
   const mockRouter = {
     push: jest.fn()
   }
    
   let wrapper 
    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallowMount(EntryView,{
            props:{
               id:'-NkCzI86o6CqyrJuBrc8'
            },
            global:{
                mocks:{
                     $router: mockRouter
                },
                plugins:[store]
            }
        })
    })

    test('debe de sacar a usuario por el id no existe',()=>{
     const    wrapper = shallowMount(EntryView,{
            props:{
                id: 'Este ID no exist en el STORE'
            },
            global:{
                mocks:{
                     $router: mockRouter
                },
                plugins:[store]
            }
        })
    })

})