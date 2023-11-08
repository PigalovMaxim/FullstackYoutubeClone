import './bootstrap';
import { createApp } from 'vue';
import MainHeader from '../views/components/MainHeader.vue';

const app = createApp({
  components: {
    MainHeader
  }
});
app.mount('#app');
