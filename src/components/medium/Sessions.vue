<template>
    <div>
        <div class="label">
            <span>聊天</span>
        </div>
        <div class="blank">
        </div>
        <div class="list">
            <div v-for="(item,index) in $store.getters.getSessions" :key="item.userId">
                <div @click.stop="loadFlowCom(index)">
                    <div class="contactAvator">
                        <img :src="item.avatar">
                        <div class="unread" v-if="item.unread"></div>
                    </div>
                    <div class="contactInfo">
                        <div class="contactName">
                            <span>{{item.remark}}</span>
                        </div>
                        <div class="contactContent">
                            <span>{{item.content}}</span>
                        </div>
                    </div>
                    <div class="contactTime">
                        <span>{{item.a}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"Sessions",
    data(){
        return {
            // sessions:[],
        }
    },
    methods:{
        loadFlowCom(index){
            let receiver = this.$store.getters.getSessions[index];
            receiver.unread = false;
            this.$store.commit("setReceiver",receiver);
            this.$emit("func","Flow"); 
        }
    },
    created(){
        let sessions = sessionStorage.getItem("sessions");
        if(sessions){
            this.$store.commit("setSessions",JSON.parse(sessions));
            // this.sessions = this.$store.getters.getSessions;

        }
    }
}
</script>

<style scoped>
.medium .label{
    width: 100%;
    height: 5%;
    min-height: 35px;
    text-align: center;
    line-height: 35px;
    box-shadow: 0px 10px 10px -5px #1d1d1d ;
    position: relative;
}

.medium .label div{
    height: 100%;
    float: right;
    line-height: 35px;
    position: absolute;
    right: 10px;
    top: -11px;
}

.medium .label div span{
    font-size: 20px;
}

.medium .blank{
    min-height: 20px;

}

.list{
  width: 100%;
  height: 87%;
  overflow-y:auto;
  border: 0px;
}

.list > div{
    background-color: #444;
    width: 100%;
    height: 45px;
    margin-top: 4px;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
}

.list > div > div{
    width: 85%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
}

.contactAvator{
    width: 35px;
    height: 35px;
    position: relative;
}

.contactAvator > img{
    width: 35px;
    height: 35px;
    border-radius: 35px;
}

.contactInfo{
    margin-left: 5%;
    height: 45px;
    width: 60%;
    font-size: 13px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}

.contactTime{
    height: 35px;
    font-size: 12px;
}

.contactAvator .unread {
    background-color: red;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    position: absolute;
    top: 0px;
    right: 0px;
}
</style>>