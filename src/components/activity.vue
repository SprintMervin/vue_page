<template>
    <div class="showModal" v-show="showDelete">

    </div>
    <div class="confirm" v-show="showDelete">
        <h3 style="color:red">确认删除?</h3>
        <button @click="deleteActivity">确认</button>
        <button @click="cancel">取消</button>
    </div>
    <div style="height:auto;margin-left:50px" >
        <loading v-show="showLoading"></loading>

        <!--<table border='1px' style="overflow:scroll">-->
            <!--<tr>-->
                <!--<th>id</th>-->
                <!--<th>cover_image</th>-->
                <!--<th>title</th>-->
                <!--<th>description</th>-->
                <!--<th>edit</th>-->
            <!--</tr>-->


            <!--<tr v-for="item in items">-->
                <!--<td style="width:100px">{{item.id}}</td>-->
                <!--<td><img v-bind:src="item.cover_image" style="width:150px;height:100px"></td>-->
                <!--<td style="width:200px">{{item.title}}</td>-->
                <!--<td style="width:200px">{{item.description}}</td>-->
                <!--<td style="width:200px">-->
                    <!--<a v-link="{name:'editActivity',query:{id:item.id,title:item.title,cover_image:item.cover_image,description:item.description}}" >编辑</a><br>-->
                    <!--<a @click="deleteActivity" id={{item.id}}>删除</a>-->
                <!--</td>-->
            <!--</tr>-->


        <!--</table>-->

        <div class="activity_tabs" v-for="item in items">
            <div style="float:left">
            <img v-bind:src="item.cover_image" style="width:150px;height:120px">
            </div>
            <div style="float:left;margin-left:100px">
            <h4>标题:</h4><span>{{item.title}}</span><br>
            <h4>描述:</h4><span>{{item.description}}</span>
            </div>
            <div style="float:right;margin-right:50px;margin-top:50px">
            <a v-link="{name:'editActivity',query:{id:item.id,title:item.title,cover_image:item.cover_image,description:item.description}}" >编辑</a><br>
            <a @click="showDeleteMenu" id={{item.id}}>删除</a>
            </div>
        </div>


    </div>
</template>
<style>
    .activity_tabs{
        background-color: #eee;
        width:100%;
        height: 150px;
        margin-top: 5px;
        margin-bottom: 5px;
        border-bottom: 3px solid #333;
    }
    .showModal{
        height: 100%;
        width: 100%;
        background: black;
        margin-left:50px;
        opacity: 0.2;
        position: fixed;
        text-align: center;
        padding-top: 200px;


    }
    .confirm{
        height: 200px;
        width: 200px;
        margin-left: 400px;
        padding-top: 200px;
        position: absolute;
        z-index: 999;

    }
</style>
<script>
    import loading from './loading.vue'
    export default{
        data(){
            return{
                msg:'hello vue',
                items:[

                ],
                showLoading: true,
                showDelete:false,
                activity_id:''


            }
        },
        ready(){
            this.$http.get('/api/activity/list/').then(function (response) {
                    var data = JSON.parse(response.data).activities;
                    this.items = data;
                console.log(response.status);
            }).then(
                    function () {
                        this.showLoading=false;

                    }
            )

        },
        methods:{
            showDeleteMenu:function () {
               this.activity_id= event.currentTarget.id;
                this.showDelete=true

            },
            cancel:function () {
                this.showDelete=false

            },
            deleteActivity:function () {
                this.$http.get('/api/activity/'+this.activity_id+'/delete').then(function (response) {
                    console.log("删除成功")
                    location.reload();

                })

            }
        },

        components:{
            'loading':loading
        },


    }
</script>
