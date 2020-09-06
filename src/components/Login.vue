<template>
    <div class="container">
        <div class="login-text">login to the</div> 
        <div class="chat-panel-text">Chat Panel</div>

        <div>
            <div class="username-text">账户</div>
            <input class="username-input" type="text" v-model="username">
        </div>

        <div>
            <div class="password-text">密码</div>
            <input class="password-input" type="password" v-model="passwd">
        </div>
        <div class="f-s-text"><router-link class="authLink" to="/reset">忘记密码 ?</router-link> or <router-link class="authLink" to="/register">注册</router-link></div>
        <div class="signIn-div">
            <input type="button" value="SIGN IN" class="signIn-btn" @click="signIn"/>
        </div>
    </div>
</template>

<script>
import HttpApi from '@/util/http.js'

export default {
    name: 'Login',
    data:function(){
        return {
            username:null,
            passwd:null
        }
    },
    methods:{
        signIn(){
            HttpApi.post('/sys/v1/signIn', {
                username: this.username,
                passwd: this.passwd
            })
            .then(response => {
                const data = response.data;
                if(data.code == 200){
                    const token = data.data;
                    let parts = token.split(".");
					if (parts.length == 2 && token.endsWith(".")) {
                        parts = [parts[0],parts[1],""];
					}
                    let payloadJson = atob(parts[1]);
                    let rainbow = {
                        'user' : payloadJson,
                        'token' : token
                    } 
                    sessionStorage.setItem("rainbow",JSON.stringify(rainbow));
                    this.$router.replace({path:"/chat"});
                }else{
                     this.$notify(response.data.msg);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

       }
    }

}
</script>

<style scoped>
.container .container{
    min-width: 400px;
    width: 400px;
    height: 400px;
    min-height: 400px;
    display: block;
}
.login-text{
    position: absolute;
}
.chat-panel-text{
    font-size: 80px;
}
.username-text{
    margin-top: 32px;
}
.password-text{
    margin-top: 16px;
}
.username-input,.password-input{
    width: 100%;
    height: 32px;
    border: 0px;
    font-size: 20px;
    outline: none;
}
.f-s-text{
    float: right;
    margin-top: 16px;
}
.authLink {
    color: white;
    text-decoration: none;
}
.authLink:hover{
    text-decoration: underline;
}
.signIn-div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
}

.signIn-btn{
    margin-top: 20px;
    padding: 10px;
    width:130px;
    height: 50px;
    outline: none;
    background-color: #fff;
}
</style>