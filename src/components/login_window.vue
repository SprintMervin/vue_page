<template>
    <div class="login_bg">
        <span>登录</span>
        <div>
            <span>账号</span><input v-model='username' type="text"><br>
            <span>密码</span><input v-model='password' type="password"><br>
            <button @click="login">登录</button>
            <p>{{msg}}</p>
        </div>
    </div>
</template>
<style>
    .login_bg{
        margin-left: 30%;
        width: 300px;
        height: 300px;
        background-color: #cccccc;
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
