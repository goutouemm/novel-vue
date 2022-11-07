export default {
    // 全局的状态初始值
    state: {
        userInfo:(localStorage.getItem("loginForm")&&JSON.parse(localStorage.getItem
            ("loginForm"))||{})
    },
    // 计算state，获取对应的值
    getters: {

    },
    // 更新状态的方法 - 更新state的唯一方法,commit mutations
    mutations: {
        setUserInfo(state,uInfo){
            state.userInfo=uInfo
        }
    },
    // 可以异步操作,可以返回promise,更改数据还是传递到mutations去更改
    actions: {

    },
    // 数据比较多,分模块
    modules: {

    }
}