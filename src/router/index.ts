import Vue from 'vue';
import Router from 'vue-router';
import Index from 'src/components/Index.vue';
import CreatePlugin from 'src/components/CreatePlugin.vue';
import LoadPlugin from 'src/components/LoadPlugin.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/create_plugin',
      name: 'create_plugin',
      component: CreatePlugin
    },
    {
      path: '/load_plugin',
      name: 'load_plugin',
      component: LoadPlugin
    },
  ]
})
