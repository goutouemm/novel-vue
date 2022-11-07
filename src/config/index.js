// 当前环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development: {
        baseApi:'/api',
        mockApi:'',      
    },
    test: {
        baseApi:'/api',
        mockApi:'',      
    },
    pro: {
        baseApi:'/api',
        mockApi:'',      
    }
}

export default {
    env,
}