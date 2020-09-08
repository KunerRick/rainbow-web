<template>
    <div>
        <div class="label">
            <span>聊天</span>
        </div>
        <div class="search">
            <input type="text">
        </div>
        <div class="list">
            <div v-for="(item,index) in sessions" :key="item.name">
                <div @click.stop="loadFlowCom(index)">
                    <div class="contactAvator">
                        <img :src="item.avatar">
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
            sessions:[],
        }
    },
    methods:{
        loadFlowCom(index){
            this.$store.commit("setReceiver",this.sessions[index])
            this.$emit("func","Flow"); 
        }
    },
    created(){
        let sessions = sessionStorage.getItem("sessions");
        if(sessions){
            this.sessions = JSON.parse(sessions);
        }
        console.log(this.sessions);
        
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

.medium .search{
    height: 10%;
    min-height: 70px;

}

.medium .search input{
    margin-top: 10%;
    width: 85%;
    height: 30px;
    background-color: #333;
    border: 0;
    border-radius: 5px;
    padding-left: 10px;
    color: white;
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

</style>>