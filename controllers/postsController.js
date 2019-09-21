// 所有与posts表相关的业务处理都在这个文件中实现
const postsModel = require('../models/postsModel.js')
// 引入处理日期格式的第三方模块
var moment = require('moment');
module.exports = {
    // 获取所有文章列表数据
    getPostList(req,res){
        // 调用数据模块进行数据的获取
        postsModel.getPostList((err,data) => {
            if(err){
                res.json({
                    code:400,
                    msg:'数据查询失败'
                })
            }else{
                // 遍历data，将其中的每一个元素对象的created进行合理的日期格式转换
                // moment().format('日期格式') // 将当前日期进行转换
                // moment(你想转换的源格式).format('目标格式')
                data.forEach((value) => {
                    value.created = moment(value.created).format('YYYY-MM-DD HH-mm-ss')
                })
                res.json({
                    code:200,
                    msg:'数据查询成功',
                    data
                })
            }
        })
    }
}