<template>
    <div class="container">
        <div class="login-text">Let's </div> 
        <div class="chat-panel-text">Sign Up</div>

        <div>
            <div class="username-text">USERNAME</div>
            <input class="username-input" type="text">
        </div>

        <div>
            <div class="password-text">PASSWORD</div>
            <input class="password-input" type="password">
        </div>

        <div>
            <div class="password-text">E-MAIL</div>
            <input class="password-input" type="email">
        </div>

        <div class="f-s-text"><router-link class="authLink" to="/reset">forget the password ?</router-link> or <router-link class="authLink" to="/login">sign in</router-link></div>
        <div class="signIn-div">
            <input type="button" value="SIGN UP" class="signIn-btn"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Regisger'

}
</script>

<style scoped>
   .container{
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