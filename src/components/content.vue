<template>
    <div class="content">
        <div class="side_left col-md-2">
                <ul class="nav nav-list">
                    <li class="nav-header">专题管理</li>
                    <li v-for='item in items'><a v-link="{name:item.router_name}">{{item.message}}</a></li>
                    <li class="nav-header">研修管理</li>
                    <li v-for='item in items'><a href="#">{{item.message}}</a></li>
                    <li class="nav-header">自主学习</li>
                    <li v-for='item in items'><a href="#">{{item.message}}</a></li>
                </ul>
        </div>

        <div class="side_right col-md-9" >
        <router-view></router-view>
        </div>
    </div>
</template>
<style>
    /*.content{*/
        /*width:100%;*/
        /*height: 600px;*/
        /*border:2px solid black ;*/
    /*}*/
/*.side_left{*/
    /*border: 2px solid black;*/
    /*width: 20%;*/
    /*height: 600px;*/

/*}*/
    .side_right{
        background-color: #fff;
        height: 600px;
    }
    .nav>li>a:focus {
        text-decoration: none;
        background-color: lightslategrey;
    }
</style>
<script>

    export default{
        methods:{
            show:function () {
                this.$http.get('/api/activity/2/list/').then(function (response) {
                    var data = JSON.parse(response.data).videos[0].id;
                    this.msg = data;
                })
            }
        },
//        ready(){
//
//
//        },
        data(){
            return {
                msg: '123',
                items: [
                    { message: '专题列表' ,router_name:'activity'},
                    { message: '添加专题' ,router_name:'addActivity'},
                ]
            }
        }
    }
</script>
