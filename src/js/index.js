layui.use('element', function(){
        var element = layui.element;
        
        //…
      });
$.get("http://jx.xuzhixiang.top/ap/api/reg.php?username=honnygao&password=123456",(res)=>{
  console.log(res)
})
$.get(" http://jx.xuzhixiang.top/ap/api/login.php?username=honnygao&password=123456",(res)=>{
  console.log(res)
})
$.get(  "http://jx.xuzhixiang.top/ap/api/allproductlist.php?uid=67042",(res)=>{
  console.log(res)
})
  