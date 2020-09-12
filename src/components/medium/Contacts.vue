<template>
    <div>
        <div class="label">
            <span>通讯录</span>
            <div>
                <span class="iconfont icon-tianjiayonghu" @click.stop="loadAddContactCom"></span>
            </div>
        </div>
        <div class="search">
            <input type="text">
        </div>
        <div class="list">
            <div v-for="(item, index) in $store.getters.getContacts" :key="item.name" @click.stop="loadContactCom(index)">
                <div>
                    <div class="contactAvator">
                        <img :src="item.avatar">
                    </div>
                    <div class="contactInfo">
                        <div class="contactName">
                            <span>{{item.remark}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import HttpApi from '../../util/http.js'
export default {
    
    name:"Contacts",
     data(){
        return {
            // contacts:[]
        }
    },
    methods:{
         loadAddContactCom(){
            this.$emit('func',"AddContact");
        },

        loadContactCom(index){
            this.$store.commit("setContact",this.$store.getters.getContacts[index])
            this.$emit("func","Contact"); 
        }
    },
    created(){
        HttpApi.get('/contact/v1/list')
            .then(response => {
                const data = response.data;
                // this.contacts = data.data;
                this.$store.commit("setContacts",data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
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
    top: 0px;
    cursor: pointer;
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
    margin-left: 10%;
    height: 45px;
    width: 60%;
    font-size: 13px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
}

</style>>