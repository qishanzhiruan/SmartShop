
### 前言
期盼已久的经过 **百万真实用户沉淀并检验** 的企业级 Smart Shop 商城系统核心框架正式开源上架啦 :tada: :tada: :tada:

我们承诺 Smart Shop 使用的开源框架完全免费，其余功能支持定制开发。由于 SaaS 系统研发投入成本高，迄今已超过 300W 人民币。在此对【中国石油】、【贵州茅台】、【轩妈蛋黄酥】等基于本系统进行二次开发的知名企业表示感谢！

我们希望通过 Gitee 平台能让更多的人了解 Smart Shop 商城系统，获得大家认可的同时也希望大家对 Smart Shop 提出宝贵的意见，帮助我们不断对系统进行迭代优化，使 Smart Shop 成为 **Java 程序员的首选商城框架**  :exclamation:  :exclamation:  :exclamation: 
|交流群：Smart shop商城   |交流群：社区团购   |商业咨询   |
|---|---|---|
|![输入图片说明](%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230722153945.jpg)|![输入图片说明](%E7%A4%BE%E5%8C%BA%E5%9B%A2%E8%B4%AD.jpg)|![输入图片说明](111.jpg)|
|QQ群号：458320504   |QQ群号：556731103   |VX号：18158554030   |
|   |   |   |

### 项目介绍
Smart Shop 是一款基于 **Spring Cloud+MybatisPlus+XXL-JOB+redis+Vue** 的前后端分离、分布式、微服务架构的 Java 商城系统，采用稳定框架开发及优化核心，减少依赖，具备出色的执行效率，扩展性、稳定性高，APP端/小程序端/H5端三端合一数据打通，Smart Shop将持续收集大家反馈不断更新迭代，并经过了生产环境**反复线上论证**和**大量真实用户数据使用**的考验。

