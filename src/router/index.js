import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';
// import Destination from '../views/Destination.vue';
// import Profile from '../views/Profile.vue';
import AuditRuleOperation from '../components/AuditRuleOperation.vue';
import AuditRuleLibrary from '../components/AuditRuleLibrary.vue';

const routes = [
//   { path: '/', name: 'Home', component: Home },
//   { path: '/destination', name: 'Destination', component: Destination },
//   { path: '/profile', name: 'Profile', component: Profile },
  { path: '/', name: 'AuditRuleOperation', component: AuditRuleOperation },
  { path: '/audit-rule-library', name: 'AuditRuleLibrary', component: AuditRuleLibrary }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;