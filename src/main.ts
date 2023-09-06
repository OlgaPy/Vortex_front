import {App, registerPlugins, setupShared} from '@/app';
import {createApp} from 'vue';

const app = createApp(App);

registerPlugins(app);
setupShared();

app.mount('#app');
