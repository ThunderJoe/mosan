
import { HTTP } from '../../utils/http'
import { ClassicModel } from '../../models/classic'
import {Like} from '../../models/like'

let classicModel = new ClassicModel()
let likeModel = new Like()
const app = getApp()
Page({
  data: {
    classicData:null,
    latest:true,
    first:false
  },
  onLoad: function (options) {
    classicModel.getLastest((res) => {
      console.log('这是一个回调函数' + res)
      this.setData({
        classicData: res
      })
    })
  },

  onLike:function(event){
    console.log(event)
    let type = this.data.classicData.data.type
    let id = this.data.classicData.data.id
    let behavior = event.detail.behavior
  
    likeModel.like(behavior,id,type)
    
    
  }

})
