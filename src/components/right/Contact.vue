<template>
    <div>
        <div class="label">
            <span>好友信息</span>
        </div>
        <div class="info">
            <div class="avator">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div class="infoDetails">
                <table>
                    <tr>
                        <td>昵称</td>
                        <td>好的的飞机</td>
                    </tr>

                     <tr>
                        <td>账户</td>
                        <td>cafebabe</td>
                    </tr>

                     <tr>
                        <td>邮箱</td>
                        <td>ch3ng@gmail.com</td>
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
    props:[
        'contact1'
    ],
    data(){
        return {
            // contactInfo: this.contact,
        }
    },
    methods:{
        sendTo(){
          console.log(this.contact);  
        }
    },
    created(){
        console.log(this.contact);
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