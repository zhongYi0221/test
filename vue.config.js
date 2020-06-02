//反向代理
module.exports= {//返回数据
    devServer:{//开发环境配置
        proxy:{//代理字段
            // 正在热映
            //
            // http://39.97.33.178/api/movieOnInfoList?cityId=10
            //
            // 即将上映
            //
            // http://39.97.33.178/api/movieComingList?cityId=10
            //
            // 搜索
            //
            // http://39.97.33.178/api/searchList?cityId=10&kw=a
            //
            // 城市
            //
            // http://39.97.33.178/api/cityList
            //
            // 电影详情
            //
            // http://39.97.33.178/api/detailmovie?movieId=345808
            //
            // 影院
            //
            // http://39.97.33.178/api/cinemaList?cityId=10
            //
            // 城市定位
            //
            // http://39.97.33.178/api/getLocation

                '/api':{
                    target:'http://39.97.33.178',
                    changeOrigin: true,//是否改变字段
                }
                    
        }
    }
}