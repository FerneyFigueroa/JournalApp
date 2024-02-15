import routerDaybook from '../../../../../src/modules/daybook/router/index'


describe('Pruebas en el router del daybook', ()=>{
    test('El router debe tener esta configuracion',  async ()=>{
        expect(routerDaybook).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children:[
                {
                    path:'',
                    name:'no-entry',
                    component : expect.any(Function)

                },
                {
                    path:':id',
                    name:'entry',
                    component : expect.any(Function),
                    props:expect.any(Function)
                }

            ]
                })

        // expect((await routerDaybook.children[0].component()).default.name).toBe('NoEntrySelecte')
        // expect((await routerDaybook.children[1].component()).default.name).toBe('EntryView')
        
        const  promiseRoutes = []
        routerDaybook.children.forEach(route => {
            promiseRoutes.push(route.component())
        })
        
        const routes =(await Promise.all(promiseRoutes) ).map(route =>{
            return route.default.name
        })
        expect(routes).toEqual(['NoEntrySelecte','EntryView'])

    })

    test('Debe retornar el id de la ruta', ()=>{
        const route={
            params:{
                id:'ABC-123'
            }
        }

    // expect(routerDaybook.children[1].props(route)).toEqual({
    //     id:'ABC-123'
    // })
    const ntryRoute = routerDaybook.children.find(route => route.name === 'entry')
    expect(ntryRoute.props(route)).toEqual({
        id:'ABC-123'
    })

    })

})