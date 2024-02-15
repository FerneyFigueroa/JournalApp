import { shallowMount } from "@vue/test-utils"
import { createStore } from "vuex"

import journal from '@/modules/daybook/store/journal'

import EntryList from '../../../../../src/modules/daybook/components/EntryList.vue'

import {journalState} from '../../../mock-date/test-journal-state'

const createVuexStore  =  (inicialState)=> 
createStore({
    modules:{
        journal:{
            ...journal,
            state:{...inicialState}
        }
    }
})


describe('pruebas en el entry list',()=>{
   const store = createVuexStore(journalState)
   const mockRouter = {
     push: jest.fn()
   }
    
   let wrapper 
    beforeEach(()=>{
        jest.clearAllMocks()
        wrapper = shallowMount(EntryList,{
            global:{
                mocks:{
                     $router: mockRouter
                },
                plugins:[store]
            }
        })
    })

    test('debe de llamar el getEntriesByTer sin termino y mostrar dos entrads',()=>{

        expect(wrapper.findAll('entry-stub').length).toBe(0)
        expect(wrapper.html()).toMatchSnapshot()

    })

    test('debe de  llamar el getentriesterm y filtrar las entradas',async()=>{
        const input = wrapper.find('input')
        await input.setValue('segunda')

        expect(wrapper.findAll('entry-stub').length).toBe(0)
    })

    test('el boton de nuevo debe de redireccionar a /new',()=>{
        wrapper.find('button').trigger('click')

        expect(mockRouter.push)
            .toHaveBeenCalledWith({name:'entry',params:{id:'new'}})
    })
})