import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
// import Destination from '../views/Destination.vue'
// import Profile from '../views/Profile.vue'
import AuditRuleOperation from '../views/AuditRuleOperation.vue'
import AuditRuleLibrary from '../views/AuditRuleLibrary.vue'
import FinancialDataAnalysis from '../views/FinancialDataAnalysis.vue'

const routes: RouteRecordRaw[] = [
//   { path: '/', name: 'Home', component: Home },
//   { path: '/destination', name: 'Destination', component: Destination },
//   { path: '/profile', name: 'Profile', component: Profile },
  { path: '/', name: 'AuditRuleOperation', component: AuditRuleOperation },
  { path: '/audit-rule-library', name: 'AuditRuleLibrary', component: AuditRuleLibrary },
  { path: '/financial-data-analysis', name: 'FinancialDataAnalysis', component: FinancialDataAnalysis }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

