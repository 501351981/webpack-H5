import './index.less'
import '../../js/lib/flexible'
import Swiper from '../../js/lib/swiper.jquery'
import loading from '../../js/proj/loading'
import {imagePreloadList} from './index.json'

loading(imagePreloadList,()=>{
    console.log("loading可以结束了")
    new Swiper('#swiper', {
        resistanceRatio: 0,
        direction: 'vertical',
        preloadImages: false,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        lazyLoadingInPrevNextAmount: 2,
        slidesPerView: 1,
        onInit: function (swiper) {
            console.log("swiper"+swiper.activeIndex+"初始化了")
        },
        onSlideChangeEnd: function (swiper) {
            console.log("swiper"+swiper.activeIndex+"显示了")
        }
    });
})


