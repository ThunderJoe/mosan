import {apiUrl} from '../api'
import { HTTP } from '../utils/http'

class Like extends HTTP {
  like(behavior,id,type){
    let url = behavior == 'like' ?apiUrl.likeApi:apiUrl.unlikeApi
    let params = {
      url:url,
      method:'POST',
      appkey:apiUrl.apiKey,
      data:{
        art_id:id,
        type:type
      }
    }
    
    this.request(Object.assign(params,{

    }))
  }
}

export {Like}