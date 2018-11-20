import imagePreload from '../mod/imagePreload'

export default function(imageList,callback='') {
    let $loading="#loader_wrap"

    for(let i=0,l=imageList.length;i<l;i++){
        imageList[i]=require('../../img/'+imageList[i])
    }

    imagePreload(imageList,function (percent) {
        if(percent>=1){
            console.log("图片加载完成")

            //延迟一下，给你看看动画效果
            setTimeout(function(){
                $($loading).remove()
                typeof callback=='function'&&callback()
            },2000)

        }else {
            console.log("已加载："+percent)
        }
    })
}

