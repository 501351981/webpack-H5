function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function noop() {}

export default function (imgList, callback, timeout) {
    timeout = timeout || 5000;
    imgList = isArray(imgList) && imgList || [];
    callback = typeof(callback) === 'function' && callback|| noop;

    let total = imgList.length,
        loaded = 0,
        imgages = [],
        _on = function () {
            loaded < total && (++loaded, callback && callback(loaded / total));
        };

    if (!total) {
        return callback && callback(1);
    }

    for (var i = 0; i < total; i++) {
        imgages[i] = new Image();
        imgages[i].onload = imgages[i].onerror = _on;
        imgages[i].src = imgList[i];
    }

    //超出预定时间就不再等了，认为图片全部加载成功，避免长久等待
    setTimeout(function () {
        loaded < total && (loaded = total, callback && callback(loaded / total));
    }, timeout);

}