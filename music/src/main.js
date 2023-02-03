import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Tabbar, TabbarItem, Icon, Tab, Tabs, TreeSelect, Stepper, ActionBar, ActionBarIcon, ActionBarButton, Checkbox, CheckboxGroup, SubmitBar, Card, Dialog } from 'vant'
import '@/styles/reset.css'
import '../node_modules/vant/es/dialog/style'
import '@/mobile/flexible'

const app = createApp()
app.use(Stepper)
app.use(Dialog)
app.use(Card)
app.use(SubmitBar)
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(ActionBar)
app.use(ActionBarIcon)
app.use(ActionBarButton)
app.use(TreeSelect)
app.use(Tab)
app.use(Tabs)
app.use(Icon)
app.use(Tabbar)
app.use(TabbarItem)
createApp(App).use(createPinia()).use(router).mount('#app')
