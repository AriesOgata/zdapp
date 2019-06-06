import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.baseURL = 'http://zdapp.808w.com';
axios.defaults.timeout = 117000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//POST传参序列化
axios.interceptors.request.use((config) => {
    //在发送请求之前做些什么
    if(config.method  === 'post'||'get'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    //对请求错误做些什么
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
       if(!res.code=='0'){
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

//从服务器获取应用的版本信息，和本地应用版本对比
export function getAppInfo(appName,appType) {
  return fetch({
    headers: {"Content-Type": "application/json"},
    url: '/mobile/common/getAppInfo',
    method: 'post',
    data: {
      appName: appName,
      appType: appType
    }
  })
}

export function fetch(type='GET',url, params) {
    return new Promise((resolve, reject) => {
      type = type.toUpperCase();

      if(type == "POST"){
          axios.post(url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
      }else if(type == "GET"){
        axios.get(url,{params:params})
          .then(response => {
            resolve(response.data);
          },err => {
             reject(err);
          })
          .catch((error) => {
            reject(error)
          })
      }
    })
}



//首页新闻
export const shouyeNews = (params) => fetch('GET','/app/news/indexlist',params);
// 新闻列表
export const newsList = (params) => fetch('POST','/app/news/showlist',params);
// 新闻详情
export const newsDetails = (params) => fetch('POST','/app/news/article',params);
//工种类别
export const  showlist = (params) => fetch('GET','app/category/allList',params);
// 机构详情
export const  organDetails = (params) => fetch('POST','/app/company/details',params);
//机构页面
export const  jglist = (params) => fetch('GET','/app/company/showlist',params);
//报名页面
export const  enroll = (params) => fetch('GET','/app/category/showList',params);
//报名页面耳机分类
export const  enrollTwo = (params) => fetch('GET','/app/category/showList',params);
//报名页面三级分类
export const  enrollThree = (params) => fetch('GET','/app/course/showlist',params);
//验证码
export const  yzmGet = (params) => fetch('POST','/app/public/appSend',params);
// 评论
export const  blogs = (params) => fetch('GET','/app/blog/blogs',params);
//提交表单
export const apply = (params) => fetch('POST','/app/public/addOrder',params);
//注册
export const register = (params) => fetch('POST','/app/public/doRegister',params);
// 登录
export const loginForm = (params) => fetch('POST','/app/login/doAppLogin',params);
// 登录确认
export const loginCheck = (params) => fetch('POST','/app/login/loginCheck',params);
//找回密码
export const findPassword = (params) => fetch('POST','/app/login/passwordReset',params);
//支付
export const pay = (params) => fetch('POST','/pay/alipay/index',params);
//机构评论总星级
export const star = (params) => fetch('POST','/app/company/companyRemark',params);
//推出登录
export const logout = (params) => fetch('POST','/app/login/logout',params);

//课程列表接口
export const courseList = (params) => fetch('GET','/app/course/courseshow',params);
//工种课程内容
export const Info = (params) => fetch('GET','/app/course/info',params);
//我的课程接口
export const myCourse = (params) => fetch('POST','/app/my_course/index/username/admint',params);
//课程收藏接口
export const mySc = (params) => fetch('POST','/app/my_course/course_favorite/username/admin',params);
//删除收藏
export const deletSc = (params) => fetch('POST','/app/my_course/course_del__favorite',params);
//我的订单接口
export const myOrder = (params) => fetch('POST','/app/order/index/username/admin',params);
//我的考场
export const myexam = (params) => fetch('GET','/exam/index/index',params);
//学习考试接口
export const basics = (params) => fetch('GET','/exam/exam_paper/index/basicid/',params);





