<template>
    <div>
        <div class="label">
            <span>添加朋友</span>
        </div>

        <div class="search">
            <input type="text" placeholder="账号">
            <br>
            <br>
            <span>我的账号：cafebabe</span>
        </div>

        <div class="result">
            <div>
                <img src="@/assets/logo.png" alt="">
            </div>
            <div>
                <span>蓝天白云</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddContact"
}
</script>

<style scoped>
.right .label{
    border-bottom: 1px solid #b2b2b2;
    line-height: 35px;
    text-align: center;
}

.right .label span{
    height: 35px;
}

.right .search{
    width: 100%;
    margin-top: 20px;
    text-align: center;
}

.right .search input{
    width: 90%;
    border: 0;
    height: 30px;
    border-radius: 5px;
    text-align: center;
}

.right .result {
    display: flex;
    display: -webkit-flex;
    padding: 10px 20px;
    background-color: white;
    margin-top: 10px;
}

.right .result img{
    width: 35px;
    height: 35px;
    border-radius: 35px;
}

.right .result div:nth-child(even){
    line-height: 35px;
    text-align: center;
    margin-left: 10px;
}

</style>
