// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    focus: false,
    inputVal: ''
  },
  bindButtonTap() {
    this.setData({
      focus: true
    })
  },
  bindKeyInput(e) {
    this.setData({
      inputVal: e.detail.value
    })
  },
  bindReplaceInput(e) {
    let value = e.detail.value
    let pos = e.detail.cursor
    if (pos != -1) {
      let left = e.detail.value.slice(0, pos)
      pos = left.replace(/11/g, '2').length
    }
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})