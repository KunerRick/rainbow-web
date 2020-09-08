<template>
    <div class="container">
        <div class="main">
            <div class="left">
                <div>
                    <div @click.stop="loadChats">
                        <span :class="['iconfont',duihua?'icon-duihuaxinxi':'icon-duihuaxinxitianchong']"></span>
                    </div>
                    <div @click.stop="loadContacts">
                        <span :class="['iconfont', yonghu?'icon-yonghu':'icon-yonghutianchong']" ></span>
                    </div>
                </div>
                <div>
                    <div @click.stop="loadBangzhu">
                        <span :class="['iconfont', bangzhu?'icon-bangzhu':'icon-bangzhutianchong']"></span>
                    </div>
                    <div @click.stop="loadShezhi" >
                        <span :class="['iconfont', shezhi?'icon-shezhi':'icon-shezhitianchong']"></span>
                    </div>
                    <div>
                        <img class="icon-avatar" :src="userProperty.avatar" alt="" />
                    </div>
                </div>
            </div>
            <div class="medium">
                <component :is="mediumComName" @func="rightCom"></component>
            </div>
            <div class="right">
                <transition name="fade"
                            enter-active-class="fadeIn"
                            leave-active-class="fadeOut" 
                            mode="out-in">
                    <component :is="rightComName" 
                                style="animation-duration: .2s" 
                                @send="doMessage"
                                v-bind='contact1'></component>
                </transition>
            </div>
        </div>
        
    </div>
</template>


<script>
import "@/assets/fonts/iconfont.css"

// import right
import AddContact from '@/components/right/AddContact'
import Flow from '@/components/right/Flow'
import Me from '@/components/right/Me'
import Contact from '@/components/right/Contact'

// import medium
import Sessions from '@/components/medium/Sessions'
import Contacts from '@/components/medium/Contacts'
import Settings from '@/components/medium/Settings'

// import WS from '../util/ws.js'

import SockJS from  'sockjs-client';
import  Stomp from 'stompjs';

import HttpApi from '../util/http'


export default {
    name:"Chat",
    data(){
        return {
            duihua:false,
            yonghu:true,
            bangzhu:true,
            shezhi:true,
            mediumComName:"Sessions",
            rightComName: null,

            stompClient:null,
            timer:'',
            userProperty:null,

            cid:null,

        }
    },
    props:{
        contact1:Object
    },
    methods:{
        initWebSocket() {
            this.connection();
            // let that= this;
            // 断开重连机制,尝试发送消息,捕获异常发生时重连
            // this.timer = setInterval(() => {
            //     try {
            //         that.stompClient.send("test");
            //     } catch (err) {
            //         console.log("断线了: " + err);
            //         that.connection();
            //     }
            // }, 5000);
        },
        connection() {

             let token = this.$store.getters.getToken;

            // 建立连接对象
            let socket = new SockJS('/ws/rainbow-ws?sid='+token+"&cid="+this.cid);
            // 获取STOMP子协议的客户端对象
            this.stompClient = Stomp.over(socket);
            // 定义客户端的认证信息,按需求配置
            // this.stompClient.debug = null;
            // 向服务器发起websocket连接
            this.stompClient.connect({server:"Apache/1.3.9"},() => {
                let userId = this.$store.getters.getUser.userId;
                let sub = '/user/'+userId+'/message';
                this.stompClient.subscribe(sub, (msg) => { // 订阅服务端提供的某个topic
                    this.$store.commit('setSession',JSON.parse(msg.body));
                  
                    
                });

              
            }, (err) => {
                // 连接发生错误时的处理函数
                console.log('失败');
                console.log(err);
            });
            console.log(this.stompClient);
        },    //连接 后台
        disconnect() {
            if (this.stompClient) {
                this.stompClient.disconnect();
            }
        },  // 断开连接

        doMessage(msg){
            console.log("send message:"+ msg);
            console.log(this.stompClient);
            this.stompClient.send("/app/message",
            // headers,
            {}, 

            JSON.stringify(msg)
            );
        },
        beforeDestroy: function () {
            // 页面离开时断开连接,清除定时器
            this.disconnect();
        // clearInterval(this.timer);
        },
       
        loadChats(){
            this.duihua = false;
            this.yonghu = this.bangzhu = this.shezhi = true; 
            this.mediumComName = Sessions;
            
        },
        loadContacts(){
            this.yonghu = false;
            this.duihua = this.bangzhu = this.shezhi = true;
            this.addContactStatus = true;
            this.mediumComName = Contacts;
        },
        loadBangzhu(){
            this.bangzhu = false;
            this.yonghu = this.duihua = this.shezhi = true; 
        },
        loadShezhi(){
            this.shezhi = false;
            this.yonghu = this.bangzhu = this.duihua = true; 
            this.mediumComName = Settings;
        },
        rightCom(rightCom,contact){
            console.log(contact);
            this.contact1 = "123";
            this.rightComName = rightCom;
            
        }
    },
    created(){
        //get user from session storage
        let userJson = sessionStorage.getItem("user");
        this.$store.commit("setUser",JSON.parse(userJson));

        //get user property from session storage
        let userPropertyJson = sessionStorage.getItem("userProperty");
        let userProperty = JSON.parse(userPropertyJson);
        this.$store.commit("setUserProperty",userProperty);

            //local storage
        let token = sessionStorage.getItem("token");
        this.$store.commit("setToken",token);
        HttpApi.defaults.headers.common['Authorization'] = "berarer " + token;

        //cid
        this.cid = localStorage.getItem("cid")

        this.userProperty = userProperty;
        
        
    },
    mounted(){
        this.initWebSocket();
    },
    
    components:{
        //right
        Flow,
        AddContact,
        Settings,
        Me,
        Contact,
        
        //medium
        Sessions,
        Contacts
    },
   
}

</script>


<style scoped>

.container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    /* box-sizing: content-box; */
   
}

.main{
    width: 80%;
    max-width: 1000px;
    min-width: 800px;
    height: 80%;
    display: flex;
    border: 1px solid #333;

}
.left{
    background-color: #333;
    width: 80px;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.medium{
    background-color: #2A2D2E;
    width: 280px;
    height: 100%;
    min-height: 100%;
    text-align: center;
}
.right{
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: #F0F1F5;
    color: black;
    position: relative;
}

 .iconfont{
    color: white;
    font-size: 32px;
    line-height: 60px;
}

.icon-avatar{
    width: 32px;
    height: 32px;
    border-radius: 32px;
    margin-top: 14px;
}

.left > div > div{
    width: 100%;
    height: 60px;
    border-left: 1px solid #333333;
    text-align: center;
}


.left > div > div:hover{
    border-left: 1px solid white;
    cursor: pointer;

}

</style>