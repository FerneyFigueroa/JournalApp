import { shallowMount } from "@vue/test-utils"
import FabButton from '../../../../../src/modules/daybook/components/FabButton.vue'

describe('Pruebas n el Fab component',()=>{
      test('debe de mostrar el icono por defecto',()=>{
       const wrapper =  shallowMount(FabButton)
       const img = wrapper.find('i')


       expect(img.classes('fa-plus')).toBeTruthy()
    })

    test('debe de mostrar el icono por argumento',()=>{
        const wrapper =  shallowMount(FabButton,{
            props:{
                icon:'fa-circle'
            }
        })
       const img = wrapper.find('i')


       expect(img.classes('fa-circle')).toBeTruthy()
    })

    test('debe de emitir el evento on:click cuando se hace click',()=>{
        const wrapper =  shallowMount(FabButton)
        wrapper.find('button').trigger('click')
        
        
        expect(wrapper.emitted('on:click')).toHaveLength(1)
    })
})