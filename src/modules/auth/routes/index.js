export default {
    name:'auth',
    component:() => import(/* webpackChunkName: "Auth Layout" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children:[
        {
            path:'',
            name:'login',
            component:() => import(/* webpackChunkName: "Auth Lagin" */ '@/modules/auth/views/MyLogin.vue')
        },
        {
            path:'/register',
            name:'register',
            component:() => import(/* webpackChunkName: "Auth register" */ '@/modules/auth/views/MyRegister.vue')
        }

    ]

}