// pages/movieTest/movieTest/movieTest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    winHeight:0,
    winWidth:0,
    SwiperImg:[
      '../../../image/strangerth1.jpg',
      '../../../image/strangerth2.jpg',
      '../../../image/strangerth3.jpg'
    ],
    movies:'',
    MovieLeft:0,
    movieHeight:[
      {height:0},
      {height:0},
      {height:0}
    ]
  },
  switchTab:function(e){
    var movieH = this.data.movieHeight[e.currentTarget.id].height;
    this.setData({
      currentTab:e.currentTarget.id,
      winHeight:movieH
    })
  },
  MovieTab:function(e){
    wx.navigateTo({
      url: '../moviedetail/moviedetail?id='+e.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    var Num;
    wx.getSystemInfo({
      success: function(res) {
        Num = Math.floor(res.windowWidth/180);
        var LeftVal = (res.windowWidth - 180 * Num) / (Num+1)
        _this.setData({
          winHeight:res.windowHeight,
          winWidth:res.windowWidth,
          MovieLeft: LeftVal
        })
      },
    })
    wx.request({
      url:'https://api.douban.com/v2/movie/weekly?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method:'GET',
      header: {
        "Content-Type": "json"
      },
      success:res=>{
        var size = res.data.subjects.length;
        var len = Math.ceil(size/Num);
        var temp = "movieHeight[0].height";
        _this.setData({
          movies:res.data.subjects,
          winHeight:len*330+75,
          [temp]: len * 330 + 75,
        })
      }
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: res => {
        console.log(res)
        var size = res.data.subjects.length;
        var len = Math.ceil(size / Num)
        var temp = "movieHeight[1].height"
        _this.setData({
          moviesInTheaters: res.data.subjects,
          [temp]: len * 330,
        })
      }
    })
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon?apikey=0df993c66c0c636e29ecbb5344252a4a',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success: res => {
        console.log(res)
        var size = res.data.subjects.length;
        var len = Math.ceil(size / Num)
        var temp = "movieHeight[2].height"
        _this.setData({
          moviesComing: res.data.subjects,
          [temp]: len * 330,
        })
      }
    })
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