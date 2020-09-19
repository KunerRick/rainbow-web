<template>
    <div>
        <div class="label">
            <span>{{receiver.remark}}</span>
        </div>
        <div class="content" ref="msgWarp" @click="cancelEmojiPicker">
            <!-- <div class="you">
                    <div class="time">
                    <span>10:30</span>
                </div>
                <div class="bubble">
                    <img v-bind:src="receiver.avatar" alt="">
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
            </div> -->

             <div :class="item.sender === receiver.userId?'you':'me'" v-for="(item,index) in $store.getters.getSession" :key="index">
                <div class="time">
                    <span>{{item.date | format}}</span>
                </div>
                <div class="bubble" v-if="item.sender == receiver.userId">
                     <img v-bind:src="receiver.avatar" alt="">
                    <div>{{item.content.txt}}</div>
                </div>
                <div class="bubble" v-else>
                    <div>{{item.content.txt}}</div>
                    <img :src="userProperty.avatar" alt="">
                </div>
            </div>

        </div>
        <div class="typing" >


            <Picker set="emojione" v-if='emojiDisplay'
             @select="addEmoji" 
             :title="title" emoji="point_up"
             :style="{ position: 'absolute', bottom: '70px', left: '0px' }"
             :i18n="i18n"
             :native="true" 
             :sheetSize="20"
             :include="include"/>
             <div class="toolbar">
                 <input type="button" value="😀" @click="showEmojiPicker">
                 <input type="button" value="🖼️" @click="sendPic">
             </div>
            
            <textarea ref="inputMsg" placeholder="enter to send" v-model="msg" @keydown.enter="send2" @keyup.enter="send"></textarea>

        </div>
    </div>
</template>

<script>
import HttpApi  from '../../util/http'

import { Picker } from 'emoji-mart-vue'

export default {
    name:"Flow",
    data(){
        return {
            msg : '',
            // user: null,
            userProperty:null,
            receiver:null,
            typing:null,
            // flow:this.$store.getters.getSession,
            emojiDisplay:false,
            include:['people','nature','foods','symbols'],
            i18n:{ search: '搜索',
                    notfound: '没找到emoji',
                    categories: {
                    search: '搜索结果',
                    recent: '常用',
                    people: '笑脸',
                    nature: '自然',
                    foods: '食物',
                    activity: '活动',
                    places: '地点',
                    objects: '对象',
                    symbols: '符号',
                    flags: '旗子',
                    // custom: 'Custom',
                    } },
            title:"选择emoji"
        }
    },
    components:{
        Picker
    },
    watch:{
      '$store.getters.getSession':function(){
          this.$nextTick(function(){
            this.$refs.msgWarp.scrollTo(0,this.$refs.msgWarp.scrollHeight);
          });
       }
    },
 
    methods:{
        cancelEmojiPicker(){
            this.emojiDisplay = false;
        },
        sendPic(){

        },
        showEmojiPicker(){
          this.emojiDisplay = !this.emojiDisplay;  
        },
        addEmoji(emoji){
            this.msg = this.msg + emoji.native;
            this.emojiDisplay = false;
            this.$refs.inputMsg.focus();
        },
   
        send2(event){
            event.preventDefault();

        },
        send(){

            let message = {
                msgType:1,
                content: {
                    txt: this.msg
                },
                receiver:this.receiver.userId,
            };
            HttpApi.put("/message/v1/sending",message)
            .then(resp => {
                if(resp.code == 200){
                    this.$store.commit('addMessage',resp.data);
                    this.$db.add(resp.data);
                }
               
            }).catch(err => {
                console.log(err);
            })
            this.msg = '';

        },
        loadMessage(){
            //TODO聊天消息应该加载双方且进行排序
            this.$db.read(this.$store.getters.getUser.userId,
                            this.$store.getters.getReceivert.userId,
                            docs =>{
                                this.$store.commit("setSession",docs);
                                
                                
            });
        },
      
    },
    created(){
        this.receiver = this.$store.getters.getReceivert;
        this.user = this.$store.getters.getUser;
        this.userProperty = this.$store.getters.getUserPropery;

        this.loadMessage();
    },
    mounted(){
        this.$refs.msgWarp.scrollTo(0,this.$refs.msgWarp.scrollHeight);
         this.$refs.inputMsg.focus();
    },
    filters:{
        format:function(time){
            time = new Date(time);
            let fmt = '';
            if(Math.abs(new Date().getMinutes() - time.getMinutes()) <=5 ){
                return;
            }
            else if(time.getDate() == new Date().getDate()){
                fmt = "HH:mm";
            }else{
                fmt = "MM-dd HH:mm";
            }
            var o = {
                        "M+": time.getMonth() + 1, // 月份
                        "d+": time.getDate(), // 日
                        "H+": time.getHours(), // 小时
                        "m+": time.getMinutes(), // 分
                        "s+": time.getSeconds(), // 秒
                        "q+": Math.floor((time.getMonth() + 3) / 3), // 季度
                        "S": time.getMilliseconds() // 毫秒
                    };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    }

}
</script>

<style scoped>
.right > div{
    height: 100%;
    overflow: hidden;
}

.right .label{
    height: 35px;
    border-bottom: 1px solid #b2b2b2;
    line-height: 35px;
    text-align: center;
}

.right .label span{
    height: 35px;
}

.right .content{
    height: 85%;
    overflow-y:scroll;
}

.typing{
    height: 10%;
    min-height: 70px; 
    max-height: 70px;
    width: 100%;
    /* border-top: 1px solid #b2b2b2; */
    position: relative;
    bottom: 0px;
}

.typing textarea{
    display: block;
    width: 100%;
    border: 0;
    height: 100%;
    resize: none;
    padding: 5px;
    font-size: 16px;
    outline: none;
}

.content > div{
    padding: 5px 10px;
  
}

.content .me .bubble{
    display: flex; 
    display: -webkit-flex;
    flex-direction: row;
    justify-content: flex-end;
} 

.content .me > .bubble div{
    max-width: 60%;
    margin: 5px 5px 0 0;
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
    margin: 5px 0 0 5px;
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

.toolbar {
    border-top: 1px solid #b2b2b2;
    border-bottom: 1px solid #b2b2b2;
    width: 100%;
    height: 30px;
}

.toolbar input{
    height: 30px;
    background-color: rgba(0, 0, 0, 0);
    width: 30px;
    margin-left: 10px;
    font-size: 20px;
    border: 0px;
    outline: none;
}

.toolbar input:hover{
     transform: scale(1.1);
}
</style>