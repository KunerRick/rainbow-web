
export default {

    /**
     * 文本消息
     */
    1:(body,vue) => {
        let curReceiver =  vue.$store.getters.getReceivert
        vue.$db.add(body);
        //当前消息的接收者是否是当前选择的接收这
        if(curReceiver){
            if(body.receiver == curReceiver.userId 
                || body.sender == curReceiver.userId){
                vue.$store.commit('addMessage',body);
                return;
            }
        }
        vue.$notify("新消息");
        //添加未读红点
        let sessions = vue.$store.getters.getSessions;
        for(let s in sessions){
            if(s === body.sender){
                sessions[s].unread = true;
                break;
            }
        }
    },
    /**
     * 添加好友消息
     */
    10: (body,vue) =>{
        vue.$notify("添加好友请求");
        vue.$store.commit("setContactUnread",true);
    },
    /**
     * 同意添加好友请求
     */
    11: (body,vue) => {
        vue.$notify(body.content.username + "现在已经是你的好友了");
        console.log("=============")
        console.log(body);
        let contact = {
            avatar:body.content.avatar,
            createTime:body.content.createTime,
            remark:body.content.remark,
            userId:body.sender,
            username:body.content.username,
        }
        vue.$store.getters.getContacts.push(contact);        // vue.$store.commit("setContactUnread",true);
    }

}