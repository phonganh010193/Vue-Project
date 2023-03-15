import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import router from './router'



const app = createApp(App);
app.use(router);
app.mount('#app');