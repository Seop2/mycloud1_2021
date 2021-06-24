<template>
    <div>
        <section class="hero is-success">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-chart-bar"></i>코스닥
                    <i class="fas fa-chart-bar"></i>코스피
                </p>
                <p class="subtitle">
                    주식 차트를 세부적으로 분석해봅시다!
                </p>
            </div>
        </section>
        
        <section class="columns"></section>
        <div class="column">
            <div id="chart"></div>
        </div>
        <div class="column"></div>
        
    </div>
</template>
<script>
import toastUIchart from '~/plugins/toastUIchart';

export default ({
    mounted() {
        if (process.client) {
            toastUIchart();
        }
    },
});
</script>
