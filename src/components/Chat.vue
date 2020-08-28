<template>
    <div class="container">
        <div class="main">
            <div class="left">
                <div>
                    <div @mouseover="i('duihua')" @mouseout="o('duihua')" >
                        <span :class="['iconfont',duihua?'icon-duihuaxinxi':'icon-duihuaxinxitianchong']"></span>
                    </div>
                    <div @mouseover="i('yonghu')" @mouseout="o('yonghu')">
                        <span :class="['iconfont', yonghu?'icon-yonghu':'icon-yonghutianchong']" ></span>
                    </div>
                </div>
                <div>
                    <div @mouseover="i('bangzhu')" @mouseout="o('bangzhu')">
                        <span :class="['iconfont', bangzhu?'icon-bangzhu':'icon-bangzhutianchong']"></span>
                    </div>
                    <div @mouseover="i('shezhi')" @mouseout="o('shezhi')">
                        <span :class="['iconfont', shezhi?'icon-shezhi':'icon-shezhitianchong']"></span>
                    </div>
                    <div>
                        <span class="iconfont icon-avatar"></span>
                    </div>
                </div>
            </div>
            <div class="medium">
                <div class="label">
                    <span>Chats</span>
                </div>
                <div class="search">
                    <input type="text">
                </div>
                <div class="list">
                    <div v-for="item in contacts" :key="item.name">
                        <div>
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
                </div>
            </div>
            <div class="right">
                <div class="label">
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
                            <div>I'm Fine,thank you fasdfasdfasdfasdfasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
                            <img src="@/assets/logo.png" alt="">
                        </div>
                        
                    </div>
                </div>

                <div class="typing">
                    <textarea placeholder="tying a message ..."></textarea>
                </div>

            </div>
        </div>
        
    </div>
</template>


<script>
import "@/assets/fonts/iconfont.css"
export default {
    name:"Chat",
    data(){
        return {
            duihua:true,
            yonghu:true,
            bangzhu:true,
            shezhi:true,
            contacts:[
                {
               
                    "avator": require("@/assets/logo.png"),
                    "nickname":"tom",
                    "content":"how r u?",
                    "time":"10:32"
                    
                }
            ]
        }
    },
    methods:{
        i(target){
              switch(target){
                case "duihua":
                    this.duihua =false;
                    break;
                case "yonghu":
                    this.yonghu =false;
                    break;
                case "shezhi":
                    this.shezhi =false;
                    break;
                case "bangzhu":
                    this.bangzhu =false;
                    break;
            }
        } ,
        o(target){
            switch(target){
                case "duihua":
                    this.duihua =true;
                    break;
                case "yonghu":
                    this.yonghu =true;
                    break;
                case "shezhi":
                    this.shezhi =true;
                    break;
                case "bangzhu":
                    this.bangzhu =true;
                    break;
            }
        }
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.medium{
    background-color: #2A2D2E;
    width: 280px;
    height: 100%;
    text-align: center;
}
.right{
    width: 100%;
    height: 100%;
    background-color: #F0F1F5;
    color: black;
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
.medium .label{
    width: 100%;
    height: 5%;
    min-height: 35px;
    text-align: center;
    line-height: 35px;
     box-shadow: 0px 10px 10px -5px #1d1d1d ;
}

.medium .search{
    height: 10%;
    /* background-color: skyblue; */
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
    /* background-color: yellow; */
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
    /* background-color: #fff; */
}

.contactAvator > img{
    width: 35px;
    height: 35px;
    /* background-color: red; */
    border-radius: 35px;
}

.contactInfo{
    margin-left: 5%;
    /* background-color: black; */
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
}

.right .label{
    height: 5%;
    min-height: 35px;
    /* box-shadow: 0px 10px 10px -5px #444 ; */
    border-bottom: 1px solid #b2b2b2;
    line-height: 35px;
    text-align: center;
}

.right .content{
    height: 85%;
    /* background-color: lightgreen; */
}

.typing{
    height: 10%;
    min-height: 70px;
    max-height: 70px;
    border-top: 1px solid #b2b2b2;
    overflow: hidden;
}

.typing textarea{
    width: 100%;
    border: 0;
    height: 100%;
    resize: none;
    padding: 10px;
}

.content > div{
    padding: 15px 10px;
    overflow-y:auto;
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
}


</style>