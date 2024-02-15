import { shallowMount } from "@vue/test-utils";

import EntryMi from '../../../../../src/modules/daybook/components/EntryMi.vue'




import {journalState} from '../../../../../tests/unit/mock-date/test-journal-state'

describe('pruebas en el entry componet',()=>{

    const mockRouter = {
        push: jest.fn()
    }
    const wrapper = shallowMount(EntryMi,{
        props:{
            entry: journalState.entries[0]
        },
        global:{
            mocks:{
                $router: mockRouter
            }
        }
    })

    test('debe hacer match con el snapshot',()=>{
        expect(wrapper.html()).toMatchSnapshot();

    })

    test('debe de redireccionar al hacer click en el entry.container',()=>{

        const entrycontainer =  wrapper.find('.entry-container')

        entrycontainer.trigger('click')

        expect(mockRouter.push).toHaveBeenCalledWith({ 
            name: "entry",
              params: {
               id: journalState.entries[0].id
            }
         })
       


        
    })

    test('pruebas en las propiedades computadas',()=>{
        

        expect(wrapper.vm.day).toBe(26)
        expect(wrapper.vm.month).toBe('Noviembre')
        expect(wrapper.vm.yearDay).toBe('2023, Domingo')
    })


})

