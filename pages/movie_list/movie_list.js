// 获取应用实例
var app = getApp();
// 豆瓣电影top250的api地址
var listApiAddress = 'https://api.douban.com/v2/movie/';
Page({
    data: {
        title: '拼命加载中。。。',
        subjects: [],
        count: 10,
        start: 0,
        page: 1,
        totalCount: 0,
        totalPages: 0,
        loading: false,
        category: ''
    },
    onLoad: function(params) {
        var that = this;
        wx.showToast({
            title: '数据加载中',
            icon: 'loading',
            duration: 10000
        });
        console.log(params);
        wx.request({
            url: listApiAddress + params.category, //params.category
            data: {
                start: (parseInt(params.page) - 1) * this.data.count,
                count: this.data.count
            },
            header: {
                'content-type': 'application/jsonp'
            },
            success: function(res) {
                /*var data = res.data;
                console.log(data);*/
                var subjects = res.data.subjects;
                console.log(subjects);
                wx.hideToast();
                // 设置data里面的数据用this.setData()方法
                that.setData({
                    title: res.data.title,
                    subjects: res.data.subjects,
                    totalCount: res.data.total,
                    totalPages: Math.ceil(res.data.total / that.data.count),
                    page: params.page,
                    loading: true,
                    category: params.category
                });
            }
        });
    },
    goNext: function() {
        var that = this;
        // console.log(this.data.page++);
        var pageNum = parseInt(this.data.page) + 1;
        console.log(this.data.totalPages);
        if (pageNum >= 1 && pageNum <= this.data.totalPages) {
            wx.showToast({
                title: '数据加载中',
                icon: 'loading',
                duration: 10000
            });
            this.setData({
                page: pageNum,
                start: pageNum * this.data.count
            });
            wx.request({
                url: listApiAddress + this.data.category, //params.category
                data: {
                    start: (parseInt(this.data.page) - 1) * this.data.count,
                    count: this.data.count
                },
                header: {
                    'content-type': 'application/jsonp'
                },
                success: function(res) {
                    var data = res.data;
                    console.log(data);
                    var subjects = res.data.subjects;
                    console.log(subjects);
                    wx.hideToast();
                    // 设置data里面的数据用this.setData()方法
                    that.setData({
                        title: res.data.title,
                        subjects: res.data.subjects,
                        totalCount: res.data.total,
                        totalPages: Math.ceil(res.data.total / that.data.count),
                        page: pageNum,
                        loading: true
                    });
                }
            });
        }
    },
    goPrev: function() {
        var that = this;
        // console.log(this.data.page++);
        var pageNum = parseInt(this.data.page) - 1;
        console.log(this.data.totalPages);
        if (pageNum >= 1 && pageNum <= this.data.totalPages) {
            wx.showToast({
                title: '数据加载中',
                icon: 'loading',
                duration: 10000
            });
            this.setData({
                page: pageNum,
                start: pageNum * this.data.count
            });
            wx.request({
                url: listApiAddress + this.data.category, //params.category
                data: {
                    start: (parseInt(this.data.page) - 1) * this.data.count,
                    count: this.data.count
                },
                header: {
                    'content-type': 'application/jsonp'
                },
                success: function(res) {
                    var data = res.data;
                    console.log(data);
                    var subjects = res.data.subjects;
                    console.log(subjects);
                    wx.hideToast();
                    // 设置data里面的数据用this.setData()方法
                    that.setData({
                        title: res.data.title,
                        subjects: res.data.subjects,
                        totalCount: res.data.total,
                        totalPages: Math.ceil(res.data.total / that.data.count),
                        page: pageNum,
                        loading: true
                    });
                }
            });
        }
    }
});
