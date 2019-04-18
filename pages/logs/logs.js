//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  goToDemo() {
    wx.navigateTo({
      url: '../demo/demo',
    })
  },
  goToInput() {
    wx.navigateTo({
      url: '../input/input',
    })
  }
})
