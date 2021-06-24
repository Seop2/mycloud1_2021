<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-chart-bar"></i>코스피 100
                </p>
                <p class="subtitle">
                    코스피/코스닥 시가총액순으로 이루어진 목록입니다.
                </p>
            </div>
        </section>
        <section class="columns">
            <div class="column">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>순위</th>
                            <th>종목명</th>
                            <th>단일가</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="pos in tablestockKospi.length">
                            <tr :key="pos">
                                <td>{{pos}}</td>
                                <td>{{tablestockKospi[pos-1]}}</td>
                                <td>{{tablekospiprice[pos-1]}}</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
                <div class="content">
                    <p class="content">
                        <span class="tag is-danger">출처</span>
                        <a href="https://m.stock.naver.com/index.nhn">네이버 증권</a>
                    </p>
                    <p class="content">
                        <a class = "button is-primary is-small" href="/stockKospi.json">JSON - 코스피</a>
                    </p>
                    <p class="content">
                        <a class = "button is-primary is-small" href="/kospiprice.json">JSON - 코스피 단일가격</a>
                    </p>
                </div>
            </div>
            
        </section>
    </div>
</template>
<script>
import stockKospi from "~/static/stockKospi.json"
import kospiprice from "~/static/kospiprice.json"

export default{
    data(){
        return {
            tablestockKospi: stockKospi.names,
            tablekospiprice: kospiprice.names
         };
         
    }
};
</script>
