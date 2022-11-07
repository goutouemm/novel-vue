<template>
    <div class="novel-content">
        <!-- 面包屑 -->
        <div class="Nbreadcrumb" style="margin-top:108px;margin-bottom: 20px;margin-left:0px;">
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">返回首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/novel' }">小说列表</el-breadcrumb-item>
            <el-breadcrumb-item>小说详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 小说内容 -->
        <div v-show="novelslList" :key="novelslList" class="novelBox">
            <div class="novel-name">
                <h3>{{novelslList.name}}</h3>
            </div>
            <div class="novel-content">
                <h5>{{novelslList.content}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import {useRoute} from 'vue-router'
import { reactive, onMounted, computed, toRefs, nextTick } from 'vue'
import { novelListApi,novelByIdApi } from '../../../api/novelApi'

export default {
    setup(){
        const data = reactive({
            novelslList: []
        })
        const route = useRoute();
        // console.log(route.params);
        const findById = () =>{
            const { id } = route.params
            novelByIdApi(id).then(res=>{
                // console.log("用户数据",res);
                data.novelslList = res.data
                console.log(data.novelslList);
            })
        }
        findById()
        return {
            ...toRefs(data),
            findById
        }
    }
}


</script>
  
<style>

</style>
  