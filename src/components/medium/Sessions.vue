<template>
    <div>
        <div class="label">
            <span>聊天</span>
        </div>
        <div class="search">
            <input type="text">
        </div>
        <div class="list">
            <div v-for="item in contacts" :key="item.name">
                <div @click.stop="loadChatCom">
                    <div class="contactAvator">
                        <img :src="item.avator">
                    </div>
                    <div class="contactInfo">
                        <div class="contactName">
                            <span>{{item.nickname}}</span>
                        </div>
                        <div class="contactContent">
                            <span>{{item.content}}</span>
                        </div>
                    </div>
                    <div class="contactTime">
                        <span>{{item.time}}</span>
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
               contacts:[
                {
                    "avator": require("@/assets/logo.png"),
                    "nickname":"tom",
                    "content":"how r u?",
                    "time":"10:32"
                }
                
            ]
        }
    },
    methods:{
        loadChatCom(){
           this.$emit("func","Flow"); 
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