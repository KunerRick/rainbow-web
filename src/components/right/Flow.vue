<template>
    <div>
        <div class="label">
            <span>{{receiver.remark}}</span>
        </div>
        <div class="content" ref="msgWarp">
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

             <div :class="item.sender === receiver.userId?'you':'me'" v-for="(item,index) in flow" :key="index">
                <div class="time">
                    <span>{{item.date | format}}</span>
                </div>
                <div class="bubble" v-if="item.sender == receiver.userId">
                     <img v-bind:src="receiver.avatar" alt="">
                    <div>{{item.content}}</div>
                </div>
                <div class="bubble" v-else>
                    <div>{{item.content}}</div>
                    <img :src="userProperty.avatar" alt="">
                </div>
            </div>

        </div>
        <div class="typing">
            <textarea placeholder="enter to send" v-model="msg" @keydown.enter="send2" @keyup.enter="send"></textarea>
        </div>
    </div>
</template>

<script>

export default {
    name:"Flow",
    data(){
        return {
            msg : null,
            user: null,
            userProperty:null,
            // flow:[
            //     {
            //         "id":"5f54dfed5e0a838c0b823ca7",
            //         "msgType":1,
            //         "content":"123",
            //         "sender":"5f5364955e0a5556c440ecfd",
            //         "receiver":"5f5364955e423c440ecfd",
            //         "status":0,
            //         "date":1599397869182
            //     }
            // ],
            flow:this.$store.getters.getSession,
            receiver:null,
        }
    },
    watch:{
      flow:function(){
          this.$nextTick(function(){
            //   let content = document.getElementById("content");
              this.$refs.msgWarp.scrollTo(0,this.$refs.msgWarp.scrollHeight);
          });
       }
    },
    methods:{
        send2(event){
            event.preventDefault();

        },
        send(){
            let userId = this.user.userId;
            let message = {
                id:null,
                msgType:1,
                content: this.msg,
                sender: userId,
                receiver:this.receiver.userId,
                status:0,
                date:new Date().getTime()
            };
            this.$emit("send",message);
            this.msg = null;
        },
        
    },
    created(){
       this.receiver = this.$store.getters.getReceivert;
       this.user = this.$store.getters.getUser;
       this.userProperty = this.$store.getters.getUserPropery;

    },
    mounted(){
        this.$refs.msgWarp.scrollTo(0,this.$refs.msgWarp.scrollHeight);
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
    border-top: 1px solid #b2b2b2;
    bottom: 0px;
}

.typing textarea{
    display: block;
    width: 100%;
    border: 0;
    height: 100%;
    resize: none;
    padding: 5px;
    
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

.content .me .bubble div{
    max-width: 60%;
    margin: 5px 0 0 5px;
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
</style>