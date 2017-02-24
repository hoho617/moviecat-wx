var detailApiAddress = 'https://api.douban.com/v2/movie/subject/';
Page({
    data: {
        movie: {},
        genre: '',
        director: '',
        cast: '',
        label: ''
    },
    onLoad: function(params) {
        // console.log(params);
        var that = this;
        wx.showToast({
            title: '数据加载中',
            icon: 'loading',
            duration: 10000
        });
        wx.request({
            url: detailApiAddress + params.id,
            data: {},
            header: {
                'content-type': 'application/jsonp'
            },
            success: function(res) {
                wx.hideToast();
                that.setData({
                    movie: res.data,
                    genre: '类型：',
                    director: '导演：',
                    cast: '主演：',
                    label: '摘要'
                });
            }
        });

    }
});
