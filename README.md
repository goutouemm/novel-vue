# NovelSystem

## 项目进程

- 项目后端没有使用 Thymeleaf 模板引擎,或是jsp + servlet这种十年前的老技术，采用了 vue + spring boot 前后端分离架构
- 因为只学过html,css,bootstrap这些基础, 对vue并不了解, 写的并不是很美观，后来发现vue版本迭代 自适应在vue3行不通，导致移动端比例很奇怪, 所以在布局的时候, 就把导航栏写到了 饿了么 Drawer抽屉 组件 里, 这样不仅电脑端比例好看, 移动端页面也不会被导航栏挡住, 页面做了很多响应式组件, pc端，手机端，pad端比例都差不多.

## **项目技术**

- 前端技术：Vue, vuex, element-plus, axios
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
