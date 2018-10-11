const serverApi = "http://localhost:8882/";

const requireNet = (api, call) => {

  var url = serverApi + api;
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "content-type": "application/x-www-form-urlencoded"
    },
    success: function (res) {

      call(res.data);
    }
  })
}

module.exports = {
  ask: requireNet
}