### 荣誉资质
| ![输入图片说明](https://images.gitee.com/uploads/images/2021/0907/162352_817a9646_8533008.png "商城软著_20210907161716.png") | ![输入图片说明](https://images.gitee.com/uploads/images/2021/0814/104042_f5d3ec3b_8533008.png "布谷鸟SaaS平台.png") | ![输入图片说明](https://images.gitee.com/uploads/images/2021/0814/104233_f71a9b70_8533008.png "外观专利.png") |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |

### 技术架构
#### 运行环境（必备）
- CentOS 7.0+
- Nginx 1.10+
- MySQL 8.0+

#### 技术选型
|                      |                   |                                          |
| -------------------- | ----------------- | ---------------------------------------- |
| 技术                   | 说明                | 官网                                       |
| Spring Cloud         | 微服务框架             | https://spring.io/projects/spring-cloud  |
| Spring Cloud Alibaba | 微服务框架             | https://github.com/alibaba/spring-cloud-alibaba |
| Spring Boot          | 容器+MVC 框架         | https://spring.io/projects/spring-boot   |
| Swagger              | 文档生成工具            | https://swagger.io/                      |
| MyBatis-Plus         | 数据层代码生成           | http://www.mybatis.org/generator/index.html |
| RabbitMq             | 消息队列              | https://www.rabbitmq.com/                |
| Redis                | 分布式缓存             | https://redis.io/                        |
| Druid                | 数据库连接池            | https://github.com/alibaba/druid         |
| OSS                  | 对象存储              | https://github.com/aliyun/aliyun-oss-java-sdk |
| JWT                  | JWT 登录支持          | https://github.com/jwtk/jjwt             |
| Lombok               | 简化对象封装工具          | https://github.com/rzwitserloot/lombok   |
| Jenkins              | 自动化部署工具           | https://github.com/jenkinsci/jenkins     |
| Docker               | 应用容器引擎            | https://www.docker.com/                  |
| element              | 组件库               | https://element.eleme.cn/#/zh-CN         |
| Vue.js               | 渐进式 JavaScript 框架 | https://cn.vuejs.org/                    |
| Vue-router           | 前端路由              | https://router.vuejs.org/zh/             |
| vuex                 | 状态管理              | https://vuex.vuejs.org/zh/               |
| modeuse-core         | 自主开发 UI 组件        | --                                       |
| XXL-JOB              | 分布式任务调度平台         | https://www.xuxueli.com/xxl-job/         |
| TypeScript           | JavaScript 超集     | https://www.tslang.cn/                   |
| eslint               | 代码质量控制            | https://eslint.org/                      |
| hook                 | 代码质量控制            |                                          |
| uniapp               | 小程序模板             | https://uniapp.dcloud.io/README          |
| Sonarqube            | 代码质量控制            | https://www.sonarqube.org/               |
| --------             | -------           | -----------------------------------技术    |

#### 业务架构
![](https://images.gitee.com/uploads/images/2021/0706/161344_d0a423b6_8533008.png "Smart Shop系统架构图.png") 
- gruul-platform-open 平台模块
- gruul-account-open 账户模块
- gruul-gateway-open 网关
- gruul-order-open 订单模块
- gruul-goods-open 商品模块
- gruul-payment-open 支付模块
- gruul-oss-openOSS 模块
- gruul-afs-open 售后模块
- gruul-shops-open 店铺模块
- gruul-common-open 公共模块
- gruul-logistics-open 物流模块
- gruul-sms-open 短信模块

#### 编码规范
- 规范方式：后端严格遵守阿里编码规约，前端使用 eslint；
- 命名统一：简介最大程度上达到了见名知意；
- 分包明确：层级分明可快速定位到代码位置；
- 注释完整：描述性高大量减少了开发人员的代码阅读工作量；
- 工具规范：使用统一 jar 包避免出现内容冲突；
- 代码整洁：可读性、维护性更高。

  **代码位置**

  商家端 :https://gitee.com/qisange/basemall/tree/master/group-mall-admin-source

  小程序端 :https://gitee.com/qisange/basemall/tree/master/group-shop-uniapp-wx-Source

  后端 :https://gitee.com/qisange/basemall/tree/master/gruul

  数据库 ：https://gitee.com/qisange/basemall/tree/master/gruul/init-default-sql
### 项目演示
|B2C   |B2B2C   |
|---|---|
|![输入图片说明](2.jpg)   |![输入图片说明](1.jpg)|

### 演示地址
S2B2C演示地址：
| **平台端演示地址** ：https://pro.bgniao.cn/platform/#/|
| ---------------------------------------- |
| **商家端演示地址** ：https://pro.bgniao.cn/shop/#/|
| ---------------------------------------- |
| **供应商端演示地址** ：https://pro.bgniao.cn/supplier/#/sign|

B2C演示地址：
| **商业版演示地址** ：https://mall.bgniao.cn/copartner/1.3.13/sign |
| ---------------------------------------- |
| **H5演示地址** ：https://mall.bgniao.cn/h5/10002#/ |


### 典型客户案例

##### 代购商城

> 主要经营奢侈品代购，商品全部香港直邮发货，原先某平台购买商城源码使用，一年不到功能不满足现有需求，售卖代码方一直联系不上，后来找到我们做了新人券、用户注册实名制（代购需要）、对接物流 API、报表导出等功能，除了新人券其他的功能我们商城是满足的，所以在我们自有源码基础上做了新人券二开，二开后 **_营业额至今上百万_**

| ![输入图片说明](https://images.gitee.com/uploads/images/2021/0809/144858_d05384fd_8533008.jpeg "微信图片_20210809143329.jpg") | ![输入图片说明](https://images.gitee.com/uploads/images/2021/0809/144907_3648ce07_8533008.jpeg "微信图片_20210809143335.jpg") | ![输入图片说明](https://images.gitee.com/uploads/images/2021/0809/144917_284a0f75_8533008.jpeg "微信图片_20210809143353.jpg") | ![输入图片说明](https://images.gitee.com/uploads/images/2021/0809/144932_143ecabf_8533008.jpeg "微信图片_20210809143402.jpg") |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |

##### 新线科技

> 新线科技一家专注于计算机、软件及辅助设备、电子产品销售等科技型公司，有着自己的技术团队。前期用的是 PHP 的营销商城，近几年客户量发展较快再加上所售产品价格较高，基于长期发展肯定需要更换商城的底层架构，必然会用到 Spring Cloud，选择我们这套系统是技术成本较低的一个选择。

| ![输入图片说明](images/22d8edb51ba4af1e329aa5e300de2c8.jpg) | ![输入图片说明](images/212.jpg) | ![输入图片说明](images/213.jpg) | ![输入图片说明](images/214.jpg) |
| ----------------------------------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |

##### 劲面堂

> 劲面堂，连锁品牌有着大量忠实粉丝的餐饮公司，对用户数据尤为看中，需要有一套属于自己公司的售卖系统。随着市场变化可随时做二次开发来满足市场需求长远考虑 JAVA 微服务架构是不二之选。

| ![输入图片说明](images/010.jpg) | ![输入图片说明](images/011.jpg) | ![输入图片说明](images/012.jpg) | ![输入图片说明](images/013.jpg) |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |

### 特别鸣谢

码农的心声，唯有码农能懂。在很长一段时间里团队十多个人加班到深夜，市场调研不断推翻重构才构建了 Smart Shop。

在此特别鸣谢项目中付出大量心血的团队成员：

项目发起人：启三哥

产品经理：美子、美少女

系统总架构师：范范

前端开发：斯巴达、罗天师 yyds、龙哥、辣条

后端开发：白沙群岛、老头、杰哥、阴川蝴蝶君、阿帕奇、机器猫

测试：聂小倩、铁柱、佩奇、十又

运维：不吃辣的子奇

💝 **如果觉得我们的项目对你有帮助，可点击右上角 Watch、Star 项目，获取项目第一时间更新，欢迎提交 Issues 和 PR 项目，如需需求文档、流程图联系技术获取！**
## [更新详细说明](https://www.bgniao.cn/notice) https://www.bgniao.cn/
