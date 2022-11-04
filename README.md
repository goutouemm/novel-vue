# NovelSystem

## 项目进程

- 项目没有使用 Thymeleaf 模板引擎,或是jsp + servlet这种老技术，
- 采用了 vue + spring boot 前后端分离架构
- 前端采用了响应式布局，pc,phone,pad的布局都是差不多的
- 因为用的是vue3 导致vue2的自适应，走马灯轮播图等组件行不通，移动端比例就会很奇怪
- 前端页面修改的话要用 饿了么UI-plus, Vue 3.x不支持 element-ui 的引用

## **项目技术**

- 前端技术：Vue, vuex, element-plus, node, axios
- 后端技术：Spring Boot, Spring Security, Mybatis-plus(大佬可改为Spring Jpa Data),pagehelper分页插件 elasticsearch, redis   大佬可加一些Spring cloud, dubbo, spring cloud alibaba微服务框架
- 开发环境：Java 13, MySQL 5.7, Maven 3.8, IDEA

## **项目模块**

### 前台展示页面

1. 登录注册
2. 小说,影音的收藏,标签,热度等功能

### 后台管理系统

1. 登录注册
2. 小说,影音的增删改查,搜索,分页
3. 用户的权限管理,权限认证
