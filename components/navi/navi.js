// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     title:{
       type:String,
       value:''
     },
     first:Boolean,
     latest:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc:'img/triangle@left.png',
    leftDisSrc:'img/triangle.dis@left.png',
    rightSrc:'img/triangle@right.png',
    rightDisSrc:'img/triangle.dis@right.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event){
      if(!this.properties.left){
        this.triggerEvent('left',{},{})
      }
    },
    onRight:function(event){
      if(!this.properties.right){
        this.triggerEvent('right',{},{})
      }
    }
  }
})
