// pages/article/article.js
const app = getApp()
const util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',    'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this;
    util.ask('travelArticle', function(data) {
      console.log(data.articleData);
      // console.log(data.userInforData);
      // console.log(data.userData);

      console.log(data);
      that.setData({
        // subjects: data,
        article: data.articleData,
        // userInfor: data.userInforData,
        // user: data.userData
      });
    });
  }
  

})