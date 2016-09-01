<template>
    <div class="content">
        <button @click="show">
            获取活动
        </button>
    </div>
    <p>{{msg}}</p>
</template>
<style>
   .content{
       width:100%;
       height: 500px;
       background-color: #ccc;
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
                msg: '123'
            }
        }
    }
</script>
