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
            
            <div class="content">
                <p class="tag is-danger">출처</p>
                <a href="https://m.stock.naver.com/index.html">네이버 증권</a>
                <a class="button is-primary is-small" href="https://m.stock.naver.com/api/stocks/marketValue/KOSDAQ?page=1&pageSize=20">json</a>
            </div>        
        </div>
        <div class="column"></div>
        
    </div>
</template>