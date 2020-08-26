<template>
    <div class="container">
        <div class="main">
            <div class="left">
                <div>
                    <div @mouseover="i('duihua')" @mouseout="o('duihua')" >
                        <span :class="['iconfont',duihua?'icon-duihuaxinxi':'icon-duihuaxinxitianchong']"></span>
                    </div>
                    <div @mouseover="i('yonghu')" @mouseout="o('yonghu')">
                        <span :class="['iconfont', yonghu?'icon-yonghu':'icon-yonghutianchong']" ></span>
                    </div>
                </div>
                <div>
                    <div @mouseover="i('bangzhu')" @mouseout="o('bangzhu')">
                        <span :class="['iconfont', bangzhu?'icon-bangzhu':'icon-bangzhutianchong']"></span>
                    </div>
                    <div @mouseover="i('shezhi')" @mouseout="o('shezhi')">
                        <span :class="['iconfont', shezhi?'icon-shezhi':'icon-shezhitianchong']"></span>
                    </div>
                    <div>
                        <span class="iconfont icon-avatar"></span>
                    </div>
                </div>
            </div>
            <div class="medium"></div>
            <div class="right"></div>
        </div>
        
    </div>
</template>


<script>
import "@/assets/fonts/iconfont.css"
export default {
    name:"Chat",
    data(){
        return {
            duihua:true,
            yonghu:true,
            bangzhu:true,
            shezhi:true
        }
    },
    methods:{
        i(target){
              switch(target){
                case "duihua":
                    this.duihua =false;
                    break;
                case "yonghu":
                    this.yonghu =false;
                    break;
                case "shezhi":
                    this.shezhi =false;
                    break;
                case "bangzhu":
                    this.bangzhu =false;
                    break;
            }
        } ,
        o(target){
            switch(target){
                case "duihua":
                    this.duihua =true;
                    break;
                case "yonghu":
                    this.yonghu =true;
                    break;
                case "shezhi":
                    this.shezhi =true;
                    break;
                case "bangzhu":
                    this.bangzhu =true;
                    break;
            }
        }
    }
}
</script>


<style scoped>

.container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
}

.main{
    width: 80%;
    max-width: 1000px;
    min-width: 800px;
    height: 80%;
    display: flex;
    border: 1px solid #333333;

}
.left{
    background-color: #333333;
    width: 80px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.medium{
    background-color: #2A2D2E;
    width: 280px;
    height: 100%;
}
.right{
    width: 100%;
    height: 100%;
}

 .iconfont{
    color: white;
    font-size: 32px;
    line-height: 60px;
}

.left > div > div{
    width: 100%;
    height: 60px;
    border-left: 1px solid #333333;
    text-align: center;
}

.left > div > div:hover .iconfont{
    

}

.left > div > div:hover{
    border-left: 1px solid white;

}
</style>