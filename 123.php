<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Register</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
<style type="text/css">
  body{margin:0;padding: 0;}
  .login{position:relative;margin:100px auto;padding:50px 20px;width: 350px;height: 200px;border:1px solid #333;}
  .login legend{font-weight: bold;color: green;text-align: center;}
  .login label{display:inline-block;width:130px;text-align: right;}
  .btn{height: 30px;width:100px;padding: 5px;border:0;background-color: #00dddd;font-weight: bold;cursor: pointer;float: right;}
  input{height: 20px;width: 170px;}
  .borderRed{border: 2px solid red;}
  img{display: none;}
</style>
</head>
<body>
  <div class="login">
    <form name="form" method="post" action="register.php" onsubmit="return check()">
      <legend>【Register】</legend>
      <p><label for="name">UserName: </label>
      <input type="text" id="name" >
      <img src="./img/gou.png" width="20px" height="20px"></p>
      <p><label for="password">Password: </label>
      <input type="password" id="password" >
      <img src="./img/gantan.png" width="20px" height="20px"></p>
      <p><label for="R_password">Password Again: </label>
      <input type="password" id="R_password" >
      <img src="./img/gou.png" width="20px" height="20px"></p>
      <p><label for="email">Email: </label>
      <input type="text" id="email" >
      <img src="./img/gou.png" width="20px" height="20px"></p>
      <p><input type="submit" value="Register" class="btn"></p>
    </form>
  </div>
  <script type="text/javascript">
  function hasClass(obj,cls){  // 判断obj是否有此class
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
  function addClass(obj,cls){ //给 obj添加class
    if(!this.hasClass(obj,cls)){
      obj.className += " "+cls;
    }
  }
  function removeClass(obj,cls){ //移除obj对应的class
    if(hasClass(obj,cls)){
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      obj.className = obj.className.replace(reg," ");
    }
  }


  function checkName(name){  //验证name
    if(name != ""){ //不为空则正确，当然也可以ajax异步获取服务器判断用户名不重复则正确
      removeClass(ele.name,"borderRed"); //移除class
      document.images[0].setAttribute("src","./img/gou.png"); //对应图标
      document.images[0].style.display = "inline"; //显示
      return true;
    }else{ //name不符合
      addClass(ele.name,"borderRed"); //添加class
      document.images[0].setAttribute("src","./img/gantan.png"); //对应图标
      document.images[0].style.display = "inline"; //显示
      return false;
    }
  }
  function checkPassw(passw1,passw2){ //验证密码
    if(passw1 == "" || passw2 == "" || passw1 !== passw2){ //两次密码输入不为空且不等 不符合
      addClass(ele.password,"borderRed");
      addClass(ele.R_password,"borderRed");
      document.images[1].setAttribute("src","./img/gantan.png");
      document.images[1].style.display = "inline";
      document.images[2].setAttribute("src","./img/gantan.png");
      document.images[2].style.display = "inline";
      return false;
    }else{  //密码输入正确
      removeClass(ele.password,"borderRed");
      removeClass(ele.R_password,"borderRed");
      document.images[1].setAttribute("src","./img/gou.png");
      document.images[1].style.display = "inline";
      document.images[2].setAttribute("src","./img/gou.png");
      document.images[2].style.display = "inline";
      return true;
    }
  }
  function checkEmail(email){  //验证邮箱
    var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if(!pattern.test(email)){ //email格式不正确
      addClass(ele.email,"borderRed");
      document.images[3].setAttribute("src","./img/gantan.png");
      document.images[3].style.display = "inline";
      ele.email.select();
      return false;
    }else{ //格式正确
      removeClass(ele.email,"borderRed");
      document.images[3].setAttribute("src","./img/gou.png");
      document.images[3].style.display = "inline";
      return true;
    }
  }


  var ele = { //存放各个input字段obj
      name: document.getElementById("name"),
      password: document.getElementById("password"),
      R_password: document.getElementById("R_password"),
      email: document.getElementById("email")
    };
    ele.name.onblur = function(){ //name失去焦点则检测
      checkName(ele.name.value);
    }
    ele.password.onblur = function(){ //password失去焦点则检测
      checkPassw(ele.password.value,ele.R_password.value);
    }
    ele.R_password.onblur = function(){ //R_password失去焦点则检测
      checkPassw(ele.password.value,ele.R_password.value);
    }
    ele.email.onblur = function(){ //email失去焦点则检测
      checkEmail(ele.email.value);
    }

  function check(){  //表单提交则验证开始
    var ok = false;
    var nameOk = false;
    var emailOk = false;
    var passwOk = false;

    if(checkName(ele.name.value)){ nameOk = true; }  //验证name
    if(checkPassw(ele.password.value,ele.R_password.value)){ passwOk = true; } //验证password
    if(checkEmail(ele.email.value)){ emailOk = true; }  //验证email

    if(nameOk && passwOk && emailOk){
      alert("Tip: Register Success ..");  //注册成功
      //return true;
    }
    return false;  //有误，注册失败
  }
  </script>
</body>
</html>
