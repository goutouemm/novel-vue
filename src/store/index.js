import { createStore } from "vuex"
import uInfo from "./state/userinfo.state.js"

export default createStore({

    // 数据比较多，分模块
    modules: {
        uInfo
    }

})