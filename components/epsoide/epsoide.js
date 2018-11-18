// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      observer:function(newVal, oldVal, changePath){
        //不要在observer中改变自己的值,会进入无限递归
        let val = newVal < 10 ? '0' + newVal : newVal
        this.setData({
          _index: val
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    /*对data数据进行初始化的时候
      不建议直接给类型
       year:Number,
       month:String
    */
    year:0,
    month:'',
    _index: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  /**
   * 生命周期函数,组件实例进入页面节点树时执行
   * 注意此时不能调用setData
   */
  created:function(){

  },
  /**
   * attached 组件生命周期函数，组件实例进入页面
   * 节点树时执行
   */
  attached:function(){
    console.log(this.data)
    console.log(this.properties)
    let date = new Date()
    let year = date.getFullYear()
    let monthText  = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月',]
    let month = monthText[date.getMonth()]
    this.setData({
      year: year,
      month: month
    })
   
  },

})
