// components/component/component.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    innerText: {
      type: String,
      value: 'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 定义了一个私有方法
    numUp () {
      let num = this.data.num
      num++
      this.setData({
        num: num
      })
      // 调用我的自定义事件tangcaiye
      this.triggerEvent('tangcaiye',{
        num: num
      })
    }
  }
})
