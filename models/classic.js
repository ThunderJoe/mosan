
import {apiUrl} from '../api'
import {HTTP} from '../utils/http'

class ClassicModel extends HTTP{
  getLastest(scallback){
    let url = apiUrl.classicLatestApi
    let appkey = apiUrl.apiKey
    //页面加载时触发，一个页面只会调用一次，可以在onload的参数中获取打开当前页面路径的参数
    let params = {
      url:url,
      method:'GET',
      appkey:appkey
    }
    this.request(Object.assign(params,{
      success:res=>{  
        scallback(res)
      }
    }))
  }
}

export {ClassicModel}