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
                        <!-- <td>{{contact.remark}}</td> -->
                        <td v-if="flag">
                            {{contact.remark}}
                            <a @click.stop="editRemark">修改</a>
                        </td>
                        <td v-else><input class="remark" type="text" @blur.stop="editRemark2" v-model="remark" ></td>
                    </tr>

                    <tr>
                        <td>年龄</td>
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
                <input class="sendBtn" type="button" value="发送消息" @click.stop="sendTo">
            </div>
        </div>
    </div>
</template>

<script>
import HttpApi from '../../util/http'

export default {
    name:"Contact",
    data(){
        return {
            contact: "",
            flag:true,
            remark:null,
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
        },
        editRemark(){
            this.flag = false;
        },
        editRemark2(){
            this.flag = true;
            if(this.remark === this.contact.remark){
                return;
            }
            let contactId = this.$store.getters.getContact.userId;
            HttpApi.post('/contact/v1/remark',{
                contactId: contactId,
                remark:this.remark

            })
            .then(response =>{
                if(response.data.code == 200){
                    //修改当前联系人面板信息
                    this.contact.remark = this.remark;
                    //修改联系人列表信息
                    let contacts = this.$store.getters.getContacts;
                    for(let contact of contacts){
                        if(contactId === contact.userId){
                            contact.remark = this.remark;
                            break;
                        }
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    created(){
         HttpApi.post('/user/v1/contact/detail',{
                contactId:this.$store.getters.getContact.userId
            })
            .then(response =>{
                this.contact = response.data.data;
                this.remark = response.data.data.remark;
            })
            .catch(function (error) {
                console.log(error);
            });
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
    /* border: 1px solid #b2b2b2; */
}
.info .infoDetails{
    margin: 0 20px ;
    /* background-color: lightcyan; */
}

.info .infoDetails table td{
    /* border-bottom: 1px solid #b2b2b2; */
    padding: 5px 10px;
}
.info .infoDetails .sendBtn{
    width: 100px;
    height: 40px;
    font-size: 14px;
    margin: 30px 0;
    border: 0;
    background-color: #333;
    color: white;
    border-radius: 5px;
}

.info .infoDetails table td a{
    font-size: 10px;
    margin-left: 20px;
    text-decoration: underline;
}

.info .infoDetails table td a:hover{
    cursor: pointer;
}

</style>>