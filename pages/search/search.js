var searchApiAddress = 'https://api.douban.com/v2/movie/search';
Page({
    data: {
        subjects: []
    },
    search: function(e) { // e.detail.value为输入文本框的值
        if (!e.detail.value) {
            return;
        }
        wx.showToast({
            title: "数据加载中",
            icon: "loading",
            duration: 10000
        });
        var that = this;
        wx.request({
            url: searchApiAddress + '?q=' + e.detail.value,
            data: {},
            header: {
                'content-type': 'application/jsonp'
            },
            success: function(res) {
                wx.hideToast();
                that.setData({
                    subjects: res.data.subjects
                });
            }
        });
    }
});
