<template>
    <div class="container">
        <div class="login-text">reset</div> 
        <div class="chat-panel-text">Password</div>

        <div>
            <div class="username-text">USERNAME</div>
            <input class="username-input" type="text">
        </div>

        <div>
            <div class="password-text">E-MAIL</div>
            <input class="password-input" type="password">
        </div>
        <div class="f-s-text"><router-link class="authLink" to="/register">sign up </router-link>or<router-link class="authLink" to="/login"> sign in</router-link></div>
        <div class="signIn-div">
            <input type="button" value="RESET" class="signIn-btn"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResetPasswd'
}
</script>

<style scoped>
    .container{
        min-width: 25em;
        width: 25em;
        height: 400px;
        min-height: 400px;
        /* background-color:rgba(255, 255, 255, .1); */
        display: block;
    }
    .login-text{
        position: absolute;
    }
    .chat-panel-text{
        /* width: 100%; */
        font-size: 5em;
    }
    .username-text{
        margin-top: 2em;
    }
    .password-text{
        margin-top: 1em;
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
        margin-top: 1em;
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