<template>
    <div>
        <section class="hero is-medium is-link">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-book-reader"></i> {{ stockName }} 기업분석
                </p>
                <p class="subtitle">
                   {{ stockName }} 기업을 분석해봅시다!
                </p>
            </div>
        </section>
        <hr/>
        <section class="message">
            <div class="message-header">{{ stockName }} 관련 뉴스</div>
            <div class="message-body">
                <div class="tile is-ancestor">
                    <div class="tile box">
                        <div class="tile is-parent">
                            <div class="tile is-child notification">
                                <figure class="image">
                                    <img src="" alt="">
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default{
        asyncData(context){
            let stockName = context.route.query.stockName;
            return {
                stockName:stockName.toUpperCase(),
            }
        },
    };
</script>