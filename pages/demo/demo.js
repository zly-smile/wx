// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  text: 'init data',
  num: 0,
  array: [{text: 'init data'}],
  object: {
    text: 'init data'
    },
  imgUrls: [
    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
    'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
  ],
  indicatorDots: false,
  autoplay: false,
  interval: 5000,
  duration: 1000
  },
changeText() {
  this.setData({
    text: 'changed data'
  })
},
changeNum() {
  this.setData({
    num:2
  })
},
changeItemInArray() {
  this.setData({
    'array[0].text': 'changed data'
  })
},
changeItemInObject() {
  this.setData({
    'object.text': 'changed data'
  })
},
addNewField() {
  this.setData({
    'newField.text': 'new data'
  })
},
changeIndicatorDots: function (e) {
  this.setData({
    indicatorDots: !this.data.indicatorDots
  })
},
changeAutoplay: function (e) {
  this.setData({
    autoplay: !this.data.autoplay
  })
},
intervalChange: function (e) {
  this.setData({
    interval: e.detail.value
  })
},
durationChange: function (e) {
  this.setData({
    duration: e.detail.value
  })
},
onReady() {
  this.videoCtx = wx.createVideoContext('myVideo')
},
play() {
  this.videoCtx.play()
},
pause() {
  this.videoCtx.pause()
},
goToIcon() {
  wx.navigateTo({
    url: '../icon/icon',
  })
},
  onGotUserInfo(e) {
    console.log(e, 123)
  }
})