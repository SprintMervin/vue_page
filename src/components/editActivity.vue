<template>
    <div>
        <span>标题</span>
        <br>
        <input type="text" v-model="title" placeholder={{id}}><br>
        <span>图片URL</span>
        <br>
        <input type="text" v-model="cover_image" placeholder={{cover_image}}><br>
        <span>描述</span>
        <br>
        <input type="text" v-model="description" placeholder={{description}}>
        <br>
        <button @click="saveActivity">保存</button>
        <p style="color:green">{{msg}}</p>
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
                msg:'',
                id:'',
                title:'',
                description:'',
                cover_image:'',
                showLoading:false

            }
        },
            methods: {
                saveActivity:function () {

                    this.showLoading=true;

                this.$http.post("/api/activity/"+this.id+"/save",{"title":this.title,"cover_image":this.cover_image,"description":this.description}).then(function (response) {
//                    var data = response.data;
                    this.msg = '保存成功';
//                    router.go({name:'addActivity'}
//                    location.reload();

                },function (response) {
//                    var data = response.data;
                    this.msg = '保存失败';
                }).then(function () {
                    this.showLoading=false;

                })

            }
            },

        components:{
                'loading':loading
        },
        route:{

            data({to:{query:{id,description,title,cover_image}}}){
                this.id=id;
                this.title=title;
                this.cover_image=cover_image;
                this.description=description
            }
        }
    }
</script>
