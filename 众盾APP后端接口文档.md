# **众盾APP后端接口文档**

#### 域名
> http://zdapp.808w.com

#### 返回数据格式

> JSON

#### HTTP请求方式
> GET|POST



#### 公用返回字段

> | 返回字段 | 字段类型      | 说明                             |
> | :------- | :------------ | :------------------------------- |
> | status   | int           | 返回结果状态。1：正常；0：异常。 |
> | msg      | string        | 返回信息                         |
> | time     | string        | 返回时间戳                       |
> | data     | string\|array | 业务相关数据                     |



------

## 一、新闻相关接口

### 1\. 首页推荐新闻列表

URL

> http://zdapp.808w.com/app/news/indexlist

接口功能

> 获取首页推荐新闻列表

请求参数

> | 参数 | 必选 | 类型 | 说明 |
> | :--- | :--- | :--- | ---- |
> | 无   |      |      |      |

业务相关数据

> | 数组字段  | 字段类型 | 说明           |
> | :-------- | :------- | :------------- |
> | id        | int      | 新闻分类id     |
> | name      | string   | 新闻分类名     |
> | thumbnail | string   | 新闻分类缩略图 |
> | articles  | array    | 此分类下的文章 |





> 接口示例
>
> 地址：http://zdapp.808w.com/app/news/indexlist

``` javascript

```

------

### 2\. 新闻文章列表

URL

> http://zdapp.808w.com/app/news/showlist

接口功能

> ```
> 新闻文章列表
> ```

请求参数

> | 参数 | 必选 | 类型 | 说明       |
> | :--- | :--- | :--- | ---------- |
> | id   | 是   | int  | 新闻分类id |

业务相关数据

> | 数组字段       | 字段类型 | 说明           |
> | :------------- | :------- | :------------- |
> | id             | int      | 文章id         |
> | post_hits      | int      | 文章点击次数   |
> | post_like      | int      | 文章点赞次数   |
> | post_title     | string   | 文章标题       |
> | published_time | int      | 文章发布时间戳 |
> | thumbnail      | string   | 文章缩略图     |





> 接口示例

> 地址：http://zdapp.808w.com/app/news/showlist?id=196

``` javascript

```

------

### 3\. 新闻文章内容

URL

> http://zdapp.808w.com/app/news/article

接口功能

> ```
> 新闻文章内容
> ```

请求参数

> | 参数 | 必选 | 类型 | 说明       |
> | :--- | :--- | :--- | ---------- |
> | id   | 是   | int  | 文章id     |
> | cid  | 否   | int  | 所属分类id |

业务相关数据

> | 数组字段    | 字段类型 | 说明         |
> | :---------- | :------- | :----------- |
> | article     | array    | 文章所有信息 |
> | nextArticle | array    | 下篇文章     |
> | prevArticle | array    | 上篇文章     |



> 接口示例

> 地址：http://zdapp.808w.com/app/news/article?id=731&cid=196

```javascript

```

------



## 二、工种课程相关接口

###  1.所有工种分类接口

URL

> http://zdapp.808w.com/app/category/allList

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数 | 必选 | 类型 | 说明 |
> | :--- | :--- | :--- | ---- |
> | 无   |      |      |      |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 工种id   |
> | name     | string   | 工种名称 |
> | icon     | string   | 工种图标 |
> | children | array    | 子分类   |

> 接口示例

> 地址：http://zdapp.808w.com/app/category/allList

```javascript

```

-----------



### 2.机构工种分类接口

URL

> http://zdapp.808w.com/app/category/showList

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型 | 说明       |
> | :-------- | :--- | :--- | ---------- |
> | companyId | 是   | int  | 机构id     |
> | parentId  | 否   | int  | 分类上级id |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 分类id   |
> | name     | string   | 分类名称 |

> 接口示例

> 地址：http://zdapp.808w.com/app/category/showList?companyId=1

```javascript

```

------



>

```javascript

```

------



### 3.课程列表接口

URL

> http://zdapp.808w.com/app/course/showlist

接口功能

> ```
> 获取课程列表（携带参数为机构的课程列表）
> ```

请求参数

> | 参数       | 必选 | 类型 | 说明   |
> | :--------- | :--- | :--- | ------ |
> | categoryId | 否   | int  | 分类id |
> | companyId  | 否   | int  | 机构id |

业务相关数据

> | 数组字段 | 字段类型 | 说明         |
> | :------- | :------- | :----------- |
> | id       | int      | 机构课程id   |
> | title    | string   | 课程名称     |
> | price    | string   | 机构课程价格 |

> 接口示例

