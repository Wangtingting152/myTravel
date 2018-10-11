//myPage.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js');

Page({
  data: {
    mybg: "",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    util.ask('travelArticle', function (data) {
      console.log( data.articleData);
      console.log(data.userInforData);
      console.log(data.userData);
     
      console.log(data);
      that.setData({
        // subjects: data,
        article: data.articleData,
        userInfor: data.userInforData,
        user: data.userData
      });
    });
  },
  nav_article: function (event) {
    console.log(event.currentTarget.dataset.ddid);
    wx.switchTab({
      url: '../article/article?',
    })
  }
})
