import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VerificationView from '../views/VerificationView.vue'

import UsuariosView from '../views/UsuariosView.vue'
import UsuariosCreateView from '../views/UsuariosCreateView.vue'
import UsuariosUpdateView from '../views/UsuariosUpdateView.vue'
import UsuariosDeleteView from '../views/UsuariosDeleteView.vue'

import CentrosDeCustoView from '../views/CentrosDeCustoView.vue'
import CentrosDeCustoCreateView from '../views/CentrosDeCustoCreateView.vue'
import CentrosDeCustoUpdateView from '../views/CentrosDeCustoUpdateView.vue'
import CentrosDeCustoDeleteView from '../views/CentrosDeCustoDeleteView.vue'

import DepartamentosView from '../views/DepartamentosView.vue'
import DepartamentosCreateView from '../views/DepartamentosCreateView.vue'
import DepartamentosUpdateView from '../views/DepartamentosUpdateView.vue'
import DepartamentosDeleteView from '../views/DepartamentosDeleteView.vue'



import MigrateView from '../views/MigrateView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/verification',
    name: 'Verification',
    component: VerificationView
  },{
    path: '/migrate',
    name: 'MigrateView',
    component: MigrateView
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: UsuariosView
  },
  {
    path: '/usuarios/criate',
    name: 'UsuariosCreate',
    component: UsuariosCreateView
  },
  {
    path: '/usuarios/update/:id?',
    name: 'UsuariosUpdate',
    component: UsuariosUpdateView
  },
  {
    path: '/usuarios/delete/:id?',
    name: 'UsuariosDelete',
    component: UsuariosDeleteView
  },
  {
    path: '/departamentos',
    name: 'Departamentos',
    component: DepartamentosView
  },
  {
    path: '/departamentos/criate',
    name: 'UsuariosCreate',
    component: DepartamentosCreateView
  },
  {
    path: '/departamentos/update/:id?',
    name: 'DepartamentosUpdate',
    component: DepartamentosUpdateView
  },
  {
    path: '/departamentos/delete/:id?',
    name: 'DepartamentosDelete',
    component: DepartamentosDeleteView
  },
  {
    path: '/centros_de_custo',
    name: 'CentrosDeCusto',
    component: CentrosDeCustoView
  },
  {
    path: '/centros_de_custo/criate',
    name: 'CentrosDeCustoCreate',
    component: CentrosDeCustoCreateView
  },
  {
    path: '/centros_de_custo/update/:id?',
    name: 'CentrosDeCustoUpdate',
    component: CentrosDeCustoUpdateView
  },
  {
    path: '/centros_de_custo/delete/:id?',
    name: 'CentrosDeCustoDelete',
    component: CentrosDeCustoDeleteView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
