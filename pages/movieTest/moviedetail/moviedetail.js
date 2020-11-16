// pages/movieTest/moviedetail/moviedetail.js
function CovertToString(casts){
  var castArray='';
  for (var i in casts){
    castArray = castArray + casts[i].name + '/'
  }
  return castArray.substring(0, castArray.length-2);
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movie:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    console.log(options.id)
    var URL = 'https://api.douban.com/v2/movie/subject/' + options.id + '?apikey=0df993c66c0c636e29ecbb5344252a4a'
    wx.request({
      url:URL,
      method:'GET',
      header:{
        'Content-Type':'json'
      },
      success:res=>{
        console.log(res)
        var movie={
          movieImage:res.data.images.large,
          country:res.data.countries,
          title:res.data.title,
          wishCount:res.data.comments_count,
          commentCount:res.data.comments_count,
          year:res.data.year,
          director:res.data.directors[0].name,
          summary:res.data.summary,
          generes:res.data.genres,
          casts:CovertToString(res.data.casts),
          castInfo:res.data.casts,
          durations:res.data.durations,
          rating:res.data.rating.average,
        }
        _this.setData({
          movie:movie,
        })
      }
    })
    console.log(_this)
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