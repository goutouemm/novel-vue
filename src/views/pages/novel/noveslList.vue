<template>
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">
          <!-- ***** Banner Start ***** -->
          <div class="main-banner">
            <div class="row">
              <div class="col-lg-7">
                <div class="header-text">
                  <h6>欢迎进入 小说模块</h6>
                  <h4><em>浏览</em> 我们的热门内容</h4>
                  <div class="main-button">
                    <router-link to="/index">点我浏览</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ***** Banner End ***** -->
              <!-- 面包屑 -->
              <div class="Nbreadcrumb" style="margin-top: 20px;margin-bottom: 0px;margin-left:20px;">
                <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/' }">返回首页</el-breadcrumb-item>
                <el-breadcrumb-item>小说列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
          <!-- ***** Most Popular Start ***** -->
          <div class="most-popular" style="margin-top: 20px;">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>小说作品</em></h4>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-sm-6" v-for="novel in novels" :key="novel.id"  @click="findById(novel)">
                    <div class="item">
                      <img src="../../../../public/images/popular-01.jpg" alt="">
                      <h4>{{novel.name }}<br><span>{{novel.label}}</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <el-pagination background small layout="prev, pager, next" :total="1000" />
          <!-- ***** Most Popular End ***** -->
        </div>
      </div>
    </div>
</template>

<script>
import { reactive,toRefs,ref } from 'vue'
import { novelListApi,novelByIdApi } from '../../../api/novelApi'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const count = ref(3)
        const data = reactive({
            // 抽屉 修改呼出大小
            novels: [],
            seachParams:{
                // query: "",
                page:1,
                size:3
            },
        })
        const novelList=()=>{
            novelListApi(data.novels).then(res=>{
                    console.log("用户数据",res);
                    data.novels=res.data
            })
        }
        const router = useRouter();
        const findById = (novel) =>{
            router.push({ path: `/novels-content/${novel.id}` })
            // router.push(`/novels-content/${novel.id}`);
        }
        novelList()
        return {
            ...toRefs(data),
            novelList,
            findById
        }
    }
    
}

</script>

<style scoped>
.novel-div {
    margin-top: 100px;
}
.page_content {
    margin-top: 20px;
    text-align: center;
}
.input_box {
    width: 300px;
    margin-left:auto;
    margin-right:auto;
}
.novelForm {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left:auto;
    margin-right:auto;
}
.novelForm img {
    height: 100px;
    width: 150px;
}
.novelBox{
    margin-left:auto;margin-right:auto;
    border:1px solid rgb(0, 174, 255)
}
</style>