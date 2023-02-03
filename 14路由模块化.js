const express = require('express')
const router = express.Router()
//编写get接口
router.get('/home',function(req,res){
    //使用req.query来接受客户端发来的参输
    const query = req.query
    res.send({
        status : 0 ,//0 成功 ，1 失败
        msg : 'get 成功' ,
        // data : query
        data: {
            big_sort: [
              {
                id:0,
                name: "美食",
                icon: "#icon-meishi",
              },
              {
                id:1,
                name: "甜点饮品",
                icon: "#icon-tiandian",
              },
              {
                id:2,
                name: "超市便利",
                icon: "#icon-chaoshigouwu",
              },
              {
                id:3,
                name: "生鲜果蔬",
                icon: "#icon-shengxian-ganju",
              },
              {
                id:4,
                name: "买药",
                icon: "#icon-zhichiyiyuanyaodian",
              },
            ],
            small_sort: [
              {id:0,
                name: "午餐",
                icon: "#icon-wucan",
              },
              {id:1,
                name: "买酒",
                icon: "#icon-jiu",
              },
              {id:2,
                name: "新鲜水果",
                icon: "#icon-xinxianguoshu_xinxianshuiguopingguo",
              },
              {id:3,
                name: "汉堡披萨",
                icon: "#icon-hanbaopisa",
              },
              {id:4,
                name: "休闲饮品",
                icon: "#icon-xiuxianyinpin",
              },
              {id:5,
                name: "夜宵",
                icon: "#icon-yexiao",
              },
              {id:6,
                name: "吐司",
                icon: "#icon-tusi",
              },
              {id:7,
                name: "跑腿",
                icon: "#icon-paotuiAPP",
              },
              {id:8,
                name: "美人佳丽",
                icon: "#icon-kouhong",
              },
              {id:9,
                name: "全部分类",
                icon: "#icon-fenlei",
              },
            ],
            centent_nav_list: [
              {
                id:0,
                tab: "天天神券",
                data: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                  },
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                    title: "隆江猪脚饭",
                    sales: "2888",
                    price: "20",
                    label: ["正宗广东猪脚饭"],
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "杀猪粉",
                    sales: "2888",
                    price: "20",
                    label: ["我的美味，你知道"],
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "臭豆腐",
                    sales: "3888",
                    price: "10",
                    label: ["此物只因天上有"],
                  },
                ],
              },
              {
                id:1,
                tab: "减配送费",
                data: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                  },
                ],
              },
              {
                id:2,
                tab: "点评高分",
                data: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                  },
                ],
              },
              {
                id: 3,
                tab: "会员满减",
                data: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "酸菜鱼",
                    sales: "2888",
                    price: "20",
                    label: ["门店上新", "很下饭"],
                  },
                ],
              },
            ],
          }
})
})
router.get('/store',function(req,res){
  //使用req.query来接受客户端发来的参输
  const query = req.query
  res.send({
      status : 0 ,//0 成功 ，1 失败
      msg : 'get 成功' ,
      // data : query
     data: [
        {id:0,
          name: "点菜",
          data: {
            content: "点菜",
            items: [
              {
                text: "热销套餐",
                children: [
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                    title: "隆江猪脚饭",
                    num: 0,
                    price: 25.0,
                    id: 0,
                    add: true,
                  },
                  {
                    pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc",
                    title: "隆江猪脚饭",
                    num: 0,
                    price: 25.0,
                    id: 1,
                    add: true,
                  },
                ],
              },
              {
                text: "超级折扣",
                children: [
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "无骨酸菜鱼+肥牛双拼",
                    num: 0,
                    price: 25.0,
                    id: 5,
                    add: true,
                  },
                  {
                    pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                    title: "香辣水煮鱼+肥牛双拼",
                    num: 0,
                    price: 25.0,
                    id: 6,
                    add: true,
                  },
                ],
              },
            ],
          },
        },
        {id:1,
          name: "评价",
          data: {
            content: "评价",
          },
        },
        {id:2,
          name: "商家",
          data: {
            content: "商家",
          },
        },
      ],     
})
})
//编写post接口
router.post('/post',function(req,res){
    //使用req.body来接受客户端发来的参输                               
    const body = req.body
    res.send({
        status : 0 ,//0 成功 ，1 失败
        msg : 'post 成功' ,
        data : body ,
    })
})
module.exports = router
