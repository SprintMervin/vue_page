<template>
    <div style="height:600px;overflow:scroll;margin-left:50px" >
        <loading v-show="showLoading"></loading>

        <table border='1px' style="overflow:scroll">
            <tr>
                <th>id</th>
                <th>cover_image</th>
                <th>title</th>
                <th>description</th>
                <th>edit</th>
            </tr>


            <tr v-for="item in items">
                <td style="width:100px">{{item.id}}</td>
                <td><img v-bind:src="item.cover_image" style="width:150px;height:100px"></td>
                <td style="width:200px">{{item.title}}</td>
                <td style="width:200px">{{item.description}}</td>
                <td style="width:200px">
                    <a v-link="{name:'editActivity'}">编辑</a><br>
                    <a>删除</a>
                </td>
            </tr>


        </table>

        <!--<div class="activity_tabs" v-for="item in items">-->
                <!---->
        <!--</div>-->
    </div>
</template>
<style>
    .activity_tabs{
        background-color: #eee;
        width:700px;
        height: 150px;
        margin-top: 5px;
        margin-bottom: 5px;
        border-bottom: 3px solid #333;
    }
</style>
<script>
    import loading from './loading.vue'
    import Vue from 'vue'
    export default{
        data(){
            return{
                msg:'hello vue',
                items:[

                ],
                showLoading: false

            }
        },
        ready(){
            this.$http.get('/api/activity/list/').then(function (response) {
                if(response.status==200){
                    this.showLoading=true;
                }
                else {
                    this.showLoading=false;
                    var data = JSON.parse(response.data).activities;
                    this.items = data;
                console.log(response.status);
                }
            })

        },
        components:{
            'loading':loading
        },


    }
</script>
