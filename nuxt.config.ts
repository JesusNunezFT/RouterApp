// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
 
  typescript: {
    typeCheck: false
  },

  modules: [
    'nuxt-primevue'
  ],

//   primevue: {
//     options: {
//         unstyled: true,
//         ripple: true,
//         inputStyle: 'filled'
//     },
// },

  css: ['primevue/resources/themes/aura-light-green/theme.css'],
 

})