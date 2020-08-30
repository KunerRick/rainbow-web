

import HttpApi from 'HttpUtils.js'


export default {
    signWS:function(token){
        HttpApi.post("sys/signIn",{
            token:token,
            cid:localStorage.getItem(""),
            clientType:"WEB"
        }).then(function(response){
            //web socket sign in success

        }).catch(function(error){

        });
    }
}

function connect() {
    var socket = new SockJS('/rainbow-ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        setConnected(true);
        var userId = localStorage.getItem("userId");
        var sub = '/user/'+userId+'/message';
        stompClient.subscribe(sub, function (msg) {
            console.log("msg"+ msg);

            appendMessage(msg);
            cacheMessage(msg.body);
            // showGreeting(JSON.parse(greeting.body).content);
        });
    });
}