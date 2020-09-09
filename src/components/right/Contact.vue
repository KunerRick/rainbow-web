<template>
    <div>
        <div class="label">
            <span>好友信息</span>
        </div>
        <div class="info">
            <div class="avator">
                <img :src="contact.avatar" alt="">
            </div>
            <div class="infoDetails">
                <table>
                    <tr>
                        <td>昵称</td>
                        <td>{{contact.nickname}}</td>
                    </tr>

                    <tr>
                        <td>备注</td>
                        <td>{{contact.remark}}</td>
                    </tr>

                    <tr>
                        <td>age</td>
                        <td>{{contact.age}}</td>
                    </tr>
                    <tr>
                        <td>性别</td>
                        <td>{{contact.nickname}}</td>
                    </tr>

                     <tr>
                        <td>电话</td>
                        <td>{{contact.phone}}</td>
                    </tr>

                     <tr>
                        <td>邮箱</td>
                        <td>{{contact.email}}</td>
                    </tr>


                     <tr>
                        <td>签名</td>
                        <td>{{contact.signature}}</td>
                    </tr>

                </table>
                <input type="button" value="发送消息" @click.stop="sendTo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Contact",
    data(){
        return {
            contact: this.$store.getters.getContact,
        }
    },
    methods:{
        sendTo(){
            //set current receiver
            this.$store.commit("setReceiver",this.contact);
            //cache current user for session list
            let sessions = sessionStorage.getItem("sessions");
            if(sessions){
                sessions = JSON.parse(sessions);
                if(!sessions[this.contact.userId]){
                    sessions[this.contact.userId] = this.contact;
                    sessionStorage.setItem("sessions",JSON.stringify(sessions));
                }
            }else{
                sessions = {};
                sessions[this.contact.userId] = this.contact;
                sessionStorage.setItem("sessions",JSON.stringify(sessions))
            }
            
            this.$emit("func","Flow"); 

        }
    }
}
</script>

<style scoped>

.right .label{
    border-bottom: 1px solid #b2b2b2;
    line-height: 35px;
    text-align: center;
}

.right .label span{
    height: 35px;
}

.right .info{
    width: 80%;
    height: 50%;
    margin: 30px auto;
    display: flex;
    display: -webkit-flex;
}

.avator{
    /* background-color: lightgreen; */
    width: 60px;
    height: 60px;
    border-radius: 60px;
    position: relative;
    overflow: hidden;
} 


.info .avator img{
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 1px solid #b2b2b2;
}
.info .infoDetails{
    margin: 0 20px ;
}

.info .infoDetails table td{
    border-bottom: 1px solid #b2b2b2;
    padding: 5px 10px;
}
</style>>