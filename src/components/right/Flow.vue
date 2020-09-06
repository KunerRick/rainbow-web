<template>
    <div>
        <div class="label">
            <span>{{receiver.remark}}</span>
        </div>
        <div class="content">
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

             <div :class="item.sender === receiver.userId?'you':'me'" v-for="item in flow" :key="item.id">
                <div class="time">
                    <span>{{item.date}}</span>
                </div>
                <div class="bubble" v-if="item.sender == receiver.userId">
                     <img v-bind:src="receiver.avatar" alt="">
                    <div>{{item.content}}</div>
                    <div>{{item.receiver == receiver.userId}}</div>
                </div>
                <div class="bubble" v-else>
                    <div>{{item.content}}</div>
                    <img :src="curUserProperty.avatar" alt="">
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
            currentUser: null,
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
            flow:this.$store.getters.getSession
        }
    },
    props: ['receiver','curUserProperty'],
    methods:{
        send2(event){
            event.preventDefault();

        },
        send(){
           
            let userId = this.currentUser.userId;
            let message = {
                id:null,
                msgType:1,
                content: this.msg,
                sender: userId,
                receiver:this.receiver.userId,
                status:0,
                date:new Date().getTime()
            }
            this.$emit("send",message);
            this.msg = null;
        }
    },
    created(){
        let sessionRainbow = sessionStorage.getItem("rainbow");
        sessionRainbow = JSON.parse(sessionRainbow);
        this.currentUser = JSON.parse(sessionRainbow.user);
    }
}
</script>

<style scoped>
.right .label{
    /* height: 5%; */
    /* min-height: 35px; */
    /* max-height: 35px; */
    border-bottom: 1px solid #b2b2b2;
    line-height: 35px;
    text-align: center;
    right: 0;
}

.right .label span{
    height: 35px;
}

.right .content{
    height: 100%;
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