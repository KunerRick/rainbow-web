import vuexx from './vuexx'
// import store from './store'

export default {

    /**
     * 文本消息
     */
    1:(body) => {
        let curReceiver = vuexx.getters.getReceivert
        // store.add(body);
        console.log("-------------")
        //当前消息的接收者是否是当前选择的接收这
        if(curReceiver){
            if(body.receiver == curReceiver.userId 
                || body.sender == curReceiver.userId){
                vuexx.commit('addMessage',body);
                return;
            }
        }
        this.$notify("新消息");
        
    },
    /**
     * 添加好友消息
     */
    10: body =>{
        console.log(body);
    }

}