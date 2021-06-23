<template>
    <div>
        <section class="hero is-danger">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-graduation-cap"></i>주식공부
                </p>
                <p class="subtitle">
                    차트분석에 필요한 용어를 정리해봅시다~
                </p>
            </div>
        </section>
        <hr/>

        
        <section class="box">
            <form @submit.prevent="submitStockName">
                <div class="field">
                    <label class="label">주식이름</label>
                    <div class="control">
                        <input type="text" v-model="stockName"/>
                        <button class="button is-link" type="submit">공부하기</button>
                    </div>
                    
                    <p class="help is-success">
                        자세히 공부하고 싶은 주식/용어를 입력하세요.
                    </p>
                </div>
            </form>
        </section>
        <div class="column"></div>
        <div class="column"></div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {
                stockNameField:'stockName',
                stockName:null};
        },

    methods:{
        submitStockName() {
            this.$router.push('/studyOnestock?'+this.stockNameField+'='+this.stockName);
            
        },
    },
};
</script>
