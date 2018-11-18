// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
      value:true,
      observer:function(){
        //
      }
    },
    count:{
      type:Number,
      value:0,
      observer:function(){

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //lkie count需要开放出去
    yesSrc:'./img/like.png',
    noSrc:'./img/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      //自定义事件
      let like = this.properties.like
      let count = this.properties.count
      count = like ? count-1 : count+1
      this.setData({
        like: !like,
        count: count,
      })
      //发起自定义事件
      let behavior = this.properties.like?'like':'cancel'
      this.triggerEvent('like',{
        behavior:behavior
      },{})

    }
  }
})  
