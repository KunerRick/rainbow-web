<template>
    <div class="container">
        <div class="main">
            <div class="left">
            </div>
            <div class="medium"></div>
            <div class="right"></div>
        </div>
        
    </div>
</template>


<script>
export default {
    name:"Chat"
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
</style>