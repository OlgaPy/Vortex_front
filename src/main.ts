import {AppRoot, registerPlugins} from "@/app";
import {createApp} from "vue";

const app = createApp(AppRoot);

registerPlugins(app);

app.mount('#app');
