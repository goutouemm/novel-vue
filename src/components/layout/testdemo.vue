<template>
<div class="container">
    <el-container>
        <!-- 头部 -->
        <el-header class="common-header flex-float">
            <div class="flex">
                <!-- 抽屉导航按钮 -->
                <el-button type="primary" icon="Operation" round plain @click="drawer = true" />
                <!-- 抽屉导航栏 -->
                <el-drawer v-model="drawer" title="导航栏" :size="size" :direction="direction" :with-header="true">
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
                </el-drawer>
                <!-- 网站标题 -->
                <h1 class="title">Title</h1>
            </div>
            <!-- logo -->
            <img class="logo" src="../../assets/img/logo.jpg" alt="" />
       </el-header>
            <!-- 内容 -->
        <el-main>
            <el-config-provider>
            <!-- 路由占位符 --> 
                <router-view></router-view>
            </el-config-provider>
        </el-main>
    </el-container>
</div>

        <!-- 小说内容 -->
        <div v-for="novel in novels" :key="novel.id" class="item"  @click="findById(novel)">
            <div class="content">
                <img src="../../../assets/img/bj001.jpg" alt="图片不见了OoO" />
                <h5>{{novel.id}} {{novel.name}}</h5>
            </div>
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
  
  <style scoped> 
  .el-container {
      height: 100vh;
      overflow: hidden;
  }
  .common-header {
      background: rgb(255, 255, 255);
      display: flex;
      height: 65px;
      box-shadow: 0 0 10px #ddd;
  }
  .title {
      color: rgb(0, 0, 0);
      position: absolute;
      transform: translate(-50%);
      left: 50%;
  }
  .logo { 
      width: 60px;
      height: 60px;
      border-radius: 50%;
      padding: 10px;   
      box-shadow: 0 0 10px #ddd;
  }
  .copyright {
      color: rgb(0, 0, 0);
      position: absolute;
      transform: translate(-50%);
      left: 50%;
      bottom: 1%;
  }
  /* .el-row {
      background: yellow;
  }
  .el-col {
    border-radius: 4px;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  } */
  </style>