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
                        <span class="iconfont icon-avatar"></span>
                    </div>
                </div>
            </div>
            <div class="medium">
                <component :is="mediumComName" @func="rightCom"></component>
                <!-- <div class="label">
                    <span>Chats</span>
                    <div>
                        <span v-show="addContactStatus" class="iconfont icon-tianjiayonghu" @click.stop="loadAddContactCom"></span>
                    </div>
                </div>
                <div class="search">
                    <input type="text">
                </div>
                <div class="list">
                    <div v-for="item in contacts" :key="item.name">
                        <div @click.stop="loadChatCom">
                            <div class="contactAvator">
                                <img :src="item.avator">
                            </div>
                            <div class="contactInfo">
                                <div class="contactName">
                                    <span>{{item.nickname}}</span>
                                </div>
                                <div class="contactContent">
                                    <span>{{item.content}}</span>
                                </div>
                            </div>
                            <div class="contactTime">
                                <span>{{item.time}}</span>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="right">
                <transition>
                    <component :is="rightComName"></component>
                </transition>
                
                <!-- <component :is="flow"></component> -->
                <!-- <div class="label">
                    <span>Tom Smith</span>
                </div>
                <div class="content">
                    <div class="you">
                         <div class="time">
                            <span>10:30</span>
                        </div>
                        <div class="bubble">
                            <img src="@/assets/logo.png" alt="">
                            <div>How R U ?</div>
                        </div>
                    </div>

                    <div class="me">
                        <div class="time">
                            <span>10:30</span>
                        </div>
                        <div class="bubble">
                            <div>I'm Fine,thank you</div>
                            <img src="@/assets/logo.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="typing">
                    <textarea placeholder="tying a message ..."></textarea>
                </div> -->

            </div>
        </div>
        
    </div>
</template>


<script>
import "@/assets/fonts/iconfont.css"


// import right
import SettingsDetails from '@/components/right/SettingsDetails'
import AddContact from '@/components/right/AddContact'
import Flow from '@/components/right/Flow'

// import medium
import Sessions from '@/components/medium/Sessions'
import Contacts from '@/components/medium/Contacts'
import Settings from '@/components/medium/Settings'


export default {
    name:"Chat",
    data(){
        return {
            duihua:false,
            yonghu:true,
            bangzhu:true,
            shezhi:true,
            mediumComName:"Sessions",
            rightComName: 'Flow'
         
        }
    },
    methods:{
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
        rightCom(rightCom){
            this.rightComName = rightCom;
        }
       
    },
    components:{
        //right
        Flow,
        AddContact,
        Settings,
        //medium
        Sessions,
        Contacts
    }
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
    border: 1px solid #333333;

}
.left{
    background-color: #333333;
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

.left > div > div{
    width: 100%;
    height: 60px;
    border-left: 1px solid #333333;
    text-align: center;
}


.left > div > div:hover{
    border-left: 1px solid white;

}
/* .medium .label{
    width: 100%;
    height: 5%;
    min-height: 35px;
    text-align: center;
    line-height: 35px;
    box-shadow: 0px 10px 10px -5px #1d1d1d ;
    position: relative;
}



.medium .label div{
    height: 100%;
    float: right;
    line-height: 35px;
    position: absolute;
    right: 10px;
    top: -11px;
}

.medium .label div span{
    font-size: 20px;
}

.medium .search{
    height: 10%;
    min-height: 70px;

}

.medium .search input{
    margin-top: 10%;
    width: 85%;
    height: 50%;
    background-color: #333;
    border: 0;
    border-radius: 5px;
    padding-left: 10px;
    color: white;

}


.list{
  width: 100%;
  height: 87%;
  overflow-y:auto;
  border: 0px;
}

.list > div{
    background-color: #444;
    width: 100%;
    height: 45px;
    margin-top: 4px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
}

.list > div > div{
    width: 85%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
}

.contactAvator{
    width: 35px;
    height: 35px;
}

.contactAvator > img{
    width: 35px;
    height: 35px;
    border-radius: 35px;
}

.contactInfo{
    margin-left: 5%;
    height: 45px;
    width: 60%;
    font-size: 13px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}

.contactTime{
    height: 35px;
    font-size: 12px;
} */

/* .right .label{
    border-bottom: 1px solid #b2b2b2;
    line-height: 35px;
    text-align: center;
}

.right .label span{
    height: 35px;
}

.right .content{
    height: 85%;
    overflow-y:auto;
}

.typing{
    height: 10%;
    min-height: 70px; 
    max-height: 70px;
    width: 100%;
    border-top: 1px solid #b2b2b2;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
}

.typing textarea{
    width: 100%;
    border: 0;
    height: 100%;
    resize: none;
    padding: 15px;
}


.content > div{
    padding: 15px 10px;
  
}

.content .me .bubble{
    display: flex; 
    display: -webkit-flex;
    flex-direction: row;
    justify-content: flex-end;
} 

.content .me .bubble div{
    max-width: 60%;
    background-color: #fff;
    word-wrap:break-word;  
    word-break:break-all;  
    border-radius: 20px 0 20px 20px;
    background-color: #25B6D1;
    padding: 5px 10px;
    color: white;
}

.content div .time{
    text-align: center;
    color: #b2b2b2;
    font-size: 14px;
}

.content .you .bubble{
    width: 100%;
    padding: 5px 0;
    display: -webkit-flex;
    justify-content: flex-start;
}

.content .you >.bubble div{
    max-width: 60%;
    background-color: #fff;
    word-wrap:break-word;  
    word-break:break-all;
    border-radius: 0 20px 20px 20px;
    background-color: #2DCB70;
    padding: 5px 10px;
    color: white;
}

.content img{
    width: 35px;
    height: 35px;
    border-radius: 35px;
} */


</style>