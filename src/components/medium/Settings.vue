<template>
    <div>
        <div class="label">
            <span>Settings</span>
        </div>
    </div>
</template>


<script>
export default {
    name:"Settings"
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



</style>>