> 地址：http://zdapp.808w.com/app/course/showlist?categoryId=187&companyId=1

```javascript

```

------



### 4.工种课程内容接口

URL

> http://zdapp.808w.com/app/course/info

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数 | 必选 | 类型 | 说明   |
> | :--- | :--- | :--- | ------ |
> | id   | 是   |      | 课程id |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 课程id   |
> | name     | string   | 工种名称 |
> | icon     | string   | 工种图标 |
> | children | array    | 子分类   |



> 接口示例

> 地址：http://zdapp.808w.com/app/course/info

```javascript

```

------

### 5.课程接口

URL

> http://zdapp.808w.com/app/course/showList

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型 | 说明       |
> | :-------- | :--- | :--- | ---------- |
> | categoryId | 是   | int  | 机构id     |

业务相关数据

> | 数组字段 | 字段类型 | 说明         |
> | :------- | :------- | :----------- |
> | id       | int      | 机构课程id   |
> | title    | string   | 课程名称     |
> | price    | string   | 机构课程价格 |


> 接口示例

> 地址：http://zdapp.808w.com/app/course/showList?categoryId=187

```javascript

```

------


###





## 三、机构相关接口

### 1.机构列表接口

URL

> http://zdapp.808w.com/app/course/showlist

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | type      | 否   | string | ‘default’：默认排序，‘map’：距离，‘comment’：评论数，‘price’：价格 |
> | longitude | 是   | string | 经度                                                         |
> | latitude  | 是   | string | 纬度                                                         |
> | category  | 否   | int    | 工种分类id                                                   |
> | range     | 否   | int    | 距离范围                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 机构id   |
> | name     | string   | 机构名称 |
> | icon     | string   | 机构图片 |
> | latitude | string   | 经度     |
> | latitude | string   | 纬度     |



> 接口示例

> 地址：http://zdapp.808w.com/app/company/showlist?type=map&range=30&category=1

```javascript

```

------

### 2.机构详细内容接口

URL

> http://zdapp.808w.com/app/company/details

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | companyId | 是   | int    | 机构id                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 机构id   |
> | name     | string   | 机构名称 |
> | more     | string   | 机构图片 |
> | latitude | string   | 经度     |
> | latitude | string   | 纬度     |
> | mobile | string   | 电话    |



> 接口示例

> 地址：http://zdapp.808w.com/app/company/details?companyId=1

```javascript

```

------

### 3.机构总点评星级展示

URL

> http://zdapp.808w.com/app/company/companyRemark

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | companyId | 是   | int    | 机构id                                                     |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | companyId | int      | 机构id   |
> | rank1     | int   | 服务 |
> | rank2     | int   | 教学 |
> | rank3     | int   | 环境 |
> | rank4     | int   | 收费 |
> | count_comment     | int   | 机构总评论数 |


> 接口示例

> 地址：http://zdapp.808w.com/app/company/companyRemark?companyId=1

```javascript

```

------

### 4.机构评论列表接口

URL

> http://zdapp.808w.com/app/blog/blogs

接口功能

> ```
> 工种分类和子分类
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | limit | 是   | int    | 每页条数                                                     |
> | page | 是   | int    | 页数                                                     |
> | cat_type | 是   | tring    | 评论类型   机构：company  课程id： |
> | cat_id | 是   | int    | 评论类型id   机构id：company  课程id： |
> | praiseType | 否  | tring    | 评价等级 好评：high 中评：middle 差评：low |
> | rankType | 否   | tring    | 评价类型 rank1 rank2 rank3 rank4 |
> | pictureType | 否   | int    | 是否有图 picture |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | string      | 评论id   |
> | readed_count     | string   | 阅读数量 |
> | comment_count     | int   | 评论数量 |
> | praise_count     | int   | 点赞数量 |
> | rank1     | int   | 服务 |
> | rank2     | int   | 教学 |
> | rank3     | int   | 环境 |
> | rank4     | int   | 收费 |
> | praiseType     | tring   | 评价等级 好评：high 中评：middle 差评：low |
> | user_id     | int   | 用户id |
> | title     | string   | 评论标题 |
> | content     | string   | 评论内容 |
> | createdTime     | int   | 评论时间 |
> | user_nickname     | string   | 用户名 |


> 接口示例

> 地址：http://zdapp.808w.com/app/blog/blogs?limit=20&page=1&cat_type=company&cat_id=1

```javascript

