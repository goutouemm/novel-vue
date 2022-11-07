<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="page-content">
        <!-- ***** Banner Start ***** -->
        <div class="main-banner">
          <div class="row">
            <div class="col-lg-7">
              <div class="header-text">
                <h6>欢迎进入 主页</h6>
                <h4><em>浏览</em> 我们的热门内容</h4>
                <div class="main-button">
                  <router-link to="/index">点我浏览</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ***** Banner End ***** -->
        <!-- 热门小说 -->
        <div class="most-popular">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>热门小说</em></h4>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-sm-6" v-for="novel in novels" :key="novel.id"  @click="findById(novel)">
                    <div class="item">
                      <img src="../../../public/images/popular-01.jpg" alt="">
                      <h4>{{novel.name }}<br><span>{{novel.label}}</span></h4>
                    </div>
                  </div>
                    <div class="col-lg-12">
                        <div class="main-button">
                        <router-link to="/novel">发现更多</router-link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <!-- 热门视频 -->
        <div class="most-popular">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>热门视频</em></h4>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-sm-6" v-for="novel in novels" :key="novel.id"  @click="findById(novel)">
                    <div class="item">
                      <img src="../../../public/images/popular-01.jpg" alt="">
                      <h4>{{novel.name }}<br><span>{{novel.label}}</span></h4>
                    </div>
                  </div>
                    <div class="col-lg-12">
                        <div class="main-button">
                        <router-link to="/novel">发现更多</router-link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <!-- 热门音频 -->
        <div class="most-popular">
            <div class="row">
              <div class="col-lg-12">
                <div class="heading-section">
                  <h4><em>热门音频</em></h4>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-sm-6" v-for="novel in novels" :key="novel.id"  @click="findById(novel)">
                    <div class="item">
                      <img src="../../../public/images/popular-01.jpg" alt="">
                      <h4>{{novel.name }}<br><span>{{novel.label}}</span></h4>
                    </div>
                  </div>
                    <div class="col-lg-12">
                        <div class="main-button">
                        <router-link to="/novel">发现更多</router-link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { reactive,toRefs,ref } from 'vue'
import { novelListApi,novelByIdApi } from '../../api/novelApi'
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
