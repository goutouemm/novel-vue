# NovelSystem

## 项目进程

- 项目后端没有使用 Thymeleaf 模板引擎,或是jsp + servlet这种十年前的老技术，采用了 vue + spring boot 前后端分离架构
- 因为只学过一些基础, 用饿了么UI布局的时候, 导航栏会把移动端的界面挡住,很不美观,所以就采用了 饿了么UI Drawer抽屉的方式.
- 因为自己是学后端的, 前端页面做的很不美观,找了一些基于bootstrap的响应式模板,但在改的时候还是有很多问题,自适应折叠导航栏在移动端打不开,就用了bootstrap折叠 + 饿了么UI Drawer抽屉的方式做了,界面可能不太美观,但功能实现的还是很好的.

## **项目技术**

- 前端技术：Vue, vuex, element-plus, axios
- 后端技术：Spring Boot, Spring Security,Spring Cloud Alibaba微服务框架, Mybatis-plus(大佬可改为Spring Jpa Data),pagehelper分页插件 elasticsearch搜索引擎, redis,
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
