// 自定义全局插件
import SvgIcon from "./SvgIcon/index.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const globalAllComponents = { SvgIcon };
export default {
  install(app) {
    Object.keys(globalAllComponents).forEach((key) => {
      app.component(key, globalAllComponents[key]);
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
