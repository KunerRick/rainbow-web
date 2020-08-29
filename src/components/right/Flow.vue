<template>
    <div>
        <div class="label">
            <span>Tom Smith</span>
        </div>
        <div class="content">
            <div class="you">
                    <div class="time">
                    <span>10:30</span>
                </div>
                <div class="bubble">
                    <img src="@/assets/logo.png" alt="">
                    <div>How R U ?</div>
                </div>
            </div>

            <div class="me">
                <div class="time">
                    <span>10:30</span>
                </div>
                <div class="bubble">
                    <div>I'm Fine,thank you</div>
                    <img src="@/assets/logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="typing">
            <textarea placeholder="typing a message ..."></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name:"Flow"
}
</script>

<style scoped>
.right .label{
    /* height: 5%; */
    /* min-height: 35px; */
    /* max-height: 35px; */
    border-bottom: 1px solid #b2b2b2;
    line-height: 35px;
    text-align: center;
}

.right .label span{
    height: 35px;
}

.right .content{
    height: 85%;
    overflow-y:auto;
}

.typing{
    height: 10%;
    min-height: 70px; 
    max-height: 70px;
    width: 100%;
    border-top: 1px solid #b2b2b2;
    overflow: hidden;
    position: absolute;
    bottom: 0px;
}

.typing textarea{
    width: 100%;
    border: 0;
    height: 100%;
    resize: none;
    padding: 15px;
}


.content > div{
    padding: 15px 10px;
  
}

.content .me .bubble{
    display: flex; 
    display: -webkit-flex;
    flex-direction: row;
    justify-content: flex-end;
} 

.content .me .bubble div{
    max-width: 60%;
    background-color: #fff;
    word-wrap:break-word;  
    word-break:break-all;  
    border-radius: 20px 0 20px 20px;
    background-color: #25B6D1;
    padding: 5px 10px;
    color: white;
}

.content div .time{
    text-align: center;
    color: #b2b2b2;
    font-size: 14px;
}

.content .you .bubble{
    width: 100%;
    padding: 5px 0;
    display: -webkit-flex;
    justify-content: flex-start;
}

.content .you >.bubble div{
    max-width: 60%;
    background-color: #fff;
    word-wrap:break-word;  
    word-break:break-all;
    border-radius: 0 20px 20px 20px;
    background-color: #2DCB70;
    padding: 5px 10px;
    color: white;
}

.content img{
    width: 35px;
    height: 35px;
    border-radius: 35px;
}
</style>