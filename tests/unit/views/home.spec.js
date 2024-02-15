import { shallowMount } from "@vue/test-utils"
import Home from '../../../src/views/HomeView.vue'


describe('Pruebas del Home View',()=>{

    test('debe renderizar el componebte correctamente',()=>{
      const wrapper =  shallowMount(Home)
      expect(wrapper.html()).toMatchSnapshot()
    })

    test('hacer click dn un boton debe de redireccionar a no-entry', ()=>{
      const mockRouter = {
        push: jest.fn()
      }

      const wrapper = shallowMount(Home,{
        global:{
          mocks:{
            $router: mockRouter
          }
        }
      })
     
      wrapper.find('button').trigger('click')

      expect(mockRouter.push).toHaveBeenCalled()
      expect(mockRouter.push).toHaveBeenCalledWith({name:'no-entry'})

    })
})

