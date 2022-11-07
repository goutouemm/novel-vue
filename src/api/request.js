import {post,get} from "./service"

export const loginApi=data=>{
    return post({
        url:"/user/login",
        data    
    })
}

export const userListApi=data=>{
    return get({
        url:"/user/search",
        data    
    })
}

export const userAddApi=data=>{
    return post({
        url:"/user",
        data    
    })
}