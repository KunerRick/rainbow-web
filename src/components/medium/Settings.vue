<template>
    <div>
        <div class="label">
            <span>Settings</span>
        </div>

        <div class="setting">
            <div @click.stop="loadMe">
                <span>我的</span>
                <i>></i>
            </div>

            <div>
                <span>主题</span>
                <i>></i>
            </div>

            <div>
                <span>提醒</span>
                <i>></i>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"Settings",
    methods:{
        loadMe(){
            this.$emit("func","Me");
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

.setting{
    width: 100%;
    height: 80%;
    margin-top: 20px;
}

.setting > div{
    background-color:#444;;
    padding: 5px 10px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}

</style>