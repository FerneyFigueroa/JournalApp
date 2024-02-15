import { shallowMount } from "@vue/test-utils"
import About from '../../../src/views/AboutView.vue'


describe('Pruebas del About View',()=>{

    test('debe renderizar el componebte correctamente',()=>{
      const wrapper =  shallowMount(About)
      expect(wrapper.html()).toMatchSnapshot()
    })
})

