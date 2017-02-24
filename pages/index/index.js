Page({
    data: {
        imgUrls: ['../../images/1.jpg', '../../images/2.jpg', '../../images/3.jpg', '../../images/4.jpg', '../../images/5.jpg',
            '../../images/6.jpg'
        ],
        modules: ['正在热映', '即将上映', 'top250'],
        categorys: ['in_theaters', 'coming_soon', 'top250'],
        page: 1,
    },
    bindPickerChange: function(e) {
        // console.log('picker发送选择改变，携带值为', e.detail.value),
        // console.log(e);
        console.log(this.data.categorys);
        console.log(this.data.page);
        this.setData({
            index: e.detail.value,
        })
        wx.navigateTo({
            url: '../movie_list/movie_list?category=' + this.data.categorys[e.detail.value] + '&page=' + this.data.page
        });
    },
});
