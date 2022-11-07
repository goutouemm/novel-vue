// import {post,get} from "./service"
import axios from "./service";

export function novelByIdApi(id) {
    return axios.get(`/novel/${id}`);
  }
  
  export function novelListApi() {
    return axios.get('/novel');
  }
  
  export function search(params) {
    return axios.get('/search', { params });
  }


// export const novelListApi=data=>{
//     return get({
//         url:"/novel",
//         data    
//     })
// }

// export const novelByIdApi=data=>{
//     return get({
//         url:"/novel/${id}",
//         params:{},
//         data    
//     })
// }