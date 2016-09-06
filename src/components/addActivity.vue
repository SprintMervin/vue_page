<template>
    <div>
        <span>标题</span>
        <br>
        <input type="text" v-model="title" placeholder="edit me"><br>
        <span>图片URL</span>
        <br>
        <input type="text" v-model="cover_image" placeholder="edit me"><br>
        <span>描述</span>
        <br>
        <input type="text" v-model="description" placeholder="edit me">
        <br>
        <button @click="addActivity">保存</button>
        <!--<p>{{msg}}</p>-->
        <loading v-show="showLoading"></loading>
    </div>
</template>
<style>
</style>
<script>
    import loading from './loading.vue'

    export default{
        data(){
            return{
                msg:'操作结果',
                showLoading:false,


        }
        },
        methods:{
            addActivity:function () {
                this.showLoading=true;

                this.$http.post('/api/activity/create',{"title":this.title,"cover_image":this.cover_image,"description":this.description}).then(function (response) {

                    var data = response.data;
                    this.msg = data;
//                    router.go({name:'addActivity'}
                    location.reload();

                },function (response) {

                    var data = response.data;
                    this.msg = data;
                }).then(function () {
                    this.showLoading=false;
                })
            }
        },
        components:{
            'loading':loading

        }
    }
</script>
