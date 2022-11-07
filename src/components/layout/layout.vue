<template>
    <div class="container">
        <!-- ***** 头部 ***** -->
        <header class="header-area header-sticky">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="main-nav">
                            <!-- ***** Logo Start ***** -->
                            <router-link to="/index" class="logo">
                                <!-- <img src="../../../public/images/logo.png" alt=""> -->
                                <h1>Welcome</h1>
                            </router-link>
                            <!-- ***** Logo End ***** -->
                            <!-- ***** Search End ***** -->
                            <div class="search-input">
                                <form id="search" action="#">
                                <input type="text" placeholder="搜索..." id='searchText' name="searchKeyword" onkeypress="handle" />
                                <el-icon><Search /></el-icon>
                                </form>
                            </div>
                            <!-- ***** Search End ***** -->
                            <!-- ***** Menu Start ***** -->
                            <ul class="nav">
                                <li><router-link to="/index">主页</router-link></li>
                                <li><router-link to="/novel">小说</router-link></li>
                                <li><router-link to="/novel">视频</router-link></li>
                                <li><router-link to="/novel">音频</router-link></li>
                                <li><router-link to="/novel">漫画</router-link></li>
                                <li>
                                    <router-link to="/login">
                                        登录
                                        <!-- <img src="../../../public/images/profile-header.jpg" alt=""> -->
                                        <img src="../../assets/img/logo.jpg" />
                                    </router-link>
                                </li>
                            </ul>
                            <!-- 抽屉导航按钮 -->
                            <a class='menu-trigger' @click="drawer = true">
                                <span>Menu</span>
                            </a>                
                            <!-- 抽屉导航栏 -->
                            <el-drawer v-model="drawer" title="导航栏" :size="size" :direction="direction" :with-header="true">
                                <header>---导航栏页头---</header>
                                <el-menu router="false">
                                    <el-sub-menu index="1">
                                        <template #title>
                                            <el-icon><Menu /></el-icon>
                                            <span>小说</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="/novel">小说</el-menu-item>
                                        </el-menu-item-group>
                                    </el-sub-menu>
                                    <el-sub-menu index="2">
                                        <template #title>
                                            <el-icon><Menu /></el-icon>
                                            <span>影视</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="/movie">电视剧</el-menu-item>
                                            <el-menu-item index="/movie">动漫</el-menu-item>
                                            <el-menu-item index="/movie">电影</el-menu-item>
                                        </el-menu-item-group>
                                    </el-sub-menu>
                                    <el-sub-menu index="3">
                                        <template #title>
                                            <el-icon><Menu /></el-icon>
                                            <span>漫画</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="/cartoon">漫画</el-menu-item>
                                        </el-menu-item-group>
                                    </el-sub-menu>
                                    <el-sub-menu index="4">
                                        <template #title>
                                            <el-icon><Menu /></el-icon>
                                            <span>音频</span>
                                        </template>
                                        <el-menu-item-group>
                                            <el-menu-item index="/audio">音频</el-menu-item>
                                        </el-menu-item-group>
                                    </el-sub-menu>
                                </el-menu>
                                <footer>---导航栏页脚---</footer>
                            </el-drawer>
                            <!-- ***** Menu End ***** -->
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <!-- ***** 头部结束 ***** -->
        <!-- ***** 内容 ***** -->
        <main>
            <!-- 路由占位符 --> 
            <router-view></router-view>
        </main>
        <!-- ***** 内容结束 ***** -->
        <!-- ***** 尾部 ***** -->
        <footer>
        <div class="container">
            <div class="row">
            <div class="col-lg-12">
                <p>Copyright &copy; 2022.版权没有,违者必究. 
                </p>
            </div>
            </div>
        </div>
        </footer>
        <!-- ***** 尾部结束 ***** -->
    </div>
</template>

<script>
import { reactive,toRefs,ref } from 'vue'
  
  export default {
      setup(){
          const data = reactive({
              // 抽屉 修改呼出大小
              size: '233px'
          })
          // 抽屉
          const drawer = ref(false)
          const direction = ref('ltr')
          return {
              ...toRefs(data),
              // 抽屉
              drawer,direction
          }
      }
  }
</script>

<style lang="less" scoped>
</style>