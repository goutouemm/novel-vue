# NovelSystem

## 项目进程

- 项目后端没有使用 Thymeleaf 模板引擎,或是jsp + servlet这种十年前的老技术，采用了 vue + spring boot 前后端分离架构
- 因为只学过html,css,bootstrap这些基础, vue3.2的自适应导航栏, 走马灯轮播图在移动端很不美观 ,在布局的时候, 就把导航栏写到了 饿了么UI Drawer 组件里面, 这样不仅电脑端比例好看, 移动端页面也不会被导航栏挡住, 页面做了很多响应式设计, pc端，手机端，pad端页面都差不多.
- 因为自己是学后端的, 前端页面做的很不美观, 但功能实现的还是很好的, 有能力的话可以修改一下页面布局, 比如导航栏可以改为响应式折叠的, UI修改的更美观

## **项目技术**

- 前端技术：Vue, vuex, element-plus, axios
- 后端技术：Spring Boot, Spring Security,Spring Cloud alibaba微服务框架, Mybatis-plus(大佬可改为Spring Jpa Data),pagehelper分页插件 elasticsearch搜索引擎, redis,
- 开发环境：Java 13, MySQL 5.7, Maven 3.8, IDEA

## **项目模块**

### 前台展示页面

1. 登录注册
2. 小说,影音的收藏,标签,热度等功能

### 后台管理系统

1. 登录注册
2. 小说,影音的增删改查,搜索,分页
3. 用户的权限管理,权限认证

## 项目展示

### 登录页面
![登录页面](https://user-images.githubusercontent.com/53211996/200143313-8fc9827d-4c0e-4565-90d3-8732a0c0e50a.png)
