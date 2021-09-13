$(function(){
    $("#inpBtn").click(function () {
        var count = 60;
        console.log(1);
        //jquery要用setInterval()定时器，因为这里不会调用倒计时函数，要循环执行
        var interval = setInterval(() => {
            if (count == 0) {
                //因为button是<input>元素，所以这里要用.val()方法
                $("#inpBtn").text("重新获取");
                count = 60;
                //当倒计时结束，这里要清除定时器
                clearTimeout(interval);
            } else {
                $("#inpBtn").text(count + "s后重新获取");
                count--;
            }
        }, 1000);
    })
})
