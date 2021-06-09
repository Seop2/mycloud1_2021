<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-chart-bar"></i>신규 상장주
                </p>
                <p class="subtitle">
                    최근 상장한 주식들입니다.
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
                            </tr>
                        </template>
                    </tbody>
                </table>
                <div class="content">
                    <span class="tag is-danger">출처</span>
                    <a href="https://m.stock.naver.com/index.nhn">네이버 증권</a>
                </div>
            </div>
            
        </section>
    </div>
</template>