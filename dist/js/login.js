"use strict";$(function(){$("#messageLogin").click(function(){var n=$("#spanMessage").text();"短信验证码登录"==n?($("#divInp").html('\n        <div class="div-input">\n        <svg class=\'icon ren\' aria-hidden=\'true\'>\n            <use xlink:href=\'#icon-ren\'></use>\n            </svg>\n        <input type="text" placeholder="手机号码" maxlength="11">\n    </div>\n   <div class="div-input">\n    <svg class=\'icon suo\' aria-hidden=\'true\'>\n        <use xlink:href=\'#icon-suo\'></use>\n        </svg>\n    <input type="text" placeholder="手机验证码">\n    <a href="#" class="inp-btn" id="inpBtn">获取验证码</a>\n   </div>'),n=$("#spanMessage").text("账号密码登录")):"账号密码登录"==n&&($("#divInp").html("\n   <div class=\"div-input\">\n   <svg class='icon ren' aria-hidden='true'>\n        <use xlink:href='#icon-ren'></use>\n    </svg>\n    <input type=\"text\" placeholder=\"用户名/手机/邮箱\">\n    </div>\n    <div class=\"div-input\">\n        <svg class='icon suo' aria-hidden='true'>\n            <use xlink:href='#icon-suo'></use>\n        </svg>\n    <input type=\"password\" placeholder=\"密码\">\n    </div>"),n=$("#spanMessage").text("短信验证码登录")),$("#inpBtn").click(function(){var n=60;console.log(1);var e=setInterval(function(){0==n?($("#inpBtn").text("重新获取"),n=60,clearTimeout(e)):($("#inpBtn").text(n+"s后重新获取"),n--)},1e3)})})});