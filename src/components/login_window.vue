<template>
    <div class="login_bg">
        <div  style="background:#333;color:#fff;height:50px;font-size:20px;line-height:50px">好教育后台登录</div>
            <div class="login_common">
            <span>Username</span><br>
            <input class="login_input" v-model='username' type="text">
            </div>
            <div class="login_common">
            <span>Password</span><br>
            <input class="login_input" v-model='password' type="password">
            </div>
            <button @click="login" class="login_common"  style="margin-left:160px">log in</button>
            <p>{{msg}}</p>
    </div>
</template>
<style>
    .login_bg{
        margin-top:10%;
        margin-left: 30%;
        width: 400px;
        height: 300px;
        background-color: #cccccc;
    }
    .login_input{
        width: 75%;
        height: 30px;
    }
    .login_common{
        margin-top: 20px;
        margin-left: 60px;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:''
            }
        },
        methods:{
            login:function () {
                this.$http.post('/api/login/',{"username":this.username,"password":this.password}).then(function (response) {
                    var data = (response.data);
                    this.msg = '登陆成功';
                    router.go({name:'content'})
                },function (response) {
                    this.msg='登陆错误';

                })
            }
        }

    }
</script>
