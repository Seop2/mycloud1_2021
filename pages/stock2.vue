<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-chart-bar"></i>코스닥
                </p>
                <p class="subtitle">
                    다양한 종목의 코스닥을 찾아봅시다.
                </p>
            </div>
        </section>
        
        <section class="columns"></section>
        <div class="column">
            <table class="table">
                <thead>
                    <th>번호</th>
                    <th>종목명</th>
                    <th>현재가</th>
                    <th>시가총액(억)</th>
                </thead>
                <tbody>
                    <template v-for="pos in tablestock2.length">
                        <tr :key="pos">
                            <td>{{pos}}</td>
                            <td>{{tablestock2[pos - 1].stockName}}</td>
                            <td>{{tablestock2[pos - 1].closePrice}}</td>
                            <td>{{tablestock2[pos - 1].marketValue}}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
            <div class="content">
                <p class="tag is-danger">출처</p>
                <a href="https://m.stock.naver.com/index.html">네이버 증권</a>
                <a class="button is-primary is-small" href="https://m.stock.naver.com/api/stocks/marketValue/KOSDAQ?page=1&pageSize=20">List all KOSDAQ</a>
            </div>        
        </div>
        <div class="column"></div>
        
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        async asyncData(){
            const  stock2 = await axios.get('https://m.stock.naver.com/api/stocks/marketValue/KOSDAQ?page=1&pageSize=20');
           console.log(Object.keys(stock2))
            return{
                tablestock2: stock2.data.stocks,
                tableStockKeys: Object.keys(stock2.data.stocks)
            };   
            
            
        },
    };
</script>
