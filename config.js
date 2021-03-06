// 2020年10月28日 https://github.com/idealfiller/kyhbirthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给可可爱爱的孔艳慧同学",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "祝你生日快乐",  // 同上...
        "这的确是值得庆祝的日子",
        "这是我们在海上的最后一天",
        "陪你度过这平凡而又特别的生日",
        "祝愿你平安喜乐",
        "Paper接连发",
        "身体棒棒哒",
        "要保持可爱哦",
         
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "可爱的孔艳慧同学": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "庆祝开始啦",
        cake_fadein: "生日蛋糕",
        light_candle: "生日蜡烛",
        wish_message: "艳慧生日快乐！！！",
        story: "A MESSAGE FOR YOU",
    }
};
