import {App, registerPlugins} from '@/app'
import {createApp} from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
