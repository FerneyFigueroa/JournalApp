export default{
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBoookLayout.vue'),
    children:[
        {
            path:'',
            name:'no-entry',
            component : () => import('@/modules/daybook/views/NoEntrySelecte.vue')

        },
        {
            path:':id',
            name:'entry',
            component : () => import('@/modules/daybook/views/EntryView.vue'),
            props:(route)=>{
                return {
                    id:route.params.id
                }
            }
        }

    ]
}