```



### 5.立即报名表单提交接口

URL

> http://zdapp.808w.com/app/public/addOrder

接口功能

> ```
> 提交内容生成订单
> ```

请求参数

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | company_id       | int      | 机构id   |
> | course_ids     | string   | 课程ids |
> | user_nickname     | string   | 姓名 |
> | sex   | string   | 性别 |
> |   mobile   | int   | 手机号 |
> | code     | int   | 验证码 |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | code       | 0,1      | 订单状态（0失败，1成功）   |
> | msg     | string   | 返回的信息 |
> | data     | string   | 返回的信息(order_sn:订单号,total_money:订单价格) |



> 接口示例

> 地址：http://zdapp.808w.com/app/puliic/addOrder

```javascript

```

------

## 四.评论回复

### 1.评论回复列表接口

URL

> http://zdapp.808w.com/app/blog/returnComment

接口功能

> ```
> 评论回复列表
> ```

请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | limit | 是   | int    | 每页条数                                                     |
> | page | 是   | int    | 页数                                                     |
> | blogId | 是   | int    | 评论类型   机构：company  课程id： |
> | commentId | 否   | int    | 评论类型id   机构id：company  课程id： |

业务相关数据

> | 数组字段 | 字段类型 | 说明     |
> | :------- | :------- | :------- |
> | id       | int      | 回复评论id   |
> | readed_count     | string   | 阅读数量 |
> | comment_count     | int   | 评论数量 |
> | praise_count     | int   | 点赞数量 |
> | user_id     | int   | 用户id |
> | comment     | string   | 评论内容 |
> | create_Time     | int   | 评论时间 |
> | user_nickname     | string   | 用户名 |
> | pictures     | string   | 图片 |


> 接口示例

> 地址：http://zdapp.808w.com/app/blog/returnComment?limit=20&page=1&commentId=1&blogId=1

```javascript

```

------

### 2.用户发布主贴

URL

> http://zdapp.808w.com/app/user/blogPosting

接口功能

> ```
> 用户发布主贴
> ```


请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | cat_type | 是   | string    | [course:课程，company：机构]                                                     |
> | title | 否   | string    | 发帖标题                                              |
> | content | 是   | string    | 发帖内容： |
> | image | 否   | file | 图片批量上传（小于2M，最多9张图片）|
> | rank1 | 否   | string | 服务（5星100分）（4星80分）（3星60分）（2星40分）（1星20分） 当需要进行星级评价的时候以下4个字段必填|
> | rank2 | 否   | string | 教学（5星100分）（4星80分）（3星60分）（2星40分）（1星20分）|
> | rank3 | 否   | string | 环境（5星100分）（4星80分）（3星60分）（2星40分）（1星20分）|
> | rank4 | 否   | string | 收费（5星100分）（4星80分）（3星60分）（2星40分）（1星20分）|

```javascript

```

------

### 3.用户回复留言

URL

> http://zdapp.808w.com/app/user/returnComments

接口功能

> ```
> 用户发布主贴
> ```


请求参数

> | 参数      | 必选 | 类型   | 说明                                                         |
> | :-------- | :--- | :----- | ------------------------------------------------------------ |
> | blogId | 是   | int    |    主贴id                               |
> | commentId | 否   |   int  |    回复评论id                               |
> | comment | 是   | string    | 回复内容： |
> | image | 否   | file    | 图片批量上传（小于2M，最多9张图片）|


```javascript

```

------



## 五.其他数据请求

### 1.短信验证码接口

URL

> http://zdapp.808w.com/app/public/appSend

接口功能

> ```
> 发送短信验证码
> ```

请求参数

> | 参数   | 必选 | 类型   | 说明                             |
> | :----- | :--- | :----- | -------------------------------- |
> | mobile | 是   | int    | 手机号                           |
> | type   | 是   | string | 接口状态（注册，登录，报名等等） |

业务相关数据

> | 数组字段 | 字段类型 | 说明                         |
> | :------- | :------- | :--------------------------- |
> | code     | int      | 短信发送状态（0失败，1成功） |
> | msg      | string   | 返回的信息                   |

> 接口示例

> 地址：http://zdapp.808w.com/app/public/appSend

```javascript

```

------

### 2.我的课程数据接口

URL

> http://zdapp.808w.com/app/my_course/index

接口功能

> ```
> 发送短信验证码
> ```

请求参数

> | 参数   | 必选 | 类型   | 说明                             |
> | :----- | :--- | :----- | -------------------------------- |
> | username | 是   | str    | 用户名                           |

业务相关数据

> | 数组字段 | 字段类型 | 说明                         |
> | :------- | :------- | :--------------------------- |

> 接口示例

> 地址：http://zdapp.808w.com/app/my_course/index/username/admin

```javascript

```

------

